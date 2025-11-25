// Ao carregar: adiciona comportamento às miniaturas
document.addEventListener('DOMContentLoaded', function() {
  const thumbs = document.querySelectorAll('.thumb');
  const postImg = document.getElementById('postImage');

  // quando clicar numa miniatura: troca a imagem do post e abre modal
  thumbs.forEach(t => {
    t.addEventListener('click', function() {
      const src = this.src;
      postImg.src = src;
      openModalWith(src, this.alt || 'Imagem');
    });
  });

  // abrir modal ao clicar na imagem do post
  postImg.addEventListener('click', function() {
    openModalWith(this.src, 'Imagem do post');
  });

  // modal controls
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  function openModalWith(src, caption) {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalCaption.textContent = caption;
  }

  modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
  });

  // fecha modal ao clicar fora da imagem
  modal.addEventListener('click', function(e) {
    if (e.target === modal) modal.style.display = 'none';
  });
});