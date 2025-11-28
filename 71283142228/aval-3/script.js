/**
 * ARQUIVO: script.js
 */

// 1. Lógica do Menu Mobile
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Verifica se os elementos existem antes de tentar manipulá-los
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'active' para mostrar/esconder o menu
            navMenu.classList.toggle('active');
            
            // Alterna o ícone (opcional, mas bom para UX)
            // Se estiver ativo, mostra o 'X', se não, mostra o hambúrguer
            const iconPath = navMenu.classList.contains('active')
                ? "M6 18L18 6M6 6l12 12" // Ícone 'X'
                : "M4 6h16M4 12h16m-7 6h7"; // Ícone Hambúrguer
            
            menuButton.querySelector('path').setAttribute('d', iconPath);
        });
    }
    
    // 2. Lógica para mudar a cor do Header ao rolar
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            // Se o scroll vertical for maior que 50 pixels
            if (window.scrollY > 50) {
                // Adiciona uma sombra extra ao rolar para dar destaque
                header.classList.add('shadow-3xl'); 
                // Exemplo: header.classList.add('bg-opacity-90');
            } else {
                // Remove a sombra ao voltar ao topo
                header.classList.remove('shadow-3xl');
            }
        });
    }

    // 3. Efeito de fade-in para os cards
    const cards = document.querySelectorAll('.card');

    if (cards.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Se o card estiver visível (ou pelo menos 10% dele)
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Para o efeito rodar só uma vez
                }
            });
        }, { threshold: 0.1 });

        cards.forEach((card, index) => {
            // Estilo inicial para o fade-in
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
            observer.observe(card);
        });
    }
});