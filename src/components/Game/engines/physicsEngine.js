// eslint-disable-next-line no-unused-vars
class PhysicsEngine {
    constructor({ gravity }) {
        this._gravity = gravity;
    }

    freeFall(entity, delta) {
        entity.speedY += this._gravity * delta;
        entity.y += entity.speedY * delta;

        /* entity.speedY += this._gravity * delta;
        entity.y += entity.speedY + (this._gravity * delta * delta) / 2; */
    }

    moveLinear(entity, delta) {
        entity.distance += entity.speedX * delta;
        entity.x = entity.initialX - (Math.floor(entity.distance) % entity.divisor);
    }

    rotate(entity, delta) {
        entity.angle += entity.rotationSpeed * delta;
    }
}
