// Dados de exemplo (pode ser substituído por fetch da Ergast API)
const sampleDrivers = [
  { pos: 1, name: 'Max Verstappen', team: 'Red Bull', points: 321, country: 'NL' },
  { pos: 2, name: 'Carlos Sainz', team: 'Ferrari', points: 210, country: 'ES' },
  { pos: 3, name: 'Mine Driver', team: 'Mine Team', points: 120, country: 'MN' },
  { pos: 4, name: 'Lando Norris', team: 'McLaren', points: 189, country: 'GB' },
];

// Elementos principais
const driversList = document.getElementById('driversList');
const standingsBody = document.getElementById('standingsBody');
const searchInput = document.getElementById('search');
const filterTeam = document.getElementById('filterTeam');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

// Função para renderizar pilotos
function renderDrivers(list) {
  driversList.innerHTML = '';
  list.forEach((d) => {
    const div = document.createElement('div');
    div.className = 'driver';
    div.innerHTML = `
      <div class="avatar">${d.name.split(' ').map(s => s[0]).slice(0,2).join('')}</div>
      <div style="flex:1">
        <h3>${d.name}</h3>
        <p class="muted">${d.team} • ${d.points} pts</p>
      </div>
      <div class="pill">#${d.pos}</div>
    `;
    div.addEventListener('click', () => openModal(d));
    driversList.appendChild(div);
  });
}

// Função para renderizar tabela de pontuação
function renderStandings(list) {
  standingsBody.innerHTML = '';
  list.forEach((d) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${d.pos}</td><td>${d.name}</td><td>${d.team}</td><td>${d.points}</td>`;
    standingsBody.appendChild(tr);
  });
}

// Função para abrir modal com detalhes
function openModal(driver) {
  modalTitle.textContent = driver.name;
  modalContent.innerHTML = `
    <p class='muted'>Equipe: ${driver.team}</p>
    <p class='muted'>Pontos: ${driver.points}</p>
    <p class='muted'>País: ${driver.country}</p>
    <p class='muted'>Biografia: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  `;
  modal.classList.add('open');
}

// Fecha o modal
document.getElementById('closeModal').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

// Filtros
function applyFilters() {
  const q = searchInput.value.toLowerCase();
  const team = filterTeam.value;
  const filtered = sampleDrivers.filter(
    (d) =>
      (d.name.toLowerCase().includes(q) || d.team.toLowerCase().includes(q)) &&
      (team ? d.team === team : true)
  );
  renderDrivers(filtered);
  renderStandings(filtered);
}

searchInput.addEventListener('input', applyFilters);
filterTeam.addEventListener('change', applyFilters);

// Botão de exemplo
document.getElementById('loadSample').addEventListener('click', () => {
  renderDrivers(sampleDrivers);
  renderStandings(sampleDrivers);
  document.querySelector('footer').textContent = 'Dados de exemplo carregados.';
});

// Buscar dados reais na API Ergast
document.getElementById('loadAPI').addEventListener('click', async () => {
  try {
    document.querySelector('footer').textContent = 'Buscando dados da API...';
    const res = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
    if (!res.ok) throw new Error('Erro ao buscar API');

    const j = await res.json();
    const list = j.MRData.StandingsTable.StandingsLists[0].DriverStandings.map((d) => ({
      pos: d.position,
      name: d.Driver.givenName + ' ' + d.Driver.familyName,
      team: d.Constructors[0].name,
      points: d.points,
      country: d.Driver.nationality,
    }));

    renderDrivers(list);
    renderStandings(list);
    document.querySelector('footer').textContent = 'Dados reais carregados da Ergast API.';
  } catch (err) {
    console.error(err);
    document.querySelector('footer').textContent = 'Falha ao buscar dados. Tente novamente.';
  }
});

// Alternar tema claro/escuro
const themeBtn = document.getElementById('themeBtn');
let dark = true;
themeBtn.addEventListener('click', () => {
  dark = !dark;
  if (!dark) {
    document.documentElement.style.setProperty('--bg', '#f7f9fc');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--muted', '#6b7280');
    document.documentElement.style.setProperty('--accent', '#0066cc');
    document.body.style.color = '#071022';
    document.body.style.background = 'linear-gradient(180deg,#f7fbff,#eef5ff)';
  } else {
    document.documentElement.style.removeProperty('--bg');
    document.documentElement.style.removeProperty('--card');
    document.documentElement.style.removeProperty('--muted');
    document.documentElement.style.removeProperty('--accent');
    document.body.style.color = '';
    document.body.style.background = '';
  }
});

// Modal de sobre
document.getElementById('openAbout').addEventListener('click', () => {
  openModal({
    name: 'Sobre o site',
    team: 'F1 Fan',
    points: '—',
    country: '—',
  });
});

// Carregamento inicial
renderDrivers(sampleDrivers);
renderStandings(sampleDrivers);
