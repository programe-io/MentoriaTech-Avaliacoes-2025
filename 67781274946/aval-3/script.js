// ---------- JavaScript ----------
const form = document.getElementById('newPostForm');
const postsContainer = document.getElementById('posts');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  const imageURL = document.getElementById('image').value.trim();

  if (title && content) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    let imageTag = '';
    if (imageURL) {
      imageTag = `<img src="${imageURL}" alt="Imagem do post" class="post-img">`;
    }

    postDiv.innerHTML = `
      ${imageTag}
      <h2>${title}</h2>
      <p>${content}</p>
    `;

    postsContainer.insertBefore(postDiv, postsContainer.firstChild);
    form.reset();
  } else {
    alert('Por favor, preencha o título e o conteúdo!');
  }
});
