document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('a');

    // Função para alternar a visibilidade do menu
    function toggleMenu() {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Atualiza o atributo aria-expanded para acessibilidade
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    }

    // Event listener no botão de menu
    menuToggle.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em um link (útil em mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Se estiver em modo mobile (largura menor que 768px, conforme CSS media query)
            if (window.innerWidth <= 768) {
                // Fecha o menu se estiver aberto
                if (mainNav.classList.contains('active')) {
                     toggleMenu();
                }
            }
        });
    });
});