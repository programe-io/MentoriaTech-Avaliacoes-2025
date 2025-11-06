const form = document.getElementById('postForm');
const feed = document.getElementById('feed');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = document.getElementById('postText').value.trim();
  const fileInput = document.getElementById('postImage');
  const file = fileInput.files[0];

  if (!text && !file) {
    alert('Digite algo ou adicione uma imagem/vídeo!');
    return;
  }

  const article = document.createElement('article');
  article.classList.add('post');

  const userImage = 'https://via.placeholder.com/40';
  const userName = 'Usuário Exemplo';

  const header = document.createElement('header');
  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');
  userInfo.innerHTML = `
    <img src="${userImage}" alt="Foto de perfil">
    <div>
      <strong><span>${userName}</span></strong>
      <time datetime="${new Date().toISOString()}"><span>${new Date().toLocaleString()}</span></time>
    </div>
  `;
  header.appendChild(userInfo);

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  contentDiv.innerHTML = `<p><span>${text}</span></p>`;

  if (file) {
    const url = URL.createObjectURL(file);
    const mediaDiv = document.createElement('div');
    mediaDiv.classList.add('media');
    if (file.type.startsWith('image/')) {
      mediaDiv.innerHTML = `<img src="${url}" alt="Imagem postada">`;
    } else if (file.type.startsWith('video/')) {
      mediaDiv.innerHTML = `<video controls src="${url}"></video>`;
    }
    contentDiv.appendChild(mediaDiv);
  }

  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="actions">
      <span class="like">❤️ <span>Curtir</span></span>
      <span class="comment-toggle">💬 <span>Comentar</span></span>
    </div>
  `;

  const commentSection = document.createElement('div');
  commentSection.classList.add('comment-section');
  commentSection.hidden = true;
  commentSection.innerHTML = `
    <input type="text" class="comment-input" placeholder="Escreva um comentário...">
    <button class="comment-btn"><span>Enviar</span></button>
    <div class="comments"></div>
  `;

  article.append(header, contentDiv, footer, commentSection);
  feed.prepend(article);
  form.reset();

  const likeBtn = article.querySelector('.like');
  likeBtn.addEventListener('click', () => {
    const spanText = likeBtn.querySelector('span');
    if (spanText.textContent === 'Curtir') {
      spanText.textContent = 'Curtido';
      likeBtn.textContent = '💙 ';
      likeBtn.appendChild(spanText);
    } else {
      spanText.textContent = 'Curtir';
      likeBtn.textContent = '❤️ ';
      likeBtn.appendChild(spanText);
    }
  });

  const commentToggle = article.querySelector('.comment-toggle');
  commentToggle.addEventListener('click', () => {
    commentSection.hidden = !commentSection.hidden;
  });

  const commentBtn = article.querySelector('.comment-btn');
  commentBtn.addEventListener('click', () => {
    const input = article.querySelector('.comment-input');
    const text = input.value.trim();
    if (!text) return;
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `<span>${text}</span>`;
    article.querySelector('.comments').appendChild(commentDiv);
    input.value = '';
  });
});
