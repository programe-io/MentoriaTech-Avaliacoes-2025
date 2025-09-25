// 1. Mensagem de boas-vindas
window.onload = function () {
    alert("Bem-vindo ao site Minecraft Fan!");
};

// 2. Alternar visibilidade do <aside>
function toggleAside() {
    const aside = document.querySelector("aside");
    if (aside.style.display === "none") {
        aside.style.display = "block";
    } else {
        aside.style.display = "none";
    }
}

// 3. Efeito de destaque nos cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0 0 15px #00ff00";
        card.style.transform = "scale(1.02)";
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "0 0 8px #0f0";
        card.style.transform = "scale(1)";
    });
});
