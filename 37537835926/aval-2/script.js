document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");

  // Exemplo de animação ao passar o mouse
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "0.3s";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});
