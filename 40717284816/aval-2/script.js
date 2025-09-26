// Menu responsivo
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('menu');

btnMobile.addEventListener('click', () => {
  nav.classList.toggle('active');
  });