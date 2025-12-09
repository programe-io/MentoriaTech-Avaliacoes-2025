// Toggle sidebar (mobile)
const btnSidebar = document.getElementById('btnSidebar');
const sidebar = document.getElementById('sidebar');

btnSidebar.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  sidebar.setAttribute('aria-hidden', !open);
  btnSidebar.setAttribute('aria-expanded', open);
});

// Info modal
const infoButtons = document.querySelectorAll('.info-btn');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModal') || document.getElementById('closeModal') || document.querySelector('.close');

infoButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const info = btn.getAttribute('data-info') || 'Sem informações adicionais.';
    modalContent.innerText = info;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    // move focus to modal content for accessibility
    modalContent.focus && modalContent.focus();
  });
});

// fechar modal
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  });
}

// fechar modal clicando fora
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }
});