// eslint-disable-next-line no-unused-vars
class Bird extends BaseEntity {
    constructor(params) {
        super(params);
        this.rotationSpeed = params.rotationSpeed;
        this.angle = 0;

        this._angleMin = params.angleMin;
        this._angleMax = params.angleMax;
        this._flapForce = params.flapForce;
        this._frameRate = params.frameRate;
        this._frameOffset = 0;
    }

    _flyoutCheck() {
        if (this.y < 0) this.y = 0;
        if (this.angle > this._angleMax) this.angle = this._angleMax;
    }

    update(delta, play) {
        this._frameOffset += delta * this._frameRate;
        this._frameIdx = Math.floor(this._frameOffset) % this._frames.length;

        if (play) {
            this._flyoutCheck();
            this._physicsEngine.freeFall(this, delta);

            if (this.speedY >= 0.5) {
                this._physicsEngine.rotate(this, delta);
            }
        }
    }

    flap() {
        this.speedY = -this._flapForce; // задаем отрицательную начальную скорость
        this.angle = this._angleMin;
    }
}
