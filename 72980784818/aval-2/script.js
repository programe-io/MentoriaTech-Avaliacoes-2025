function loadGame(game) {
  const container = document.getElementById('game-container');
  if (game === 'ticTacToe') {
    container.innerHTML = `
      <h2>Jogo da Velha</h2>
      <div id="board" style="display:grid; grid-template-columns:repeat(3, 60px); gap:5px;">
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
        <button class="cell" data-cell></button>
      </div>
      <p id="status"></p>
      <button onclick="startGame()">Reiniciar Jogo</button>
    `;
    startGame();
  } else if (game === 'guessNumber') {
    container.innerHTML = `
      <h2>Adivinhe o Número</h2>
      <p>Estou pensando em um número entre 1 e 100. Tente adivinhar!</p>
      <input type="number" id="guessInput" min="1" max="100" />
      <button onclick="makeGuess()">Chutar</button>
      <p id="result"></p>
      <button onclick="startGuessGame()">Reiniciar Jogo</button>
    `;
    startGuessGame();
  }
}

// --- Jogo da Velha ---
let board;
let currentPlayer;
let isGameActive;
const winConditions = [
  [0,1,2],[3,4,5],[6,7,8], // linhas
  [0,3,6],[1,4,7],[2,5,8], // colunas
  [0,4,8],[2,4,6]          // diagonais
];

function startGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  isGameActive = true;
  document.getElementById('status').textContent = `Vez do jogador ${currentPlayer}`;
  const cells = document.querySelectorAll('[data-cell]');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.addEventListener('click', handleCellClick);
  });
}

function handleCellClick(e) {
  const index = Array.from(document.querySelectorAll('[data-cell]')).indexOf(e.target);
  if (board[index] !== '' || !isGameActive) return;
  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;
  if (checkWin()) {
    document.getElementById('status').textContent = `Jogador ${currentPlayer} venceu!`;
    isGameActive = false;
    return;
  }
  if (board.every(cell => cell !== '')) {
    document.getElementById('status').textContent = 'Empate!';
    isGameActive = false;
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('status').textContent = `Vez do jogador ${currentPlayer}`;
}

function checkWin() {
  return winConditions.some(condition => {
    return condition.every(index => board[index] === currentPlayer);
  });
}

// --- Adivinhe o Número ---
let secretNumber;
let attempts;

function startGuessGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('result').textContent = '';
  document.getElementById('guessInput').value = '';
}

function makeGuess() {
  const input = document.getElementById('guessInput');
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 100) {
    alert('Por favor, insira um número entre 1 e 100.');
    return;
  }
  attempts++;
  if (guess === secretNumber) {
    document.getElementById('result').textContent = `Parabéns! Você acertou em ${attempts} tentativas.`;
  } else if (guess < secretNumber) {
    document.getElementById('result').textContent = 'Tente um número maior.';
  } else {
    document.getElementById('result').textContent = 'Tente um número menor.';
  }
  input.value = '';
  input.focus();
}
