// Alterna entre modo claro e escuro
const botao = document.getElementById("modoBtn");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const spanTexto = botao.querySelector("span");
    if (document.body.classList.contains("dark-mode")) {
        botao.textContent = "☀️ ";
        spanTexto.textContent = "Modo Claro";
    } else {
        botao.textContent = "🌙 ";
        spanTexto.textContent = "Modo Escuro";
    }
});
