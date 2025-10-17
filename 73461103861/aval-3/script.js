// Destaca o artigo clicado
const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticias.forEach(n => n.style.borderLeftColor = '#ff3c3c'); // reset
    noticia.style.borderLeftColor = '#00e0ff'; // destaque
    noticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
