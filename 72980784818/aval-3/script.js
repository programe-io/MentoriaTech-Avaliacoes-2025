document.getElementById('postButton').addEventListener('click', function () {
    const content = document.getElementById('postContent').value.trim();

    if (content === '') {
        alert('Por favor, escreva algo antes de postar!');
        return;
    }

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // Criar o texto do post
    const postText = document.createElement('p');
    postText.textContent = content;

    postDiv.appendChild(postText);

    // Adicionar o post no topo da lista de posts
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.insertBefore(postDiv, postsContainer.firstChild);

    // Limpar textarea
    document.getElementById('postContent').value = '';
});
