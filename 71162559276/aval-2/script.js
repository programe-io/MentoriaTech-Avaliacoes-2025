// Constantes e Variáveis do Jogo
const GAME_CONTAINER = document.getElementById('game-container');
const PLAYER = document.getElementById('player');
const PLAYER_SIZE = 30;
const PLAYER_SPEED = 5; // Velocidade de movimento
const BULLET_SPEED = 10; // Velocidade da bala
const BULLET_SIZE = 8;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Estado do jogador
let playerX = 385;
let playerY = GAME_HEIGHT - PLAYER_SIZE - 20;

// Estado de teclas pressionadas
let keys = { w: false, a: false, s: false, d: false };

// Lista de balas ativas
let bullets = [];

// Função para atualizar a posição do jogador
function updatePlayerPosition() {
    // Calcula o novo X
    if (keys.a) playerX -= PLAYER_SPEED;
    if (keys.d) playerX += PLAYER_SPEED;
    
    // Calcula o novo Y
    if (keys.w) playerY -= PLAYER_SPEED;
    if (keys.s) playerY += PLAYER_SPEED;

    // Limita o movimento dentro do contêiner do jogo
    playerX = Math.max(0, Math.min(GAME_WIDTH - PLAYER_SIZE, playerX));
    playerY = Math.max(0, Math.min(GAME_HEIGHT - PLAYER_SIZE, playerY));

    // Aplica a nova posição ao elemento HTML
    PLAYER.style.left = playerX + 'px';
    PLAYER.style.top = playerY + 'px';
}

// Classe (ou Objeto) para representar uma Bala
class Bullet {
    constructor(x, y) {
        this.element = document.createElement('div');
        this.element.className = 'bullet';
        this.x = x;
        this.y = y;
        
        // Posição inicial (centro da arma/jogador)
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        
        GAME_CONTAINER.appendChild(this.element);
    }
    
    update() {
        // A bala se move para cima (eixo Y negativo)
        this.y -= BULLET_SPEED;
        this.element.style.top = this.y + 'px';
        
        // Retorna true se a bala saiu da tela
        return this.y < -BULLET_SIZE;
    }
    
    remove() {
        this.element.remove();
    }
}


// Função para criar e adicionar uma bala
function fireBullet() {
    // Inicia a bala no centro superior do jogador
    const startX = playerX + (PLAYER_SIZE / 2) - (BULLET_SIZE / 2);
    const startY = playerY;
    
    const newBullet = new Bullet(startX, startY);
    bullets.push(newBullet);
}

// Loop principal do jogo (chamado a cada frame)
function gameLoop() {
    updatePlayerPosition();
    
    // Atualiza a posição e gerencia as balas
    for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        const offScreen = bullet.update();
        
        if (offScreen) {
            bullet.remove();
            bullets.splice(i, 1); // Remove a bala da lista
        }
        // *Aqui seria o local para checar colisões com inimigos*
    }

    // Chama o loop novamente para o próximo frame
    requestAnimationFrame(gameLoop);
}

// --- Eventos de Teclado ---

// Captura a tecla pressionada
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key in keys) {
        keys[key] = true;
    } else if (key === ' ') { // Espaço para atirar
        // Evita que o espaço role a página
        e.preventDefault(); 
        fireBullet();
    }
});

// Captura a tecla solta
document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (key in keys) {
        keys[key] = false;
    }
});

// Inicia o jogo
gameLoop();