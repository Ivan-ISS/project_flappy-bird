// eslint-disable-next-line no-unused-vars
class Game {
    constructor() {
        this._config = new Config();
        this._resourceLoader = new ResourseLoader();

        this.width = this._config.canvas.width;
        this.height = this._config.canvas.height;
    }

    render() {
        const htmlGame = `
            <div class="game-flappy-bird">
                <canvas class="cnv"></canvas>
            </div>
        `;

        return htmlGame;
    }

    initGame() {
        this._canvas = document.querySelector(this._config.canvas.canvasSelector);
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;
        this._canvas.style.background = this._config.canvas.fillColor;

        this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas });
        this._physicsEngine = new PhysicsEngine({ gravity: this._config.gravity });
        this._controlEngine = new ControlEngine({
            leftMouse: () => this._bird.flap(),
            arrowUp: () => this._bird.flap(),
            space: () => this._bird.flap(),
        });

        // this._initEnties();
        this._initHandlers();
    }

    _initEnties() {
        const createEntity = (entityConfig, EntityClass, additionalProps = {}) => {
            return new EntityClass({
                ...entityConfig,
                ...additionalProps,
                physicsEngine: this._physicsEngine,
                spriteSheet: this._spriteSheet,
                audio: this._audio,
                drawEngine: this._drawEngine,
                game: this,
            });
        };

        this._bird = createEntity(this._config.bird, Bird);
        this._background = createEntity(this._config.background, BaseEntity);
        this._floorOne = createEntity(this._config.floor, Floor);
        this._floorTwo = createEntity(this._config.floor, Floor, {
            x: this._config.floor.x + this.width,
        });
        this._pipeMaker = createEntity(this._config.pipe, PipeMaker);
        this._pipes = this._pipeMaker.createPipes();
        this._readyMessage = createEntity(this._config.readyMessage, BaseEntity);
        this._gameOverMessage = createEntity(this._config.gameOverMessage, BaseEntity);
        this._score = createEntity(this._config.score, Score);
        this._medal = createEntity(this._config.medal, BaseEntity);
        this._startBtn = createEntity(this._config.startBtn, BaseEntity);
    }

    async prepare() {
        this._spriteSheet = await this._resourceLoader.load({
            type: 'image',
            src: this._config.spriteSheet.src,
            width: this._config.spriteSheet.width,
            height: this._config.spriteSheet.height,
        });

        const { srcMusic, srcPoint, srcHit, srcSwooshing, srcFlap, srcDie } = this._config.audio;

        this._audio = {
            music: await this._resourceLoader.load({ type: 'audio', src: srcMusic }),
            point: await this._resourceLoader.load({ type: 'audio', src: srcPoint }),
            hit: await this._resourceLoader.load({ type: 'audio', src: srcHit }),
            swooshing: await this._resourceLoader.load({ type: 'audio', src: srcSwooshing }),
            flap: await this._resourceLoader.load({ type: 'audio', src: srcFlap }),
            die: await this._resourceLoader.load({ type: 'audio', src: srcDie }),
        };

        // return this._spriteSheet; - если сделать так, то в App заработает это console.log('spriteSheet :', res);,
        // т.к. возвращаем результат, кот вновь в промис обернется
    }

    _update(delta, play) {
        this._pipes.forEach((pipe) => {
            pipe.update(delta, play);
        });
        this._floorOne.update(delta, play);
        this._floorTwo.update(delta, play);
        this._bird.update(delta, play);
    }

    _draw() {
        this._background.draw();

        if (!this._play) {
            this._readyMessage.draw();
        }

        this._pipes.forEach((pipe) => {
            pipe.draw();
        });
        this._floorOne.draw();
        this._floorTwo.draw();
        this._bird.draw();
    }

    _loop() {
        if (this._live) {
            const now = Date.now();
            const delta = now - this._lastUpdate;

            this._update(delta / 1000, this._play);
            this._drawEngine.clear();
            this._draw();
            this._checkCollide();
            this._checkPoint();

            this._lastUpdate = now;

            requestAnimationFrame(this._loop.bind(this));
        }
    }

    start() {
        this._live = true;
        this._play = false;

        this._initEnties();
        this._controlEngine.enableHandlers();
        this._lastUpdate = Date.now();
        this._loop();

        this._enableHandlers();
    }

    _gameOver() {
        this._live = false;
        this._play = false;
        this._controlEngine.disableHandlers();
        this._score.reset();

        this._gameOverMessage.draw();
        this._score.draw();
        this._startBtn.draw();

        if (this._checkMedal()) {
            this._medal.draw();
        }
    }

    _checkCollide() {
        const bird = this._bird;
        const entities = [...this._pipes, this._floorOne, this._floorTwo];

        entities.forEach((entity) => {
            if (
                bird.x + bird.width > entity.x &&
                bird.x < entity.x + entity.width &&
                bird.y + bird.height > entity.y &&
                bird.y < entity.y + entity.height
            ) {
                this._audio.hit.play();
                this._gameOver();
            }
        });
    }

    _checkPoint() {
        this._pipes.forEach((pipe) => {
            const birdMiddleX = this._bird.x + this._bird.width / 2;
            const pipeMiddleX = pipe.x + pipe.width / 2;

            if (pipeMiddleX < birdMiddleX && pipe.isComing) {
                this._score.increase();
                this._audio.point.currentTime = 0;
                this._audio.point.play();

                pipe.isComing = false;
            }
            if (pipe.x > this._bird.x) {
                pipe.isComing = true;
            }
        });
    }

    _checkMedal() {
        if (this._score.currentScore >= 30) {
            this._medal._frameIdx = 2;
        } else if (this._score.currentScore >= 20) {
            this._medal._frameIdx = 1;
        } else if (this._score.currentScore >= 10) {
            this._medal._frameIdx = 0;
        } else {
            return false;
        }

        return true;
    }

    _initHandlers() {
        this._pressPlay = () => {
            this._play = true;
            this._audio.music.loop = true;
            this._audio.music.volume = 0.5;
            this._audio.music.play();
            this._disableHandlers();
        };
        this._pressStart = (e) => {
            let rect = this._canvas.getBoundingClientRect();
            let clickX = e.clientX - rect.left;
            let clickY = e.clientY - rect.top;

            if (
                !this._live &&
                clickX >= this._startBtn.x &&
                clickX <= this._startBtn.x + this._startBtn.width &&
                clickY >= this._startBtn.y &&
                clickY <= this._startBtn.y + this._startBtn.height
            ) {
                this.start();
            }
        };
    }

    _enableHandlers() {
        document.addEventListener('keydown', this._pressPlay);
        document.addEventListener('click', this._pressPlay);
        document.addEventListener('click', this._pressStart);
    }

    _disableHandlers() {
        document.removeEventListener('keydown', this._pressPlay);
        document.removeEventListener('click', this._pressPlay);
    }
}

// !!!Много неоптимальностей:
// 1. Обработчики в классе Game - остаются после начала и каждый раз запускают play при нажатии на click и space
// 2. this._initEnties() - в двух местах в Game => двойной рендер при начальном старте игры
// 3. Draw происходит в самом начале постоянно еще до начала движения (каждые 17 мс)
// 4. _checkCollide() и _checkPoint() в Game срабатывают на каждом циле - это верно, но все что до проверки условия в них выполняется на каждом цикле (каждые 17 мс)
