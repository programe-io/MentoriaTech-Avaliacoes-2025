// Modal da galeria
const thumbs = document.querySelectorAll('.thumb');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = thumb.dataset.src;
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});