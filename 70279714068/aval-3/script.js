// Script simples para interações: curtir, mostrar comentários e publicar novo post
document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // Toggle comentários
  document.querySelectorAll('.comment-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const post = e.target.closest('.post');
      const comments = post.querySelector('.comments');
      if (!comments) return;
      comments.style.display = comments.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Likes
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const countSpan = btn.querySelector('.likes-count');
      let count = parseInt(countSpan.textContent, 10) || 0;
      // simples toggle visual (não persiste)
      if (btn.classList.contains('liked')) {
        count -= 1;
        btn.classList.remove('liked');
      } else {
        count += 1;
        btn.classList.add('liked');
      }
      countSpan.textContent = count;
    });
  });

  // Adicionar comentário em cada post
  document.querySelectorAll('.add-comment').forEach(area => {
    const input = area.querySelector('.comment-input');
    const btn = area.querySelector('.add-comment-btn');
    btn.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return;
      const commentsBox = area.closest('.comments');
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.innerHTML = `<strong>Você:</strong> ${escapeHtml(text)}`;
      // insere antes do campo de adicionar comentário
      commentsBox.insertBefore(newComment, area);
      input.value = '';
      // atualiza contador de comentários no botão
      const toggleBtn = area.closest('.post-footer').querySelector('.comment-toggle');
      updateCommentCount(toggleBtn, commentsBox);
    });
  });

  // Publicar novo post pelo composer
  const publishBtn = document.getElementById('publishBtn');
  publishBtn.addEventListener('click', () => {
    const textArea = document.getElementById('newPostText');
    const imgInput = document.getElementById('newPostImage');
    const text = textArea.value.trim();
    const imgUrl = imgInput.value.trim();

    if (!text && !imgUrl) {
      alert('Escreva algo ou adicione uma URL de imagem para publicar.');
      return;
    }

    const feed = document.querySelector('.feed');

    const post = createPostElement({
      author: 'Ângela',
      date: (new Date()).toLocaleDateString('pt-BR', {day:'2-digit', month:'long', year:'numeric'}),
      text: text || '',
      image: imgUrl || null
    });

    // insere no topo, logo abaixo do composer
    const composer = document.querySelector('.composer');
    feed.insertBefore(post, composer.nextSibling);

    // limpa inputs
    textArea.value = '';
    imgInput.value = '';
  });

  // Helper functions
  function createPostElement({author, date, text, image}) {
    const article = document.createElement('article');
    article.className = 'post';
    article.innerHTML = `
      <header class="post-header">
        <img class="avatar" src="https://via.placeholder.com/48" alt="Avatar do autor" />
        <div>
          <h3 class="post-author">${escapeHtml(author)}</h3>
          <time datetime="${new Date().toISOString()}">${escapeHtml(date)}</time>
        </div>
      </header>

      <div class="post-content">
        <p>${escapeHtml(text)}</p>
        ${ image ? `<img src="${escapeHtml(image)}" alt="Imagem do post" onerror="this.style.display='none'"/>` : '' }
      </div>

      <footer class="post-footer">
        <div class="actions">
          <button class="like-btn">Curtir <span class="likes-count">0</span></button>
          <button class="comment-toggle">Comentários (0)</button>
        </div>

        <div class="comments">
          <div class="add-comment">
            <input class="comment-input" placeholder="Adicione um comentário..." />
            <button class="add-comment-btn">Enviar</button>
          </div>
        </div>
      </footer>
    `;

    // aplicar eventos básicos ao novo post
    const likeBtn = article.querySelector('.like-btn');
    likeBtn.addEventListener('click', (e) => {
      const span = e.currentTarget.querySelector('.likes-count');
      let c = parseInt(span.textContent, 10) || 0;
      if (e.currentTarget.classList.contains('liked')) {
        c--; e.currentTarget.classList.remove('liked');
      } else { c++; e.currentTarget.classList.add('liked'); }
      span.textContent = c;
    });

    const commentToggle = article.querySelector('.comment-toggle');
    const commentsBox = article.querySelector('.comments');
    commentToggle.addEventListener('click', () => {
      commentsBox.style.display = commentsBox.style.display === 'block' ? 'none' : 'block';
    });

    const addCommentBtn = article.querySelector('.add-comment-btn');
    addCommentBtn.addEventListener('click', () => {
      const input = article.querySelector('.comment-input');
      const txt = input.value.trim();
      if (!txt) return;
      const c = document.createElement('div');
      c.className = 'comment';
      c.innerHTML = `<strong>Você:</strong> ${escapeHtml(txt)}`;
      commentsBox.insertBefore(c, article.querySelector('.add-comment'));
      input.value = '';
      updateCommentCount(commentToggle, commentsBox);
    });

    return article;
  }

  function updateCommentCount(toggleBtn, commentsBox){
    // conta quantos elementos .comment existem
    const count = commentsBox.querySelectorAll('.comment').length;
    toggleBtn.textContent = `Comentários (${count})`;
  }

  // simples escape para evitar injeção ao inserir texto no DOM
  function escapeHtml(unsafe) {
    return unsafe
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }
});
