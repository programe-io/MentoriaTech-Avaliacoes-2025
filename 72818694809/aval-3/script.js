// Contador de curtidas
let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

// Ação de curtir
likeBtn.addEventListener("click", () => {
  likes++;
    likeCount.textContent = likes;
      likeBtn.style.transform = "scale(1.18)";
        setTimeout(() => likeBtn.style.transform = "scale(1)", 180);
        });

        // Ação de comentar
        document.getElementById("commentBtn").addEventListener("click", () => {
          alert("Você abriu a área de comentários!");
          });

          // Ação de compartilhar
          document.getElementById("shareBtn").addEventListener("click", () => {
            alert("Post compartilhado com sucesso!");
            });