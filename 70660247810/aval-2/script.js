// Exemplo simples de interação
window.onload = function() {
  console.log("Site Mundo Minecraft carregado com sucesso!");
};

// Botão para mostrar alerta quando clicar em 'Ver galeria'
document.addEventListener("DOMContentLoaded", function() {
  const btnGaleria = document.querySelector(".btn.primary");
  if (btnGaleria) {
    btnGaleria.addEventListener("click", function() {
      alert("Você está entrando na galeria do Mundo Minecraft!");
