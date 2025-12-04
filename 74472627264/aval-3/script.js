// main.js — interatividade básica (menu, modal, formulário, stats anim)
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    const expanded = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!expanded));
    if(!expanded){
      nav.style.display = 'block';
      navToggle.setAttribute('aria-label', 'Fechar menu');
    } else {
      nav.style.display = '';
      navToggle.setAttribute('aria-label', 'Abrir menu');
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Gallery modal
  const gallery = document.getElementById('galleryGrid');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');

  function openModal(src, alt){
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  gallery.querySelectorAll('.thumb img').forEach(img => {
    img.addEventListener('click', () => openModal(img.dataset.full || img.src, img.alt));
    img.parentElement.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') openModal(img.dataset.full || img.src, img.alt);
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

  // Contact form (simples, sem envio real)
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      feedback.textContent = 'Por favor, preencha todos os campos.';
      return;
    }
    // Simulação de envio (aqui você integraria com backend / serviço)
    feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato.';
    form.reset();
    setTimeout(()=> feedback.textContent = '', 5000);
  });

  // Stats count animation (contadores simples)
  function animateCounter(el, to, duration=1200){
    const start = 0;
    const range = to - start;
    let startTime = null;
    function step(timestamp){
      if(!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(progress * range + start);
      if(progress < 1) window.requestAnimationFrame(step);
      else el.textContent = to;
    }
    window.requestAnimationFrame(step);
  }

  const golsEl = document.getElementById('golsCount');
  const assistEl = document.getElementById('assistCount');
  const gamesEl = document.getElementById('gamesCount');

  // valores ilustrativos já no HTML; animar ao entrar no viewport
  function onScrollAnimate(){
    const rect = golsEl.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom >= 0){
      animateCounter(golsEl, parseInt(golsEl.textContent,10)||0);
      animateCounter(assistEl, parseInt(assistEl.textContent,10)||0);
      animateCounter(gamesEl, parseInt(gamesEl.textContent,10)||0);
      window.removeEventListener('scroll', onScrollAnimate);
    }
  }
  window.addEventListener('scroll', onScrollAnimate);
  // tentar disparar imediatamente caso já visível
  onScrollAnimate();
});
