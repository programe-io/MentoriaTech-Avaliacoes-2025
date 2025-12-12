document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // 1. FUNCIONALIDADE DE TOGGLE (EXPANDIR/OCULTAR)
    // ------------------------------------------

    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        const title = article.querySelector('h3');
        const content = article.querySelector('p, div'); // Seleciona o primeiro parágrafo ou div como conteúdo

        if (title && content) {
            // Inicialmente, oculta o conteúdo.
            // O estilo deve ser definido no CSS para uma transição suave.
            content.style.display = 'none'; 
            
            // Adiciona um cursor indicando que é clicável
            title.style.cursor = 'pointer';
            
            // Adiciona um indicador visual (opcional)
            title.innerHTML += ' <span class="toggle-icon">[+]</span>';

            title.addEventListener('click', () => {
                const icon = title.querySelector('.toggle-icon');

                // Verifica o estado atual do display
                if (content.style.display === 'none') {
                    content.style.display = 'block'; // Mostra o conteúdo
                    icon.textContent = '[-]';
                } else {
                    content.style.display = 'none'; // Oculta o conteúdo
                    icon.textContent = '[+]';
                }
            });
        }
    });
    
    // ------------------------------------------
    // 2. FUNCIONALIDADE SCROLLSPY (DESTAQUE NA NAV)
    // ------------------------------------------
    
    const sections = document.querySelectorAll('main section, main aside article');
    const navLinks = document.querySelectorAll('nav a');
    
    // Define a função que verifica a posição de rolagem
    const activateLink = () => {
        let current = '';

        // Percorre todas as seções para ver qual está visível
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Offset para ativação
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        // Remove a classe ativa de todos os links
        navLinks.forEach(link => {
            link.classList.remove('active-nav');
        });

        // Adiciona a classe ativa ao link correspondente
        if (current) {
            const activeLink = document.querySelector(`nav a[href*='${current}']`);
            if (activeLink) {
                activeLink.classList.add('active-nav');
            }
        }
    };

    // Adiciona o listener de rolagem e executa a função na carga da página
    window.addEventListener('scroll', activateLink);
    activateLink(); // Executa uma vez ao carregar para definir a seção inicial
});