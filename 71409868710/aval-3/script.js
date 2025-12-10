const fileInput = document.getElementById("fileInput");
const postText = document.getElementById("postText");
const postButton = document.getElementById("postButton");
const feed = document.getElementById("feed");

postButton.addEventListener("click", () => {
  const file = fileInput.files[0];
    const text = postText.value.trim();

      if (!file) {
          alert("Escolha uma imagem!");
              return;
                }

                  const reader = new FileReader();
                    reader.onload = () => {
                        const post = document.createElement("div");
                            post.classList.add("post");

                                post.innerHTML = `
                                      <img src="${reader.result}" alt="Post Image">

                                            <p>${text}</p>

                                                  <span class="like">❤️</span>
                                                        <span class="comment">💬</span>

                                                              <div class="comment-box"></div>
                                                                  `;

                                                                      post.querySelector(".like").addEventListener("click", function () {
                                                                            this.textContent = this.textContent === "❤️" ? "💚" : "❤️";
                                                                                });

                                                                                    post.querySelector(".comment").addEventListener("click", function () {
                                                                                          let msg = prompt("Digite seu comentário:");
                                                                                                if (msg) {
                                                                                                        const p = document.createElement("p");
                                                                                                                p.textContent = msg;
                                                                                                                        post.querySelector(".comment-box").appendChild(p);
                                                                                                                              }
                                                                                                                                  });

                                                                                                                                      feed.prepend(post);
                                                                                                                                        };

                                                                                                                                          reader.readAsDataURL(file);
                                                                                                                                          });