class Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game, audio }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this._speed = 0;
        this._frameIdx = 0;
        this._index = 0.3;
        this.falling = false;

        this._frames = frames;
        this._spriteSheet = spriteSheet;
        this._drawEngine = drawEngine;
        this._game = game;

        this._audio = audio;

        this._rotation = 0;
    }

    draw() {
        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            image: this._frames[this._frameIdx],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            rotation: this._rotation,
            entity: this,

            bestX: this._bestX,
            bestY: this._bestY,
        });
    }

    update(delta) {
        this._index = this._index + delta * this._game._config.bird.multiplicationFactor;
        this._frameIdx = Math.floor((this._index / 16)) % 4 * 1;
    }
}