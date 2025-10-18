// Destaque animado nos posts
const posts = document.querySelectorAll('.post');
posts.forEach(post => {
  post.addEventListener('mouseenter', () => {
    post.style.borderLeftColor = '#ff4d4d';
  });
  post.addEventListener('mouseleave', () => {
    post.style.borderLeftColor = '#e04545';
  });
});

// Efeito de alerta dinâmico no aside
const dicas = document.querySelector('aside p');
setInterval(() => {
  dicas.style.color = dicas.style.color === 'red' ? '#d8d8d8' : 'red';
}, 1200);
