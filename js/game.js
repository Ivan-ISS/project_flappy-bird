class Game {
    constructor() {
        this._config = new Config();

        this._canvas = document.querySelector(this._config.canvas.classHTML);
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;

        this.height = this._config.canvas.height;
        this.width = this._config.canvas.width;

        this._drawEngine = new CanvasDrawEngine({ canvas: this._canvas });
        this._physicsEngine = new PhysicsEngine({ gravity: this._config.gravity });
        this._resourceLoader = new ResourseLoader;
        this._inputHandler = new DeviceInputHandler ({
            left: () => {
                this._bird.flap();
            },
            middle: () => {
                this._bird.flap();
            },
        })
    }

    //--------------------МЕТОД ЗАГРУЗКИ ДАННЫХ--------------------
    prepare() {
        this._spriteSheet = this._resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this._config.spriteSheet.src,
            width: this._config.spriteSheet.width,
            height: this._config.spriteSheet.height,
        }),
        this._audio = this._resourceLoader.load({
            type: RESOURCE_TYPE.AUDIO,
            srcPoint: this._config.audio.srcPoint,
            srcHit: this._config.audio.srcHit,
            srcSwooshing: this._config.audio.srcSwooshing,
            srcFlap: this._config.audio.srcFlap,
            srcDie: this._config.audio.srcDie,
        })
    }

    //-----------------МЕТОД СОЗДАНИЯ СУЩНОСТЕЙ--------------------
    reset() {
        this._bird = new Bird({
            x: this._config.bird.x,
            y: this._config.bird.y,
            width: this._config.bird.width,
            height: this._config.bird.height,
            frames: this._config.bird.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            audio: this._audio,

            flapSpeed: this._config.bird.flapSpeed,
            physicsEngine: this._physicsEngine,
        })

        this._score = new Score({
            x: this._config.score.x,
            y: this._config.score.y,
            width: NaN,
            height: NaN,
            frames: this._config.bird.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            audio: this._audio,

            bestX: this._config.score.bestX,
            bestY: this._config.score.bestY,

            name: 'score',

            score: 0,
        })

        this._initialDisplay = new InitialDisplay({
            x: this._config.initialDisplay.x,
            y: this._config.initialDisplay.y,
            width: this._config.initialDisplay.width,
            height: this._config.initialDisplay.height,
            frames: this._config.initialDisplay.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        })

        this._endDisplay = new EndDisplay({
            x: this._config.endDisplay.x,
            y: this._config.endDisplay.y,
            width: this._config.endDisplay.width,
            height: this._config.endDisplay.height,
            frames: this._config.endDisplay.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        })

        this._startBtn = new StartBtn({
            x: this._config.startBtn.x,
            y: this._config.startBtn.y,
            width: this._config.startBtn.width,
            height: this._config.startBtn.height,
            frames: this._config.startBtn.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        })

        this._background = new Background({
            x: this._config.background.x,
            y: this._config.background.y,
            width: this._config.background.width,
            height: this._config.background.height,
            frames: this._config.background.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'background',
        })

        this._floorOne = new Floor({
            x: this._config.floor.x,
            y: this._config.floor.y,
            width: this._config.floor.width,
            height: this._config.floor.height,
            frames: this._config.floor.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'floorOne',
        })

        this._floorTwo = new Floor({
            x: this._config.floor.x,
            y: this._config.floor.y,
            width: this._config.floor.width,
            height: this._config.floor.height,
            frames: this._config.floor.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'floorTwo',
        })

        this._pipesTop = new Pipes({
            x: this._config.pipes.x,
            y: this._config.pipes.y,
            width: this._config.pipes.width,
            height: this._config.pipes.height,
            frames: this._config.pipes.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'pipesTop',
        })

        this._pipesBot = new Pipes({
            x: this._config.pipes.x,
            y: this._config.pipes.y,
            width: this._config.pipes.width,
            height: this._config.pipes.height,
            frames: this._config.pipes.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'pipesBot',
        })

        this._pipesTopTwo = new Pipes({
            x: this._config.pipes.x,
            y: this._config.pipes.y,
            width: this._config.pipes.width,
            height: this._config.pipes.height,
            frames: this._config.pipes.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'pipesTopTwo',
        })

        this._pipesBotTwo = new Pipes({
            x: this._config.pipes.x,
            y: this._config.pipes.y,
            width: this._config.pipes.width,
            height: this._config.pipes.height,
            frames: this._config.pipes.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'pipesBotTwo',
        })

        this._medal = new Medal({
            x: this._config.medal.x,
            y: this._config.medal.y,
            width: this._config.medal.width,
            height: this._config.medal.height,
            frames: this._config.medal.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            name: 'medal',
        })
    }

    //----------------МЕТОД ОБНОВЛЕНИЯ СУЩНОСТЕЙ--------------------
    update(delta) {
        this._bird.update(delta);
        if (!this._bump && this.begin) {
            this._pipesTop.update(this._pipesTop, delta);
            this._pipesBot.update(this._pipesBot, delta);
            this._pipesTopTwo.update(this._pipesTopTwo, delta);
            this._pipesBotTwo.update(this._pipesBotTwo, delta);
            this._floorOne.update(this._floorOne, delta);
            this._floorTwo.update(this._floorTwo, delta);
            this._initialDisplay.update();
        }
    }

    //-----------------МЕТОД ОТРИСОВКИ СУЩНОСТЕЙ--------------------
    draw() {
        this._background.draw();
        this._pipesTop.draw();
        this._pipesBot.draw();
        this._pipesTopTwo.draw();
        this._pipesBotTwo.draw();
        this._floorOne.draw();
        this._floorTwo.draw();
        this._bird.draw();
        this._initialDisplay.draw();
    }

    //---------------------МЕТОД ЗАПУСКА ЦИКЛА-----------------------
    _loop() {
        this.now = Date.now();
        this._delta = this.now - this._lastUpdate;
        
        this.update(this._delta / 1000);
        if (this.playing) {
            this._drawEngine.clear();
            this.draw();

            this._lastUpdate = this.now;
        }

        if (this.playing) {
            requestAnimationFrame(this._loop.bind(this));
        }
    }

    //-----------------------МЕТОД НАЧАЛА ИГРЫ-----------------------
    start() {
        this.playing = true;
        this._bump = false;
        this.begin = false;
        this._inputHandler.subscribe();
        this._lastUpdate = Date.now();
        this.reset();
        this._loop();
    }

    //----------------------МЕТОД ОКОНЧАНИЯ ИГРЫ---------------------
    gameOver() {
        this.playing = false;
        this.begin = false;
        this._endDisplay.draw();
        this._startBtn.draw();
        this._score.draw();
    }
}