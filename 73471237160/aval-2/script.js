const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticias.forEach(n => n.style.borderLeftColor = '#4fc3f7'); // reset
    noticia.style.borderLeftColor = '#0288d1'; // destaque
    noticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
