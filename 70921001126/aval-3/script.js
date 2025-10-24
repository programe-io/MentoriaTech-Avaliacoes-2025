// Script básico de exemplo
document.addEventListener("DOMContentLoaded", () => {
  console.log("Feed carregado com sucesso!");

  // Exemplo: animação de clique no post
  const posts = document.querySelectorAll(".post-card");
  posts.forEach((post) => {
    post.addEventListener("click", () => {
      post.classList.add("ring", "ring-blue-400");
      setTimeout(() => post.classList.remove("ring", "ring-blue-400"), 300);
    });
  });
});

