// Configuração do Canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// --- Variáveis do Jogo ---
let score = 0;

// --- Objeto do Jogador (Nave) ---
const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 40,
    height: 40,
    color: '#00ff00', // Verde
    speed: 5,
    dx: 0 // Direção horizontal (para movimento)
};

// --- Arrays de Elementos ---
const bullets = []; // Tiros disparados
const enemies = []; // Inimigos (alvos)

// --- Funções do Jogo ---

// Desenha o Jogador
function drawPlayer() {
    ctx.fillStyle = player.color;
    // Desenha um triângulo (representando a nave)
    ctx.beginPath();
    ctx.moveTo(player.x, player.y - player.height / 2); // Ponta superior
    ctx.lineTo(player.x - player.width / 2, player.y + player.height / 2); // Ponta inferior esquerda
    ctx.lineTo(player.x + player.width / 2, player.y + player.height / 2); // Ponta inferior direita
    ctx.closePath();
    ctx.fill();
}

// Movimento do Jogador
function updatePlayer() {
    player.x += player.dx;

    // Manter o jogador dentro dos limites do canvas
    if (player.x < player.width / 2) {
        player.x = player.width / 2;
    }
    if (player.x > canvas.width - player.width / 2) {
        player.x = canvas.width - player.width / 2;
    }
}

// Cria um Tiro
function shoot() {
    // Tiros são círculos simples
    const bullet = {
        x: player.x,
        y: player.y - player.height / 2,
        radius: 3,
        color: '#ff00ff', // Rosa
        speed: 7
    };
    bullets.push(bullet);
}

// Desenha e Move os Tiros
function updateBullets() {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        
        // Desenha
        ctx.fillStyle = bullet.color;
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move para cima
        bullet.y -= bullet.speed;
        
        // Remove tiros que saíram da tela
        if (bullet.y < 0) {
            bullets.splice(i, 1);
            i--;
        }
    }
}

// Cria Inimigos (alvos)
function spawnEnemy() {
    // Inimigos são quadrados
    const enemy = {
        x: Math.random() * (canvas.width - 40) + 20, // Posição X aleatória
        y: -20, // Começa acima da tela
        width: 30,
        height: 30,
        color: '#ff0000', // Vermelho
        speed: Math.random() * 2 + 1 // Velocidade aleatória
    };
    enemies.push(enemy);
}

let enemySpawnInterval = setInterval(spawnEnemy, 2000); // Gera um inimigo a cada 2 segundos

// Desenha e Move os Inimigos
function updateEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        
        // Desenha
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x - enemy.width / 2, enemy.y - enemy.height / 2, enemy.width, enemy.height);
        
        // Move para baixo
        enemy.y += enemy.speed;
        
        // Se o inimigo atingir a parte inferior, FIM DE JOGO
        if (enemy.y > canvas.height + enemy.height / 2) {
            alert(`Game Over! Pontuação final: ${score}`);
            document.location.reload(); // Recarrega a página para reiniciar
            return;
        }
    }
}

// Detecção de Colisão
function checkCollisions() {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        
        for (let j = 0; j < enemies.length; j++) {
            const enemy = enemies[j];
            
            // Lógica de colisão simples (círculo vs quadrado)
            const dist = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);
            
            if (dist < enemy.width / 2 + bullet.radius) {
                // Colisão!
                
                // 1. Aumenta a pontuação
                score += 10; 
                
                // 2. Remove o tiro e o inimigo
                bullets.splice(i, 1);
                enemies.splice(j, 1);
                
                // Ajusta os índices de loop
                i--;
                j--;
                break; // Sai do loop de inimigos e vai para o próximo tiro
            }
        }
    }
}

// Desenha a Pontuação
function drawScore() {
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.fillText(`Pontuação: ${score}`, 10, 30);
}

// --- Loop Principal do Jogo ---
function gameLoop() {
    // 1. Limpa o canvas a cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Atualiza Posições
    updatePlayer();
    updateBullets();
    updateEnemies();

    // 3. Verifica Colisões
    checkCollisions();

    // 4. Desenha Elementos
    drawPlayer();
    drawScore();

    // Chama o próximo frame
    requestAnimationFrame(gameLoop);
}

// --- Controles de Eventos (Teclado) ---

// Mapeia as teclas para as ações
document.addEventListener('keydown', (e) => {
    // Esquerda
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        player.dx = -player.speed;
    } 
    // Direita
    else if (e.key === 'ArrowRight' || e.key === 'd') {
        player.dx = player.speed;
    }
    // Espaço para Atirar
    else if (e.key === ' ' || e.key === 'Spacebar') {
        shoot();
    }
});

// Para o movimento quando a tecla é solta
document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'ArrowRight' || e.key === 'd') {
        player.dx = 0;
    }
});

// Inicia o jogo
gameLoop();