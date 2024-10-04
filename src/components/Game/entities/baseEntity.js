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
        physicsEngine,
        speedX,
        game,
    }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.initialX = x;
        this.speedX = speedX;
        this.speedY = 0;
        this.distance = 0;

        this._frameIdx = 0;
        this._frames = frames;
        this._spriteSheet = spriteSheet;

        this._drawEngine = drawEngine;
        this._physicsEngine = physicsEngine;

        this._textData = null;

        this._game = game;
    }

    draw() {
        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            image: this._frames[this._frameIdx],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            entity: this,
        });

        if (this._textData) {
            this._drawEngine.drawText(this._textData);
        }
    }
}
