// eslint-disable-next-line no-unused-vars
class Bird extends BaseEntity {
    constructor(params) {
        super(params);
        this._flapSpeed = params.flapSpeed;
        this._physicsEngine = params.physicsEngine;
        this.falling = true;
        this.speed = 0;
    }

    _flyoutCheck() {
        if (this.y < 0) this.y = 0;
    }

    update(delta) {
        super.update(delta);
        this._frameIdx = Math.floor(this._animationOffset) % this._frames.length;

        this._physicsEngine.update(this, delta);
        this._flyoutCheck();
    }

    flap() {
        this.speed = -this._flapSpeed;
    }
}
