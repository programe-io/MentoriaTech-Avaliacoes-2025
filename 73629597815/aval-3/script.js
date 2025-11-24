// ----------- MODO ESCURO -----------
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Modo Claro";
    } else {
        toggleBtn.textContent = "🌙 Modo Escuro";
    }
});


// ----------- BOTÃO VOLTAR AO TOPO -----------
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ----------- ANIMAÇÃO DE FADE-IN AO ROLAR -----------
const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);