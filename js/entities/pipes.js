class Pipes extends Entity {
    constructor(params) {
        super(params)
        this._name = params.name;
        this._isMove = false;
        this._moveSpeed = this._game._config.pipes.moveSpeed;
        this._multiplicationFactor = this._game._config.pipes.multiplicationFactor;
        this._numScoreToIncreaseSpeed = this._game._config.pipes.numScoreToIncreaseSpeed;
        this._stepIncreaseMoveSpeed = this._game._config.pipes.stepIncreaseMoveSpeed;
    }

    update(pipes, delta) {
        this._index += delta * this._multiplicationFactor;

        //------------------------------------------РАСЧЕТЫ КООРДИНАТ X и Y ДЛЯ ПЕРВОЙ ОЧЕРЕДИ ТРУБ-----------------------------------------------//

        // Расчет координаты X для первой очереди труб
        if (pipes._name === 'pipesTop' || pipes._name === 'pipesBot') {
            if (!this._isMove) {
                this.x = (this._game._canvas.width + 50) - ((this._index * this._moveSpeed) % (this._game._canvas.width + 100));
            } else {
                this.x = (this._game._canvas.width) - ((this._index * this._moveSpeed) % (this._game._canvas.width + 50));
            }

            // Увеличение скорости после каждых собранных 5-ти очков
            if (this._game._score._score != 0 && this._game._score._score % this._numScoreToIncreaseSpeed === 0) {
                this._moveSpeed += this._stepIncreaseMoveSpeed;
                //console.log(this._moveSpeed)
            }
        }

        // Расчет координаты Y для нижней трубы первой очереди (с условием величины отверстия между трубами в 25 % от высоты одной трубы)
        if (pipes._name === 'pipesBot') {
            this._frameIdx = 1;
            this.y = this._game._config.pipes.height - this._game._config.pipes.frames[0].y + 0.25 * this._game._config.pipes.height;
        }

        // Расчет координаты Y через случайное значение после достижения левого края первой очереди труб
        if ((pipes._name === 'pipesTop' || pipes._name === 'pipesBot') && this.x <= - this._game._config.pipes.width + 7) {
            this._game._config.pipes.frames[0].y = 268
            let randomValue = random(-90, 90)
            this._game._config.pipes.frames[0].y = this._game._config.pipes.frames[0].y - randomValue;
            this._isMove = true;
            this._index = 0.3;
        }

        //---------------------------------------------АНАЛОГИЧНЫЕ РАСЧЕТЫ ДЛЯ ВТОРОЙ ОЧЕРЕДИ ТРУБ-------------------------------------------------//

        // Расчет координаты X для второй очереди труб
        if (pipes._name === 'pipesTopTwo' || pipes._name === 'pipesBotTwo') {
            if (!this._isMove) {
                this.x = (this._game._canvas.width + 50 * 5) - ((this._index * this._moveSpeed) % (this._game._canvas.width + 300));
            } else {
                this.x = (this._game._canvas.width) - ((this._index * this._moveSpeed) % (this._game._canvas.width + 50));
            }
            if (pipes._name === 'pipesTopTwo') { this._frameIdx = 2; }
            if (pipes._name === 'pipesBotTwo') { this._frameIdx = 3; }

            // Увеличение скорости после каждых собранных 5-ти очков
            if (this._game._score._score != 0 && this._game._score._score % this._numScoreToIncreaseSpeed === 0) {
                this._moveSpeed += this._stepIncreaseMoveSpeed;
                //console.log(this._moveSpeed)
            }
        }

        // Расчет координаты Y для нижней трубы второй очереди (с условием величины отверстия между трубами в 25 % от высоты одной трубы)
        if (pipes._name === 'pipesBotTwo') {
            this.y = this._game._config.pipes.height - this._game._config.pipes.frames[2].y + 0.25 * this._game._config.pipes.height;
        }

        // Расчет координаты Y через случайное значение после достижения левого края второй очереди труб
        if ((pipes._name === 'pipesTopTwo' || pipes._name === 'pipesBotTwo') && this.x <= - this._game._config.pipes.width + 7) {
            this._game._config.pipes.frames[2].y = 268
            let randomValue = random(-90, 90)
            this._game._config.pipes.frames[2].y = this._game._config.pipes.frames[2].y - randomValue;
            this._isMove = true;
            this._index = 0.3;
        }
    }
}