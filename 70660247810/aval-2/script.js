// Alternar tema claro/escuro com persistência
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(mode) {
  if (mode === 'light') {
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = 'Tema escuro';
  } else {
    root.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = 'Tema claro';
  }
}

// Carregar tema salvo
const saved = localStorage.getItem('theme');
setTheme(saved === 'light' ? 'light' : 'dark');

// Alternar ao clicar
themeToggle.addEventListener('click', () => {
  const isLight = root.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
});

// Modal da galeria
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.gallery .tile img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalCaption.text