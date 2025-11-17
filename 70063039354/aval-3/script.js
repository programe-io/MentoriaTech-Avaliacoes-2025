// ==== Mensagem de boas-vindas ====
window.addEventListener("load", () => {
    console.log("Página sobre cabelos cacheados carregada com sucesso!");
});

// ==== Botão para ativar modo escuro ====
const toggleButton = document.createElement("button");
toggleButton.textContent = "Alternar modo escuro";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px 15px";
toggleButton.style.backgroundColor = "#8b5cf6";
toggleButton.style.color = "white";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "8px";
toggleButton.style.cursor = "pointer";
toggleButton.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Modo claro";
    } else {
        toggleButton.textContent = "Modo escuro";
    }
});

// ==== Animação suave ao rolar ====
const elements = document.querySelectorAll(".container, h2, p, ul, img");

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", checkScroll);
checkScroll();
