// Destaca o artigo clicado
const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticias.forEach(n => n.style.borderLeftColor = '#ff7eb9'); // reset
    noticia.style.borderLeftColor = '#a870d1'; // destaque
    noticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
