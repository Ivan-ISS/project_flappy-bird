function random (min, max) {
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

const game = new Game();
game.prepare();
game.start();

document.addEventListener('click', (event) => {
    game.begin = true;
    let rect = game._canvas.getBoundingClientRect();
    let clickX = event.clientX - rect.left;
    let clickY = event.clientY - rect.top;
    if (!game.playing && clickX >= game._startBtn.x && clickX <= game._startBtn.x + game._startBtn.width &&
        clickY >= game._startBtn.y && clickY <= game._startBtn.y + game._startBtn.height) {
        game.start();
    }
});

document.addEventListener('keydown', () => {
    game.begin = true;
});

//localStorage.setItem('scoreFlappyBird', 0)


//------------------HEADER----------------------
canvas = document.querySelector('.game-header');
ctx = canvas.getContext('2d');

ctx.fillStyle = '#ffc000';
ctx.strokeStyle = '#573419';
ctx.lineWidth = 5;
ctx.font = '50px Teko, sans-serif';
ctx.strokeText('Flappy Bird', 37, 40);
ctx.fillText('Flappy Bird', 37, 40);