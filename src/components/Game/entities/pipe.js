// eslint-disable-next-line no-unused-vars
class Pipe extends BaseEntity {
    static firstPairRandomY = 0;
    static secondPairRandomY = 0;

    constructor(params) {
        super(params);
        this.divisor = params.divisor;
        this.isComing = true;

        this._pipeNum = params.pipeNum;
        this._gap = params.gap;
        this._minY = params.minY;
        this._maxY = params.maxY;
    }

    update(delta, play) {
        if (play) {
            this._physicsEngine.moveLinear(this, delta);
        }

        // Когда птичка уходит за левую границу
        if (this.x < -this.width * 0.95) {
            // Сбрасываем единовременно координату x для второй пары
            if (this.initialX !== this._game.width) {
                this.distance = 0;
                this.initialX = this._game.width;
                this.divisor = this._game.width + this.width;
            }

            // Меняем координаты
            if (this._pipeNum % 4 === 1) {
                Pipe.firstPairRandomY = random(this._minY, this._maxY);
                this.y = Pipe.firstPairRandomY;
            }

            if (this._pipeNum % 4 === 2) {
                this.y = Pipe.firstPairRandomY + this.height + this._gap;
            }

            if (this._pipeNum % 4 === 3) {
                Pipe.secondPairRandomY = random(this._minY, this._maxY);
                this.y = Pipe.secondPairRandomY;
            }

            if (this._pipeNum % 4 === 0) {
                this.y = Pipe.secondPairRandomY + this.height + this._gap;
            }
        }
    }
}
