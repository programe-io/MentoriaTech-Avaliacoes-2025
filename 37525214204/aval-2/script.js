// Mensagem de boas-vindas
window.addEventListener("load", () => {
    alert("Bem-vindo à página de Henderson!");
});

// Alternar tema claro/escuro
const temaBtn = document.getElementById("temaBtn");
temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Troca o texto do botão conforme o tema
    temaBtn.textContent = document.body.classList.contains("dark-mode") 
        ? "☀️ Mudar Tema" 
        : "🌙 Mudar Tema";
});

// Atualizar ano automaticamente no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
