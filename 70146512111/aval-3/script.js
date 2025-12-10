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

    // Nova funcionalidade: Clicar no botão "Adicionar Post"
    const addPostBtn = document.querySelector('.add-post-btn');
    if (addPostBtn) {
        addPostBtn.addEventListener('click', () => {
            alert('Funcionalidade de adicionar novo post (com imagem) seria implementada aqui!');
            console.log('Botão "Adicionar Post" clicado.');
            // Aqui você implementaria a lógica para abrir um formulário de upload
            // ou redirecionar para uma página de criação de post.
        });
    }

    console.log("Feed carregado! Desenvolvido por João Vitor.");
});