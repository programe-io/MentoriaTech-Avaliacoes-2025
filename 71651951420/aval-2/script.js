// ======== BOTÃO "VOLTAR AO TOPO" ========
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======== MODO ESCURO / CLARO ========
const themeToggle = document.getElementById("themeToggle");
let darkMode = false;

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkMode = !darkMode;
    themeToggle.textContent = darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// ======== ANIMAÇÃO AO ROLAR ========
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});