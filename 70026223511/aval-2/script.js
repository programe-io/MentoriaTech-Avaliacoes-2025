// Variáveis do DOM e do Jogo
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

// Elementos do Placar
const xWinsElement = document.getElementById('x-wins');
const oWinsElement = document.getElementById('o-wins');
const drawsElement = document.getElementById('draws');

// Variáveis de Pontuação (Iniciadas com 0 e carregadas via loadScore)
let scoreX = 0;
let scoreO = 0;
let scoreDraws = 0;

// Combinações vencedoras (índices)
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

// --- Funções de Persistência (localStorage) ---

function saveScore() {
    const scoreToSave = {
        x: scoreX,
        o: scoreO,
        draws: scoreDraws
    };
    // Salva o objeto como string JSON no navegador
    localStorage.setItem('tictactoeScore', JSON.stringify(scoreToSave));
}

function loadScore() {
    const savedScore = localStorage.getItem('tictactoeScore');
    
    if (savedScore) {
        // Carrega e converte a string JSON para objeto
        const score = JSON.parse(savedScore);
        
        scoreX = score.x || 0;
        scoreO = score.o || 0;
        scoreDraws = score.draws || 0;
    }
    
    updateScoreboard(); // Atualiza a exibição inicial
}

// --- Funções do Jogo ---

function updateScoreboard() {
    xWinsElement.textContent = scoreX;
    oWinsElement.textContent = scoreO;
    drawsElement.textContent = scoreDraws;
    
    saveScore(); // Salva sempre que o placar muda
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    // Atualiza o estado do jogo
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    checkForWinner();

    // Troca o jogador
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.innerHTML = `Vez do Jogador ${currentPlayer}`;
    }
}

function checkForWinner() {
    let roundWon = false;
    for (let i = 0; i < winningCombinations.length; i++) {
        const combo = winningCombinations[i];
        const [a, b, c] = combo; // Desestruturação para simplificar

        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }

        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.innerHTML = `🏆 Jogador ${currentPlayer} Venceu!`;
        gameActive = false;
        
        if (currentPlayer === 'X') {
            scoreX++;
        } else {
            scoreO++;
        }
        updateScoreboard();
        return;
    }

    // Verifica Empate
    const roundDraw = !board.includes('');
    if (roundDraw) {
        message.innerHTML = `🤷‍♀️ Empate!`;
        gameActive = false;
        
        scoreDraws++;
        updateScoreboard();
        return;
    }
}

function resetGame() {
    // Pergunta se o usuário quer zerar o histórico, mas mantém o tabuleiro limpo.
    if (confirm("Deseja zerar o histórico de pontuação salvo?")) {
        scoreX = 0;
        scoreO = 0;
        scoreDraws = 0;
        updateScoreboard();
    }
    
    // Reset do jogo atual
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.innerHTML = `Vez do Jogador ${currentPlayer}`;

    cells.forEach(cell => {
        cell.innerHTML = '';
    });
}

// --- Event Listeners ---
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);

// Carrega a pontuação na inicialização da página
loadScore();