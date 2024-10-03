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
            <div class="game">
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

        this._initEnties();
        this._initHandlers();
    }

    _initEnties() {
        this._score = 0;

        const createEntity = (entityConfig, EntityClass, additionalProps = {}) => {
            return new EntityClass({
                ...entityConfig,
                ...additionalProps,
                physicsEngine: this._physicsEngine,
                spriteSheet: this._spriteSheet,
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
    }

    async prepare() {
        this._spriteSheet = await this._resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this._config.spriteSheet.src,
            width: this._config.spriteSheet.width,
            height: this._config.spriteSheet.height,
        });

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

        this._controlEngine.enableHandlers();
        this._lastUpdate = Date.now();
        this._loop();

        this._enableHandlers();
    }

    _gameOver() {
        this._live = false;
        this._disableHandlers();
        this._controlEngine.disableHandlers();
        alert(`Game over: ${this._score}`);
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
                this._gameOver();
            }
        });
    }

    _checkPoint() {
        this._pipes.forEach((pipe) => {
            const birdMiddleX = this._bird.x + this._bird.width / 2;
            const pipeMiddleX = pipe.x + pipe.width / 2;

            if (pipeMiddleX < birdMiddleX && pipe.isComing) {
                this._score += 0.5;
                pipe.isComing = false;
            }
            if (pipe.x > this._bird.x) {
                pipe.isComing = true;
            }
        });
    }

    _initHandlers() {
        this._pressPlay = () => (this._play = true);
        this._pressStart = () => this.start();
    }

    _enableHandlers() {
        document.addEventListener('keydown', this._pressPlay);
        document.addEventListener('click', this._pressPlay);
    }

    _disableHandlers() {
        document.removeEventListener('keydown', this._pressPlay);
        document.removeEventListener('click', this._pressPlay);
    }
}
