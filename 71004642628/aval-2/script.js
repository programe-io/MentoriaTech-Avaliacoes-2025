// --- LÓGICA DO JOGO DE AÇÃO ---

// Elementos do DOM
const gameContainer = document.getElementById('game-container');
const player = document.getElementById('player');
const scoreDisplay = document.getElementById('score-value');
const healthDisplay = document.getElementById('health-value');

// Variáveis de Estado do Jogo
let score = 0;
let health = 100;
const playerSpeed = 5;
const bulletSpeed = 10;
let playerX = 400; // Posição X inicial
let playerY = 300; // Posição Y inicial
const keys = {}; // Objeto para rastrear teclas pressionadas

// ----------------------------------------------------
// 1. FUNÇÕES DE MOVIMENTO
// ----------------------------------------------------

// Função para atualizar a posição do jogador na tela
function updatePlayerPosition() {
    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}

// Lógica de Movimento (Função de Loop)
function gameLoop() {
    // A cada frame, verifica quais teclas estão pressionadas

    // Movimento Vertical
    if (keys['w'] || keys['W'] || keys['ArrowUp']) {
        playerY = Math.max(0, playerY - playerSpeed); // Não deixa sair do topo (0)
    }
    if (keys['s'] || keys['S'] || keys['ArrowDown']) {
        // Não deixa sair da base (altura do container - altura do player)
        playerY = Math.min(gameContainer.clientHeight - player.offsetHeight, playerY + playerSpeed);
    }

    // Movimento Horizontal
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
        playerX = Math.max(0, playerX - playerSpeed); // Não deixa sair da esquerda (0)
    }
    if (keys['d'] || keys['D'] || keys['ArrowRight']) {
        // Não deixa sair da direita (largura do container - largura do player)
        playerX = Math.min(gameContainer.clientWidth - player.offsetWidth, playerX + playerSpeed);
    }

    updatePlayerPosition();
    // Requisita o próximo frame do loop
    requestAnimationFrame(gameLoop);
}

// ----------------------------------------------------
// 2. FUNÇÕES DE TIRO
// ----------------------------------------------------

function shoot() {
    // 1. Cria o elemento projétil
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    gameContainer.appendChild(bullet);

    // 2. Define a posição inicial do projétil (partindo do centro do jogador)
    let bulletX = playerX + (player.offsetWidth / 2) - 2.5; // -2.5 para centralizar (5px de largura)
    let bulletY = playerY + (player.offsetHeight / 2) - 2.5;

    bullet.style.left = `${bulletX}px`;
    bullet.style.top = `${bulletY}px`;

    // 3. Efeito visual de disparo
    player.style.backgroundColor = '#ff0000'; // Muda a cor para dar feedback
    setTimeout(() => {
        player.style.backgroundColor = '#00ff00';
    }, 100);

    // 4. Lógica de movimento do projétil (exemplo: atirar sempre para cima)
    const bulletInterval = setInterval(() => {
        bulletY -= bulletSpeed; // Move o projétil

        // Remove o projétil se sair do mapa
        if (bulletY < 0) {
            clearInterval(bulletInterval);
            gameContainer.removeChild(bullet);
            // Simula acerto: se o tiro sair do mapa, ganha-se um ponto
            updateScore(10);
            return;
        }

        bullet.style.top = `${bulletY}px`;
    }, 20); // Atualiza a cada 20 milissegundos
}

// ----------------------------------------------------
// 3. FUNÇÕES DE HUD E PONTUAÇÃO
// ----------------------------------------------------

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
}

function updateHealth(damage) {
    health -= damage;
    health = Math.max(0, health); // Saúde não pode ser negativa
    healthDisplay.textContent = health;

    if (health === 0) {
        alert("Game Over! Sua pontuação final: " + score);
        // Reiniciar o jogo ou parar o loop aqui
    }
}

// ----------------------------------------------------
// 4. GESTÃO DE EVENTOS DE TECLADO
// ----------------------------------------------------

// Keydown: Registra a tecla como pressionada
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;

    // Se a tecla pressionada for ESPAÇO, atira uma vez (e.repeat evita tiros contínuos)
    if (e.key === ' ' && !e.repeat) {
        shoot();
    }
});

// Keyup: Registra a tecla como liberada
document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});


// ----------------------------------------------------
// 5. INICIALIZAÇÃO DO JOGO
// ----------------------------------------------------

// Define a posição inicial e inicia o loop principal
updatePlayerPosition();
gameLoop();

// Teste inicial: perde 10 de vida
updateHealth(10);