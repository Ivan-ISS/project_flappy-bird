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
            space: () => this._bird.flap(),
            arrowUp: () => this._bird.flap(),
        });

        this.initEnties();
    }

    initEnties() {
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

    update(delta) {
        this._pipes.forEach((pipe) => {
            pipe.update(delta);
        });
        this._floorOne.update(delta);
        this._floorTwo.update(delta);
        this._bird.update(delta);
    }

    draw() {
        this._background.draw();
        this._pipes.forEach((pipe) => {
            pipe.draw();
        });
        this._floorOne.draw();
        this._floorTwo.draw();
        this._bird.draw();
    }

    _loop() {
        if (this._playing) {
            const now = Date.now();
            const delta = now - this._lastUpdate;

            this.update(delta / 1000);
            this._drawEngine.clear();
            this.draw();

            this._lastUpdate = now;

            requestAnimationFrame(this._loop.bind(this));
        }
    }

    start() {
        this._playing = true;
        this._controlEngine.enableHandlers();
        this._lastUpdate = Date.now();
        this._loop();
    }

    gameOver() {
        this._playing = false;
        this._controlEngine.disableHandlers();
        alert(`Game over: ${this._score}`);
    }
}
