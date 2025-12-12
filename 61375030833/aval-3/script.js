// script.js - interações: menu móvel, carousel, formulário e preview dinâmico
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    if (mobileNav.hasAttribute('hidden')) {
      mobileNav.removeAttribute('hidden');
    } else {
      mobileNav.setAttribute('hidden', '');
    }
  });

  /* ---------- Carousel simples (sem dependências) ---------- */
  const stories = [
    {
      title: "Noites de Verão",
      author: "Mariana T.",
      excerpt: "Um encontro inesperado na estação das chuvas muda tudo...",
      reads: "12.3k"
    },
    {
      title: "Reinos de Cinza",
      author: "Lucas R.",
      excerpt: "Em um mundo dividido, uma jovem descobre que nasceu com um dom proibido.",
      reads: "89.1k"
    },
    {
      title: "Cartas para Você",
      author: "Ana P.",
      excerpt: "Fragmentos de uma relação contados por cartas que nunca foram enviadas.",
      reads: "4.2k"
    },
    {
      title: "Entre Páginas",
      author: "Tiago S.",
      excerpt: "Um bibliotecário encontra uma história que parece falar com ele diretamente.",
      reads: "21.7k"
    }
  ];

  const track = document.getElementById('carouselTrack');
  // Render slides
  stories.forEach((s, i) => {
    const slide = document.createElement('article');
    slide.className = 'slide';
    slide.setAttribute('role','listitem');
    slide.innerHTML = `
      <h4>${escapeHtml(s.title)}</h4>
      <small class="muted">por ${escapeHtml(s.author)} · ${escapeHtml(s.reads)} leituras</small>
      <p>${escapeHtml(s.excerpt)}</p>
      <a href="#" class="btn ghost" style="margin-top:.6rem">Ler</a>
    `;
    track.appendChild(slide);
  });

  // Basic carousel navigation (scroll by slide width)
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  prev.addEventListener('click', () => slideCarousel(-1));
  next.addEventListener('click', () => slideCarousel(1));

  function slideCarousel(direction) {
    const slide = track.querySelector('.slide');
    if (!slide) return;
    const slideWidth = slide.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 16);
    track.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
  }

  /* ---------- Story preview (no mock phone) ---------- */
  const previewEl = document.getElementById('storyPreview');
  let currentPreview = 0;
  function renderPreview() {
    const s = stories[currentPreview];
    previewEl.innerHTML = `
      <div style="font-weight:700;font-size:1rem">${escapeHtml(s.title)}</div>
      <div style="font-size:.85rem;color:rgba(255,255,255,0.65)">por ${escapeHtml(s.author)}</div>
      <p style="margin-top:.6rem;color:rgba(255,255,255,0.85);font-size:0.95rem;line-height:1.3">${escapeHtml(s.excerpt)}</p>
      <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center">
        <small style="color:rgba(255,255,255,0.6)">${escapeHtml(s.reads)} leituras</small>
        <button class="btn primary" style="padding:.35rem .6rem;font-size:.85rem">Ler</button>
      </div>
    `;
  }
  renderPreview();
  // rotate preview every 6s
  setInterval(() => {
    currentPreview = (currentPreview + 1) % stories.length;
    renderPreview();
  }, 6000);

  /* ---------- Form subscribe (validação simples) ---------- */
  const form = document.getElementById('subscribeForm');
  const email = document.getElementById('email');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = '';
    if (!validateEmail(email.value)) {
      formMsg.textContent = 'Por favor insira um e-mail válido.';
      formMsg.style.color = '#ff9f43';
      email.focus();
      return;
    }
    // Simular "envio"
    formMsg.textContent = 'Obrigado! Você foi inscrito.';
    formMsg.style.color = '#a2f5bf';
    form.reset();
  });

  /* ---------- Pequenas utilidades ---------- */
  function validateEmail(v) {
    // simples, suficiente para cliente
    return /\S+@\S+\.\S+/.test(v);
  }
  function escapeHtml(str) {
    // evita injeção simples no demo
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
