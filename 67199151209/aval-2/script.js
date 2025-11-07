const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const restartBtn = document.getElementById("restart");
const resetScoreBtn = document.getElementById("resetScore");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");
const scoreDraw = document.getElementById("scoreDraw");

let currentPlayer = "X";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];
let score = { X: 0, O: 0, Draw: 0 };

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      gameActive = false;
      statusText.textContent = `Jogador ${boardState[a]} venceu! 🎉`;
      pattern.forEach(i => cells[i].style.background = "#00ffcc55");
      updateScore(boardState[a]);
      return;
    }
  }

  if (!boardState.includes("")) {
    gameActive = false;
    statusText.textContent = "Empate! 🤝";
    updateScore("Draw");
  }
}

function handleCellClick(e) {
  const index = e.target.getAttribute("data-index");

  if (!gameActive || boardState[index] !== "") return;

  boardState[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  checkWinner();

  if (gameActive) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Vez do jogador: ${currentPlayer}`;
  }
}

function updateScore(result) {
  if (result === "X") score.X++;
  else if (result === "O") score.O++;
  else score.Draw++;

  scoreX.textContent = score.X;
  scoreO.textContent = score.O;
  scoreDraw.textContent = score.Draw;
}

function restartGame() {
  boardState = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => {
    cell.textContent = "";
    cell.style.background = "#1e1e1e";
  });
  currentPlayer = "X";
  gameActive = true;
  statusText.textContent = "Vez do jogador: X";
}

function resetScore() {
  score = { X: 0, O: 0, Draw: 0 };
  scoreX.textContent = "0";
  scoreO.textContent = "0";
  scoreDraw.textContent = "0";
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartBtn.addEventListener("click", restartGame);
resetScoreBtn.addEventListener("click", resetScore);
