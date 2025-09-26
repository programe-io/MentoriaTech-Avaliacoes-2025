document.addEventListener('DOMContentLoaded', () => {

  // IntersectionObserver para revelar seções e animar barras de habilidade
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        obs.unobserve(en.target);

        // anima barras somente quando a seção aparece
        const bars = en.target.querySelectorAll('.bar');
        bars.forEach((bar, i) => {
          const pct = bar.dataset.percent || bar.getAttribute('data-percent') || 0;
          // staggered timeout para efeito visual
          setTimeout(() => bar.style.width = pct + '%', 120 * (i + 1));
        });
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // smooth scroll do botão "Ver Projetos"
  const verBtn = document.getElementById('verProjetos');
  verBtn?.addEventListener('click', () => {
    const sec = document.getElementById('projetos');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // links do nav com smooth scroll
  document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
