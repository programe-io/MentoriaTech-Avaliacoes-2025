document.getElementById('adicionar').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value.trim();
    const conteudo = document.getElementById('conteudo').value.trim();

    if (titulo === '' || conteudo === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const posts = document.getElementById('posts');

    const novoPost = document.createElement('div');
    novoPost.classList.add('post');
    novoPost.innerHTML = `
        <h3>${titulo}</h3>
        <p>${conteudo}</p>
        <small>Publicado em: ${new Date().toLocaleString()}</small>
    `;

    posts.prepend(novoPost);

    // Limpar os campos
    document.getElementById('titulo').value = '';
    document.getElementById('conteudo').value = '';
});
