const postList = document.querySelector('.post-list');

function createPost(username, avatarSrc, imageSrc, contentText, timeAgo = "agora mesmo") {
  const postCard = document.createElement('div');
  postCard.classList.add('post-card');

  postCard.innerHTML = `
    <div class="post-header">
      <img class="avatar" src="${avatarSrc}" alt="Perfil">
      <h2 class="username">${username}</h2>
    </div>
    <img class="post-image" src="${imageSrc}" alt="Postagem">
    <div class="post-content">
      <p>${contentText}</p>
    </div>
    <div class="post-footer">
      <button class="like-btn">Curtir ❤️ <span class="like-count">0</span></button>
      <span class="timestamp">${timeAgo}</span>
    </div>
  `;

  const likeBtn = postCard.querySelector('.like-btn');
  const likeCount = postCard.querySelector('.like-count');
  let likes = 0;

  likeBtn.addEventListener('click', () => {
    likes++;
    likeCount.textContent = likes;
    likeBtn.classList.add('liked');
  });

  return postCard;
}

const addPostBtn = document.getElementById('add-post-btn');

addPostBtn.addEventListener('click', () => {
  const newPost = createPost(
    'NovoUsuário',
    'image/profile_01.jpg',
    'images/post_01.png',
    'Este é um novo post adicionado dinamicamente com JavaScript.',
    'agora mesmo'
  );

  postList.prepend(newPost);
});
