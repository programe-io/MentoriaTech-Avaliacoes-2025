// Seleciona o botão hamburguer e o menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Adiciona evento de clique
toggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // adiciona/remove classe "active" no nav
});