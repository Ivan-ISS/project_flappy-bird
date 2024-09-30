// eslint-disable-next-line no-unused-vars
class Bird extends BaseEntity {
    constructor(params) {
        super(params);
        this._flapSpeed = params.flapSpeed;
        this._physicsEngine = params.physicsEngine;
        this.falling = true;
    }

    _flyoutCheck() {
        if (this.y < 0) {
            this.y = 0;
        }

        return this.y + this.height >= this._game._config.floor.y;
    }

    update(delta) {
        this._idx += delta * 7;
        this._frameIdx = Math.floor(this._idx) % this._frames.length;

        this._physicsEngine.update(this, delta);

        if (this._flyoutCheck()) {
            this._game.gameOver();
        }
    }

    flap() {
        this.speed = -this._flapSpeed;
    }
}
