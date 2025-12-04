


/* ====================== script.js ====================== */
/* Salve este bloco como: script.js */
(function(){'use strict';
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const canvas = document.getElementById('mapCanvas');
  const ctx = canvas.getContext('2d');
  function fixDPI(){
    const dpr = window.devicePixelRatio || 1;
    const {width, height} = canvas.getBoundingClientRect();
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.scale(dpr,dpr);
  }
  function desenharMapa(camada, zoom, mostrarAnc){
    fixDPI();ctx.clearRect(0,0,canvas.width,canvas.height);
    const g = ctx.createLinearGradient(0,0,canvas.width,canvas.height);g.addColorStop(0,'#071018'); g.addColorStop(1,'#0b0b12');ctx.fillStyle = g; ctx.fillRect(0,0,canvas.width,canvas.height);
    const pontos = 18;
    for(let i=0;i<pontos;i++){
      const x = Math.random() * canvas.width/ (window.devicePixelRatio||1);
      const y = Math.random() * canvas.height/ (window.devicePixelRatio||1);
      const nivel = Math.ceil(Math.random()*7);
      const radius = Math.max(6, nivel*2 + zoom);
      ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);
      ctx.fillStyle = `rgba(${50 + nivel*20}, ${30}, ${120 + nivel*10}, ${0.06 + nivel*0.03})`;
      ctx.fill();
      if(mostrarAnc && nivel>=5){ctx.strokeStyle = 'rgba(122,75,214,0.7)';ctx.lineWidth = 2; ctx.stroke();}
    }
    ctx.fillStyle = 'rgba(255,255,255,0.06)';ctx.fillRect(12,12,160,84);ctx.fillStyle = '#fff'; ctx.font = '12px system-ui';
    ctx.fillText('Camada: '+camada,20,32);ctx.fillText('Zoom: '+zoom,20,52);ctx.fillText('Ancestrais: '+(mostrarAnc? 'ON':'OFF'),20,72);
  }
  const camadaEl = document.getElementById('camada');
  const zoomEl = document.getElementById('zoom');
  const mostrarAncEl = document.getElementById('mostrar-anc');
  const resetBtn = document.getElementById('btn-reset');
  function atualizarMapa(){desenharMapa(camadaEl.value, parseInt(zoomEl.value,10), mostrarAncEl.checked);} 
  camadaEl.addEventListener('change', atualizarMapa);
  zoomEl.addEventListener('input', atualizarMapa);
  mostrarAncEl.addEventListener('change', atualizarMapa);
  resetBtn.addEventListener('click', ()=>{camadaEl.value='topo';zoomEl.value=3;mostrarAncEl.checked=false;atualizarMapa();});
  const ro = new ResizeObserver(()=>{atualizarMapa();});ro.observe(canvas);
  const calibra = document.getElementById('calibra-form');
  const out = document.getElementById('calibra-output');
  calibra.addEventListener('submit', function(e){e.preventDefault();const serial = this.serial.value.toUpperCase();const nivel = parseInt(this.nivel.value,10);
    if(!/^[A-Z0-9]{6}$/.test(serial) || isNaN(nivel) || nivel<1 || nivel>7){out.textContent = 'Erro: serial ou nível inválido.'; out.style.color='salmon'; return;} 
    const payload = {serial,nivel,timestamp:Date.now()};localStorage.setItem('ade:'+serial, JSON.stringify(payload));out.textContent = `AdÉ ${serial} calibrado para nível ${nivel}.`;out.style.color='lightgreen';
  });
  const expBtns = $$('.exp-btn');
  const logs = document.getElementById('logs');
  const tpl = document.getElementById('log-template');
  expBtns.forEach(btn=>btn.addEventListener('click', function(){const id = this.dataset.ex; const titulo = (id==='sim1')? 'Mutação Simulada' : 'Ancestral Simulado';const clone = tpl.content.cloneNode(true);clone.querySelector('h4').textContent = titulo;clone.querySelector('p').textContent = `Executado: ${new Date().toLocaleString()}. Resultado: ${Math.random()>0.6? 'Sucesso':'Falha'}.`;clone.querySelector('small').textContent = 'Simulação local — dados não persistem em servidores.';logs.prepend(clone);}));
  window.addEventListener('keydown', (ev)=>{if(ev.key==='m' && (ev.ctrlKey||ev.metaKey)){ev.preventDefault(); document.body.classList.toggle('map-hidden'); atualizarMapa();}});
  class CriaturaCard extends HTMLElement{constructor(){super(); const shadow = this.attachShadow({mode:'open'}); const wrapper = document.createElement('article'); wrapper.setAttribute('part','card'); wrapper.innerHTML = `<h4>${this.getAttribute('nome')||'Sem nome'}</h4><p>${this.getAttribute('desc')||''}</p><slot></slot>`; const style = document.createElement('style'); style.textContent = `:host{display:block;padding:0.6rem;background:rgba(255,255,255,0.02);border-radius:8px}`; shadow.append(style,wrapper);} }
  customElements.define('cria-card', CriaturaCard);
  async function fetchLoreMock(){return new Promise((res)=>setTimeout(()=>res({title:'Itan — Resumo', updated:Date.now()}),400));}
  (async ()=>{const lore = await fetchLoreMock(); console.info('Lore carregado', lore);})();
  let animId=null; let t=0; function animLoop(){t += 0.02; const cx = 60, cy=60, r = 14 + Math.sin(t*2)*4; ctx.save(); ctx.globalCompositeOperation='lighter'; ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fillStyle='rgba(122,75,214,0.12)'; ctx.fill(); ctx.restore(); animId = requestAnimationFrame(animLoop);} atualizarMapa(); animLoop(); window.addEventListener('unload', ()=>{ if(animId) cancelAnimationFrame(animId); ro.disconnect(); });
})();