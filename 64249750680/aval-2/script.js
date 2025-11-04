// --- Configurações Globais ---
let activeTab = 'home';
let scene, camera, renderer = null, environmentSphere;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

// --- Catálogo de Imóveis ---
const houseListings = [
  { id: 'alpha', name: 'Cobertura XR Alpha', description: 'Design de luxo, vista panorâmica.', color: 0x3b82f6, valuation: 0.185, squareFootage: '250 m² | 3 Suítes' },
  { id: 'beta', name: 'Casa Sustentável Beta', description: 'Estrutura ecológica e eficiente.', color: 0x10b981, valuation: 0.121, squareFootage: '180 m² | 2 Quartos' },
  { id: 'gamma', name: 'Studio Tecnológico Gamma', description: 'Estilo moderno e tecnológico.', color: 0xef4444, valuation: 0.239, squareFootage: '75 m² | 1 Loft' }
];

let currentHouse = houseListings[0];

// --- Navegação entre Tabs ---
function setActiveTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('tab-active'));

  document.getElementById(tabId).classList.remove('hidden');
  document.getElementById(`${tabId}Btn`).classList.add('tab-active');

  if (tabId === 'imersao') {
    renderHouseListings();
    if (renderer === null) initThreeD();
    if (currentHouse) selectHouse(currentHouse.id, false);
  }
}

// --- Renderização dos Imóveis ---
function renderHouseListings() {
  const container = document.getElementById('houseListingsContainer');
  container.innerHTML = '';

  houseListings.forEach(house => {
    const selected = house.id === currentHouse.id;
    container.innerHTML += `
      <div class="bg-[#242424] p-5 rounded-xl border border-gray-700 ${selected ? 'border-4 !border-green-500' : 'hover:border-blue-500'} cursor-pointer"
           onclick="selectHouse('${house.id}')">
        <p class="text-3xl mb-2">${house.id === 'alpha' ? '🏙️' : house.id === 'beta' ? '🌿' : '💻'}</p>
        <h3 class="text-xl font-bold text-white mb-2">${house.name}</h3>
        <p class="text-sm text-gray-400">${house.description}</p>
        <p class="mt-2 text-xs font-semibold ${selected ? 'text-green-500' : 'text-blue-400'}">${selected ? '✔ VISUALIZANDO' : 'VER TOUR 360°'}</p>
      </div>`;
  });

  const viewerSection = document.getElementById('viewerSection');
  viewerSection.classList.remove('hidden');
}

// --- Selecionar Imóvel ---
function selectHouse(id, update = true) {
  const house = houseListings.find(h => h.id === id);
  if (!house) return;
  currentHouse = house;

  document.getElementById('currentHouseTitle').textContent = `Tour 360°: ${house.name}`;
  document.getElementById('currentHouseDescription').textContent = house.description;
  document.getElementById('houseSquareFootage').textContent = house.squareFootage;
  document.getElementById('houseValuation').textContent = `Valorização: +${(house.valuation * 100).toFixed(1)}%`;

  if (environmentSphere) {
    environmentSphere.material.color.setHex(house.color);
    environmentSphere.rotation.set(0, 0, 0);
  }

  if (update) renderHouseListings();
  resizeCanvas();
}

// --- Inicialização do Tour 3D ---
function setupInteraction(el) {
  el.addEventListener('mousedown', e => { isDragging = true; e.preventDefault(); previousMousePosition = { x: e.clientX, y: e.clientY }; });
  el.addEventListener('mouseup', () => { isDragging = false; });
  el.addEventListener('mousemove', e => {
    if (!isDragging || !environmentSphere) return;
    const dx = e.clientX - previousMousePosition.x;
    const dy = e.clientY - previousMousePosition.y;
    environmentSphere.rotation.y += dx * 0.005;
    environmentSphere.rotation.x += dy * 0.005;
    environmentSphere.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, environmentSphere.rotation.x));
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });
}

function initThreeD() {
  const container = document.getElementById('threeDCanvas');
  if (renderer) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: currentHouse.color });
  environmentSphere = new THREE.Mesh(geometry, material);
  scene.add(environmentSphere);
  setupInteraction(renderer.domElement);

  (function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  })();
}

function resizeCanvas() {
  const c = document.getElementById('threeDCanvas');
  if (!camera || !renderer) return;
  camera.aspect = c.clientWidth / c.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(c.clientWidth, c.clientHeight);
}

window.onload = () => {
  initThreeD();
  resizeCanvas();
  setActiveTab('home');
  selectHouse(currentHouse.id, false);
};
window.addEventListener('resize', resizeCanvas);