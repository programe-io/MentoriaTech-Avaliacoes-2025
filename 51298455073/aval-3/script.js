const neve = document.getElementById('neve');

// Função para criar flocos de neve
function criarFloco() {
    const floco = document.createElement('div');
    floco.classList.add('flocos');
    
    // Posição horizontal aleatória
    floco.style.left = Math.random() * window.innerWidth + 'px';
    
    // Tamanho aleatório
    const tamanho = 5 + Math.random() * 10;
    floco.style.width = tamanho + 'px';
    floco.style.height = tamanho + 'px';
    
    // Velocidade de queda aleatória
    floco.style.animationDuration = (3 + Math.random() * 5) + 's';
    
    neve.appendChild(floco);
    
    // Remove o floco após a animação
    setTimeout(() => {
        floco.remove();
    }, 8000);
}

// Criar flocos de neve continuamente
setInterval(criarFloco, 200);
