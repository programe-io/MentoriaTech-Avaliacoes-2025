document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. EFEITO GLOW/BRILHO NO TÍTULO PRINCIPAL ---
    
    const tituloPrincipal = document.querySelector('header h1');
    const corNeon = '#ff00ff'; // Roxo Neon
    
    if (tituloPrincipal) {
        tituloPrincipal.style.cursor = 'pointer'; // Indica que é clicável
        
        tituloPrincipal.addEventListener('click', function() {
            // Adiciona a classe 'glow-animation' que será definida no CSS
            tituloPrincipal.classList.add('glow-animation');
            
            // Remove a classe após 0.5 segundos para permitir que a animação rode novamente
            setTimeout(() => {
                tituloPrincipal.classList.remove('glow-animation');
            }, 500);
        });
    }

    // --- 2. EFEITO VIBRAR (SHAKE) NOS ARTIGOS ---

    const artigos = document.querySelectorAll('main article');

    artigos.forEach(article => {
        // Torna o artigo clicável (ou tocável em mobile)
        article.style.cursor = 'pointer';

        article.addEventListener('click', function(e) {
            // Evita que o clique em um link dentro do artigo dispare a vibração
            if (e.target.tagName !== 'A') {
                // Adiciona a classe 'shake-animation' (definida no CSS)
                article.classList.add('shake-animation');
                
                // Remove a classe após 0.4 segundos
                setTimeout(() => {
                    article.classList.remove('shake-animation');
                }, 400); 
            }
        });
    });

    // --- 3. EFEITO DE HOVER EM NEON NOS LINKS DE NAVEGAÇÃO ---

    const navLinks = document.querySelectorAll('nav a');
    const corHover = '#00ffff'; // Ciano Neon
    
    navLinks.forEach(link => {
        // Adiciona um efeito de sombra neon ao passar o mouse
        link.addEventListener('mouseenter', function() {
            link.style.textShadow = `0 0 8px ${corHover}`;
        });

        // Remove o efeito ao tirar o mouse
        link.addEventListener('mouseleave', function() {
            link.style.textShadow = 'none';
        });
    });
});