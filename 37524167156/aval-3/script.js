// script.js - interatividade: menu mobile e modal para visualizar cards

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn?.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // Modal logic
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalListen = document.getElementById('modalListen');

  function openModal(data) {
    modalImage.src = data.image;
    modalImage.alt = data.title || 'Imagem';
    modalTitle.textContent = data.title || 'Título';
    modalDesc.textContent = data.desc || '';
    // Example: modalListen pode apontar para pesquisa no YouTube (não obrigatório)
    modalListen.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(data.title + ' Sade')}`;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    // focus for accessibility
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Attach to card buttons
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

  // Close handlers
  modalClose?.addEventListener('click', closeModal);
  modalCloseBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  // close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });

  // Improves keyboard accessibility: trap focus inside modal while open (simple)
  document.addEventListener('focusin', (e) => {
    if (!modal.classList.contains('show')) return;
    if (!modal.contains(e.target)) {
      e.stopPropagation();
      modalClose.focus();
    }
  });
});
