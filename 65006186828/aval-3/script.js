// interações básicas e demonstração de uso de várias tags
document.addEventListener('DOMContentLoaded', () => {
  // menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');
  menuToggle && menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? '' : 'flex';
  });

  // exemplo: criar um card a partir do template
  const tpl = document.getElementById('card-template');
  if (tpl) {
    const clone = tpl.content.cloneNode(true);
    clone.querySelector('.card-title').textContent = 'Aviso de evento';
    clone.querySelector('.card-text').textContent = 'Feira de ciências na próxima sexta, participe!';
    document.querySelector('.container').appendChild(clone);
  }

  // canvas decorativo (simples)
  const canvas = document.getElementById('decor');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#e6f7ff';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#004aad';
    ctx.font = '18px sans-serif';
    ctx.fillText('CETI Joel Ribeiro — Teresina', 10, 40);
  }

  // usar output para demonstrar calculo simples
  const output = document.getElementById('result');
  if (output) output.value = 'site carregado';

  // formulário contato: captura e demonstra output/validation simples
  const formContato = document.getElementById('formContato');
  formContato && formContato.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const data = new FormData(formContato);
    const summary = Array.from(data.entries()).map(([k,v]) => `${k}: ${v}`).slice(0,5).join(' | ');
    if (output) output.textContent = 'Enviado: ' + summary;
    alert('Formulário enviado (simulação)');
    formContato.reset();
  });

  // controles de paginação (notícias)
  document.getElementById('older')?.addEventListener('click', () => alert('carregar notícias antigas (simulação)'));
  document.getElementById('newer')?.addEventListener('click', () => alert('carregar notícias recentes (simulação)'));

  // desenho SVG manipulação simples (se houver)
  const svgText = document.querySelector('svg text');
  if (svgText) svgText.addEventListener('click', () => alert('CETI — Teresina'));

  // demonstração de template de nota rápida via console
  console.log('CETI site inicializado');
});
