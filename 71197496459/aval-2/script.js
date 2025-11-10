// --- JavaScript: game_mystery.js ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos e Constantes do Jogo
    const player = document.getElementById('player');
    const gameContainer = document.getElementById('game-container');
    const logList = document.getElementById('log-list');
    const interactables = document.querySelectorAll('.interactable');

    // Dimensões
    const containerRect = gameContainer.getBoundingClientRect();
    const playerWidth = 30;
    const playerHeight = 50;

    // Estado do Jogador
    let playerPos = {
        x: containerRect.width / 2 - playerWidth / 2,
        y: containerRect.height - 10 - playerHeight
    };
    const speed = 10;
    let inventory = [];

    // 2. Função de Renderização
    function renderPlayer() {
        player.style.left = playerPos.x + 'px';
        player.style.top = playerPos.y + 'px';
    }

    // 3. Lógica de Interação com Pistas
    function checkInteraction() {
        interactables.forEach(item => {
            if (item.classList.contains('found')) return; // Pista já coletada

            const itemRect = item.getBoundingClientRect();
            const playerRect = player.getBoundingClientRect();

            // Lógica de colisão 2D simplificada
            if (playerRect.left < itemRect.right &&
                playerRect.right > itemRect.left &&
                playerRect.top < itemRect.bottom &&
                playerRect.bottom > itemRect.top) {

                // Acionador: Se o jogador estiver perto, adiciona a pista
                collectClue(item);
            }
        });
    }

    function collectClue(item) {
        const clueId = item.id;
        const clueText = item.getAttribute('data-clue');

        if (!inventory.includes(clueId)) {
            inventory.push(clueId);
            item.classList.add('found');
            item.style.display = 'none'; // Remove a pista da tela

            updateLog(`Nova Pista Encontrada: ${clueText}`);
            console.log(`Pista Coletada: ${clueText}`);
            
            // Lógica de Vitoria/Conclusão do Mistério (Exemplo)
            if (inventory.length === interactables.length) {
                updateLog("MISTÉRIO RESOLVIDO! Você encontrou todas as pistas.", true);
            }
        }
    }

    function updateLog(message, isFinal = false) {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        if (isFinal) {
             listItem.classList.add('clue'); // Usa a cor verde neon
             listItem.style.fontWeight = 'bold';
        }
        logList.prepend(listItem); // Adiciona no topo do log
    }

    // 4. Tratamento de Teclas para Movimento (Ação)
    document.addEventListener('keydown', (event) => {
        let moved = false;
        switch (event.key) {
            case 'ArrowLeft':
            case 'a':
                playerPos.x = Math.max(0, playerPos.x - speed);
                moved = true;
                break;
            case 'ArrowRight':
            case 'd':
                playerPos.x = Math.min(containerRect.width - playerWidth, playerPos.x + speed);
                moved = true;
                break;
            case 'ArrowUp':
            case 'w':
                playerPos.y = Math.max(0, playerPos.y - speed);
                moved = true;
                break;
            case 'ArrowDown':
            case 's':
                playerPos.y = Math.min(containerRect.height - playerHeight, playerPos.y + speed);
                moved = true;
                break;
        }

        if (moved) {
            renderPlayer();
            checkInteraction(); // Verifica interação após cada movimento
        }
    });

    // 5. Inicialização
    renderPlayer();
    updateLog("A investigação começou. Encontre as pistas!");
});