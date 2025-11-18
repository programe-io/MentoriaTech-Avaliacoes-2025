const cells = document.querySelectorAll("[data-cell]");
const restartBtn = document.getElementById("restartBtn");
let turn = "x";

const winCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  cell.classList.add(turn);
  cell.textContent = turn.toUpperCase();

  if (checkWin(turn)) {
    setTimeout(() => alert(`${turn.toUpperCase()} venceu!`), 10);
  } else if ([...cells].every(c => c.textContent !== "")) {
    setTimeout(() => alert("Empate!"), 10);
  }

  turn = turn === "x" ? "o" : "x";
}

function checkWin(player) {
  return winCombos.some(combo =>
    combo.every(index => cells[index].classList.contains(player))
  );
}

restartBtn.addEventListener("click", () => {
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
    cell.addEventListener("click", handleClick, { once: true });
  });
  turn = "x";
});
