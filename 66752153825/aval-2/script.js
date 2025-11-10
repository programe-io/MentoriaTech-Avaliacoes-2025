// === Mensagem de boas-vindas ===
window.addEventListener("load", () => {
    const mensagem = document.createElement("div");
    mensagem.textContent = "🏆 Bem-vindo ao Mundo do Futsal!";
    mensagem.className = "mensagem-boas-vindas";
    document.body.appendChild(mensagem);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.style.opacity = "0";
        setTimeout(() => mensagem.remove(), 500);
    }, 3000);
});

// === Rolagem suave ===
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: alvo.offsetTop - 60,
            behavior: "smooth"
        });
    });
});

// === Botão "Voltar ao topo" ===
const topoBtn = document.createElement("button");
topoBtn.textContent = "⬆ Topo";
topoBtn.className = "btn-topo";
document.body.appendChild(topoBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topoBtn.style.display = "block";
    } else {
        topoBtn.style.display = "none";
    }
});

topoBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
