window.addEventListener('load', () => {
  alert('🎓 Bem-vindo ao Portal ENEM News!');
});

const noticias = document.querySelectorAll('.noticia');
noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticia.classList.toggle('ativa');
  });
});

const style = document.createElement('style');
style.textContent = `
  .noticia.ativa {
    background: #e6f0ff;
    box-shadow: 0 0 20px rgba(28, 78, 128, 0.5);
  }
`;
document.head.appendChild(style);
