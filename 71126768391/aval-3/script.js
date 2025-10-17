const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    noticias.forEach(n => n.style.border = 'none');
    noticia.style.border = '3px solid #ff4500';
    noticia.style.borderRadius = '20px';
    noticia.scrollIntoView({ behavior: 'smooth', block: 'center' });
