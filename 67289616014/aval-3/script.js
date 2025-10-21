const comidas = {
  "Feijoada": {
    type: "prato",
    desc: "Tradicional prato brasileiro feito com feijão preto e carnes.",
    ingredients: ["Feijão preto", "Carne seca", "Linguiça", "Bacon", "Tempero"],
    steps: ["Cozinhar o feijão", "Refogar as carnes", "Misturar e ferver até engrossar"]
  },
  "Acarajé": {
    type: "prato",
    desc: "Bolinho frito de feijão-fradinho, típico da Bahia.",
    ingredients: ["Feijão-fradinho", "Cebola", "Azeite de dendê", "Vatapá", "Camarão"],
    steps: ["Bater o feijão", "Fritar em dendê", "Rechear com vatapá e camarão"]
  },
  "Brigadeiro": {
    type: "sobremesa",
    desc: "Doce clássico feito com leite condensado, manteiga e chocolate.",
    ingredients: ["1 lata de leite condensado", "1 colher de manteiga", "3 colheres de chocolate em pó"],
    steps: ["Misturar tudo e levar ao fogo", "Mexer até engrossar", "Deixar esfriar e enrolar"]
  }
};

const cardsContainer = document.getElementById("cards");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const closeModal = document.getElementById("closeModal");
const closeModal2 = document.getElementById("closeModal2");
const toggleDark = document.getElementById("toggleDark");

// Criação dinâmica dos cards
Object.keys(comidas).forEach(nome => {
  const c = comidas[nome];
  const card = document.createElement("article");
  card.className = "card bg-white rounded-2xl shadow p-4 hover:shadow-lg";
  card.dataset.title = nome;
  card.dataset.type = c.type;
  card.innerHTML = `
    <img src="https://source.unsplash.com/600x400/?food,${nome}" alt="${nome}" class="card-img w-full rounded-lg mb-4">
    <h3 class="text-lg font-semibold">${nome}</h3>
    <p class="text-sm text-gray-600 mb-3">${c.desc}</p>
    <button class="btn-open px-4 py-2 bg-orange-600 text-white rounded">Ver Receita</button>
  `;
  cardsContainer.appendChild(card);
});

// Abrir modal
function abrirModal(nome) {
  const comida = comidas[nome];
  modalTitle.textContent = nome;
  modalDesc.textContent = comida.desc;
  modalIngredients.innerHTML = comida.ingredients.map(i => `<li>${i}</li>`).join("");
  modalSteps.innerHTML = comida.steps.map(p => `<li>${p}</li>`).join("");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

// Fechar modal
function fecharModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Eventos
document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-open")) {
    const card = e.target.closest(".card");
    abrirModal(card.dataset.title);
  }
  if (e.target === modal || e.target === closeModal || e.target === closeModal2) {
    fecharModal();
  }
});

// Filtro e busca
function filtrarComidas() {
  const busca = searchInput.value.toLowerCase();
  const tipo = filterSelect.value;
  document.querySelectorAll(".card").forEach(card => {
    const titulo = card.dataset.title.toLowerCase();
    const t = card.dataset.type;
    const visivel = titulo.includes(busca) && (tipo === "all" || tipo === t);
    card.classList.toggle("hidden", !visivel);
  });
}
searchInput.addEventListener("input", filtrarComidas);
filterSelect.addEventListener("change", filtrarComidas);

// Modo escuro
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-gray-100");
  toggleDark.textContent = document.body.classList.contains("bg-gray-900") ? "☀️" : "🌙";
});
