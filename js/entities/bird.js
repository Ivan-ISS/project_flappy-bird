class Bird extends Entity {
    constructor(params) {
        super(params)
        this._flapSpeed = params.flapSpeed;
        this._physicsEngine = params.physicsEngine;
        this.falling = true;
        this._degreeRad = Math.PI/180;
        this._degreeGrad = 0;
        this._nameOfPipes = 'pipesTop';
        this._rotationStartFallSpeed = this._game._config.bird.rotationStartFallSpeed;
        this._rotationSpeed = this._game._config.bird.rotationSpeed;
        this._startSound = true;
    }

    update(delta) {
        super.update(delta)
        if (this._game.begin) {
            this._physicsEngine.update(this, delta);

            if (this._speed >= this._rotationStartFallSpeed) {
                if (this._degreeGrad <= 90) {
                    this._degreeGrad = this._degreeGrad + this._rotationSpeed
                    this._rotation = this._degreeGrad * this._degreeRad
                }
            } else {
                this._rotation = - 25 * this._degreeRad
                this._degreeGrad = 0
            }
        }

        //---------------------------------------------------ПРОВЕРКА КАСАНИЯ ПТИЧКИ ВЕРХНЕЙ И НИЖНЕЙ ГРАНИЦЫ---------------------------------------------------------//

        if (this.y - this.height / 2 < 0) {
            this.y = this.height / 2;
        }

        if (this.y + this.height / 2 >= this._game._config.floor.y) {
            this._audio.dieSound.play()
            this._game.gameOver()
            if (this._game._score._score >= 10) {
                this._game._medal.draw();
            }
        }

        //-------------------------------------------------------------ПРОВЕРКА КАСАНИЯ ПТИЧКОЙ ТРУБЫ-----------------------------------------------------------------//

        if ((this.y - this.height / 2 <= this._game._config.pipes.height - this._game._config.pipes.frames[0].y) && (this.x + this.width / 2 >= this._game._pipesTop.x) && (this.x <= this._game._pipesTop.x + this._game._config.pipes.width) ||
            (this.y + this.height / 2 >= this._game._pipesBot.y && (this.x + this.width / 2 >= this._game._pipesBot.x) && (this.x <= this._game._pipesBot.x + this._game._config.pipes.width)) ||
            (this.y - this.height / 2 <= this._game._config.pipes.height - this._game._config.pipes.frames[2].y) && (this.x + this.width / 2 >= this._game._pipesTopTwo.x) && (this.x <= this._game._pipesTopTwo.x + this._game._config.pipes.width) ||
            (this.y + this.height / 2 >= this._game._pipesBotTwo.y && (this.x + this.width / 2 >= this._game._pipesBotTwo.x) && (this.x <= this._game._pipesBotTwo.x + this._game._config.pipes.width)))
        {
            if (!this._game._bump) {
                this._audio.hitSound.play()
                document.removeEventListener('click', this._game._inputHandler.eventHandlerMap.click)
                document.removeEventListener('keydown', this._game._inputHandler.eventHandlerMap.keydown)
            }
            this._game._bump = true
        }

        //------------------------------------------ПРОВЕРКА ПЕРЕСЕЧЕНИЯ ПТИЧКОЙ СЕРЕДИНЫ СВОБОДНОГО ПРОМЕЖУТКА В ТРУБЕ-----------------------------------------------//

        if ((this._nameOfPipes === this._game._pipesTop._name) && (this.x + this.width / 2 > this._game._pipesTop.x + this._game._pipesTop.width / 2)) {
            this._game._score._increase()
            this._nameOfPipes = 'pipesTopTwo'
        }

        if ((this._nameOfPipes === this._game._pipesTopTwo._name) && (this.x + this.width / 2 > this._game._pipesTopTwo.x + this._game._pipesTopTwo.width / 2)) {
            this._game._score._increase()
            this._nameOfPipes = 'pipesTop'
        }
    }

    //--------------------------------------------------------------------МЕТОД ВЗЛЕТА ПТИЧКИ------------------------------------------------------------------------//

    flap() {
        this._speed = -this._flapSpeed;
        if (this._startSound) {
            this._audio.swooshingSound.play()
            this._startSound = false;
        } else {
            this._audio.flapSound.play()
        }
    }
}