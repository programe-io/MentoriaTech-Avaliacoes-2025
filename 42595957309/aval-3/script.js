// --- Modo Escuro ---
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    darkModeBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Modo Claro"
        : "🌙 Modo Escuro";
});

// --- Botões Curtir ---
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("liked");
        button.textContent = button.classList.contains("liked") ? "💖 Curtido" : "❤️ Curtir";
    });
});

// --- Busca de Posts ---
const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post");

searchInput.addEventListener("keyup", () => {
    const filtro = searchInput.value.toLowerCase();
    posts.forEach(post => {
        const titulo = post.querySelector("h2").textContent.toLowerCase();
        post.style.display = titulo.includes(filtro) ? "block" : "none";
    });
});
