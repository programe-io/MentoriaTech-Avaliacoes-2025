/* Simulação de um arquivo script.js */

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos de card dentro da main
    const cards = document.querySelectorAll('main > div');

    cards.forEach(card => {
        // Adiciona um evento para quando o mouse entra no card
        card.addEventListener('mouseenter', () => {
            // Adiciona uma sombra mais intensa e rosada (exemplo de classe)
            card.classList.add('shadow-pink-500/50');
            card.classList.add('shadow-xl'); 
            card.classList.remove('shadow-2xl');
        });

        // Adiciona um evento para quando o mouse sai do card
        card.addEventListener('mouseleave', () => {
            // Remove as classes de sombra adicionadas e restaura a original
            card.classList.remove('shadow-pink-500/50');
            card.classList.remove('shadow-xl');
            card.classList.add('shadow-2xl');
        });
    });
});