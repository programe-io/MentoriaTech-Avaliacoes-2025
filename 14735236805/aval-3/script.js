const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const themeToggle = document.getElementById('themeToggle');
const yearSpan = document.getElementById('year');
const galleryEl = document.getElementById('gallery');
const track = document.getElementById('track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Ano no rodapé
yearSpan.textContent = new Date().getFullYear();

// Menu responsivo
navToggle.onclick = () => {
  mainNav.classList.toggle("open");
};

// Tema escuro
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Galeria automática
const IMAGES = Array.from({length: 8}, (_, i) => `https://picsum.photos/seed/${i+2}/800/600`);

IMAGES.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  galleryEl.appendChild(img);
});

// Carrossel simples
IMAGES.forEach(src => {
  const div = document.createElement("div");
  div.className = "carousel-item";
  const img = document.createElement("img");
  img.src = src;
  div.appendChild(img);
  track.appendChild(div);
});

let index = 0;

function updateCarousel() {
  const width = 300 + 10;
  track.style.transform = `translateX(${index * -width}px)`;
}

nextBtn.onclick = () => {
  if (index < IMAGES.length - 1) index++;
  updateCarousel();
};

prevBtn.onclick = () => {
  if (index > 0) index--;
  updateCarousel();
};

// Formulário
contactForm.onsubmit = (e) => {
  e.preventDefault();

  formStatus.textContent = "Enviando...";

  setTimeout(() => {
    formStatus.textContent = "Mensagem enviada.";
    contactForm.reset();
  }, 800);
};
