class PhysicsEngine {
    constructor({ gravity }) {
        this._gravity = gravity
    }

    update(entity, delta) {
        if (entity.falling) {
            entity._speed += this._gravity * delta
            entity.y += entity._speed * delta
        }
    }
}