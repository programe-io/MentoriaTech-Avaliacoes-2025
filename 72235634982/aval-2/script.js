// script.js
// Pequena interatividade: alternância de tema, lightbox da galeria e captura simples do formulário.

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
    setTheme(next);
  });

  function setTheme(name){
    if (name === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeToggle.textContent = 'Modo claro';
      themeToggle.setAttribute('aria-pressed','true');
    } else {
      root.setAttribute('data-theme', 'light');
      themeToggle.textContent = 'Modo escuro';
      themeToggle.setAttribute('aria-pressed','false');
    }
    localStorage.setItem('theme', name);
  }

  // Lightbox
  const thumbs = document.querySelectorAll('.gallery .thumb img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeLB = document.getElementById('closeLightbox');

  thumbs.forEach(img => {
    img.addEventListener('click', () => {
      const src = img.dataset.full || img.src;
      lightboxImg.src = src;
      lightboxImg.alt = img.alt || 'Imagem ampliada';
      lightbox.setAttribute('aria-hidden','false');
    });
  });

  closeLB.addEventListener('click', () => {
    lightbox.setAttribute('aria-hidden','true');
    lightboxImg.src = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.setAttribute('aria-hidden','true');
      lightboxImg.src = '';
    }
  });

  // Formulário (simulação)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    // Simples feedback ao usuário:
    alert(`Obrigado, ${name || 'amigo(a)'} — sua mensagem foi recebida (simulação).`);
    form.reset();
  });
});