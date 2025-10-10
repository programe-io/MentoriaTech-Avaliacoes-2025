// === RESUMO DO RELATÓRIO ===
const btnRelatorio = document.getElementById('downloadReport');
const resumo = document.getElementById('resumo');
const resumoTexto = document.getElementById('resumoTexto');

btnRelatorio.addEventListener('click', () => {
  resumoTexto.textContent = "Este relatório analisa o impacto crescente da Inteligência Artificial nas próximas décadas, abordando inovações, riscos e oportunidades para a sociedade e a economia global.";
  resumo.style.display = resumo.style.display === 'none' ? 'block' : 'none';
});

// === LIGHTBOX DA GALERIA ===
const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.classList.remove('active');
});

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

window.addEventListener('scroll', revealPosts);
window.addEventListener('load', revealPosts);