const uploadBtn = document.querySelector('.upload-btn');
const fileInput = document.getElementById('fileInput');
const feed = document.getElementById('feed');

// Abrir seletor de arquivos
uploadBtn.addEventListener('click', (e) => {
  e.preventDefault();
    fileInput.click();
    });

    // Criar post ao enviar imagem
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
                reader.onload = function(event) {

                      const postDiv = document.createElement('div');
                            postDiv.classList.add('post');

                                  postDiv.innerHTML = `
                                          <img src="${event.target.result}" alt="Novo post">
                                                  <div class="post-footer">
                                                            <span class="like-btn">🖤 Curtir</span>
                                                                      <span class="dislike-btn">👎🏽 Descurtir</span>
                                                                              </div>
                                                                                    `;

                                                                                          feed.prepend(postDiv);

                                                                                                // ---- Função de curtir ----
                                                                                                      const likeBtn = postDiv.querySelector('.like-btn');
                                                                                                            const dislikeBtn = postDiv.querySelector('.dislike-btn');

                                                                                                                  likeBtn.addEventListener('click', () => {
                                                                                                                          likeBtn.classList.toggle('liked');

                                                                                                                                  // Se curtir estiver ativo, desativa o descurtir
                                                                                                                                          if (likeBtn.classList.contains('liked')) {
                                                                                                                                                    dislikeBtn.classList.remove('disliked');
                                                                                                                                                            }
                                                                                                                                                                  });

                                                                                                                                                                        // ---- Função de descurtir ----
                                                                                                                                                                              dislikeBtn.addEventListener('click', () => {
                                                                                                                                                                                      dislikeBtn.classList.toggle('disliked');

                                                                                                                                                                                              // Se descurtir estiver ativo, desativa o curtir
                                                                                                                                                                                                      if (dislikeBtn.classList.contains('disliked')) {
                                                                                                                                                                                                                likeBtn.classList.remove('liked');
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                      reader.readAsDataURL(file);
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        });