/* script.js - interações e animações (JavaScript, não Java) */

/* Helper: efeito de digitação para a tagline */
(function typingEffect(){
  const tagline = document.querySelector('.tagline');
  const text = 'Bem-vindo à página mais animada sobre Joel.';
  let i = 0;
  tagline.textContent = '';
  const timer = setInterval(() => {
    tagline.textContent += text[i++];
    if (i >= text.length) clearInterval(timer);
  }, 30);
})();

/* Alternar tema (simples) */
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  toggleTheme.setAttribute('aria-pressed', String(isDark));
  // ajuste de cores simples
  if (isDark) document.body.style.filter = 'saturate(.85) hue-rotate(200deg)';
  else document.body.style.filter = '';
});

/* Form: simulação de envio */
const form = document.getElementById('newsletter');
const output = document.getElementById('formOutput');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value || 'amigo';
  output.textContent = `Obrigado, ${nome}! Você está inscrito 🎉`;
  // efeito visual
  document.getElementById('btnSubscribe').textContent = 'Enviado!';
});

/* Confetti simples no canvas */
(function confetti(){
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  // ajustar para dpi
  function fitCanvas() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    ctx.scale(ratio, ratio);
  }
  fitCanvas();
  window.addEventListener('resize', fitCanvas);

  const colors = ['#ff6b6b','#ffd93d','#6bf178','#6bd3ff','#c39cff'];
  const pieces = [];
  for (let i=0;i<40;i++){
    pieces.push({
      x: Math.random()*canvas.clientWidth,
      y: Math.random()*canvas.clientHeight - canvas.clientHeight,
      r: (Math.random()*6)+4,
      c: colors[Math.floor(Math.random()*colors.length)],
      vel: (Math.random()*1.5)+0.5,
      rot: Math.random()*360
    });
  }

  function draw(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
    pieces.forEach(p=>{
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.6);
      ctx.restore();

      p.y += p.vel;
      p.rot += p.vel * 2;
      if (p.y > canvas.clientHeight + 20){ p.y = -20; p.x = Math.random()*canvas.clientWidth; }
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* Pequeno easter egg: tecla 'J' mostra um alerta animado */
document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'j') {
    const el = document.createElement('div');
    el.textContent = 'Joel manda um alô ✨';
    el.style.position = 'fixed';
    el.style.right = '1rem';
    el.style.bottom = '1rem';
    el.style.padding = '.6rem 1rem';
    el.style.borderRadius = '12px';
    el.style.background = 'rgba(0,0,0,0.8)';
    el.style.color = 'white';
    el.style.zIndex = 9999;
    el.style.transform = 'translateY(20px)';
    el.style.opacity = '0';
    el.style.transition = 'all .45s ease';
    document.body.appendChild(el);
    requestAnimationFrame(()=>{ el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
    setTimeout(()=>{ el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; setTimeout(()=>el.remove(),500); },2000);
  }
});
