document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('feed-container');

    // Dados de exemplo para posts
    const posts = [
        { 
            user: "SamiraRavenaDev", 
            avatar: "avatar.jpg", // Substitua por um link de imagem real
            time: "Há 5 minutos", 
            content: "Acabei de finalizar a estrutura básica do meu feed! Adoro um tema roxo. 💜 #DevFrontend #HTMLCSSJS" 
        },
        { 
            user: "CodandoComSR", 
            avatar: "avatar2.jpg", 
            time: "1 hora atrás", 
            content: "Estudando Intersection Observer API para implementar o 'scroll infinito' no feed. Alguém tem dicas? ✨" 
        },
        { 
            user: "PurpleHacker", 
            avatar: "avatar3.jpg", 
            time: "Ontem", 
            content: "O CSS é a alma da interface. As cores certas fazem toda a diferença! Roxo é o poder! 👑" 
        }
    ];

    /**
     * Função para criar um elemento de postagem
     * @param {object} post - O objeto de dados do post
     */
    function createPostElement(post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        
        // Estrutura interna do post
        postDiv.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.user}">
                <div>
                    <span class="username">${post.user}</span>
                </div>
                <span class="timestamp">${post.time}</span>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            <div class="post-actions">
                <button onclick="likePost(this)">Curtir</button>
                <button onclick="commentPost()">Comentar</button>
            </div>
        `;

        return postDiv;
    }

    // Adiciona os posts ao container
    posts.forEach(post => {
        feedContainer.appendChild(createPostElement(post));
    });

    // Funções de interação (simuladas)
    window.likePost = function(buttonElement) {
        alert("Post curtido! (Implementação real de contador viria aqui)");
        buttonElement.style.color = 'red'; // Simula um like visual
    };

    window.commentPost = function() {
        alert("Abrir modal de comentários... (Implementação real viria aqui)");
    };
});