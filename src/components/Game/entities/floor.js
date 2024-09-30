// eslint-disable-next-line no-unused-vars
class Floor extends BaseEntity {
    update(delta) {
        this._idx += delta * 100;
        this.x = this._initialX - (Math.floor(this._idx) % this._game.width);
    }
}
