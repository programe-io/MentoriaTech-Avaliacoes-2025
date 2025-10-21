// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Criar botão Mostrar/Ocultar para o artigo
  const main = document.querySelector('main');
  const article = main.querySelector('article');
  const paragraph = article.querySelector('p');

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Ocultar artigo';
  toggleBtn.style.marginBottom = '10px';
  main.insertBefore(toggleBtn, article);

  toggleBtn.addEventListener('click', () => {
    if (paragraph.style.display === 'none') {
      paragraph.style.display = 'block';
      toggleBtn.textContent = 'Ocultar artigo';
    } else {
      paragraph.style.display = 'none';
      toggleBtn.textContent = 'Mostrar artigo';
    }
  });

  // Galeria clicável para mudar imagem principal
  const galleryImgs = document.querySelectorAll('aside img');
  const mainImg = article.querySelector('img.post-image');

  galleryImgs.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      mainImg.src = img.src;
      mainImg.alt = img.alt;
    });
  });

  // Criar botão Curtir com contador
  const likeBtn = document.createElement('button');
  likeBtn.textContent = 'Curtir (0)';
  likeBtn.style.display = 'block';
  likeBtn.style.marginTop = '15px';
  article.appendChild(likeBtn);

  let likeCount = 0;

  likeBtn.addEventListener('click', () => {
    likeCount++;
    likeBtn.textContent = `Curtir (${likeCount})`;
  });

});
