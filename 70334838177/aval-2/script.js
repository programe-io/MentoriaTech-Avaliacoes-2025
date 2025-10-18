const posts = document.querySelectorAll('.noticia');

// Destaque visual no clique
posts.forEach(post => {
  post.addEventListener('click', () => {
    posts.forEach(p => p.style.borderLeftColor = '#00aaff');
    post.style.borderLeftColor = '#00ffc8';
    post.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Efeito neon dinâmico nos cupons
const cupons = document.querySelectorAll('.cupom');
setInterval(() => {
  cupons.forEach(c => {
    c.style.textShadow = c.style.textShadow ? '' : '0 0 15px #00eaff';
  });
}, 600);
