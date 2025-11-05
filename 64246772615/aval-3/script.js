// Função de curtida
document.querySelectorAll(".like-btn").forEach(button => {
  button.addEventListener("click", () => {
    const count = button.querySelector(".like-count");
    count.textContent = parseInt(count.textContent) + 1;
  });
});

// Função de comentários
document.querySelectorAll(".comment-input").forEach(input => {
  input.addEventListener("keypress", event => {
    if (event.key === "Enter" && input.value.trim() !== "") {
      const list = input.nextElementSibling;
      const comment = document.createElement("p");
      comment.textContent = input.value;
      list.appendChild(comment);
      input.value = "";
    }
  });
});
