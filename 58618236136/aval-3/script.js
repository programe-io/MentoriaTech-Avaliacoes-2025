const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const feed = document.getElementById('feed');

// Abrir seletor de arquivos
uploadBtn.addEventListener('click', () => {
  fileInput.click();
  });

  // Criar posts no feed
  fileInput.addEventListener('change', () => {
    const files = fileInput.files;

      for (let i = 0; i < files.length; i++) {
          const file = files[i];
              const reader = new FileReader();

                  reader.onload = (e) => {
                        const post = document.createElement('div');
                              post.classList.add('post');
                                    post.innerHTML = `
                                            <div class="post-img-container" style="position: relative;">
                                                      <img src="${e.target.result}" alt="Post ${i+1}">
                                                              </div>
                                                                      <div class="actions">
                                                                                <span class="like">💗 Curtir</span>
                                                                                          <span class="comment">🤐 Comentar</span>
                                                                                                  </div>
                                                                                                          <div class="likes-comments">
                                                                                                                    <span class="likes-count">0 curtidas</span>
                                                                                                                            </div>
                                                                                                                                  `;
                                                                                                                                        feed.prepend(post);

                                                                                                                                              const likeBtn = post.querySelector('.like');
                                                                                                                                                    const likesCount = post.querySelector('.likes-count');
                                                                                                                                                          let liked = false;
                                                                                                                                                                let count = 0;

                                                                                                                                                                      likeBtn.addEventListener('click', () => {
                                                                                                                                                                              liked = !liked;
                                                                                                                                                                                      count = liked ? count + 1 : count - 1;
                                                                                                                                                                                              likesCount.textContent = `${count} curtidas`;

                                                                                                                                                                                                      const heart = document.createElement('div');
                                                                                                                                                                                                              heart.classList.add('heart');
                                                                                                                                                                                                                      heart.textContent = '💗';
                                                                                                                                                                                                                              post.querySelector('.post-img-container').appendChild(heart);
                                                                                                                                                                                                                                      setTimeout(() => heart.remove(), 600);
                                                                                                                                                                                                                                            });

                                                                                                                                                                                                                                                  const imgContainer = post.querySelector('.post-img-container');
                                                                                                                                                                                                                                                        imgContainer.addEventListener('dblclick', () => {
                                                                                                                                                                                                                                                                if (!liked) likeBtn.click();
                                                                                                                                                                                                                                                                      });

                                                                                                                                                                                                                                                                            const commentBtn = post.querySelector('.comment');
                                                                                                                                                                                                                                                                                  commentBtn.addEventListener('click', () => {
                                                                                                                                                                                                                                                                                          alert('Função de comentário ainda não implementada 😎');
                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                    };

                                                                                                                                                                                                                                                                                                        reader.readAsDataURL(file);
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                          });