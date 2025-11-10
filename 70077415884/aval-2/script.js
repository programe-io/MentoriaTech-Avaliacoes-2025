// script.js — funcionalidades do catálogo de motos
// - mock de dados
// - busca, filtro, carregar mais
// - modal com detalhes
// - favoritos salvos em localStorage

// elementos
const catalogEl = document.getElementById('catalog');
const searchEl = document.getElementById('search');
const filterTypeEl = document.getElementById('filterType');
const clearFiltersBtn = document.getElementById('clearFilters');
const loadMoreBtn = document.getElementById('loadMore');

const modalBackdrop = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalThumb = document.getElementById('modalThumb');
const modalDesc = document.getElementById('modalDesc');
const modalSpecs = document.getElementById('modalSpecs');
const modalPrice = document.getElementById('modalPrice');
const closeModalBtn = document.getElementById('closeModal');
const favToggleBtn = document.getElementById('favToggle');

// favoritos (localStorage)
const FAVORITES_KEY = 'app_moto_favs';
let favorites = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]');

// mock de catálogo (poderia vir de uma API)
const ALL_MOTOS = [
  {id:1, brand:'Honda', model:'CB 650R', type:'Naked', year:2023, cc:649, price:'R$ 42.000', desc:'Naked moderna, comportamento equilibrado para cidade e estrada.', imgLabel:'CB650R'},
  {id:2, brand:'Yamaha', model:'MT-07', type:'Naked', year:2022, cc:689, price:'R$ 38.000', desc:'Aclamada por pilotabilidade e agilidade urbana.', imgLabel:'MT07'},
  {id:3, brand:'Kawasaki', model:'Ninja ZX-6R', type:'Esportiva', year:2023, cc:636, price:'R$ 58.000', desc:'Esportiva de meia-cilindrada com DNA de pista.', imgLabel:'ZX6R'},
  {id:4, brand:'BMW', model:'R 1250 GS', type:'Trail', year:2023, cc:1254, price:'R$ 120.000', desc:'Referência em aventuras e conforto para longas distâncias.', imgLabel:'R1250GS'},
  {id:5, brand:'Harley-Davidson', model:'Street Bob', type:'Custom', year:2021, cc:1746, price:'R$ 95.000', desc:'Visual clássico e torque generoso.', imgLabel:'Bob'},
  {id:6, brand:'Ducati', model:'Panigale V2', type:'Esportiva', year:2023, cc:955, price:'R$ 110.000', desc:'Design italiano e performance de alto nível.', imgLabel:'PaniV2'},
  {id:7, brand:'Triumph', model:'Tiger 900', type:'Trail', year:2022, cc:900, price:'R$ 70.000', desc:'Versátil para estrada e trilha leve.', imgLabel:'Tiger900'},
  {id:8, brand:'Suzuki', model:'GSX-S1000', type:'Naked', year:2022, cc:999, price:'R$ 55.000', desc:'Potência e presença, ótima para estradas rápidas.', imgLabel:'GSXS1000'},
  {id:9, brand:'Royal Enfield', model:'Classic 350', type:'Custom', year:2021, cc:349, price:'R$ 18.000', desc:'Estilo retrô para quem gosta de simplicidade.', imgLabel:'C350'},
  {id:10, brand:'KTM', model:'1290 Super Duke R', type:'Naked', year:2023, cc:1301, price:'R$ 135.000', desc:'Brutalidade e eletrônica avançada.', imgLabel:'1290R'}
];

// estado
let displayed = []; // motos atualmente exibidas
let page = 1;
const PAGE_SIZE = 6;

// simula fetch com delay
function fetchMotos() {
  return new Promise(resolve => {
    setTimeout(() => resolve(ALL_MOTOS.slice()), 450);
  });
}

// render card único
function createCard(moto) {
  const fav = favorites.includes(moto.id);
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <div class="thumb" aria-hidden="true">${moto.imgLabel}</div>
    <div><strong>${moto.brand} ${moto.model}</strong></div>
    <div class="meta">
      <div class="muted">${moto.year} • ${moto.cc}cc</div>
      <div style="display:flex;gap:8px;align-items:center">
        <div class="tags"><span class="tag">${moto.type}</span></div>
        <button class="btn" data-id="${moto.id}" aria-label="Detalhes">Ver</button>
        <button class="btn" data-fav="${moto.id}" aria-label="Favoritar">${fav ? '★' : '☆'}</button>
      </div>
    </div>
    <div class="muted" style="margin-top:8px">${moto.price}</div>
  `;
  // botão ver detalhes
  div.querySelector('button[aria-label="Detalhes"]').addEventListener('click', ()=> openModal(moto));
  // botão favoritar
  div.querySelector(`button[data-fav="${moto.id}"]`).addEventListener('click', (e)=>{
    toggleFavorite(moto.id);
    e.currentTarget.textContent = favorites.includes(moto.id) ? '★' : '☆';
  });
  return div;
}

// atualiza grid com um array de motos
function renderGrid(motos, replace=false) {
  if (replace) catalogEl.innerHTML = '';
  motos.forEach(m => catalogEl.appendChild(createCard(m)));
}

// aplica filtros e busca
function applyFilters(all) {
  const q = searchEl.value.trim().toLowerCase();
  const type = filterTypeEl.value;
  let result = all.filter(m => {
    const text = (m.brand + ' ' + m.model + ' ' + m.type).toLowerCase();
    if (q && !text.includes(q)) return false;
    if (type && m.type !== type) return false;
    return true;
  });
  return result;
}

// carregar página (paginado localmente)
function loadPageData(all) {
  const filtered = applyFilters(all);
  const start = 0;
  const end = PAGE_SIZE * page;
  displayed = filtered.slice(start, end);
  renderGrid(displayed, true);
  // botão carregar mais
  if (filtered.length <= displayed.length) loadMoreBtn.disabled = true;
  else loadMoreBtn.disabled = false;
}

// abrir modal com detalhes
function openModal(moto) {
  modalTitle.textContent = `${moto.brand} ${moto.model}`;
  modalThumb.textContent = moto.imgLabel;
  modalDesc.textContent = moto.desc;
  modalPrice.textContent = moto.price;
  modalSpecs.innerHTML = '';
  const specs = [
    ['Ano', moto.year],
    ['Cilindrada', moto.cc + ' cc'],
    ['Tipo', moto.type]
  ];
  specs.forEach(s => {
    const div = document.createElement('div');
    div.className = 'spec';
    div.innerHTML = `<span>${s[0]}</span><strong>${s[1]}</strong>`;
    modalSpecs.appendChild(div);
  });
  // favoritar botão
  favToggleBtn.textContent = favorites.includes(moto.id) ? '❤️ Remover' : '🤍 Favoritar';
  // guarda id no botão
  favToggleBtn.dataset.id = moto.id;
  modalBackdrop.style.display = 'flex';
  modalBackdrop.setAttribute('aria-hidden', 'false');
}

// fechar modal
function closeModal() {
  modalBackdrop.style.display = 'none';
  modalBackdrop.setAttribute('aria-hidden', 'true');
}

// toggle fav
function toggleFavorite(id) {
  id = Number(id);
  if (favorites.includes(id)) {
    favorites = favorites.filter(x => x !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

// eventos
closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', function(e){
  if (e.target === modalBackdrop) closeModal();
});
favToggleBtn.addEventListener('click', function(){
  const id = Number(this.dataset.id);
  toggleFavorite(id);
  this.textContent = favorites.includes(id) ? '❤️ Remover' : '🤍 Favoritar';
  // também atualiza botões na grid
  refreshGridFavs();
});

// atualiza ícones de favoritos na grade
function refreshGridFavs() {
  document.querySelectorAll('button[data-fav]').forEach(btn => {
    const id = Number(btn.dataset.fav);
    btn.textContent = favorites.includes(id) ? '★' : '☆';
  });
}

// controles de busca/filtro
searchEl.addEventListener('input', ()=> { page = 1; fetchAndRender(); });
filterTypeEl.addEventListener('change', ()=> { page = 1; fetchAndRender(); });
clearFiltersBtn.addEventListener('click', ()=> { searchEl.value=''; filterTypeEl.value=''; page = 1; fetchAndRender(); });

// carregar mais
loadMoreBtn.addEventListener('click', ()=> {
  page++;
  fetchAndRender();
});

// atualiza grade com dados (busca mock)
let allMotosCache = [];
function fetchAndRender() {
  // se cache vazio, busca (simulado)
  if (!allMotosCache.length) {
    fetchMotos().then(data => {
      allMotosCache = data;
      loadPageData(allMotosCache);
      refreshGridFavs();
    });
  } else {
    loadPageData(allMotosCache);
    refreshGridFavs();
  }
}

// simulador de fetch (retorna ALL_MOTOS disponível globalmente)
function fetchMotos() {
  return new Promise(resolve => {
    // simulando latência
    setTimeout(()=>{
      resolve(window.ALL_MOTOS || []); // se ALL_MOTOS estiver disponível
    }, 350);
  });
}

// inicialização
(function init(){
  // se o mock principal (ALL_MOTOS) não estiver exposto para o script, define a partir do arquivo original.
  if (!window.ALL_MOTOS) {
    window.ALL_MOTOS = [
      // cópia curta para garantir funcionamento independente
      {id:1, brand:'Honda', model:'CB 650R', type:'Naked', year:2023, cc:649, price:'R$ 42.000', desc:'Naked moderna, comportamento equilibrado para cidade e estrada.', imgLabel:'CB650R'},
      {id:2, brand:'Yamaha', model:'MT-07', type:'Naked', year:2022, cc:689, price:'R$ 38.000', desc:'Aclamada por pilotabilidade e agilidade urbana.', imgLabel:'MT07'},
      {id:3, brand:'Kawasaki', model:'Ninja ZX-6R', type:'Esportiva', year:2023, cc:636, price:'R$ 58.000', desc:'Esportiva de meia-cilindrada com DNA de pista.', imgLabel:'ZX6R'},
      {id:4, brand:'BMW', model:'R 1250 GS', type:'Trail', year:2023, cc:1254, price:'R$ 120.000', desc:'Referência em aventuras e conforto para longas distâncias.', imgLabel:'R1250GS'},
      {id:5, brand:'Harley-Davidson', model:'Street Bob', type:'Custom', year:2021, cc:1746, price:'R$ 95.000', desc:'Visual clássico e torque generoso.', imgLabel:'Bob'},
      {id:6, brand:'Ducati', model:'Panigale V2', type:'Esportiva', year:2023, cc:955, price:'R$ 110.000', desc:'Design italiano e performance de alto nível.', imgLabel:'PaniV2'},
      {id:7, brand:'Triumph', model:'Tiger 900', type:'Trail', year:2022, cc:900, price:'R$ 70.000', desc:'Versátil para estrada e trilha leve.', imgLabel:'Tiger900'},
      {id:8, brand:'Suzuki', model:'GSX-S1000', type:'Naked', year:2022, cc:999, price:'R$ 55.000', desc:'Potência e presença, ótima para estradas rápidas.', imgLabel:'GSXS1000'},
      {id:9, brand:'Royal Enfield', model:'Classic 350', type:'Custom', year:2021, cc:349, price:'R$ 18.000', desc:'Estilo retrô para quem gosta de simplicidade.', imgLabel:'C350'},
      {id:10, brand:'KTM', model:'1290 Super Duke R', type:'Naked', year:2023, cc:1301, price:'R$ 135.000', desc:'Brutalidade e eletrônica avançada.', imgLabel:'1290R'}
    ];
  }

  fetchAndRender();
})();
