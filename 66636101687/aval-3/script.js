document.addEventListener('DOMContentLoaded', () => {
    const webButton = document.getElementById('web-button');
    const webArea = document.getElementById('web-effect-area');

    webButton.addEventListener('click', () => {
        // Obtém a posição e o tamanho do botão
        const buttonRect = webButton.getBoundingClientRect();
        const startX = buttonRect.left + buttonRect.width / 2;
        const startY = buttonRect.top + buttonRect.height / 2;
        
        // Remove quaisquer teias antigas antes de criar novas
        webArea.innerHTML = '';
        
        // Cria 5 a 10 linhas de teia
        const numberOfLines = 8;
        
        for (let i = 0; i < numberOfLines; i++) {
            // 1. Cria o elemento div para a linha
            const line = document.createElement('div');
            line.classList.add('web-line');
            
            // 2. Define a posição inicial no centro do botão
            line.style.left = `${startX}px`;
            line.style.top = `${startY}px`;
            
            // 3. Define um ângulo aleatório (0 a 360 graus)
            const angle = Math.random() * 360;
            
            // 4. Define um comprimento e atraso aleatórios
            const length = Math.random() * 300 + 100; // Comprimento entre 100px e 400px
            const delay = i * 0.05;

            // 5. Aplica a rotação e o comprimento (inicialmente 0 para a animação)
            line.style.transform = `rotate(${angle}deg) scaleX(0)`; // Começa sem comprimento (scaleX(0))
            line.style.transitionDelay = `${delay}s`;
            
            webArea.appendChild(line);

            // 6. Força o reflow para garantir que a transição funcione
            // Este truque garante que o navegador renderize o estado inicial (scaleX(0))
            void line.offsetWidth;

            // 7. Define o estado final (animação)
            // A linha se estende até o comprimento total
            line.style.transform = `rotate(${angle}deg) scaleX(${length / 3}) translateX(3px)`; 
            line.style.opacity = 0; // Faz com que a linha comece a desaparecer após esticar
            
            // Remove o elemento após a animação para limpar o DOM
            setTimeout(() => {
                line.remove();
            }, 1000 + (delay * 1000)); 
        }
    });
});