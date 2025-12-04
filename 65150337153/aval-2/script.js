// script.js — separado do HTML
document.addEventListener('DOMContentLoaded', () => {
  // ano automático no rodapé
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // menu responsivo
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if(menuToggle && navList){
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  // botão de citação
  const quoteBtn = document.getElementById('quoteBtn');
  const quoteOutput = document.getElementById('quoteOutput');
  if(quoteBtn && quoteOutput){
    quoteBtn.addEventListener('click', () => {
      quoteOutput.textContent = '"I am not in danger, Skyler. I am the danger." — Walter White';
    });
  }

  // canvas simples: desenha texto e um retângulo no logoCanvas
  const logoCanvas = document.getElementById('logoCanvas');
  if(logoCanvas && logoCanvas.getContext){
    const ctx = logoCanvas.getContext('2d');
    ctx.clearRect(0,0,logoCanvas.width,logoCanvas.height);
    ctx.fillStyle = '#b5d454';
    ctx.fillRect(8,20,280,60);
    ctx.fillStyle = '#0b0b0b';
    ctx.font = '24px sans-serif';
    ctx.fillText('Breaking Bad', 20, 60);
  }

  // formulário: validação e simulação de envio (sem backend)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      if(!name || !email){
        alert('Preencha nome e email.');
        return;
      }
      // simula "envio"
      alert('Mensagem enviada! Obrigado pelo feedback, ' + name + '.');
      form.reset();
    });
  }
});
