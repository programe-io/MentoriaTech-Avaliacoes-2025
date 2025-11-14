// JavaScript básico para página de Judô
// Inclui: filtro de tabela, ano automático e interações simples

// Atualiza o ano no rodapé
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Filtro de horários de treino
const applyBtn = document.getElementById('apply');
const resetBtn = document.getElementById('reset');
const filterInput = document.getElementById('filter');
const tbody = document.getElementById('schedule-body');

if (applyBtn && resetBtn && filterInput && tbody) {
  applyBtn.addEventListener('click', () => {
    const query = filterInput.value.trim().toLowerCase();
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => {
      const day = row.children[0].textContent.toLowerCase();
      row.style.display = day.includes(query) ? '' : 'none';
    });
  });

  resetBtn.addEventListener('click', () => {
    filterInput.value = '';
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(row => row.style.display = '');
  });

  // Permite pressionar Enter para filtrar
  filterInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyBtn.click();
  });
}

// Exemplo de animação simples: destacar cards ao passar o mouse
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-3px)';
    card.style.transition = '0.2s';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Exemplo: alerta ao clicar em FAQ (personalizável)
const details = document.querySelectorAll('details');
details.forEach((d) => {
  d.addEventListener('toggle', () => {
    console.log(`FAQ aberto: ${d.querySelector('summary').textContent}`);
  });
});
