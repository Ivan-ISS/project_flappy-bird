// eslint-disable-next-line no-unused-vars
class Floor extends BaseEntity {
    update(delta) {
        super.update(delta);
        this.x = this._initialX - (Math.floor(this._animationOffset) % this._game.width);
    }
}
