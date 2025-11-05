// Função de Curtir
document.querySelectorAll(".like-btn").forEach(button => {
  button.addEventListener("click", () => {
    const countSpan = button.querySelector(".like-count");
    let likes = parseInt(countSpan.textContent);
    likes++;
    countSpan.textContent = likes;
  });
});

// Função de Comentário
document.querySelectorAll(".comment-input").forEach(input => {
  input.addEventListener("keypress", event => {
    if (event.key === "Enter" && input.value.trim() !== "") {
      const commentList = input.nextElementSibling;
      const comment = document.createElement("p");
      comment.textContent = input.value;
      commentList.appendChild(comment);
      input.value = "";
    }
  });
});
