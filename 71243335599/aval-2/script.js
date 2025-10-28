// === Selecionar elementos do SVG ===
const bodyEl = document.getElementById('body');
const headEl = document.getElementById('head');
const leftHand = document.getElementById('leftHand');
const rightHand = document.getElementById('rightHand');
const mouth = document.getElementById('mouth');
const badge = document.getElementById('badge');
const svg = document.getElementById('boneco');

// === Selecionar elementos de controle ===
const colorBody = document.getElementById('colorBody');
const colorHead = document.getElementById('colorHead');
const colorHands = document.getElementById('colorHands');
const colorBadge = document.getElementById('colorBadge');
const randomBtn = document.getElementById('random');
const resetBtn = document.getElementById('reset');

// === Cores iniciais ===
const initial = {
  body: '#6c5ce7',
  head: '#ffeaa7',
  hands: '#ff7675',
  badge: '#00cec9'
};

// === Aplicar cores escolhidas ===
function applyColors() {
  bodyEl.setAttribute('fill', colorBody.value);
  headEl.setAttribute('fill', colorHead.value);
  leftHand.setAttribute('fill', colorHands.value);
  rightHand.setAttribute('fill', colorHands.value);
  badge.setAttribute('fill', colorBadge.value);
}

// === Mudar expressão da boca ===
function setSmile(on) {
  if (on) {
    // Sorriso curvado para cima
    mouth.setAttribute('d', 'M110 88 q20 32 40 0');
  } else {
    // Boca neutra
    mouth.setAttribute('d', 'M115 96 q15 -6 30 0');
  }
}

// === Gerar cor aleatória ===
function randHex() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

// === Evento: aleatorizar cores ===
randomBtn.addEventListener('click', () => {
  colorBody.value = randHex();
  colorHead.value = randHex();
  colorHands.value = randHex();
  colorBadge.value = randHex();
  applyColors();
});

// === Evento: resetar cores e expressão ===
resetBtn.addEventListener('click', () => {
  colorBody.value = initial.body;
  colorHead.value = initial.head;
  colorHands.value = initial.hands;
  colorBadge.value = initial.badge;
  applyColors();
  setSmile(false);
});

// === Eventos de mudança de cor (inputs) ===
colorBody.addEventListener('input', applyColors);
colorHead.addEventListener('input', applyColors);
colorHands.addEventListener('input', applyColors);
colorBadge.addEventListener('input', applyColors);

// === Clique no boneco: alterna sorriso e faz “pulo” ===
svg.style.cursor = 'pointer';
svg.addEventListener('click', () => {
  const d = mouth.getAttribute('d') || '';
  const smiling = d.includes('32');
  setSmile(!smiling);

  // Adiciona animação temporária
  svg.classList.remove('bounce');
  void svg.offsetWidth; // reflow para reiniciar animação
  svg.classList.add('bounce');

  // Remove a classe depois de 0.7s
  setTimeout(() => svg.classList.remove('bounce'), 700);
});

// === Inicialização ===
applyColors();
setSmile(false);

// === Acessibilidade: permite ativar com Enter ou Espaço ===
svg.setAttribute('tabindex', '0');
svg.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    svg.click();
  }
});
