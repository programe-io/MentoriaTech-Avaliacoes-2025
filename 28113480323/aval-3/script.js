// DOM refs
const yearEl = document.getElementById('year');
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modalOk = document.getElementById('modalOk');
const themeToggle = document.getElementById('themeToggle');

const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const images = Array.from(track.querySelectorAll('img'));
let index = 0;

// Year
yearEl.textContent = new Date().getFullYear();

// Modal handlers
openModalBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden','false');
});
closeModalBtn.addEventListener('click', closeModal);
modalOk.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
function closeModal(){
  modal.setAttribute('aria-hidden','true');
}

// Simple carousel
function updateCarousel(){
  const width = track.clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}
window.addEventListener('resize', updateCarousel);
prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
});
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateCarousel();
});

// Auto-advance carousel every 4s
let auto = setInterval(() => { index = (index + 1) % images.length; updateCarousel(); }, 4000);
track.addEventListener('mouseenter', () => clearInterval(auto));
track.addEventListener('mouseleave', () => {
  auto = setInterval(() => { index = (index + 1) % images.length; updateCarousel(); }, 4000);
});

// Form submit (local/demo)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim() || 'Anônimo';
  alert(`Mensagem recebida de ${name}. Obrigado!`);
  form.reset();
});

// Theme toggle: alternate accent color to a slightly different pink (keeps layout)
let alt = false;
themeToggle.addEventListener('click', () => {
  alt = !alt;
  document.documentElement.style.setProperty('--accent', alt ? '#9b4d8c' : '#ff66a3');
  themeToggle.setAttribute('aria-pressed', String(alt));
});

// Ensure carousel positions correctly after images load
window.addEventListener('load', updateCarousel);
