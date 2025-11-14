let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;

function play(cell, index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = player;
  cell.innerText = player;

  if (checkWin()) {
    document.getElementById("status").innerText = player + " venceu!";
    gameOver = true;
    return;
  }

  player = player === "X" ? "O" : "X";
}

function checkWin() {
  const wins = [
    [0,1,2], [3,4,5], [6,7,8], // linhas
    [0,3,6], [1,4,7], [2,5,8], // colunas
    [0,4,8], [2,4,6]           // diagonais
  ];

  return wins.some(w => 
    board[w[0]] &&
    board[w[0]] === board[w[1]] &&
    board[w[1]] === board[w[2]]
  );
}
