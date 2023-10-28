class InitialDisplay extends Entity {
    constructor(params) {
        super(params)
    }

    update() {
        if (this._game.begin) {
            this.width = 0;
            this.height = 0;
        }
    }
}