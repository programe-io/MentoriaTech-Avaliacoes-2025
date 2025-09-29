// script.js

// --- Modo Escuro / Claro ---
const toggleButton = document.getElementById('toggle-dark');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// --- Mensagem de Boas-Vindas Dinâmica ---
const welcome = document.getElementById('welcome');
const userHour = new Date().getHours();

let greeting = 'Bem-vindo!';
if (userHour >= 5 && userHour < 12) {
  greeting = 'Bom dia!';
} else if (userHour >= 12 && userHour < 18) {
  greeting = 'Boa tarde!';
} else {
  greeting = 'Boa noite!';
}
welcome.textContent = greeting;

// --- Animação suave de rolagem ---
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// --- Menu ativo com base na rolagem ---
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.scrollY;

  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// --- Validação simples de formulário ---
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('[name="nome"]');
    const email = form.querySelector('[name="email"]');
    const message = form.querySelector('[name="mensagem"]');

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert('Por favor, preencha todos os campos!');
    }
  });
}
