// Destaca o artigo clicado
const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticias.forEach(n => n.style.borderLeftColor = '#ff9ce8'); // reset
    noticia.style.borderLeftColor = '#b678d9'; // destaque
    noticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
