// script.js — JavaScript para o site do São Paulo FC
// Coloque este arquivo ao lado de site-sao-paulo-fc.html e adicione:
// <script src="script.js"></script> antes do </body>

// --- Navegação suave ---
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Botão de voltar ao topo ---
  const toTop = document.createElement('button');
  toTop.textContent = '↑';
  Object.assign(toTop.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 50
  });
  document.body.appendChild(toTop);

  window.addEventListener('scroll', () => {
    toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Formulário de contato ---
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const msg = form.querySelector('textarea').value.trim();

      if (!name || !email || !msg) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Simulação de envio (poderia usar fetch API para um backend real)
      alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
      form.reset();
    });
  }

  // --- Animações simples de entrada ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
    observer.observe(sec);
  });
});

// --- CSS complementar (adicione no styles.css se quiser animação suave) ---
// .hidden { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
// .visible { opacity: 1; transform: translateY(0); }