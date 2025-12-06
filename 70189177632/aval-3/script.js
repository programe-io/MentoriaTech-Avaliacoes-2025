document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de curtir
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Pega o estado atual (curtido ou não)
            let isLiked = button.getAttribute('data-liked') === 'true';
            
            // Encontra o contador de curtidas
            const likeCountSpan = button.querySelector('.like-count');
            let currentLikes = parseInt(likeCountSpan.textContent);

            if (isLiked) {
                // Se já estava curtido, descurtir
                currentLikes -= 1;
                button.setAttribute('data-liked', 'false');
            } else {
                // Se não estava curtido, curtir
                currentLikes += 1;
                button.setAttribute('data-liked', 'true');
            }

            // Atualiza o texto e a aparência
            likeCountSpan.textContent = currentLikes;
        });
    });
});