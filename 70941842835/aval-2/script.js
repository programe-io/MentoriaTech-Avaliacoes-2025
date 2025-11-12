// Botão de modo escuro
const botaoModo = document.getElementById("btnModo");
const body = document.body;

// Lê preferência anterior (se houver)
if (localStorage.getItem("modo") === "escuro") {
    body.classList.add("dark-mode");
    botaoModo.textContent = "☀️ Alternar Modo Claro";
}

botaoModo.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        botaoModo.textContent = "☀️ Alternar Modo Claro";
        localStorage.setItem("modo", "escuro");
    } else {
        botaoModo.textContent = "🌙 Alternar Modo Escuro";
        localStorage.setItem("modo", "claro");
    }
});

// Animação de entrada suave nas imagens
const imagens = document.querySelectorAll("img");
window.addEventListener("scroll", () => {
    imagens.forEach(img => {
        const pos = img.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        if (pos < alturaTela - 100) {
            img.style.opacity = "1";
            img.style.transform = "translateY(0)";
        }
    });
});

// Efeito inicial nas imagens
imagens.forEach(img => {
    img.style.opacity = "0";
    img.style.transform = "translateY(30px)";
    img.style.transition = "all 0.8s ease";
});
