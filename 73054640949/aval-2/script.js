/**
 * =========================================================
 * JAVASCRIPT PRINCIPAL - Design Studio Pro
 * =========================================================
 * Foco em Acessibilidade (ARIA) e Performance (Intersection Observer)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Variáveis DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section');

    // =========================================================
    // 2. CONTROLE DO MENU RESPONSIVO (TOGGLE)
    // =========================================================

    /**
     * Alterna a visibilidade da navegação e o estado ARIA.
     */
    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        
        // Alterna o atributo 'aria-expanded' para refletir o estado atual
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Alterna uma classe CSS que controla a visibilidade (ex: no CSS: .main-nav.is-open { display: flex; })
        mainNav.classList.toggle('is-open');

        // Impede a rolagem do corpo quando o menu está aberto em mobile
        document.body.classList.toggle('no-scroll', !isExpanded);
    };

    menuToggle.addEventListener('click', toggleMenu);

    /**
     * Fecha o menu quando um link é clicado (útil em mobile).
     */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });


    // =========================================================
    // 3. SCROLL SUAVE PARA LINKS ÂNCORA
    // =========================================================

    /**
     * Função para rolagem suave ao clicar em links âncora internos.
     * Usando a API nativa 'scroll-behavior: smooth' no CSS é o método
     * mais moderno, mas este é um fallback ou reforço para compatibilidade.
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Verifica se o link não é o link de compartilhamento (ex: #)
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Opções de scroll: 'smooth' é nativo e performático
                    window.scrollTo({
                        top: targetElement.offsetTop - (document.querySelector('.main-header').offsetHeight), // Subtrai altura do header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // =========================================================
    // 4. OBSERVER PARA ANIMAÇÕES NA ROLAGEM (Profissional)
    // =========================================================

    /**
     * Usa Intersection Observer API para adicionar uma classe quando um elemento
     * entra na viewport, o que é mais performático que ouvir o evento 'scroll'.
     */
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Ação ocorre quando 20% da seção está visível
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe para iniciar a animação CSS (ex: fade-in)
                entry.target.classList.add('is-visible');
                // Opcional: Para executar a animação apenas uma vez
                observer.unobserve(entry.target); 
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        section.classList.add('animate-on-scroll'); // Adiciona classe base para animação
        sectionObserver.observe(section);
    });

    // É preciso adicionar as classes CSS para as animações funcionarem:
    /*
    // EXEMPLO DE CSS NECESSÁRIO:
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .animate-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
    }
    */
    
});