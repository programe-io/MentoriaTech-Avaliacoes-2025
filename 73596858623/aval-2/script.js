// Menu toggle para mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle && menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Exemplo: pequena função para demonstrar interação (pode remover)
document.addEventListener('DOMContentLoaded', () => {
  // se quiser, aqui podemos trocar a imagem dinamicamente, etc.
  // Exemplo: console.log('Página carregada');
});
