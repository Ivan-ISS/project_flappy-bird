import { BaseEntity } from './baseEntity';

class Floor extends BaseEntity {
    constructor(params) {
        super(params);
        this.divisor = this._game.width;
    }
    update(delta, play) {
        if (play) {
            this._physicsEngine.moveLinear(this, delta);
        }
    }
}

export { Floor };
