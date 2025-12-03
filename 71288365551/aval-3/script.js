// Seleciona elementos
const nav = document.querySelector("header nav");
const menuToggle = document.createElement("button");

// Botão para abrir/fechar menu em telas pequenas
menuToggle.textContent = "☰";
menuToggle.style.fontSize = "24px";
menuToggle.style.background = "none";
menuToggle.style.border = "none";
menuToggle.style.color = "white";
menuToggle.style.cursor = "pointer";

// Adiciona o botão antes do nav
document.querySelector("header").insertBefore(menuToggle, nav);

// Toggle menu
menuToggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.gap = "10px";
    nav.style.marginTop = "10px";
});

// Efeito de clique nos cards
const cards = document.querySelectorAll("main > div");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        // Remove destaque de todos os cards
        cards.forEach(c => c.style.border = "none");
        // Destaca o card clicado
        card.style.border = "2px solid #60a5fa";
    });
});

// Atualiza os timestamps ("há X minutos") simulando contagem crescente
const timestamps = document.querySelectorAll("main span");
timestamps.forEach(span => {
    let minutes = parseInt(span.textContent.match(/\d+/)) || 0;
    setInterval(() => {
        minutes += 1;
        span.textContent = `há ${minutes} minutos`;
    }, 60000); // a cada 1 minuto
});
