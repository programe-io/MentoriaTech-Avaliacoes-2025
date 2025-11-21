;// Lightbox da galeria
const thumbs = document.querySelectorAll('.thumb');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.dataset.full;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = "none";
});

// Formulário
document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();

  const nome = document.getElementById('nome').value;

  alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
  this.reset();
});