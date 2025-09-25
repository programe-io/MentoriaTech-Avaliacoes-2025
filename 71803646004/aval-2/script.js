// Exemplo simples de interação
const botoes = document.querySelectorAll(".img-btn");

botoes.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    alert(`Você clicou na imagem ${index + 1}`);
  });
});
