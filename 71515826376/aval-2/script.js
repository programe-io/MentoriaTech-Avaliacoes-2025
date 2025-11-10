// --- JavaScript: game.js ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos do Jogo
    const hero = document.getElementById('hero');
    const groundHeight = 50; // Altura do chão (deve coincidir com o CSS)
    const containerWidth = 800;
    let heroX = 50; // Posição X inicial
    let heroY = groundHeight; // Posição Y inicial (acima do chão)
    let isJumping = false;
    let isFalling = false;
    const speed = 5; // Velocidade de movimento horizontal
    const jumpVelocity = 15; // Velocidade inicial do pulo
    let velocityY = 0; // Velocidade vertical (gravidade)
    const gravity = 0.8; // Força da gravidade

    // 2. Função de Renderização (Atualiza a Posição na Tela)
    function render() {
        hero.style.left = heroX + 'px';
        hero.style.bottom = heroY + 'px';
    }

    // 3. Lógica de Pulo e Gravidade
    function updateGravity() {
        if (heroY > groundHeight || isJumping) {
            isFalling = true; // Está no ar
            velocityY -= gravity;
            heroY += velocityY;

            // Colisão com o chão
            if (heroY <= groundHeight) {
                heroY = groundHeight;
                velocityY = 0;
                isJumping = false;
                isFalling = false;
                hero.classList.remove('jumping');
            }
        }
    }

    // Função para Iniciar o Pulo
    function jump() {
        if (!isJumping && !isFalling) {
            isJumping = true;
            velocityY = jumpVelocity;
            hero.classList.add('jumping');
        }
    }

    // 4. Tratamento de Teclas
    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
            case 'a':
                heroX = Math.max(0, heroX - speed); // Move esquerda, limitado a 0
                break;
            case 'ArrowRight':
            case 'd':
                // Limita o movimento à borda direita (Largura do Contêiner - Largura do Herói)
                heroX = Math.min(containerWidth - hero.offsetWidth, heroX + speed);
                break;
            case ' ': // Tecla de Espaço para Pular
            case 'ArrowUp':
            case 'w':
                jump();
                break;
        }
        render(); // Atualiza a posição imediatamente após movimento horizontal
    });

    // 5. Loop Principal do Jogo (Game Loop)
    function gameLoop() {
        updateGravity(); // Aplica gravidade a cada frame
        render(); // Renderiza a nova posição
        requestAnimationFrame(gameLoop); // Chama a si mesmo para o próximo frame
    }

    // Início
    render();
    gameLoop();
});