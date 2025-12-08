// Alternar páginas do menu
const navButtons = document.querySelectorAll(".bottom-nav button");
const pages = document.querySelectorAll(".page");
const feed = document.getElementById("feed");
const uploadInput = document.getElementById("upload");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
      navButtons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

              const page = btn.dataset.page;
                  pages.forEach(p => p.classList.remove("active"));

                      if (page === "feed") {
                            feed.style.display = "block";
                                } else {
                                      feed.style.display = "none";
                                            document.getElementById(page).classList.add("active");
                                                }
                                                  });
                                                  });

                                                  // Upload de imagem para o feed
                                                  uploadInput.addEventListener("change", function () {
                                                    const file = this.files[0];
                                                      if (!file) return;

                                                        const reader = new FileReader();
                                                          reader.onload = function (e) {
                                                              addPost(e.target.result);
                                                                };
                                                                  reader.readAsDataURL(file);
                                                                  });

                                                                  // Função que cria um post
                                                                  function addPost(imageURL) {
                                                                    const post = document.createElement("div");
                                                                      post.classList.add("post");

                                                                        post.innerHTML = `
                                                                            <img src="${imageURL}">

                                                                                <div class="info">
                                                                                      <div class="actions">
                                                                                              <button class="like-btn">♡</button>
                                                                                                    </div>

                                                                                                          <p><strong>@LIGIAVSS</strong> — Potência das Potências 🤣💁🏽‍♀️</p>

                                                                                                                <div class="comments"></div>

                                                                                                                      <input type="text" class="comment-input" placeholder="Adicionar comentário..." />
                                                                                                                          </div>
                                                                                                                            `;

                                                                                                                              feed.prepend(post);

                                                                                                                                const likeBtn = post.querySelector(".like-btn");
                                                                                                                                  const commentsDiv = post.querySelector(".comments");
                                                                                                                                    const commentInput = post.querySelector(".comment-input");

                                                                                                                                      likeBtn.addEventListener("click", () => {
                                                                                                                                          likeBtn.textContent = likeBtn.textContent === "♡" ? "❤️" : "♡";
                                                                                                                                            });

                                                                                                                                              commentInput.addEventListener("keypress", (e) => {
                                                                                                                                                  if (e.key === "Enter" && commentInput.value.trim() !== "") {
                                                                                                                                                        const c = document.createElement("p");
                                                                                                                                                              c.innerHTML = `<strong>@LIGIAVSS:</strong> ${commentInput.value}`;
                                                                                                                                                                    commentsDiv.appendChild(c);
                                                                                                                                                                          commentInput.value = "";
                                                                                                                                                                              }
                                                                                                                                                                                });
                                                                                                                                                                                }