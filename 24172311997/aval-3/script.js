// script.js — interatividade básica do site CETI Joel Ribeiro

// Rolagem suave ao clicar no menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Expansão dos cards de projetos
document.querySelectorAll('.card').forEach(card => {
  card.style.cursor = 'pointer';

  const text = card.querySelector('p');
  if (text) text.style.display = 'none';

  card.addEventListener('click', () => {
    const isVisible = text.style.display === 'block';
    text.style.display = isVisible ? 'none' : 'block';
  });
});

// Destacar seção ativa na rolagem
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 200) current = sec.getAttribute('id');
  });

  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});
