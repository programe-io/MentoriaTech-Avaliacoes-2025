// script.js
// Interações: menu, lightbox, form validation, canvas drawing, preenchimento de ano

document.addEventListener('DOMContentLoaded', () => {
  // ano no rodapé
  document.getElementById('year').textContent = new Date().getFullYear();

  // menu responsivo
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('main-menu');
  if(toggle){
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(menu.style.display === 'block') menu.style.display = '';
      else menu.style.display = 'block';
    });
  }

  // Lightbox galeria
  const thumbs = document.getElementById('thumbs');
  const lightbox = document.getElementById('lightbox');
  if(thumbs && lightbox){
    thumbs.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if(!img) return;
      const src = img.dataset.large || img.src;
      lightbox.innerHTML = '';
      const big = document.createElement('img');
      big.src = src;
      big.alt = img.alt || 'Imagem ampliada';
      lightbox.appendChild(big);
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden','false');
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden','true');
      lightbox.innerHTML = '';
    });
  }

  // Validação simples do formulário
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if(nome.length < 2){
        alert('Por favor, informe seu nome (mínimo 2 caracteres).');
        form.nome.focus();
        return;
      }
      // validação simples de email
      if(!/^\S+@\S+\.\S+$/.test(email)){
        alert('Por favor, informe um e-mail válido.');
        form.email.focus();
        return;
      }
      if(mensagem.length < 6){
        alert('Escreva uma mensagem mais detalhada.');
        form.mensagem.focus();
        return;
      }

      // simula envio
      alert('Mensagem enviada! A equipe entrará em contato.');
      form.reset();
    });
  }

  // canvas: desenha um logotipo estilizado
  const canvas = document.getElementById('logoCanvas');
  if(canvas && canvas.getContext){
    const ctx = canvas.getContext('2d');
    // fundo
    ctx.fillStyle = '#eaf6f8';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // forma: livro
    ctx.fillStyle = '#1f7a8c';
    roundRect(ctx, 40, 30, 220, 90, 12, true, false);

    // linhas simulando páginas
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    for(let i=1;i<=4;i++){
      ctx.beginPath();
      ctx.moveTo(60 + i*30, 40);
      ctx.lineTo(60 + i*30, 110);
      ctx.stroke();
    }

    // texto
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('CETI', 55, 60);
    ctx.font = '14px Arial';
    ctx.fillText('Joel Ribeiro', 55, 82);

    // função auxiliar para retângulo com cantos arredondados
    function roundRect(ctx, x, y, w, h, r, fill, stroke) {
      if (typeof stroke === 'undefined') { stroke = true; }
      if (typeof r === 'undefined') { r = 5; }
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
      if (fill) ctx.fill();
      if (stroke) ctx.stroke();
    }
  }

  // meter exemplo: atualiza valor aleatoriamente para simular ocupação
  const ocup = document.getElementById('ocupacao');
  if(ocup){
    const val = (Math.random() * 0.4) + 0.5; // entre 0.5 e 0.9
    ocup.value = val;
  }
});
