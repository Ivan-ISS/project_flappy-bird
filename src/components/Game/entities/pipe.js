// eslint-disable-next-line no-unused-vars
class Pipe extends BaseEntity {
    constructor(params) {
        super(params);
        this._divisor = params.divisor;
    }
    update(delta) {
        super.update(delta);
        this.x = this._initialX - (Math.floor(this._animationOffset) % this._divisor);

        if (this.x < -this.width * 0.95 && this._initialX !== this._game.width) {
            this._animationOffset = 0;
            this._initialX = this._game.width;
            this._divisor = this._game.width + this.width;
        }
    }
}
