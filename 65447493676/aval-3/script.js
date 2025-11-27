document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de curtir (coração)
    const likeButtons = document.querySelectorAll('.post-like-btn');

    // 2. Itera sobre cada botão para adicionar o evento de clique
    likeButtons.forEach(button => {
        button.addEventListener('click', handleLikeClick);
    });

    /**
     * Função que lida com o clique no botão de curtir.
     * @param {Event} event - O evento de clique.
     */
    function handleLikeClick(event) {
        const button = event.currentTarget; // O ícone de coração clicado
        const post = button.closest('.post'); // Encontra a postagem pai
        const likesCountElement = post.querySelector('.likes-count'); // O elemento que mostra a contagem

        // Obtém a contagem atual de curtidas (ex: "12 curtidas")
        let currentLikesText = likesCountElement.textContent;
        // Extrai apenas o número
        let currentLikes = parseInt(currentLikesText.split(' ')[0]);

        // Verifica se a postagem já está curtida
        const isLiked = button.classList.contains('liked');

        if (isLiked) {
            // Se já estiver curtida, descurtir:
            // 1. Remove a classe 'liked' para mudar a cor/estilo
            button.classList.remove('liked');
            // 2. Atualiza o ícone (volta para contorno 'far')
            button.classList.add('far');
            button.classList.remove('fas');
            // 3. Diminui a contagem
            currentLikes--;
        } else {
            // Se não estiver curtida, curtir:
            // 1. Adiciona a classe 'liked' para mudar a cor/estilo
            button.classList.add('liked');
            // 2. Atualiza o ícone (muda para sólido 'fas')
            button.classList.remove('far');
            button.classList.add('fas');
            // 3. Aumenta a contagem
            currentLikes++;
        }

        // 4. Atualiza o texto da contagem na tela
        likesCountElement.textContent = `${currentLikes} curtidas`;
    }
});