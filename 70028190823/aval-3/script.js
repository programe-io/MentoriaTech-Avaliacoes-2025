document.addEventListener('DOMContentLoaded', () => {
    const postsList = document.getElementById('posts-list');
    const addPostBtn = document.getElementById('add-post-btn');
    let postCounter = 2;

    // Função para criar um novo elemento de post
    function createPostElement(username, content) {
        const post = document.createElement('div');
        post.className = 'post';

        // Conteúdo dinâmico para o timestamp e curtidas
        const timestamp = new Date().toLocaleTimeString();
        
        post.innerHTML = `
            <div class="post-header">
                <span class="username">@${username}</span>
                <span class="timestamp">Postado às ${timestamp}</span>
            </div>
            <div class="post-content">
                <p>${content}</p>
            </div>
            <div class="post-footer">
                <button class="like-btn">Curtir (0)</button>
            </div>
        `;
        
        // Adiciona funcionalidade ao botão Curtir (simples)
        const likeBtn = post.querySelector('.like-btn');
        let likes = 0;
        likeBtn.addEventListener('click', () => {
            likes++;
            likeBtn.textContent = `Curtir (${likes})`;
        });

        return post;
    }

    // Adiciona o evento para o botão "Adicionar Novo Post"
    addPostBtn.addEventListener('click', () => {
        const newUsername = `JessicaMendes_${postCounter}`;
        const newContent = `Este é o post número ${postCounter}, gerado dinamicamente com JavaScript! #DesenvolvimentoWeb`;
        
        const newPost = createPostElement(newUsername, newContent);
        
        // Adiciona o novo post no topo da lista
        postsList.prepend(newPost); 
        
        postCounter++;
    });

    // Inicia a contagem de curtidas no post fixo (apenas para demonstração)
    const fixedLikeBtn = document.querySelector('.post .like-btn');
    let fixedLikes = 0;
    if (fixedLikeBtn) {
        fixedLikeBtn.addEventListener('click', () => {
            fixedLikes++;
            fixedLikeBtn.textContent = `Curtir (${fixedLikes})`;
        });
    }
});