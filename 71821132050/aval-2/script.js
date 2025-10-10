/* ==========================================================================
   HyperXample — script.js
   Complemento JavaScript completo e acessível
   ========================================================================= */

/**
 * Atualiza automaticamente o ano no rodapé
 */
(function updateYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

/**
 * Validação e feedback do formulário de newsletter
 */
(function newsletterForm() {
  const form = document.getElementById('newsletter');
  if (!form) return;

  const email = document.getElementById('email');
  const msg = document.getElementById('newsletterMessage');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const val = email.value.trim();

    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      msg.textContent = 'Por favor, insira um e-mail válido.';
      msg.style.color = '#f87171'; // vermelho suave
      email.focus();
      return;
    }

    msg.textContent = '✅ Obrigado! Você foi inscrito com sucesso.';
    msg.style.color = '#4ade80'; // verde
    form.reset();
  });

  form.addEventListener('reset', () => {
    msg.textContent = '';
  });
})();

/**
 * Validação e simulação de envio do formulário de contato
 */
(function contactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const name = document.getElementById('name');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const status = document.getElementById('contactMessage');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    if (!name.value.trim() || !subject.value || !message.value.trim()) {
      status.textContent = '⚠️ Preencha todos os campos antes de enviar.';
      status.style.color = '#facc15'; // amarelo
      return;
    }

    // Simula um "envio" (no mundo real, usaria fetch para uma API)
    status.textContent = '📨 Enviando mensagem...';
    status.style.color = '#60a5fa';

    setTimeout(() => {
      status.textContent = '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.';
      status.style.color = '#4ade80';
      form.reset();
    }, 1200);
  });
})();

/**
 * Modal acessível com foco e fechamento via teclado / clique fora
 */
(function modalSystem() {
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openExample');
  if (!modal || !openBtn) return;

  const closeButtons = modal.querySelectorAll('[data-close="button"]');
  const backdrop = modal.querySelector('[data-close="backdrop"]');
  let lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');

    const firstBtn = modal.querySelector('button');
    firstBtn && firstBtn.focus();

    document.addEventListener('keydown', handleKey);
  }

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleKey);
    if (lastFocused) lastFocused.focus();
  }

  function handleKey(e) {
    if (e.key === 'Escape') closeModal();

    // Mantém foco dentro do modal (trap focus)
    if (e.key === 'Tab') {
      const focusable = modal.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  openBtn.addEventListener('click', openModal);
  closeButtons.forEach(b => b.addEventListener('click', closeModal));
  backdrop.addEventListener('click', closeModal);
})();

/**
 * Scroll suave para links internos (#hash)
 */
(function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  for (const link of links) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Atualiza URL e foco
      history.replaceState(null, '', '#' + targetId);
      target.setAttribute('tabindex', '-1');
      target.focus();
      setTimeout(() => target.removeAttribute('tabindex'), 800);
    });
  }
})();

/**
 * (Opcional) Efeito de rolagem sutil nos cards quando aparecem na tela
 */
(function revealOnScroll() {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'transform 0.5s ease, opacity 0.6s ease';
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
    }
  }, { threshold: 0.15 });

  cards.forEach(card => {
    card.style.transform = 'translateY(20px)';
    card.style.opacity = '0';
    observer.observe(card);
  });
})();
