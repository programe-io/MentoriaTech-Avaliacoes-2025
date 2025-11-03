// 🌸 Tema
const body = document.body;
const toggleButton = document.getElementById('toggleTheme');
let melodyMode = true;

toggleButton.addEventListener('click', () => {
  melodyMode = !melodyMode;
  if (melodyMode) {
    body.classList.remove('theme-kuromi');
    body.classList.add('theme-mymelody');
    toggleButton.textContent = '🌸 Trocar Tema';
  } else {
    body.classList.remove('theme-mymelody');
    body.classList.add('theme-kuromi');
    toggleButton.textContent = '🖤 Trocar Tema';
  }
});

// 🌷 Animação de flores caindo
const flowersContainer = document.getElementById('flowers-container');
const flowers = ['🌸', '🌷', '💮', '🌺'];
setInterval(() => {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';
  flowersContainer.appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
}, 400);

// 🌼 Entrar no site
const entrarBtn = document.getElementById('entrarBtn');
const intro = document.getElementById('intro');
const mainSite = document.getElementById('mainSite');

entrarBtn.addEventListener('click', () => {
  intro.classList.add('fadeOut');
  setTimeout(() => {
    intro.style.display = 'none';
    mainSite.classList.remove('hidden');
  }, 1000);
});

// ✨ Receitas
const receitas = {
  dorayaki: {
    titulo: "🍡 Dorayaki de Morango",
    passos: [
      "1️⃣ Misture ovos, açúcar, mel e farinha até formar uma massa cremosa.",
      "2️⃣ Aqueça uma frigideira e asse pequenas panquecas.",
      "3️⃣ Recheie com creme de morango e pasta de feijão doce (anko).",
      "4️⃣ Una as panquecas e sirva morno!"
    ]
  },
  mochi: {
    titulo: "🍓 Mochi de Sakura",
    passos: [
      "1️⃣ Misture farinha de arroz glutinoso, açúcar e água.",
      "2️⃣ Cozinhe no vapor até a massa ficar elástica.",
      "3️⃣ Recheie com anko ou creme floral e enrole.",
      "4️⃣ Polvilhe com amido e decore com pétalas secas."
    ]
  },
  kuromi: {
    titulo: "🖤 Cupcake Kuromi",
    passos: [
      "1️⃣ Prepare a massa de chocolate e asse em forminhas pequenas.",
      "2️⃣ Bata chantilly roxo e adicione essência de baunilha.",
      "3️⃣ Decore com orelhas e corações pretos de açúcar.",
      "4️⃣ Finalize com glitter comestível e sirva!"
    ]
  },
  mymelody: {
    titulo: "🎀 Bolo Fofinho da My Melody",
    passos: [
      "1️⃣ Bata ovos, açúcar e manteiga até ficar leve.",
      "2️⃣ Acrescente farinha e fermento peneirados.",
      "3️⃣ Asse por 35 minutos a 180°C até dourar.",
      "4️⃣ Cubra com chantilly e morangos frescos.",
      "5️⃣ Finalize com confeitos cor-de-rosa!"
    ]
  }
};

// 🌸 Modal
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalSteps = document.getElementById('modalSteps');

document.querySelectorAll('[data-receita]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-receita');
    const receita = receitas[id];
    modalTitle.textContent = receita.titulo;
    modalSteps.innerHTML = receita.passos.map(p => `<li>${p}</li>`).join('');
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
