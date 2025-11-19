// script.js - Taxi Driver theme interactions
document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.card'));
  const searchInput = document.getElementById('search');
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Nav toggle (mobile)
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  // Modal elements
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  // --- Theme toggle with persistence ---
  const applyTheme = (theme) => {
    if (theme === 'light') {
      body.classList.add('light');
      themeToggle.textContent = 'Modo escuro';
      themeToggle.setAttribute('aria-pressed', 'true');
    } else {
      body.classList.remove('light');
      themeToggle.textContent = 'Modo claro';
      themeToggle.setAttribute('aria-pressed', 'false');
    }
    localStorage.setItem('td-theme', theme);
  };

  const savedTheme = localStorage.getItem('td-theme') || 'dark';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light');
    applyTheme(isLight ? 'dark' : 'light');
  });

  // --- Nav toggle for mobile ---
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('show');
    });

    // close nav when clicking a link
    navMenu.addEventListener('click', (ev) => {
      if (ev.target.matches('a')) {
        navMenu.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Search / filter ---
  const normalize = (str) => (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = normalize(searchInput.value.trim());
      cards.forEach(card => {
        const title = normalize(card.dataset.title || '');
        const t = normalize(card.querySelector('.card-title')?.textContent || '');
        const desc = normalize(card.querySelector('.card-desc')?.textContent || '');
        const match = !q || title.includes(q) || t.includes(q) || desc.includes(q);
        card.style.display = match ? '' : 'none';
      });
    });
  }

  // --- Modal open/close helpers ---
  function openModal(imgSrc, caption) {
    modalImg.src = imgSrc;
    modalCaption.textContent = caption || '';
    modal.setAttribute('aria-hidden', 'false');
    modalClose.focus();
    // prevent body scroll while modal open
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  // click outside to close
  modal.addEventListener('click', (ev) => {
    if (ev.target === modal) closeModal();
  });

  // Esc key closes modal or mobile nav if open
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      if (modal.getAttribute('aria-hidden') === 'false') closeModal();
      if (navMenu && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // --- Card click / keyboard open ---
  cards.forEach(card => {
    const img = card.querySelector('.card-media img');
    const captionText = card.querySelector('.card-title')?.textContent || card.dataset.title || '';

    // mouse
    card.addEventListener('click', (e) => {
      // prevent opening when clicking interactive children (none here)
      openModal(img.src, captionText);
    });

    // keyboard: Enter or Space to open
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(img.src, captionText);
      }
    });
  });

  // focus trap (simplified): keep focus inside modal when open
  document.addEventListener('focus', (ev) => {
    if (modal.getAttribute('aria-hidden') === 'false') {
      const inModal = modal.contains(ev.target);
      if (!inModal) {
        ev.stopPropagation();
        modalClose.focus();
      }
    }
  }, true);
});
