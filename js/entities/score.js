class Score extends Entity {
    constructor(params) {
        super(params);
        this._score = params.score;
        this._bestX = params.bestX;
        this._bestY = params.bestY;
        this.name = params.name;
        //this.date = new Date()

        if (localStorage.getItem('scoreFlappyBird')) {
            this._bestResult = localStorage.getItem('scoreFlappyBird');
        } else {
            this._bestResult = this._score
        }
}

    _increase() {
        this._score = this._score + 1
        this._audio.pointSound.play()
        if (localStorage.getItem('scoreFlappyBird')) {
            if (localStorage.getItem('scoreFlappyBird') < this._score) {
                localStorage.setItem('scoreFlappyBird', this._score)
                this._bestResult = localStorage.getItem('scoreFlappyBird')
            }
        } else {
            localStorage.setItem('scoreFlappyBird', this._score)
        }
        //this.date = new Date()
        //console.log(this.date.getTime())

        //----------------ПРОВЕРКА КОЛ-ВА ОЧКОВ И ПРИСВОЕНИЕ МЕДАЛИ-------------------
        if (this._score >= 10 && this._score < 20) {
            this._game._medal._frameIdx = 0;
        } else if (this._score >= 20 && this._score < 30) {
            this._game._medal._frameIdx = 1;
        } else if (this._score >= 30) {
            this._game._medal._frameIdx = 2;
        }
    }
}