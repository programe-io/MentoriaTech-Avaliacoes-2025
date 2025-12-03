// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Rolagem Suave (Smooth Scroll)
    // Seleciona todos os links da navegação que apontam para uma seção (ID)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link (salto instantâneo)
            e.preventDefault();

            // Pega o ID da seção de destino (ex: #tyson)
            const targetId = this.getAttribute('href');

            // Encontra o elemento de destino
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Inicia a rolagem no topo do elemento
                });
            }
        });
    });
});