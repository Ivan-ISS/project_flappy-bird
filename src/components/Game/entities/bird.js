// eslint-disable-next-line no-unused-vars
class Bird extends BaseEntity {
    constructor(params) {
        super(params);
        this._flapForce = params.flapForce;
        this._frameOffset = 0;
        this._frameRate = params.frameRate;
    }

    _flyoutCheck() {
        if (this.y < 0) this.y = 0;
    }

    update(delta, play) {
        this._frameOffset += delta * this._frameRate;
        this._frameIdx = Math.floor(this._frameOffset) % this._frames.length;

        if (play) {
            this._physicsEngine.freeFall(this, delta);
            this._flyoutCheck();
        }
    }

    flap() {
        this.speedY = -this._flapForce; // задаем отрицательную начальную скорость
    }
}
