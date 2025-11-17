// Exemplo simples de interação com JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".gallery img");

  imagens.forEach(img => {
    img.addEventListener("click", () => {
      alert(`Você clicou na imagem: ${img.alt}`);
    });
  });
});
