class CanvasDrawEngine {
    constructor({ canvas }) {
        this._canvas = canvas
        this._context = canvas.getContext('2d')
        
    }

    drawImage({ spriteSheet, image, x, y, width, height, rotation, entity, bestX, bestY }) {
        //const render = () => {
   
            if (entity._name === 'background') {
                this._context.fillStyle = '#70c5ce'
                this._context.fillRect(0, 0, 322, 482)
            }

            // Если сущность падает, то вращаем ее
            if (entity.falling) {
                this._context.save()
                this._context.translate(x, y)
                x = - entity.width / 2
                y = - entity.height / 2
                this._context.rotate(rotation)
            }

            this._context.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
            this._context.restore()

            if (entity.name === 'score') {
                this._context.fillStyle = '#fff';
                this._context.strokeStyle = '#000';
                this._context.lineWidth = 2;
                this._context.font = '25px Teko, sans-serif';
                this._context.strokeText(entity._score, x, y);
                this._context.fillText(entity._score, x, y);
                this._context.strokeText(entity._bestResult, bestX, bestY);
                this._context.fillText(entity._bestResult, bestX, bestY);
            }
        //}
        //spriteSheet.onload = render;
    }

    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}