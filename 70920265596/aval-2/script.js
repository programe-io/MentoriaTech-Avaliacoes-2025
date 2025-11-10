// Aguarda o DOM carregar completamente antes de adicionar o listener
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Seleciona o botão pelo ID
    const ctaButton = document.getElementById('cta-button');

    // Adiciona um "ouvinte de evento" para o clique
    ctaButton.addEventListener('click', () => {
        // Exibe uma caixa de alerta simples
        alert('Os servidores de Free Fire estão operacionais! Prepare-se para o BOOYAH!');
    });
});
