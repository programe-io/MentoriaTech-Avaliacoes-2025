// Comportamento simples: curtir, comentar (contador) e criar post de exemplo
document.addEventListener('DOMContentLoaded', () => {
  // Delegação de eventos para o feed
    document.getElementById('feed').addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.like-btn');
            const commentBtn = e.target.closest('.comment-btn');
                const newPostBtn = e.target.closest('#newPostBtn');

                    if (likeBtn) {
                          const countEl = likeBtn.querySelector('.count');
                                let n = parseInt(countEl.textContent || '0', 10);
                                      // alterna liked (apenas incrementa para demo)
                                            n = n + 1;
                                                  countEl.textContent = n;
                                                        likeBtn.classList.add('liked');
                                                            }

                                                                if (commentBtn) {
                                                                      const countEl = commentBtn.querySelector('.count');
                                                                            let n = parseInt(countEl.textContent || '0', 10);
                                                                                  n = n + 1;
                                                                                        countEl.textContent = n;
                                                                                              // abrir modal de comentário pode ser implementado futuramente
                                                                                                  }

                                                                                                      if (newPostBtn) {
                                                                                                            createDemoPost();
                                                                                                                }
                                                                                                                  });

                                                                                                                    // Cria um post de demonstração (ex.: ao clicar "Novo post")
                                                                                                                      function createDemoPost() {
                                                                                                                          const feed = document.getElementById('feed');
                                                                                                                              const article = document.createElement('article');
                                                                                                                                  article.className = 'post';
                                                                                                                                      article.innerHTML = `
                                                                                                                                            <header class="post-header">
                                                                                                                                                    <div class="avatar"><img src="https://via.placeholder.com/64x64.png?text=U" alt="Avatar"/></div>
                                                                                                                                                            <div class="post-meta">
                                                                                                                                                                      <h3 class="username">UsuárioNovo</h3>
                                                                                                                                                                                <span class="time">agora</span>
                                                                                                                                                                                        </div>
                                                                                                                                                                                              </header>
                                                                                                                                                                                                    <div class="post-content">
                                                                                                                                                                                                            <h2 class="post-title">Post gerado</h2>
                                                                                                                                                                                                                    <p class="post-text">Exemplo rápido de post — personalize com suas imagens do Hazbin Hotel.</p>
                                                                                                                                                                                                                            <div class="post-image"><img src="https://via.placeholder.com/900x450.png?text=Novo+Post" alt="novo post"/></div>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                        <footer class="post-actions">
                                                                                                                                                                                                                                                <div class="actions-left">
                                                                                                                                                                                                                                                          <button class="btn like-btn">❤️ <span class="count">0</span></button>
                                                                                                                                                                                                                                                                    <button class="btn comment-btn">💬 <span class="count">0</span></button>
                                                                                                                                                                                                                                                                              <button class="btn share-btn">🔁</button>
                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                              <div class="actions-right">
                                                                                                                                                                                                                                                                                                        <span class="tag">#Novo</span>
                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                      </footer>
                                                                                                                                                                                                                                                                                                                          `;
                                                                                                                                                                                                                                                                                                                              feed.prepend(article);
                                                                                                                                                                                                                                                                                                                                  // Scroll para o novo post
                                                                                                                                                                                                                                                                                                                                      article.scrollIntoView({ behavior: 'smooth' });
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                        