// interacoes.js

document.addEventListener('DOMContentLoaded', () => {
  // 1. Fade in para o artigo (texto + imagem)
  const article = document.querySelector('main article');
  if (article) {
    article.style.opacity = 0;
    article.style.transition = 'opacity 1.5s ease-in-out';
    setTimeout(() => {
      article.style.opacity = 1;
    }, 300);
  }

  // 2. Hover suave nas imagens da galeria
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(img => {
    img.style.transition = 'transform 0.4s ease, filter 0.4s ease';
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
      img.style.filter = 'brightness(1.2)';
      img.style.cursor = 'pointer';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
      img.style.filter = 'brightness(1)';
    });
  });

  // 3. Efeito piscar elétrico no Electabuzz (imagem)
  const electabuzzImg = document.querySelector('.post-image');
  if (electabuzzImg) {
    electabuzzImg.style.transition = 'filter 0.3s ease-in-out';
    electabuzzImg.addEventListener('mouseenter', () => {
      let flickerCount = 0;
      const flickerInterval = setInterval(() => {
        if (flickerCount % 2 === 0) {
          electabuzzImg.style.filter = 'brightness(1.8) drop-shadow(0 0 8px #ffff33)';
        } else {
          electabuzzImg.style.filter = 'brightness(1)';
        }
        flickerCount++;
        if (flickerCount > 5) clearInterval(flickerInterval);
      }, 150);
    });
    electabuzzImg.addEventListener('mouseleave', () => {
      electabuzzImg.style.filter = 'brightness(1)';
    });
  }

  // 4. Navegação: slide e highlight nos links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.style.transition = 'color 0.3s ease, transform 0.3s ease';
    link.addEventListener('mouseenter', () => {
      link.style.color = '#FFCB05'; // amarelo Pokémon
      link.style.transform = 'translateY(-3px)';
      link.style.textShadow = '0 0 6px #FFCB05';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '';
      link.style.transform = 'translateY(0)';
      link.style.textShadow = 'none';
    });
  });
});
