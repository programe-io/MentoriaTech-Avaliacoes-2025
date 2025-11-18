// Rolagem suave ao clicar no menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const destino = document.querySelector(link.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" });
    });
});

// Ano automático no rodapé
document.querySelector(".year").textContent = new Date().getFullYear();

// Efeito de destaque dos títulos ao aparecerem na tela
const observador = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1.02)";
            entry.target.style.transition = "0.4s";
        }
    });
});

document.querySelectorAll("article, section").forEach(elemento => {
    observador.observe(elemento);
});
