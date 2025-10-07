document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menu-btn');
  const mainNav = document.getElementById('main-nav');

  // Toggle menu on mobile
  menuBtn.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });

  // Interação com as miniaturas da galeria
  const thumbs = document.querySelectorAll('.thumb');
