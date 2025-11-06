document.addEventListener('DOMContentLoaded', () => {
  const thumbBar = document.querySelector('.thumb-bar');
  const displayedImage = document.getElementById('displayedImage');
  const imageTitle = document.getElementById('imageTitle');

  thumbBar.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName.toLowerCase() === 'img') {
      const fullSrc = target.getAttribute('data-full');
      const title = target.getAttribute('data-title');
      displayedImage.src = fullSrc;
      displayedImage.alt = title;
      imageTitle.textContent = title;
    }
  });

  // Inicialização opcional: exibir a primeira imagem automaticamente
  const firstThumb = thumbBar.querySelector('img');
  if (firstThumb) {
    firstThumb.click();
  }
});
