// ======== Modal de Imagens ========
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const fechar = document.getElementById('fechar');

document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('open');
  });
});

fechar.addEventListener('click', () => {
  modal.classList.remove('open');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
  }
});

// ======== Botão “Ler Mais” (se tiver texto extra) ========
const lerMais = document.getElementById('lerMais');
const extraTexto = document.getElementById('extraTexto');

if (lerMais && extraTexto) {
  lerMais.addEventListener('click', () => {
    if (extraTexto.style.display === 'block') {
      extraTexto.style.display = 'none';
      lerMais.textContent = 'Ler mais';
    } else {
      extraTexto.style.display = 'block';
      lerMais.textContent = 'Mostrar menos';
    }
  });
}
