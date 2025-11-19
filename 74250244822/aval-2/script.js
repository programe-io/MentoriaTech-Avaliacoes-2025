// Dados mockados (substitua por API depois)
const articles = [
  {
    id: 1,
    title: "Tecnologia impulsiona novas soluções no Brasil",
    excerpt: "Startups e grandes empresas aceleram projetos de IA e sustentabilidade.",
    category: "tecnologia",
    source: "Agência Brasil",
    date: "2025-11-19",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 2,
    title: "Seleção vence e avança na competição continental",
    excerpt: "Jogo sólido garante classificação e anima torcedores.",
    category: "esportes",
    source: "Esporte TV",
    date: "2025-11-18",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=1200&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 3,
    title: "Mercado global reage a decisões econômicas",
    excerpt: "Bolsas sobem após anúncio de políticas monetárias.",
    category: "mundo",
    source: "Reuters",
    date: "2025-11-17",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 4,
    title: "Cinema nacional bate recorde de bilheteria",
    excerpt: "Produções locais conquistam público e crítica.",
    category: "entretenimento",
    source: "Cultura Hoje",
    date: "2025-11-16",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 5,
    title: "Chuvas fortes atingem o Nordeste",
    excerpt: "Defesa civil monitora áreas de risco e recomenda cuidados.",
    category: "brasil",
    source: "G1",
    date: "2025-11-15",
    image: "https://images.unsplash.com/photo-1498925422631-0fc262c35a25?q=80&w=1200&auto=format&fit=crop",
    url: "#"
  },
  {
    id: 6,
    title: "Empresas adotam trabalho híbrido em larga escala",
    excerpt: "Modelos flexíveis aumentam produtividade e satisfação.",
    category: "brasil",
    source: "Valor Econômico",
    date: "2025-11-14",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop",
    url: "#"
  }
];

const grid = document.getElementById("newsGrid");
const navLinks = document.querySelectorAll(".nav__link");
const searchInput = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");

// Renderização de cards
function renderArticles(list) {
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = `
      <div class="card" style="grid-column: 1 / -1;">
        <div class="card__content">
          <h3 class="card__title">Nenhum resultado encontrado</h3>
          <p class="card__excerpt">Tente outra busca ou mude a categoria.</p>
        </div>
      </div>`;
    return;
  }

  list.forEach(a => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img class="card__image" src="${a.image}" alt="${a.title}" />
      <div class="card__content">
        <div class="card__meta">${a.source} • ${new Date(a.date).toLocaleDateString("pt-BR")}</div>
        <h3 class="card__title">${a.title}</h3>
        <p class="card__excerpt">${a.excerpt}</p>
      </div>
      <div class="card__actions">
        <a class="card__link" href="${a.url}">Ler mais</a>
        <span class="card__category">#${a.category}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Filtro por categoria
function filterByCategory(category) {
  document.querySelector(".nav__link.active")?.classList.remove("active");
  document.querySelector(`.nav__link[data-category="${category}"]`)?.classList.add("active");

  const filtered = category === "todas" ? articles : articles.filter(a => a.category === category);
  const query = (searchInput.value || "").toLowerCase().trim();

  const finalList = filtered.filter(a =>
    a.title.toLowerCase().includes(query) ||
    a.excerpt.toLowerCase().includes(query) ||
    a.source.toLowerCase().includes(query)
  );

  renderArticles(finalList);
}

// Busca
searchInput.addEventListener("input", () => {
  const current = document.querySelector(".nav__link.active")?.dataset.category || "todas";
  filterByCategory(current);
});

// Navegação
navLinks.forEach(btn => {
  btn.addEventListener("click", () => filterByCategory(btn.dataset.category));
});

// Destaque
function setupHighlight() {
  const highlight = articles[0];
  if (!highlight) return;
  document.getElementById("highlightTitle").textContent = highlight.title;
  document.getElementById("highlightExcerpt").textContent = highlight.excerpt;
  document.getElementById("highlightLink").href = highlight.url;
}

// Tema (claro/escuro)
function applyTheme(pref) {
  if (pref === "dark") document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
}
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Inicialização
(function init() {
  yearEl.textContent = new Date().getFullYear();
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  setupHighlight();
  filterByCategory("todas");
})();
