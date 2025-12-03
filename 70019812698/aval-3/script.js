/* BOTÃO MODO ESCURO / CLARO */
const body = document.body;

const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Modo Escuro";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "15px";
toggleBtn.style.right = "15px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.border = "none";
toggleBtn.style.background = "#00bfff";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.borderRadius = "5px";
toggleBtn.style.fontWeight = "bold";

document.body.appendChild(toggleBtn);

let dark = true;

toggleBtn.addEventListener("click", () => {
    dark = !dark;
    body.classList.toggle("dark-mode", dark);
    toggleBtn.textContent = dark ? "🌙 Modo Escuro" : "☀️ Modo Claro";
});

/* ANIMAÇÃO EM POSTS */
const posts = document.querySelectorAll(".post, div.post, span.post");

posts.forEach(post => {
    post.addEventListener("mouseenter", () => {
        post.style.transform = "scale(1.03)";
        post.style.transition = ".2s";
        post.style.boxShadow = "0 0 10px #00bfff";
    });
    post.addEventListener("mouseleave", () => {
        post.style.transform = "scale(1)";
        post.style.boxShadow = "none";
    });
});

/* MENU MOBILE */
if (window.innerWidth < 600) {
    const nav = document.querySelector("nav div span");
    if (nav) {
        const links = nav.querySelectorAll("a");
        const menuBtn = document.createElement("button");
        menuBtn.textContent = "☰ Menu";
        menuBtn.style.background = "#00bfff";
        menuBtn.style.border = "none";
        menuBtn.style.padding = "10px 15px";
        menuBtn.style.marginBottom = "10px";
        menuBtn.style.cursor = "pointer";
        menuBtn.style.borderRadius = "5px";
        nav.prepend(menuBtn);

        links.forEach(link => link.style.display = "none");

        let open = false;
        menuBtn.addEventListener("click", () => {
            open = !open;
            links.forEach(link => link.style.display = open ? "block" : "none");
        });
    }
}
