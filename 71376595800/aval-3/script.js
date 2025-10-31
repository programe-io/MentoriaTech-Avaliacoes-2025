// =============================
// Free Fire — JavaScript do Site
// =============================

// === Rolagem suave entre seções ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// === Formulário (simulação de envio) ===
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nome = form.querySelector('input[name="nome"]').value.trim();
    alert(`Obrigado, ${nome || 'jogador'}! Sua mensagem foi enviada com sucesso!`);
    form.reset();
  });
}

// === Galeria (lightbox simples) ===
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img src="" alt="Visualização da imagem">';
document.body.appendChild(lightbox);

const lbImage = lightbox.querySelector('img');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lbImage.src = img.src;
    lightbox.classList.add('open');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('open');
  lbImage.src = '';
});

// === Botões especiais ===
const playButton = document.getElementById('btn-play');
if (playButton) {
  playButton.addEventListener('click', () => {
    alert('🎮 Iniciando gameplay de demonstração (simulado).');
  });
}

const newsButton = document.getElementById('btn-news');
if (newsButton) {
  newsButton.addEventListener('click', () => {
    alert('📰 Abrindo as notas da atualização (simulado).');
  });
}

const eventsButton = document.getElementById('btn-events');
if (eventsButton) {
  eventsButton.addEventListener('click', () => {
    alert('🏆 Mostrando próximos torneios (simulado).');
  });
}

// === Tema claro/escuro ===
const toggle = document.createElement('button');
toggle.textContent = 'Alternar tema';
toggle.style.position = 'fixed';
toggle.style.bottom = '20px';
toggle.style.right = '20px';
toggle.style.padding = '10px 14px';
toggle.style.borderRadius = '8px';
toggle.style.border = 'none';
toggle.style.fontWeight = '700';
toggle.style.cursor = 'pointer';
toggle.style.background = 'var(--accent)';
toggle.style.color = '#101820';
document.body.appendChild(toggle);

let darkMode = true;

toggle.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode
    ? 'linear-gradient(180deg, #071226 0%, #07182a 100%)'
    : 'linear-gradient(180deg, #fefefe 0%, #e2e8f0 100%)';
  document.body.style.color = darkMode ? '#e7f2fb' : '#101820';
  toggle.style.background = darkMode ? 'var(--accent)' : '#1e293b';
  toggle.style.color = darkMode ? '#101820' : '#f8fafc';
});

// === Fechar lightbox com ESC ===
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    lightbox.classList.remove('open');
    lbImage.src = '';
  }
});
