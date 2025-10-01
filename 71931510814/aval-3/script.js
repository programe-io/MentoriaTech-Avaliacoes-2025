function addPost() {
    const content = document.getElementById('postContent').value;
    if(content.trim() === "") {
        alert("Digite algo antes de publicar!");
        return;
    }

    const feed = document.getElementById('feed');
    const post = document.createElement('div');
    post.classList.add('post');
    post.textContent = content;

    // Adiciona no topo do feed
    feed.insertBefore(post, feed.children[1]);

    // Limpa o textarea
    document.getElementById('postContent').value = "";
}

