// Arquivo: menu-toggle.js (ou dentro de uma tag <script> no final do body)

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const menuNav = document.getElementById('menu-nav');

    if (menuButton && menuNav) {
        menuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' na navegação
            menuNav.classList.toggle('hidden');
        });
    }
});