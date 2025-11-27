document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de seguir
    const followButtons = document.querySelectorAll('.follow-btn');

    followButtons.forEach(button => {
        // Inicializa o estado do botão
        let isFollowing = false;
        
        // Define o texto inicial
        button.textContent = 'Seguir';
        
        // Adiciona o evento de clique
        button.addEventListener('click', () => {
            if (isFollowing) {
                // Se estiver seguindo, para de seguir
                button.textContent = 'Seguir';
                button.style.backgroundColor = 'var(--blue-link)';
                button.style.color = 'white';
                console.log(`Parou de seguir o perfil: ${button.closest('.profile-card').querySelector('.profile-username').textContent}`);
            } else {
                // Se não estiver seguindo, começa a seguir
                button.textContent = 'Seguindo';
                button.style.backgroundColor = 'transparent';
                button.style.color = 'var(--primary-text-color)';
                button.style.border = '1px solid var(--border-color)';
                console.log(`Começou a seguir o perfil: ${button.closest('.profile-card').querySelector('.profile-username').textContent}`);
            }
            // Inverte o estado
            isFollowing = !isFollowing;
        });
    });
});