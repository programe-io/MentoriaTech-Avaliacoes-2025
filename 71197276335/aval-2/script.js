// Mostra mensagem de boas-vindas
window.addEventListener('load', () => {
  alert('🐾 Bem-vindo ao Portal VetNews!');
});

// Destaca a notícia quando clicada
const noticias = document.querySelectorAll('.noticia');
noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticia.classList.toggle('ativa');
  });
});

// Efeito visual quando a notícia é clicada
const style = document.createElement('style');
style.textContent = `
  .noticia.ativa {
    background: #d9f2ee;
    box-shadow: 0 0 20px rgba(36, 92, 90, 0.5);
  }
`;
document.head.appendChild(style);
