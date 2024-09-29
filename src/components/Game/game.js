// eslint-disable-next-line no-unused-vars
class Game {
    constructor() {
        this._config = new Config();

        this.width = this._config.canvas.width;
        this.height = this._config.canvas.height;

        this._resourceLoader = new ResourseLoader();
        this._deviceInputHandler = new DeviceInputHandler({
            left: () => {
                this._bird.flap();
            },
            middle: () => {
                this._bird.flap();
            },
        });
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

        this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas });
        this._physicsEngine = new PhysicsEngine({ gravity: this._config.gravity });

        this.initEnties();
    }

    initEnties() {
        this._score = 0;
        this._bird = new Bird({
            x: this._config.bird.x,
            y: this._config.bird.y,
            width: this._config.bird.width,
            height: this._config.bird.height,
            frames: this._config.bird.frames,
            spriteSheet: this._spriteSheet,
            flapSpeed: this._config.bird.flapSpeed,
            physicsEngine: this._physicsEngine,
            drawEngine: this._drawEngine,
            game: this,
        });
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
        this._bird.update(delta);
    }

    draw() {
        this._bird.draw();
    }

    _loop() {
        const now = Date.now();
        const delta = this._lastUpdate - now;

        if (this._playing) {
            this.update(/* delta / 1000 */ 1);
            this._drawEngine.clear();
            this.draw();

            this._lastUpdate = now;

            requestAnimationFrame(this._loop.bind(this));
        }
    }

    start() {
        this._playing = true;
        this._deviceInputHandler.subscribe();
        this._lastUpdate = Date.now();
        this._loop();
    }

    gameOver() {
        this._playing = false;
        alert(`Game over: ${this._score}`);
    }
}
