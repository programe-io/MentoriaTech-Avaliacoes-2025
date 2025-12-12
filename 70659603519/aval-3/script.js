// ===== HEADER =====
const header = document.querySelector("header");
header.addEventListener("click", () => {
    alert("Bem-vindo às receitas rápidas!");
});

// ===== NAV (ações dos filtros fictícios) =====
const nav = document.querySelector("nav");
nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        alert(`Você clicou em: ${event.target.textContent}`)
