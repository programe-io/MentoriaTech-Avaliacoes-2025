// ====== Rolagem suave para os links do menu ======
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute('href'));
    alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ====== Animação ao aparecer ======
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aparecer');
    }
  });
});

document.querySelectorAll('section, article').forEach(element => {
  observer.observe(element);
});

// ====== Botão "Voltar ao Topo" ======
const botaoTopo = document.createElement('button');
botaoTopo.id = 'btnTopo';
botaoTopo.innerText = '↑ Topo';
document.body.appendChild(botaoTopo);

// Estilo direto pelo JS
Object.assign(botaoTopo.style, {
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  padding: '12px 18px',
  background: '#0077ff',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '18px',
  boxShadow: '0 0 12px rgba(0,0,0,0.3)',
  display: 'none',
  transition: '0.3s'
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 350) {
    botaoTopo.style.display = 'block';
  } else {
    botaoTopo.style.display = 'none';
  }
});

botaoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ====== Destaque automático do menu conforme rolagem ======
const secoes = document.querySelectorAll('section, article');
const linksMenu = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let pos = window.scrollY + 200;

  secoes.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      let id = sec.getAttribute('id');

      linksMenu.forEach(link => {
        link.classList.remove('ativo');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('ativo');
        }
      });
    }
  });
});

// ====== Alerta divertido no clique de imagens ======
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    alert('🏐 Você clicou em uma imagem de Vôlei!');
  });
});