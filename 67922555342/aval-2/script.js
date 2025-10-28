const postForm = document.getElementById('post-form');
const postsContainer = document.getElementById('posts');

postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();

    if (title && content) {
        // Criar artigo
        const article = document.createElement('article');
        article.classList.add('post');

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const p = document.createElement('p');
        p.textContent = content;

        article.appendChild(h3);
        article.appendChild(p);

        postsContainer.appendChild(article);

        postForm.reset();
    } else {
        alert('Preencha todos os campos antes de enviar.');
    }
});