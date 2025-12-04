// preencher ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// menu simples (acessibilidade)
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
menuBtn?.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!expanded));
  mainNav.style.display = expanded ? '' : 'flex';
});

// botão de "dizer oi"
const btnContato = document.getElementById('btnContato');
btnContato?.addEventListener('click', () => {
  alert('Obrigado por visitar meu portfólio!');
});

// submissão do formulário (simulada)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form?.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {
    status.textContent = 'Preencha todos os campos.';
    return;
  }

  // simula envio
  status.textContent = 'Enviando...';
  setTimeout(() => {
    status.textContent = 'Mensagem enviada. Obrigado!';
    form.reset();
  }, 700);
});
