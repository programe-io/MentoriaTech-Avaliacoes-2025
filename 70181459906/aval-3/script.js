document.getElementById('postButton').addEventListener('click', function () {
    const content = document.getElementById('postContent').value.trim();

    if (content === "") {
        alert("Escreva algo antes de postar!");
        return;
    }

    const postsContainer = document.getElementById('postsContainer');

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const postContent = document.createElement('p');
    postContent.textContent = content;

    const postTime = document.createElement('div');
    postTime.classList.add('time');
    postTime.textContent = `Postado em: ${new Date().toLocaleString('pt-BR')}`;

    postElement.appendChild(postContent);
    postElement.appendChild(postTime);

    // Adiciona o post no topo
    postsContainer.insertBefore(postElement, postsContainer.firstChild);

    // Limpa o textarea
    document.getElementById('postContent').value = "";
});
