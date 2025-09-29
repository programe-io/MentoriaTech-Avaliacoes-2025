// Clique nas imagens da galeria exibe um alerta
document.querySelectorAll('.img-box img').forEach(img => {
  img.addEventListener('click', () => {
    alert('Você clicou na imagem!');
  });
});
