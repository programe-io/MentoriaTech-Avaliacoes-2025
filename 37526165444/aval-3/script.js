// script.js - menu mobile e modal funcional

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn?.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

  // Modal elements
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalMore = document.getElementById('modalMore');

  function openModal(data) {
    modalImage.src = data.image;
    modalImage.alt = data.title || 'Imagem';
    modalTitle.textContent = data.title || '';
    modalDesc.textContent = data.desc || '';
    modalMore.href = `https://www.google.com/search?q=${encodeURIComponent(data.title + ' Dexter')}`;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const el = e.currentTarget;
      const data = {
        title: el.dataset.title,
        desc: el.dataset.desc,
        image: el.dataset.image
      };
      openModal(data);
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modalCloseBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });

  // Simple focus trap while modal open
  document.addEventListener('focusin', (e) => {
    if (!modal.classList.contains('show')) return;
    if (!modal.contains(e.target)) {
      e.stopPropagation();
      modalClose.focus();
    }
  });
});
