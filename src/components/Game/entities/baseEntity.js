// eslint-disable-next-line no-unused-vars
class BaseEntity {
    constructor({
        x,
        y,
        width,
        height,
        frames,
        spriteSheet,
        drawEngine,
        animationSpeed,
        animationStep,
        game,
    }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.falling = false;

        this._frames = frames;
        this._spriteSheet = spriteSheet;
        this._drawEngine = drawEngine;
        this._game = game;

        this._initialX = x;
        this._frameIdx = 0;
        this._animationOffset = 0;
        this._animationSpeed = animationSpeed;
        this._animationStep = animationStep;
    }

    draw() {
        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            image: this._frames[this._frameIdx],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        });
    }

    update(delta) {
        this._animationOffset += delta * this._animationSpeed;
    }
}
