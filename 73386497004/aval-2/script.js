const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start-btn');

let score = 0;
let timeLeft = 30;
let gameInterval;
let moveInterval;

function moveTarget() {
  const gameArea = document.getElementById('game-area');
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.display = 'block';
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  target.style.display = 'block';

  moveTarget();
  moveInterval = setInterval(moveTarget, 800); // move a cada 0.8s

  gameInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(moveInterval);
      target.style.display = 'none';
      alert(`Fim de jogo! Sua pontuação foi: ${score}`);
    }
  }, 1000);
}

target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

startBtn.addEventListener('click', startGame);
