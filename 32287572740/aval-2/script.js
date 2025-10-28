// Alterna entre modo claro e escuro
const botao = document.getElementById("modoBtn");

botao.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botao.textContent = "☀️ Modo Claro";
    } else {
        botao.textContent = "🌙 Modo Escuro";
    }
});