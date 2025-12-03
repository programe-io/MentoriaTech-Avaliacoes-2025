document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade do Menu Móvel (Hamburger)
    const menuButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-navigation');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            // Alterna entre as classes Tailwind para abrir/fechar o menu
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('nav-menu-closed');
            navMenu.classList.toggle('nav-menu-open');

            // Troca o ícone do botão (Hamburger <-> X)
            const icon = menuButton.querySelector('svg');
            if (navMenu.classList.contains('flex')) {
                // Menu aberto: Exibe o 'X'
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
            } else {
                // Menu fechado: Exibe o 'Hamburger'
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
            }
        });
    }

    // 2. Aplicar a Animação de Brilho no Título
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        mainTitle.classList.add('title-glow');
    }
});