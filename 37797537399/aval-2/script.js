// fundo_animado.js

// Criação de partículas animadas no fundo
const canvas = document.createElement('canvas');
canvas.classList.add('particulas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let largura = window.innerWidth;
let altura = window.innerHeight;
canvas.width = largura;
canvas.height = altura;

// Cria partículas com posição e velocidade aleatórias
const particulas = [];
const total = Math.round((largura * altura) / 90000); // densidade ajustável

for (let i = 0; i < total; i++) {
  particulas.push({
    x: Math.random() * largura,
    y: Math.random() * altura,
    r: Math.random() * 1.5 + 0.5,
    v: Math.random() * 0.3 + 0.2,
  });
}

// Função para atualizar e desenhar partículas
function animar() {
  ctx.clearRect(0, 0, largura, altura);

  particulas.forEach((p) => {
    p.y -= p.v;
    if (p.y < 0) p.y = altura;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fill();
  });

  requestAnimationFrame(animar);
}
animar();

// Atualiza o tamanho do canvas ao redimensionar a tela
window.addEventListener('resize', () => {
  largura = window.innerWidth;
  altura = window.innerHeight;
  canvas.width = largura;
  canvas.height = altura;
});
