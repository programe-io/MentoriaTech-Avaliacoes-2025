/* script.js
   Salve como script.js (mesma pasta do index.html)
   Scripts:
   - Inserir ano atual no rodapé
   - Animar engrenagens (rotacionar) e ativar quando estiver visível
   - IntersectionObserver para revelar itens da timeline
*/

(function(){
  'use strict';

  // Inserir ano atual no rodapé
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Gears auto-rotating - usando transform via JS para começar e parar suavemente
  const gearLg = document.querySelector('.gear-lg');
  const gearSm = document.querySelector('.gear-sm');
  let angleLg = 0;
  let angleSm = 0;
  let running = true;

  function step(){
    if(!running) return;
    angleLg = (angleLg + 0.45) % 360; // controla velocidade
    angleSm = (angleSm - 0.75) % 360; // rotação contrária ligeiramente mais rápida
    if(gearLg) gearLg.style.transform = `rotate(${angleLg}deg)`;
    if(gearSm) gearSm.style.transform = `rotate(${angleSm}deg)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  // Pausar animação se aba estiver inativa para economia de CPU
  document.addEventListener('visibilitychange', function(){
    running = !document.hidden;
    if(running) requestAnimationFrame(step);
  });

  // Se quiser, parar quando hover (mais responsivo)
  [gearLg, gearSm].forEach(g => {
    if(!g) return;
    g.addEventListener('mouseenter', ()=> running = false);
    g.addEventListener('mouseleave', ()=> { running = true; requestAnimationFrame(step); });
  });

  // IntersectionObserver para revelar elementos com classe .reveal
  const reveals = document.querySelectorAll('.reveal');
  const ioOptions = { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 };

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        // se quiser que apareça apenas uma vez:
        obs.unobserve(entry.target);
      }
    });
  }, ioOptions);

  reveals.forEach(r => revealObserver.observe(r));

  // Carregamento de imagens "placeholder" (melhora performance)
  // Aqui usamos data-placeholder para estilo; opcionalmente pode trocar por imagens reais.
  document.querySelectorAll('img[data-placeholder]').forEach(img => {
    const key = img.getAttribute('data-placeholder') || 'placeholder';
    // desenhar um SVG simples inline como data URL para cada tipo
    let svg;
    switch(key){
      case 'vapor':
        svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='270'><rect width='100%' height='100%' fill='#051122'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7aa8b1' font-size='20'>Fábrica a vapor</text></svg>`;
        break;
      case 'assembly':
        svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='270'><rect width='100%' height='100%' fill='#051122'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7aa8b1' font-size='20'>Linha de montagem</text></svg>`;
        break;
      case 'automation':
        svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='270'><rect width='100%' height='100%' fill='#051122'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7aa8b1' font-size='20'>Automação</text></svg>`;
        break;
      case 'ai':
      default:
        svg = `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='270'><rect width='100%' height='100%' fill='#051122'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#7aa8b1' font-size='20'>Indústria 4.0</text></svg>`;
        break;
    }
    const encoded = encodeURIComponent(svg).replace(/'/g,'%27').replace(/"/g,'%22');
    img.src = `data:image/svg+xml;charset=UTF-8,${encoded}`;
  });

  // Acessibilidade: permitir focar nos cartões via teclado e revelar ao focar
  document.querySelectorAll('.timeline-card').forEach(card => {
    card.setAttribute('tabindex','0');
    card.addEventListener('focus', () => card.classList.add('revealed'));
  });

})();