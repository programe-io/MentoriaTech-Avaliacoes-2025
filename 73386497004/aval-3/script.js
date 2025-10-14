const postBtn = document.getElementById('postBtn');
const postsContainer = document.getElementById('postsContainer');
const postContent = document.getElementById('postContent');

let posts = [];

// Função para renderizar os posts na tela
function renderPosts() {
    postsContainer.innerHTML = ''; // limpa o container

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const postHeader = document.createElement('div');
        postHeader.classList.add('post-header');
        postHeader.textContent = post.user;

        const postText = document.createElement('div');
        postText.classList.add('post-content');
        postText.textContent = post.content;

        const likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = `Curtir (${post.likes})`;

        if (post.liked) {
            likeBtn.classList.add('liked');
        }

        likeBtn.addEventListener('click', () => {
            if (post.liked) {
                post.likes--;
            } else {
                post.likes++;
            }
            post.liked = !post.liked;
            renderPosts();
        });

        postElement.appendChild(postHeader);
        postElement.appendChild(postText);
        postElement.appendChild(likeBtn);

        postsContainer.appendChild(postElement);
    });
}

// Evento para criar um novo post
postBtn.addEventListener('click', () => {
    const content = postContent.value.trim();
    if (content.length === 0) {
        alert('Por favor, escreva algo antes de publicar!');
        return;
    }

    // Adiciona novo post no array
    posts.unshift({
        user: 'João Silva',
        content,
        likes: 0,
        liked: false
    });

    postContent.value = '';
    renderPosts();
});

// Inicializa com alguns posts
posts = [
    { user: 'Maria', content: 'Olá, mundo! Minha primeira publicação.', likes: 2, liked: false },
    { user: 'Carlos', content: 'Alguém viu o último episódio da série?', likes: 5, liked: false },
];

renderPosts();
