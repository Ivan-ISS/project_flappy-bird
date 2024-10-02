// eslint-disable-next-line no-unused-vars
class PipeMaker {
    constructor(params) {
        const { x, y, width, height, frames, game } = params;

        this._params = params;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._frames = frames;
        this._game = game;

        this._frame = [];
        this._pipeNum = 0;
        this._divisor = game.width + width;
    }

    _calcConfig() {
        // если каждая вторая труба
        if (this._pipeNum % 2 === 0) {
            this._frame = [this._frames[1]];
            this._y = 185;
            // если каждая первая труба
        } else {
            this._frame = [this._frames[0]];
            this._y = -300;
        }

        // если каждая вторая пара
        if (this._pipeNum % 4 === 0 || this._pipeNum % 4 === 3) {
            this._x = this._game.width * 1.5 + this._width * 0.5;
            this._divisor = (this._game.width + this._width) * 1.5;
        }
    }

    _createPipe() {
        return new Pipe({
            ...this._params,
            x: this._x,
            y: this._y,
            width: this._width,
            height: this._height,
            frames: this._frame,
            divisor: this._divisor,
            pipeNum: this._pipeNum,
        });
    }

    createPipes() {
        const pipes = [];
        const quantityPipes = this._frames.length * 2;

        for (let i = 0; i < quantityPipes; i++) {
            this._pipeNum++;
            this._calcConfig();
            pipes.push(this._createPipe());
        }

        return pipes;
    }
}
