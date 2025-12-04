// script.js
document.addEventListener('DOMContentLoaded', () => {

  // Menu responsivo
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainMenu.classList.toggle('open');
  });

  // Modal template para ver mais personagem
  const modalTemplate = document.getElementById('modalTemplate');
  document.querySelectorAll('.more').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(`<h3>Detalhe - ${link.previousElementSibling ? link.previousElementSibling.textContent : 'Personagem'}</h3>
                 <p>Descrição curta e dinâmica.</p>`);
    });
  });

  function openModal(html) {
    const frag = modalTemplate.content.cloneNode(true);
    const dialog = frag.querySelector('dialog');
    frag.querySelector('.modal-body').innerHTML = html;
    document.body.appendChild(frag);
    const appendedDialog = document.querySelector('dialog.modal:last-of-type');
    appendedDialog.showModal();
    appendedDialog.querySelector('.close').addEventListener('click', () => appendedDialog.close());
    appendedDialog.addEventListener('close', () => appendedDialog.remove());
  }

  // Quiz simples
  const quizForm = document.getElementById('quizForm');
  const submitQuiz = document.getElementById('submitQuiz');
  const quizResult = document.getElementById('quizResult');

  submitQuiz.addEventListener('click', () => {
    const form = new FormData(quizForm);
    let score = 0;
    if (form.get('q1') === 'Dan') score += 1; // exemplo de resposta
    if (form.getAll('f1').length > 0 || form.get('f2') === null) score += 1;
    quizResult.textContent = `Sua pontuação: ${score}/2`;
  });

  // Filtro de episódios (exemplo)
  document.getElementById('filtrar').addEventListener('click', () => {
    const season = document.getElementById('season').value;
    const dur = Number(document.getElementById('duracao').value);
    const tbody = document.querySelector('.table tbody');
    // Exemplo simples: contagem simulada
    const results = Math.max(0, (6 - (season-1)) - Math.floor(dur/30));
    document.getElementById('resultCount').textContent = `${results} resultados`;
  });

  // Canvas de exemplo (desenha texto)
  const canvas = document.getElementById('sigCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.font = 'bold 18px sans-serif';
    ctx.fillStyle = '#111827';
    ctx.fillText('Gossip Girl', 10, 50);
  }

  // Pequena animação: atualiza <progress>
  const progress = document.getElementById('progress');
  if (progress) {
    let v = Number(progress.value);
    setInterval(() => {
      v = (v + 5) % (Number(progress.max) + 1);
      progress.value = v;
    }, 2500);
  }

  // Formulário de contato: validação simples e feedback
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    if (name.length < 2) return alert('Nome muito curto.');
    if (!email.includes('@')) return alert('Email inválido.');
    alert('Mensagem enviada! (simulação)');
    contactForm.reset();
  });

  // A11y: volta ao topo via link do footer
  document.querySelectorAll('a[href="#top"]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  });

});
