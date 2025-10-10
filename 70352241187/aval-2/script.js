// === ANIMAÇÃO DE APARECIMENTO AO SCROLL ===
const posts = document.querySelectorAll('.post');

function revealPosts() {
  const triggerBottom = window.innerHeight * 0.85;

  posts.forEach(post => {
    const postTop = post.getBoundingClientRect().top;

    if (postTop < triggerBottom) {
      post.classList.add('visible');
    }
  });
}

// Chama ao scroll e no carregamento inicial
window.addEventListener('scroll', revealPosts);
window.addEventListener('load', revealPosts);