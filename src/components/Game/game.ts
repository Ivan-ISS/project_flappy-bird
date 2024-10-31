import { Config } from './config/config';
import { ResourseLoader } from './resources/resourceLoader';
import { CanvasDrawEngine } from './engines/canvasDrawEngine';
import { PhysicsEngine } from './engines/physicsEngine';
import { ControlEngine } from './engines/controlEngine';
import { BaseEntity } from './entities/baseEntity';
import { Bird } from './entities/bird';
import { Floor } from './entities/floor';
import { PipeMaker } from './entities/pipeMaker';
import { Pipe } from './entities/pipe';
import { Score } from './entities/score';

interface IAudio {
    music: HTMLAudioElement;
    point: HTMLAudioElement;
    hit: HTMLAudioElement;
    swooshing: HTMLAudioElement;
    flap: HTMLAudioElement;
    die: HTMLAudioElement;
}

class Game {
    public width: number;
    public height: number;

    private config: Config;
    private resourceLoader: ResourseLoader;
    private canvas: HTMLCanvasElement;
    private drawEngine: CanvasDrawEngine;
    private physicsEngine: PhysicsEngine;
    private controlEngine: ControlEngine;

    private spriteSheet: Promise<HTMLImageElement>;
    private audio: IAudio;

    private bird: Bird;
    private background: BaseEntity;
    private floorOne: Floor;
    private floorTwo: Floor;
    private pipeMaker: PipeMaker;
    private pipes: Pipe[];
    private readyMessage: BaseEntity;
    private gameOverMessage: BaseEntity;
    private score: Score;
    private medal: BaseEntity;
    private startBtn: BaseEntity;

    private live: boolean;
    private play: boolean;
    private lastUpdate: number;

    private pressPlay: () => void;
    private pressStart: (e: MouseEvent) => void;

    constructor() {
        this.config = new Config();
        this.resourceLoader = new ResourseLoader();

        this.width = this.config.canvas.width;
        this.height = this.config.canvas.height;
    }

    public render() {
        const htmlGame = `
            <div class="game-flappy-bird">
                <canvas class="cnv"></canvas>
            </div>
        `;

        return htmlGame;
    }

    public initGame() {
        this.canvas = document.querySelector(this.config.canvas.canvasSelector);
        this.canvas.width = this.config.canvas.width;
        this.canvas.height = this.config.canvas.height;
        this.canvas.style.background = this.config.canvas.fillColor;

        this.drawEngine = new CanvasDrawEngine({ canvas: this.canvas });
        this.physicsEngine = new PhysicsEngine({ gravity: this.config.gravity });
        this.controlEngine = new ControlEngine({
            leftMouse: () => this.bird.flap(),
            arrowUp: () => this.bird.flap(),
            space: () => this.bird.flap(),
        });

        // this.initEnties();
        this.initHandlers();
    }

    private initEnties() {
        const createEntity = <T extends BaseEntity | Bird | Floor | PipeMaker | Score | Pipe[]>(
            entityConfig: object,
            EntityClass: new (props: unknown) => T,
            additionalProps = {}
        ) => {
            return new EntityClass({
                ...entityConfig,
                ...additionalProps,
                physicsEngine: this.physicsEngine,
                spriteSheet: this.spriteSheet,
                audio: this.audio,
                drawEngine: this.drawEngine,
                game: this,
            });
        };

        this.bird = createEntity(this.config.bird, Bird);
        this.background = createEntity(this.config.background, BaseEntity);
        this.floorOne = createEntity(this.config.floor, Floor);
        this.floorTwo = createEntity(this.config.floor, Floor, {
            x: this.config.floor.x + this.width,
        });
        this.pipeMaker = createEntity(this.config.pipe, PipeMaker);
        this.pipes = this.pipeMaker.createPipes();
        this.readyMessage = createEntity(this.config.readyMessage, BaseEntity);
        this.gameOverMessage = createEntity(this.config.gameOverMessage, BaseEntity);
        this.score = createEntity(this.config.score, Score);
        this.medal = createEntity(this.config.medal, BaseEntity);
        this.startBtn = createEntity(this.config.startBtn, BaseEntity);
    }

    public async prepare() {
        this.spriteSheet = await this.resourceLoader.load({
            type: 'image',
            src: this.config.spriteSheet.src,
            width: this.config.spriteSheet.width,
            height: this.config.spriteSheet.height,
        });

        const { srcMusic, srcPoint, srcHit, srcSwooshing, srcFlap, srcDie } = this.config.audio;

        this.audio = {
            music: await this.resourceLoader.load({ type: 'audio', src: srcMusic }),
            point: await this.resourceLoader.load({ type: 'audio', src: srcPoint }),
            hit: await this.resourceLoader.load({ type: 'audio', src: srcHit }),
            swooshing: await this.resourceLoader.load({ type: 'audio', src: srcSwooshing }),
            flap: await this.resourceLoader.load({ type: 'audio', src: srcFlap }),
            die: await this.resourceLoader.load({ type: 'audio', src: srcDie }),
        };

        // return this._spriteSheet; - если сделать так, то в App заработает это console.log('spriteSheet :', res);,
        // т.к. возвращаем результат, кот вновь в промис обернется
    }

    private update(delta: number, play: boolean) {
        this.pipes.forEach((pipe) => {
            pipe.update(delta, play);
        });
        this.floorOne.update(delta, play);
        this.floorTwo.update(delta, play);
        this.bird.update(delta, play);
    }

    private draw() {
        this.background.draw();

        if (!this.play) {
            this.readyMessage.draw();
        }

        this.pipes.forEach((pipe) => {
            pipe.draw();
        });
        this.floorOne.draw();
        this.floorTwo.draw();
        this.bird.draw();
    }

    private loop() {
        if (this.live) {
            const now = Date.now();
            const delta = now - this.lastUpdate;

            this.update(delta / 1000, this.play);
            this.drawEngine.clear();
            this.draw();
            this.checkCollide();
            this.checkPoint();

            this.lastUpdate = now;

            requestAnimationFrame(this.loop.bind(this));
        }
    }

    public start() {
        this.live = true;
        this.play = false;

        this.initEnties();
        this.controlEngine.enableHandlers();
        this.lastUpdate = Date.now();
        this.loop();

        this.enableHandlers();
    }

    private gameOver() {
        this.live = false;
        this.play = false;
        this.controlEngine.disableHandlers();
        this.score.reset();

        this.gameOverMessage.draw();
        this.score.draw();
        this.startBtn.draw();

        if (this.checkMedal()) {
            this.medal.draw();
        }
    }

    private checkCollide() {
        const bird = this.bird;
        const entities = [...this.pipes, this.floorOne, this.floorTwo];

        entities.forEach((entity) => {
            if (
                bird.x + bird.width > entity.x &&
                bird.x < entity.x + entity.width &&
                bird.y + bird.height > entity.y &&
                bird.y < entity.y + entity.height
            ) {
                this.audio.hit.play();
                this.gameOver();
            }
        });
    }

    private checkPoint() {
        this.pipes.forEach((pipe) => {
            const birdMiddleX = this.bird.x + this.bird.width / 2;
            const pipeMiddleX = pipe.x + pipe.width / 2;

            if (pipeMiddleX < birdMiddleX && pipe.isComing) {
                this.score.increase();
                this.audio.point.currentTime = 0;
                this.audio.point.play();

                pipe.isComing = false;
            }
            if (pipe.x > this.bird.x) {
                pipe.isComing = true;
            }
        });
    }

    private checkMedal() {
        if (this.score.currentScore >= 30) {
            this.medal._frameIdx = 2;
        } else if (this.score.currentScore >= 20) {
            this.medal._frameIdx = 1;
        } else if (this.score.currentScore >= 10) {
            this.medal._frameIdx = 0;
        } else {
            return false;
        }

        return true;
    }

    private initHandlers() {
        this.pressPlay = () => {
            this.play = true;
            this.audio.music.loop = true;
            this.audio.music.volume = 0.5;
            this.audio.music.play();
            this.disableHandlers();
        };
        this.pressStart = (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;

            if (
                !this.live &&
                clickX >= this.startBtn.x &&
                clickX <= this.startBtn.x + this.startBtn.width &&
                clickY >= this.startBtn.y &&
                clickY <= this.startBtn.y + this.startBtn.height
            ) {
                this.start();
            }
        };
    }

    private enableHandlers() {
        document.addEventListener('keydown', this.pressPlay);
        document.addEventListener('click', this.pressPlay);
        document.addEventListener('click', this.pressStart);
    }

    private disableHandlers() {
        document.removeEventListener('keydown', this.pressPlay);
        document.removeEventListener('click', this.pressPlay);
    }
}

export { Game };

// !!!Много неоптимальностей:
// 1. Обработчики в классе Game - остаются после начала и каждый раз запускают play при нажатии на click и space
// 2. this._initEnties() - в двух местах в Game => двойной рендер при начальном старте игры
// 3. Draw происходит в самом начале постоянно еще до начала движения (каждые 17 мс)
// 4. _checkCollide() и _checkPoint() в Game срабатывают на каждом циле - это верно, но все что до проверки условия в них выполняется на каждом цикле (каждые 17 мс)
