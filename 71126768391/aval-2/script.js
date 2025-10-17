// Seleciona todas as notícias
const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    // Remove destaque de todas
    noticias.forEach(n => n.style.border = 'none');

    // Adiciona destaque na clicada
    noticia.style.border = '3px solid #ff6f3c';
    noticia.style.borderRadius = '15px';
  });
});
