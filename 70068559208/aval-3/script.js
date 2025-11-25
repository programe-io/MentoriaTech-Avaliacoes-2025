document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de interatividade: Aumentar o contador de likes ao clicar no coração
    const likeButtons = document.querySelectorAll('.post-actions .fa-heart');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCountSpan = button.nextElementSibling; // O <span> com a contagem de likes
            let currentLikes = parseInt(likeCountSpan.textContent);
            
            // Simples toggle de like/deslike (poderia ser mais complexo)
            if (button.classList.contains('liked')) {
                currentLikes--;
                button.classList.remove('liked');
                button.style.color = '#ff6b6b'; // Volta à cor original
            } else {
                currentLikes++;
                button.classList.add('liked');
                button.style.color = '#ffcccc'; // Cor de like (mais claro)
            }
            likeCountSpan.textContent = currentLikes;
        });
    });

    // Você poderia adicionar mais funcionalidades aqui, como:
    // - Carregar mais posts dinamicamente ao rolar a página
    // - Abrir modais para comentários
    // - Funcionalidade para os botões de menu e busca
    // - ... e muito mais!

    console.log("Feed carregado! Desenvolvido por João Vitor.");
});