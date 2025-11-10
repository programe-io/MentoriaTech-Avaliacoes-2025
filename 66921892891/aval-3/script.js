// ===== MENU RESPONSIVO =====
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth'
      });
    }
    navMenu.classList.remove('active');
    menuBtn.classList.remove('open');
  });
});

// ===== FORMULÁRIO (simulação de envio) =====
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  form.reset();
});
