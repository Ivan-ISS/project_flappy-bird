class Floor extends Entity {
    constructor(params) {
        super(params)
        this._moveSpeed = this._game._config.floor.moveSpeed;
        this._multiplicationFactor = this._game._config.floor.multiplicationFactor;
        this._name = params.name;
    }

    update(floor, delta) {
        this._index += delta * this._multiplicationFactor;
        this.x = - ((this._index * this._moveSpeed) % this._game._canvas.width);

        if (floor._name === 'floorTwo') {
            this.x = - ((this._index * this._moveSpeed) % this._game._canvas.width) + this._game._canvas.width;
        }
    }
}