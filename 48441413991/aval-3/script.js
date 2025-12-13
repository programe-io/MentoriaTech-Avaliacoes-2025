// Curtir 🤍
document.querySelector(".like-btn").addEventListener("click", function () {
  this.style.opacity = this.style.opacity === "0.4" ? "1" : "0.4";
  });

  // Comentar 💭
  document.querySelector(".comment-btn").addEventListener("click", function () {
    alert("Área de comentários 💭");
    });

    // Upload de imagens
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
                                            <span class="like-btn">🤍</span>
                                                    <span class="comment-btn">💭</span>
                                                          </div>
                                                              `;

                                                                  document.querySelector("main").appendChild(post);
                                                                    };

                                                                      reader.readAsDataURL(file);
                                                                      });