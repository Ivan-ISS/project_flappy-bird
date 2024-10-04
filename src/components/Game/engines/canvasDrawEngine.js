// eslint-disable-next-line no-unused-vars
class CanvasDrawEngine {
    constructor({ canvas }) {
        this._canvas = canvas;
        this._ctx = canvas.getContext('2d');

        this._ctx.fillStyle = '#fff';
        this._ctx.strokeStyle = '#000';
        this._ctx.lineWidth = 2;
        this._ctx.font = '25px Teko, sans-serif';
    }

    drawImage({ spriteSheet, image, x, y, width, height, entity }) {
        if (entity.angle) {
            this._ctx.save();
            const dx = entity.width / 2;
            const dy = entity.height / 2;
            this._ctx.translate(x + dx, y + dy); // сместили весь контекст к птичке и на половину ее ширины
            x = -dx; // смещаем координаты птички на половину ее ширины назад, чтобы совместить
            y = -dy; // с тем же местом где была после поворота
            this._ctx.rotate(entity.angle);
        }

        this._ctx.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height);

        this._ctx.restore();
    }

    drawText(textData) {
        textData.forEach((item) => {
            this._ctx.strokeText(item.text, item.x, item.y);
            this._ctx.fillText(item.text, item.x, item.y);
        });
    }

    clear() {
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
