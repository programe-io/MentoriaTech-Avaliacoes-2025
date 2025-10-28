/* ================================
   GAMEZONE BLOG - SCRIPT PRINCIPAL
   ================================ */

// ======= MODO CLARO / ESCURO =======
const toggleButton = document.createElement("button");
toggleButton.innerText = "🌙 Modo Escuro";
toggleButton.id = "theme-toggle";
document.querySelector("header").appendChild(toggleButton);

// Aplica o tema salvo (se houver)
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggleButton.innerText = "☀️ Modo Claro";
}

// Alterna o tema
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggleButton.innerText = "☀️ Modo Claro";
    } else {
        localStorage.setItem("theme", "dark");
        toggleButton.innerText = "🌙 Modo Escuro";
    }
});

// ======= BOTÃO VOLTAR AO TOPO =======
const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.innerText = "⬆️";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======= ANIMAÇÃO DOS POSTS =======
window.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll("article");
    posts.forEach((post, i) => {
        post.style.opacity = 0;
        post.style.transform = "translateY(20px)";
        setTimeout(() => {
            post.style.transition = "0.6s ease";
            post.style.opacity = 1;
            post.style.transform = "translateY(0)";
        }, i * 200);
    });
});
