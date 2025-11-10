// ---------- ROLAGEM SUAVE ----------
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// ---------- MENSAGEM DE CONFIRMAÇÃO NO FORMULÁRIO ----------
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('💋 Obrigada por entrar em contato! Retornarei em breve.');
    form.reset();
  });
}

// ---------- MODO ESCURO (DARK MODE) ----------
const toggleButton = document.createElement('button');
toggleButton.textContent = '🌙 Modo Escuro';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.backgroundColor = '#ff69b4';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.padding = '10px 15px';
toggleButton.style.borderRadius = '8px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.fontWeight = 'bold';
toggleButton.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
toggleButton.style.zIndex = '1000';

document.body.appendChild(toggleButton);

let darkMode = false;

toggleButton.addEventListener('click', () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = '#2c2c2c';
    document.body.style.color = '#f5f5f5';
    document.querySelectorAll('header, footer, nav, .contato').forEach(el => {
      el.style.backgroundColor = '#3a3a3a';
      el.style.color = '#fff';
    });
    toggleButton.textContent = '☀️ Modo Claro';
  } else {
    document.body.style.backgroundColor = '#fffafc';
    document.body.style.color = '#333';
    document.querySelectorAll('header, footer, nav, .contato').forEach(el => {
      el.style = '';
    });
    toggleButton.textContent = '🌙 Modo Escuro';
  }
});
