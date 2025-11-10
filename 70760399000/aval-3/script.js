/* ---------- script.js ---------- */
// Navegação responsiva + scroll suave + lightbox simples
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  // Alterna exibição do menu em telas pequenas
  if (toggle) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('show');
    });
  }

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Fecha o menu após clique (modo mobile)
        if (window.innerWidth < 720 && links.classList.contains('show')) {
          links.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Lightbox simples para imagens (abre imagem em tela cheia ao clicar)
  function createLightbox() {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.style.position = 'fixed';
    lb.style.inset = '0';
    lb.style.display = 'flex';
    lb.style.alignItems = 'center';
    lb.style.justifyContent = 'center';
    lb.style.background = 'rgba(0,0,0,0.8)';
    lb.style.zIndex = '9999';
    lb.style.padding = '2rem';
    lb.addEventListener('click', () => lb.remove());
    document.body.appendChild(lb);
    return lb;
  }

  document.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const lb = createLightbox();
      const large = document.createElement('img');
      large.src = img.src;
      large.alt = img.alt;
      large.style.maxWidth = '95%';
      large.style.maxHeight = '95%';
      large.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)';
      lb.appendChild(large);
    });
  });
});
