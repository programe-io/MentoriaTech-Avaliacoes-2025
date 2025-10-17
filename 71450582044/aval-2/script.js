// Interatividade do menu de navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.color = '#f39c12'; // cor destaque ao passar o mouse
    link.style.fontWeight = 'bold';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = ''; // volta a cor original
    link.style.fontWeight = '';
  });
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Botão para mostrar/ocultar o aside "Sobre Mim"
const aside = document.querySelector('aside');
const toggleAsideBtn = document.createElement('button');
toggleAsideBtn.textContent = 'Mostrar/Ocultar Sobre Mim';
toggleAsideBtn.style.margin = '10px';
toggleAsideBtn.style.padding = '8px 12px';
toggleAsideBtn.style.cursor = 'pointer';
toggleAsideBtn.style.borderRadius = '5px';

aside.parentNode.insertBefore(toggleAsideBtn, aside);

toggleAsideBtn.addEventListener('click', () => {
  if (aside.style.display === 'none' || aside.style.display === '') {
    aside.style.display = 'block';
  } else {
    aside.style.display = 'none';
  }
});

// Efeito ao clicar nas imagens - escala temporária
document.querySelectorAll('img').forEach(img => {
  img.style.transition = 'transform 0.2s ease';
  img.addEventListener('click', () => {
    img.style.transform = 'scale(1.1)';
    setTimeout(() => {
      img.style.transform = 'scale(1)';
    }, 300);
  });
});

// Botão para voltar ao topo da página
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = 'Topo ↑';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.backgroundColor = '#f39c12';
backToTopBtn.style.color = '#fff';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
