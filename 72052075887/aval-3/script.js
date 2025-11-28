// ========================================================
// Lógica JavaScript
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para os Cards (clique em qualquer lugar do card)
    const postCards = document.querySelectorAll('.cartoon-card');
    
    postCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardId = card.id;
            console.log(`Card com ID "${cardId}" foi clicado! Abrindo post...`);
            // Aqui você adicionaria a lógica para redirecionar ou abrir um modal
            
            // Exemplo de Feedback Visual temporário
            card.style.backgroundColor = '#ffeeaa'; // Amarelo vibrante
            setTimeout(() => {
                card.style.backgroundColor = 'white'; // Retorna ao normal
            }, 500);
        });
    });


    // 2. Lógica para os Itens de Navegação
    const navItems = document.querySelectorAll('#nav-menu a');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o link de recarregar a página
            const navTarget = item.getAttribute('data-nav');
            console.log(`Navegando para a seção: "${navTarget}"`);
            
            // Exemplo de Feedback Visual no Console
            alert(`Você clicou em "${navTarget}"!`);
        });
    });

    console.log("WB Retrô Toon: Scripts carregados! Pronto para a diversão!");
});