// Alterna o menu no mobile
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
