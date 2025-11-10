const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let gameOver = false;

// --- Player (Jogador) ---
const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 30,
    height: 30,
    speed: 5,
    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
        // Prevenir que o jogador saia da tela
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    }
};

// --- Controle de Entrada (Teclado) ---
const keys = {
    ArrowLeft: false,
    ArrowRight: false
};

document.addEventListener('keydown', (event) => {
    if (event.key in keys) keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    if (event.key in keys) keys[event.key] = false;
});

// --- Game Loop (Loop Principal do Jogo) ---
function gameLoop() {
    if (gameOver) {
        // Lógica de Game Over aqui (desenhar texto, botão de reiniciar, etc.)
        return;
    }

    // 1. Limpar a tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Atualizar o estado do jogo
    if (keys.ArrowLeft) player.move(-player.speed, 0);
    if (keys.ArrowRight) player.move(player.speed, 0);

    // *Aqui você adicionaria a lógica para inimigos, balas, colisões, etc.*

    // 3. Desenhar elementos na tela
    player.draw();

    // Continuar o loop na próxima animação frame
    requestAnimationFrame(gameLoop);
}

// Iniciar o jogo
gameLoop();
