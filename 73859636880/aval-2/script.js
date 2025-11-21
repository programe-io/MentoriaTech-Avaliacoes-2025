// Estado do desenho
let drawing = false;
let ctx;
let lastX = 0;
let lastY = 0;

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawCanvas');
  ctx = canvas.getContext('2d', { alpha: true });

  // Configuração inicial
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#222';
  ctx.lineWidth = 6;

  const colorInput = document.getElementById('brushColor');
  const sizeInput = document.getElementById('brushSize');
  const clearBtn = document.getElementById('clearBtn');
  const saveBtn = document.getElementById('saveBtn');

  colorInput.addEventListener('input', () => {
    ctx.strokeStyle = colorInput.value;
  });

  sizeInput.addEventListener('input', () => {
    ctx.lineWidth = Number(sizeInput.value);
  });

  // Corrige coordenadas relativas ao canvas
  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const isTouch = e.touches && e.touches[0];
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;
    return {
      x: Math.round((clientX - rect.left) * (canvas.width / rect.width)),
      y: Math.round((clientY - rect.top) * (canvas.height / rect.height)),
    };
  };

  // Mouse
  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const { x, y } = getPos(e);
    lastX = x; lastY = y;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x; lastY = y;
  });

  canvas.addEventListener('mouseup', () => drawing = false);
  canvas.addEventListener('mouseleave', () => drawing = false);

  // Toque
  canvas.addEventListener('touchstart', (e) => {
    drawing = true;
    const { x, y } = getPos(e);
    lastX = x; lastY = y;
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    if (!drawing) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x; lastY = y;
    e.preventDefault();
  }, { passive: false });

  canvas.addEventListener('touchend', () => drawing = false);

  // Limpar
  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // Salvar
  saveBtn.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `desenho-${Date.now()}.png`;
    link.click();
  });

  // Ajusta cor e tamanho ao carregar
  ctx.strokeStyle = colorInput.value;
  ctx.lineWidth = Number(sizeInput.value);
});