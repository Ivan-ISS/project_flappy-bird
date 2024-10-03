// eslint-disable-next-line no-unused-vars
class CanvasDrawEngine {
    constructor({ canvas }) {
        this._canvas = canvas;
        this._context = canvas.getContext('2d');
    }

    drawImage({ spriteSheet, image, x, y, width, height, entity }) {
        if (entity.angle) {
            this._context.save();
            const dx = entity.width / 2;
            const dy = entity.height / 2;
            this._context.translate(x + dx, y + dy); // сместили весь контекст к птичке и на половину ее ширины
            x = -dx; // смещаем координаты птички на половину ее ширины назад, чтобы совместить
            y = -dy; // с тем же местом где была после поворота
            this._context.rotate(entity.angle);
        }

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

        this._context.restore();
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
