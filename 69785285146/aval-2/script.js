let score = 0;
let gameInterval;

const target = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("gameArea");

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    target.style.display = "block";

    gameInterval = setInterval(moveTarget, 1000);

    setTimeout(endGame, 15000); // jogo dura 15 segundos
}

function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
}

target.onclick = function () {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
};

function endGame() {
    clearInterval(gameInterval);
    target.style.display = "none";
    alert("Fim de jogo! Sua pontuação foi: " + score);
}
