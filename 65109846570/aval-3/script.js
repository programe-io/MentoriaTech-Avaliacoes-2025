// --- Elementos do DOM ---
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const statusMessage = document.getElementById('status-message');
const restartButton = document.getElementById('restart-button');
const resetScoreButton = document.getElementById('reset-score-button');
const scoreXDisplay = document.getElementById('score-x');
const scoreODisplay = document.getElementById('score-o');
const winningLine = document.getElementById('winning-line');

// --- Variáveis de Estado do Jogo ---
let boardState = ['', '', '', '', '', '', '', '', '']; // Representa o tabuleiro (9 posições)
let currentPlayer = 'X';
let isGameActive = true;
let score = { 'X': 0, 'O': 0 };

// Posições de vitória (índices no array boardState)
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
];

// --- Funções Principais ---

/**
 * Atualiza o placar e armazena no estado do jogo.
 */
function updateScoreDisplay() {
    scoreXDisplay.textContent = score.X;
    scoreODisplay.textContent = score.O;
}

/**
 * Atualiza o tabuleiro e o estado do jogo após um clique.
 * @param {HTMLElement} cell - A célula clicada.
 * @param {number} index - O índice da célula no array boardState.
 */
function handleCellPlayed(cell, index) {
    // 1. Atualizar o estado e a aparência da célula
    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    // 2. Verificar o resultado
    const result = checkResult();
    
    if (result.isGameOver) {
        isGameActive = false;
        if (result.winner) {
            statusMessage.textContent = `🎉 Jogador ${result.winner} Venceu!`;
            score[result.winner]++;
            updateScoreDisplay();
            drawWinningLine(result.condition);
        } else {
            statusMessage.textContent = '🤝 Empate!';
        }
    } else {
        // 3. Mudar o jogador e atualizar a mensagem
        changePlayer();
    }
}

/**
 * Troca a vez do jogador.
 */
function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusMessage.textContent = `Vez do Jogador ${currentPlayer}`;
}

/**
 * Verifica se houve vitória ou empate.
 * @returns {object} Um objeto com { isGameOver: boolean, winner: string|null, condition: number[]|null }.
 */
function checkResult() {
    let roundWon = false;
    let winningCondition = null;

    // Itera sobre todas as condições de vitória
    for (let i = 0; i < winningConditions.length; i++) {
        const condition = winningConditions[i];
        const a = boardState[condition[0]];
        const b = boardState[condition[1]];
        const c = boardState[condition[2]];

        // Se as 3 células não estiverem vazias e forem iguais
        if (a && a === b && a === c) {
            roundWon = true;
            winningCondition = condition;
            break;
        }
    }

    if (roundWon) {
        return { isGameOver: true, winner: boardState[winningCondition[0]], condition: winningCondition };
    }

    // Verifica se houve empate (todas as células preenchidas e ninguém venceu)
    const roundDraw = !boardState.includes('');
    if (roundDraw) {
        return { isGameOver: true, winner: null, condition: null };
    }

    // O jogo continua
    return { isGameOver: false, winner: null, condition: null };
}

/**
 * Desenha a linha visual sobre a condição de vitória.
 * @param {number[]} condition - Os índices da condição de vitória.
 */
function drawWinningLine(condition) {
    const firstCell = cells[condition[0]];
    const lastCell = cells[condition[2]];
    
    // Obter as coordenadas do centro das células
    const boardRect = board.getBoundingClientRect();
    const startRect = firstCell.getBoundingClientRect();
    const endRect = lastCell.getBoundingClientRect();

    const startX = startRect.left + startRect.width / 2 - boardRect.left;
    const startY = startRect.top + startRect.height / 2 - boardRect.top;
    const endX = endRect.left + endRect.width / 2 - boardRect.left;
    const endY = endRect.top + endRect.height / 2 - boardRect.top;

    // Calcular o ângulo e o comprimento (usando o Teorema de Pitágoras)
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // Convertendo radianos para graus

    // Aplicar estilos para posicionar e girar a linha
    winningLine.style.width = `${length}px`;
    winningLine.style.left = `${startX}px`;
    winningLine.style.top = `${startY}px`;
    winningLine.style.transform = `translateY(-50%) rotate(${angle}deg)`;
    winningLine.classList.add('active'); // Ativa a transição CSS
}


/**
 * Reinicia o jogo para uma nova partida, mantendo o placar.
 */
function restartGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    statusMessage.textContent = `Vez do Jogador ${currentPlayer}`;
    winningLine.classList.remove('active');

    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}

/**
 * Zera o placar de ambas as equipes.
 */
function resetScore() {
    score = { 'X': 0, 'O': 0 };
    updateScoreDisplay();
    restartGame(); // Reinicia o jogo também
}

// --- Manipuladores de Eventos ---

// 1. Manipulador de clique em cada célula
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        // Se o jogo não estiver ativo OU a célula já estiver preenchida, ignore o clique
        if (!isGameActive || boardState[index] !== '') {
            return;
        }
        
        handleCellPlayed(cell, index);
    });
});

// 2. Botão de Reiniciar Partida (mantém placar)
restartButton.addEventListener('click', restartGame);

// 3. Botão de Zerar Placar
resetScoreButton.addEventListener('click', resetScore);

// --- Inicialização ---
updateScoreDisplay(); // Garante que o placar inicial seja 0-0
statusMessage.textContent = `Vez do Jogador ${currentPlayer}`;