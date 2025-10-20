const square = document.getElementById('square');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');

let score = 0;
let gameInterval;
let gameRunning = false;

function moveSquare() {
    const maxX = gameArea.clientWidth - square.clientWidth;
    const maxY = gameArea.clientHeight - square.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    square.style.left = `${randomX}px`;
    square.style.top = `${randomY}px`;
}

function startGame() {
    if (gameRunning) return;
    score = 0;
    scoreDisplay.textContent = score;
    gameRunning = true;
    moveSquare();
    gameInterval = setInterval(moveSquare, 1000);
}

function stopGame() {
    clearInterval(gameInterval);
    gameRunning = false;
    alert(`Fim de jogo! Sua pontuação: ${score}`);
}

square.addEventListener('click', () => {
    if (!gameRunning) return;
    score++;
    scoreDisplay.textContent = score;
    moveSquare();
});

startBtn.addEventListener('click', () => {
    startGame();
    // Para parar o jogo automaticamente após 30 segundos
    setTimeout(() => {
        stopGame();
    }, 30000);
});
