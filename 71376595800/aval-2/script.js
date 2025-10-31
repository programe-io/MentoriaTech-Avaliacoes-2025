// =============================
// JavaScript — Cristiano Ronaldo Fan Site
// =============================

// Navegação suave para seções
const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Botão de envio do formulário (feedback visual)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado por enviar sua mensagem! Este é um site de fã.');
    form.reset();
  });
}

// Animação simples para estatísticas
const stats = document.querySelectorAll('.stat div:first-child');

function animateStats() {
  stats.forEach(stat => {
    const value = parseInt(stat.textContent.replace('+', ''));
    if (!isNaN(value)) {
      let current = 0;
      const increment = Math.ceil(value / 100);
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          stat.textContent = value + '+';
          clearInterval(interval);
        } else {
          stat.textContent = current + '+';
        }
      }, 20);
    }
  });
}

window.addEventListener('load', animateStats);

// Tema escuro / claro (opcional)
const toggleTheme = document.createElement('button');
toggleTheme.textContent = 'Alternar tema';
toggleTheme.style.position = 'fixed';
toggleTheme.style.bottom = '20px';
toggleTheme.style.right = '20px';
toggleTheme.style.background = 'var(--accent)';
toggleTheme.style.border = 'none';
toggleTheme.style.padding = '10px 14px';
toggleTheme.style.borderRadius = '8px';
toggleTheme.style.fontWeight = '700';
toggleTheme.style.cursor = 'pointer';
toggleTheme.style.color = '#07202b';

document.body.appendChild(toggleTheme);

let darkMode = true;

toggleTheme.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode
    ? 'linear-gradient(180deg,#051428 0%, #071827 100%)'
    : 'linear-gradient(180deg,#fefefe 0%, #e2e8f0 100%)';
  document.body.style.color = darkMode ? '#eaf2ff' : '#111827';
  toggleTheme.style.background = darkMode ? 'var(--accent)' : '#1e293b';
  toggleTheme.style.color = darkMode ? '#07202b' : '#f8fafc';
});