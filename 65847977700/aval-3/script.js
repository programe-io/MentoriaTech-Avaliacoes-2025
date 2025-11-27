// A função garante que o script só rode após o HTML ser carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona TODOS os botões de curtir na página
    const likeButtons = document.querySelectorAll('.like-btn');

    // Percorre cada botão encontrado
    likeButtons.forEach(button => {
        
        // Adiciona o evento de clique a cada botão
        button.addEventListener('click', () => {
            
            // 1. Identifica a postagem pelo seu data-post-id (1, 2, ou 3)
            const postId = button.getAttribute('data-post-id');
            
            // 2. Encontra o elemento de contagem de curtidas correspondente (ex: #likes-1)
            const likeCountElement = document.getElementById(`likes-${postId}`);
            
            // 3. Pega o número atual de curtidas
            let currentLikes = parseInt(likeCountElement.textContent) || 0;
            
            // 4. Lógica de Curtir/Descurtir
            if (button.classList.contains('liked')) {
                // Se já curtido: descurtir
                currentLikes--;
                button.classList.remove('liked');
                button.textContent = '❤️'; // Coração vazio
            } else {
                // Se não curtido: curtir
                currentLikes++;
                button.classList.add('liked');
                button.textContent = '💖'; // Coração cheio
            }
            
            // 5. Atualiza o número de curtidas na tela
            likeCountElement.textContent = currentLikes;
        });
    });
});