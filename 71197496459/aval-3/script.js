document.addEventListener('DOMContentLoaded', () => {
    const descriptionElement = document.getElementById('card-description');
    const toggleButton = document.getElementById('toggle-info-btn');
    
    // Dados para alternar
    const descriptionText = 'Horda de esqueletos traiçoeiros! Causa estrago, mas facilmente distraído.';
    const statsText = 'Estatísticas: Dano por segundo: 67 | Pontos de Vida: 67 | Alvos: Terra | Velocidade: Rápida';
    
    let isDescription = true;

    // Função que será executada ao clicar no botão
    toggleButton.addEventListener('click', () => {
        if (isDescription) {
            // Mudar para as estatísticas
            descriptionElement.textContent = statsText;
            toggleButton.textContent = 'Mostrar Descrição';
        } else {
            // Mudar para a descrição
            descriptionElement.textContent = descriptionText;
            toggleButton.textContent = 'Mostrar Estatísticas';
        }
        
        // Inverte o estado
        isDescription = !isDescription;
    });
});