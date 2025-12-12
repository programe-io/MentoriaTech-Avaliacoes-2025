// Curtir 💚
document.querySelector(".like-btn").addEventListener("click", function () {
  this.classList.toggle("active");
  });

  // Comentar 💭
  document.querySelector(".comment-btn").addEventListener("click", function () {
    alert("Comentário 💭");
    });

    // Upload de imagem
    document.getElementById("uploadInput").addEventListener("change", function (event) {
      const file = event.target.files[0];
        if (!file) return;

          const reader = new FileReader();
            reader.onload = function (e) {
                const post = document.createElement("div");
                    post.className = "post";

                        post.innerHTML = `
                              <img class="post-img" src="${e.target.result}">
                                    <div class="post-actions">
                                            <span class="like-btn">💚</span>
                                                    <span class="comment-btn">💭</span>
                                                          </div>
                                                              `;

                                                                  document.querySelector("main").appendChild(post);
                                                                    };

                                                                      reader.readAsDataURL(file);
                                                                      });