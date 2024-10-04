// eslint-disable-next-line no-unused-vars
class Score extends BaseEntity {
    constructor(params) {
        super(params);
        this._localStorageUtil = new LocalSrorageUtil('bestScoreFlappyBird');

        this.currentScore = 0;
        this.bestScore = this._localStorageUtil.loadData() || 0;

        this._currentScoreX = params.currentScoreX;
        this._currentScoreY = params.currentScoreY;
        this._bestScoreX = params.bestScoreX;
        this._bestScoreY = params.bestScoreY;
    }

    _writeTextData() {
        this._textData = [
            {
                text: this.currentScore,
                x: this._currentScoreX,
                y: this._currentScoreY,
            },
            {
                text: this.bestScore,
                x: this._bestScoreX,
                y: this._bestScoreY,
            },
        ];
    }

    increase() {
        this.currentScore += 1;
    }

    reset() {
        if (this.currentScore > this.bestScore) {
            this.bestScore = this.currentScore;
            this._localStorageUtil.saveData(this.currentScore);
        }
        this._writeTextData();
    }
}
