// === Troca automática de slides ===
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === slideIndex);
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

setInterval(showSlides, 4000); // muda a cada 4 segundos
showSlides();

// === Alternar tema claro/escuro ===
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
