function publicarPostagem() {
    const conteudo = document.getElementById('post-content').value.trim();
    const feed = document.getElementById('posts');

    if (conteudo === "") {
        alert("Por favor, escreva algo antes de publicar.");
        return;
    }

    const novaPostagem = document.createElement('div');
    novaPostagem.classList.add('post');
    novaPostagem.textContent = conteudo;

    // Adiciona no topo do feed
    feed.prepend(novaPostagem);

    // Limpa o textarea
    document.getElementById('post-content').value = '';
}
