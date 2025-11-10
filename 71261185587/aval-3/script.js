// ==========================
// PIZZARIA BELLA FORNO - JS
// ==========================

// ----- Alternar tema (claro/escuro) -----
const themeToggle = document.createElement('button');
themeToggle.textContent = '🌙 Modo Escuro';
themeToggle.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #e85a4f;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
`;
document.body.appendChild(themeToggle);

const body = document.body;

// Carregar preferência anterior
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '☀️ Modo Claro';
}

// Alternar tema ao clicar
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// ----- Filtro de busca -----
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = '🔍 Buscar pizza...';
searchInput.style.cssText = `
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.08);
  color: #fff;
  margin: 10px 0 20px 0;
  font-size: 15px;
`;
document.querySelector('.pizzas').prepend(searchInput);

searchInput.addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(term) ? 'flex' : 'none';
  });
});

// ----- Alerta do botão principal -----
const ctaBtn = document.querySelector('.cta');
if (ctaBtn) {
  ctaBtn.addEventListener('click', e => {
    e.preventDefault();
    alert('🍕 Pedido rápido! Vá até o cardápio e escolha sua pizza favorita.');
  });
}

// ----- Tema claro (CSS alternativo via JS) -----
const style = document.createElement('style');
style.textContent = `
  .light-mode {
    background: #fafafa !important;
    color: #111 !important;
  }
  .light-mode .container {
    background: #ffffff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  }
  .light-mode .pizzas,
  .light-mode aside.sidebar {
    background: #f3f3f3;
    color: #111;
  }
  .light-mode .card {
    background: #fff;
    border: 1px solid #ddd;
  }
  .light-mode .nav-links a {
    color: #555;
  }
  .light-mode .nav-links a:hover {
    background: #eaeaea;
    color: #000;
  }
`;
document.head.appendChild(style);
