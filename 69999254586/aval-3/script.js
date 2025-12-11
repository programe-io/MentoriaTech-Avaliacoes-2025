document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalidade de Curtir/Descurtir
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Pega o texto atual do botão (ex: "Curtir (0)")
            let currentText = button.textContent;
            // Extrai o número de curtidas usando Regex
            let match = currentText.match(/\((\d+)\)/);
            let currentLikes = match ? parseInt(match[1]) : 0;
            
            // Verifica se o botão já está "curtido" (usando uma classe para rastrear o estado)
            const isLiked = button.classList.contains('liked');

            if (isLiked) {
                // Descurtir
                currentLikes--;
                button.classList.remove('liked');
                button.textContent = `Curtir (${currentLikes})`;
                button.style.backgroundColor = 'white';
                button.style.color = 'var(--purple-primary)';

            } else {
                // Curtir
                currentLikes++;
                button.classList.add('liked');
                button.textContent = `Descurtir (${currentLikes})`;
                // Altera o estilo para indicar o estado de curtido (roxo preenchido)
                button.style.backgroundColor = 'var(--purple-primary)';
                button.style.color = 'white';
            }
        });
    });

    // Observação: Para uma aplicação real, o contador de curtidas
    // e o estado `liked` deveriam ser persistidos em um servidor/API.
});

// A variável --purple-primary usada no JS deve ser definida no seu CSS
// Se precisar usar a variável aqui, você pode fazer:
// const purplePrimary = getComputedStyle(document.documentElement).getPropertyValue('--purple-primary').trim();