// Navegação por abas
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const id = btn.dataset.tab;
    panels.forEach(p => {
      p.classList.toggle('active', p.id === id);
    });

    // limpa a pesquisa da aba ao trocar
    document.getElementById('search-tab').value = '';
    filterTab();
  });
});

// Pesquisa
const globalSearch = document.getElementById('search-global');
const tabSearch = document.getElementById('search-tab');

function normalize(str) {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function filterElements(container, query) {
  const q = normalize(query);
  const items = container.querySelectorAll('[data-tags], .list-item, p, .info');
  let shown = 0;

  items.forEach(el => {
    const text = normalize(el.textContent);
    const tags = normalize(el.getAttribute('data-tags'));
    const match = q === '' || text.includes(q) || tags.includes(q);
    el.style.display = match ? '' : 'none';
    if (match) shown++;
  });

  return { shown };
}

function filterGlobal() {
  const q = globalSearch.value;
  panels.forEach(panel => {
    filterElements(panel, q);
  });
  // Realce visual nos botões de aba com resultados
  tabs.forEach(btn => {
    const panel = document.getElementById(btn.dataset.tab);
    const hasVisible = Array.from(panel.querySelectorAll('[data-tags], .list-item, p, .info'))
      .some(el => el.style.display !== 'none');
    btn.style.outline = globalSearch.value && hasVisible ? '2px solid var(--focus)' : 'none';
  });
}

function filterTab() {
  const current = document.querySelector('.panel.active');
  filterElements(current, tabSearch.value);
}

globalSearch.addEventListener('input', filterGlobal);
tabSearch.addEventListener('input', filterTab);

// Acessibilidade: navegação por setas
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    const order = Array.from(tabs);
    const current = order.findIndex(b => b.classList.contains('active'));
    let next = current;
    if (e.key === 'ArrowRight') next = (current + 1) % order.length;
    if (e.key === 'ArrowLeft') next = (current - 1 + order.length) % order.length;
    order[next].click();
    order[next].focus();
  }
});