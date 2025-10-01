// Seleciona o botão do menu e a barra de navegação
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Adiciona um evento de clique
menuBtn.addEventListener('click', () => {
  // Alterna a classe 'show' no nav
  nav.classList.toggle('show');
});
