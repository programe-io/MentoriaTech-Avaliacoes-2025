// Interação com as imagens
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    alert('Você clicou em uma imagem do post!');
  });
});

// Efeito visual no header ao rolar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.classList.add('bg-blue-900', 'shadow-lg');
  } else {
    header.classList.remove('bg-blue-900', 'shadow-lg');
  }
});
