const startBtn = document.getElementById('start-btn');
const gameArea = document.getElementById('game-area');
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');

let score = 0;
let timeLeft = 30;
let timer;
let gameInterval;

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    target.style.display = 'block';
    startBtn.disabled = true;

    moveTarget();
    gameInterval = setInterval(moveTarget, 800);

    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) endGame();
    }, 1000);
}

function moveTarget() {
    const x = Math.random() * (gameArea.clientWidth - target.offsetWidth);
    const y = Math.random() * (gameArea.clientHeight - target.offsetHeight);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

function endGame() {
    clearInterval(timer);
    clearInterval(gameInterval);
    target.style.display = 'none';
    startBtn.disabled = false;
    alert(`⏰ Fim de jogo! Sua pontuação: ${score}`);
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
});

startBtn.addEventListener('click', startGame);