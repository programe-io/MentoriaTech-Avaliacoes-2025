// JavaScript do menu mobile
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("navbar");

// Adiciona um "ouvinte" de evento de clique ao botão de menu
menuBtn.addEventListener("click", () => {
  // Alterna a classe 'show' na barra de navegação
  // Isso faz o menu aparecer ou desaparecer (estilizado no CSS com max-height)
  nav.classList.toggle("show");
});