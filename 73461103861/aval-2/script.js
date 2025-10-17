// Destaca o artigo ao clicar
const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticias.forEach(n => n.style.borderLeftColor = '#1b1b1b'); // reset
    noticia.style.borderLeftColor = '#f39c12'; // destaque
    noticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
