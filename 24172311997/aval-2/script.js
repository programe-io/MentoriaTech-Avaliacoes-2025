// script.js — interatividade simples para o site de filmes

// Ao carregar, adiciona handlers aos artigos (.card)
document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.card'));

  cards.forEach(card => {
    // tornar acessível via teclado
    card.tabIndex = 0;

    // clique ou Enter abre/fecha detalhes
    function toggle() {
      card.classList.toggle('expanded');
      const desc = card.querySelector('p');
      if(desc) desc.style.display = card.classList.contains('expanded') ? 'block' : 'none';
    }

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });

    // esconder descrição inicialmente (caso esteja visível)
    const desc = card.querySelector('p');
    if(desc) desc.style.display = 'none';
  });

  // exemplo extra: rolagem suave para seções quando clicar nos links do nav
  const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
