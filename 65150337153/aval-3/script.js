// script.js (separado)
// Funções: tema, validação do formulário, contador, desenho no canvas, geração de cards dinâmica
document.addEventListener('DOMContentLoaded', () => {
  // Ano no footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Tema (dark/light) com localStorage
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  themeBtn.addEventListener('click', () => {
    const current = localStorage.getItem('theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // Form handling: validação simples e mostrar output
  const form = document.getElementById('contact-form');
  const output = document.getElementById('form-output');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    if (!nome || !email) {
      output.textContent = 'Por favor preencha nome e email.';
      return;
    }
    // Simula envio e salva no localStorage
    const data = {
      nome, email, assunto: form.assunto.value, quando: new Date().toISOString()
    };
    saveSubmission(data);
    output.textContent = `Obrigado, ${nome}! Mensagem recebida.`;
    form.reset();
  });

  // Canvas: desenho simples
  const canvas = document.getElementById('sig-canvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    drawSignature(ctx);
  }

  // Pequena animação: preencher progress com JS
  const progress = document.getElementById('progress');
  let p = parseInt(progress.value, 10) || 0;
  setInterval(() => {
    p = (p + 1) % 101;
    progress.value = p;
  }, 1000);

  // Interatividade adicional: click em cards cria alerta (exemplo)
  document.querySelectorAll('.card').forEach((c) => {
    c.addEventListener('click', () => {
      const title = c.querySelector('h3')?.textContent || 'Projeto';
      alert(`Abrindo detalhes de: ${title}`);
    });
  });

  // Função utilitárias
  function setTheme(name) {
    if (name === 'light') {
      document.body.classList.add('light');
      themeBtn.setAttribute('aria-pressed', 'true');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      themeBtn.setAttribute('aria-pressed', 'false');
      localStorage.setItem('theme', 'dark');
    }
  }

  function saveSubmission(obj) {
    const arr = JSON.parse(localStorage.getItem('submissions') || '[]');
    arr.push(obj);
    localStorage.setItem('submissions', JSON.stringify(arr));
  }

  function drawSignature(ctx) {
    // fundo
    ctx.fillStyle = '#071028';
    ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);

    // curva estilizada
    ctx.strokeStyle = '#39a0ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 150);
    ctx.quadraticCurveTo(100, 20, 390, 150);
    ctx.stroke();

    // texto
    ctx.fillStyle = '#9fb3c8';
    ctx.font = '16px sans-serif';
    ctx.fillText('Joel Ribeiro — Demo Canvas', 10, 30);
  }

  // Exemplo: gerar dinamicamente um botão que mostra o número de envios
  const statsBtn = document.createElement('button');
  statsBtn.textContent = 'Ver envios';
  statsBtn.style.marginLeft = '8px';
  statsBtn.addEventListener('click', () => {
    const arr = JSON.parse(localStorage.getItem('submissions') || '[]');
    alert(`Envios salvos: ${arr.length}`);
  });
  document.querySelector('.topbar').appendChild(statsBtn);

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
