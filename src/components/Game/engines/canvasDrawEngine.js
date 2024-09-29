// eslint-disable-next-line no-unused-vars
class CanvasDrawEngine {
    constructor({ canvas }) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
    }

    drawImage({ spriteSheet, image, x, y, width, height }) {
        this._context.drawImage(
            spriteSheet,
            image.x,
            image.y,
            image.w,
            image.h,
            x,
            y,
            width,
            height
        );
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
