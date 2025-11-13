// script.js — Interatividade básica para o template "Website Simples"

// Seleciona o formulário e o botão CTA
const form = document.getElementById('contactForm');
const cta = document.getElementById('ctaDemo');
const msgEl = document.getElementById('formResult');

// Envio de formulário simulado
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
      msgEl.textContent = 'Por favor, preencha nome e e-mail.';
      msgEl.style.color = 'crimson';
      return;
    }

    msgEl.textContent = 'Enviando...';
    msgEl.style.color = '#6b7280';

    // Simula requisição assíncrona
    setTimeout(() => {
      msgEl.textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
      msgEl.style.color = 'green';
      form.reset();
    }, 900);
  });
}

// Alerta simples no botão de demonstração
if (cta) {
  cta.addEventListener('click', () => {
    alert('Este é apenas um exemplo de interação!');
  });
}

// Tema claro/escuro
const toggle = document.createElement('button');
toggle.textContent = 'Alternar tema';
toggle.style.cssText = 'posit