// Função para alternar o menu responsivo
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("navbar");

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});
