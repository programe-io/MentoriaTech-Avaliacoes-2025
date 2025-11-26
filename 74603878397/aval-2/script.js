document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================
    // 1. Efeito de Destaque para o Link Ativo na Navegação
    // Objetivo: Simular que o link "Início" está ativo por padrão.
    // =========================================================
    const navLinks = document.querySelectorAll('nav a');
    
    // Adiciona uma classe de 'ativo' ao primeiro link (que geralmente seria a página atual)
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active-spy');
    }

    // Opcional: Adiciona um listener para futuros cliques (para páginas reais)
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove a classe 'active-spy' de todos os links
            navLinks.forEach(item => item.classList.remove('active-spy'));
            // Adiciona a classe 'active-spy' ao link clicado
            this.classList.add('active-spy');
        });
    });

    // Você precisará adicionar o seguinte CSS em 'alaviacao.css' para o destaque funcionar:
    /*
    nav a.active-spy {
        background-color: var(--clover-yellow); 
        color: var(--text-color) !important;
    }
    */


    // =========================================================
    // 2. Mensagem Secreta no Rodapé (Easter Egg WOOHP)
    // Objetivo: Revelar uma mensagem de espionagem ao clicar no footer.
    // =========================================================
    const footer = document.querySelector('footer');
    const footerP = footer.querySelector('p');

    footer.addEventListener('click', () => {
        // Verifica se a mensagem secreta já foi revelada
        if (!footer.classList.contains('revealed')) {
            const originalText = footerP.textContent;
            
            // Texto da missão secreta
            footerP.textContent = '🕵️‍♀️ Missão Recebida: Seu próximo alvo é a WOOHP Base Secreta! 🚨';
            
            footer.style.cursor = 'default';
            footer.classList.add('revealed');

            // Volta ao texto original após 5 segundos
            setTimeout(() => {
                footerP.textContent = originalText;
                footer.classList.remove('revealed');
                footer.style.cursor = 'pointer';
            }, 5000);
        }
    });

    // =========================================================
    // 3. Efeito de Log de Missão na Galeria (Aside)
    // Objetivo: Ao clicar nas imagens menores, mostra um alerta.
    // =========================================================
    const galleryImages = document.querySelectorAll('aside img');

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            alert(`[Log da Missão]: Imagem ${index + 1} da galeria foi inspecionada. Transmitindo informações...`);
            // Você pode adicionar um efeito visual temporário aqui, como uma borda verde
            img.style.border = '3px solid var(--sam-green)';
            setTimeout(() => {
                img.style.border = 'none';
            }, 500);
        });
        img.style.cursor = 'pointer'; // Indica que é clicável
    });

});