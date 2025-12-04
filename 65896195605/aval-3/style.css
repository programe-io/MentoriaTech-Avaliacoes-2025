// script.js — interações: tema, modal, form simples e pequenos efeitos
document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  const body = document.body;
  const promoBtn = document.getElementById('openPromo');
  const promoDlg = document.getElementById('promoDlg');
  const closePromo = document.getElementById('closePromo');
  const form = document.getElementById('contactForm');
  const output = document.getElementById('formOutput');

  // tema toggle (salva em localStorage)
  const saved = localStorage.getItem('site-theme');
  if (saved === 'light') body.classList.add('theme-light');
  themeBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('theme-light');
    themeBtn.setAttribute('aria-pressed', String(isLight));
    localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
  });

  // modal/dialog (progressive enhancement)
  promoBtn.addEventListener('click', async () => {
    if (typeof promoDlg.showModal === 'function') {
      promoDlg.showModal();
    } else {
      alert('Promo: Página Diva — visite os workshops!');
    }
  });
  closePromo.addEventListener('click', () => promoDlg.close());

  // form: validação e feedback
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      output.textContent = 'Corrija os campos destacados antes de enviar.';
      return;
    }
    const data = new FormData(form);
    const nome = data.get('nome');
    output.textContent = `Obrigado, ${nome}! Sua mensagem foi recebida.`;
    form.reset();
  });

  // pequenos toques: keyboard shortcut para abrir promo (D)
  window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'd' && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      if (typeof promoDlg.showModal === 'function') promoDlg.showModal();
    }
  });
});
