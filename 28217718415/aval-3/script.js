const postBtn = document.getElementById('post-btn');
const postText = document.getElementById('post-text');
const feed = document.getElementById('feed');
const imageInput = document.getElementById('image-input');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Salva no localStorage
function savePosts() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Renderiza o feed
function renderFeed() {
    feed.innerHTML = '';
    posts.slice().reverse().forEach((post, index) => {
        const article = document.createElement('article');
        article.classList.add('post');

        article.innerHTML = `
            <div class="post-header">
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="Foto de perfil do usuário">
                <h4>Usuário Anônimo</h4>
            </div>

            <div class="post-content">
                <p>${post.text}</p>
                ${post.image ? `<img src="${post.image}" alt="Imagem publicada pelo usuário">` : ''}
            </div>

            <div class="actions">
                <button onclick="likePost(${posts.length - 1 - index})">👍 Curtir (${post.likes})</button>
                <button onclick="toggleCommentBox(${posts.length - 1 - index})">💬 Comentar</button>
            </div>

            <div class="comments" id="comments-${posts.length - 1 - index}">
                ${post.comments.map(c => `<div class="comment">${c}</div>`).join('')}
            </div>

            <div class="comment-box" id="comment-box-${posts.length - 1 - index}" style="display:none; margin-top:0.5rem;">
                <input type="text" id="comment-input-${posts.length - 1 - index}" placeholder="Escreva um comentário...">
                <button onclick="addComment(${posts.length - 1 - index})">Enviar</button>
            </div>
        `;
        feed.appendChild(article);
    });
}

// Publicar post
postBtn.addEventListener('click', () => {
    const text = postText.value.trim();
    const file = imageInput.files[0];

    if (!text && !file) {
        alert('Digite algo ou selecione uma imagem!');
        return;
    }

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            addPost(text, e.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        addPost(text, null);
    }
});

// Adiciona novo post
function addPost(text, image) {
    posts.push({ text, image, likes: 0, comments: [] });
    postText.value = '';
    imageInput.value = '';
    savePosts();
    renderFeed();
}

// Curtir post
function likePost(index) {
    posts[index].likes++;
    savePosts();
    renderFeed();
}

// Exibir/ocultar caixa de comentário
function toggleCommentBox(index) {
    const box = document.getElementById(`comment-box-${index}`);
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

// Adicionar comentário
function addComment(index) {
    const input = document.getElementById(`comment-input-${index}`);
    const comment = input.value.trim();
    if (comment) {
        posts[index].comments.push(comment);
        input.value = '';
        savePosts();
        renderFeed();
    }
}

// Inicializa o feed
renderFeed();
