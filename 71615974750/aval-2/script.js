// Menu Responsivo
document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('navLinks').classList.toggle('active');
});

// Efeito de Scroll para Desaparecer a Hero Section
window.addEventListener('scroll', function() {
  var heroSection = document.querySelector('.hero');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 200) {
    heroSection.style.opacity = 1 - scrollPosition / 600;
  } else {
    heroSection.style.opacity = 1;
  }
});
