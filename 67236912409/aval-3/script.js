// Ação simples: Alerta ao clicar em um Card
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.cursor = 'pointer'; // Adiciona cursor de clique

        card.addEventListener('click', () => {
            const author = card.querySelector('.card-author').textContent;
            // Exemplo de como obter o primeiro parágrafo
            const contentSnippet = card.querySelector('.card-content p').textContent.substring(0, 30) + '...';
            
            alert(`Você clicou no post de viagem de ${author}!\nDetalhe: "${contentSnippet}"`);
        });
    });
});