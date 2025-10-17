document.addEventListener("DOMContentLoaded", () => {
  console.log("Página de Minecraft carregada com sucesso!");
});

// Exemplo simples de interação:
const galeria = document.querySelectorAll(".fakeimage");
galeria.forEach((div, index) => {
  div.addEventListener("click", () => {
    alert(`Você clicou na imagem da galeria ${index + 1}!`);
  });
});
