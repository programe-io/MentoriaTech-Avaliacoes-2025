let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");


function moveBox() {
const maxX = gameArea.clientWidth - box.clientWidth;
const maxY = gameArea.clientHeight - box.clientHeight;


const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);


box.style.left = randomX + "px";
box.style.top = randomY + "px";
}


box.addEventListener("click", () => {
score++;
scoreDisplay.textContent = score;
moveBox();
});


moveBox();