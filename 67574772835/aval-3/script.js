// Alterna menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Rolagem suave
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Feedback simples do formulário
document.getElementById('enviar')?.addEventListener('click', () => {
  const nome = document.getElementById('nome')?.value.trim() || 'Visitante';
  const msg = document.getElementById('mensagem')?.value.trim();
  alert(msg ? `Obrigado, ${nome}! Recebemos sua mensagem.` : `Olá, ${nome}! Escreva uma mensagem antes de enviar.`);
});
