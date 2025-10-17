const posts = document.querySelectorAll('.noticia');

posts.forEach(post => {
  post.addEventListener('click', () => {
    posts.forEach(p => p.style.borderLeftColor = '#c68b59');
    post.style.borderLeftColor = '#8b5a2b';
    post.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
