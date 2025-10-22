// Navegação entre seções
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    link.classList.add('active');
    document.getElementById(link.dataset.section).classList.add('active');
  });
});

// Troca de abas
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.tab;
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(`tab-${id}`).classList.add('active');
  });
});

// Efeito visual — destacar a aba ativa
tabButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
});
