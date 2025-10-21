const postBtn = document.getElementById('postBtn');
const postContent = document.getElementById('postContent');
const feed = document.getElementById('feed');

postBtn.addEventListener('click', () => {
    const content = postContent.value.trim();

    if (content === '') {
        alert('Escreva algo para postar!');
        return;
    }

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = content;

    // Adiciona o novo post no topo do feed
    feed.prepend(postElement);

    // Limpa o textarea
    postContent.value = '';
});
