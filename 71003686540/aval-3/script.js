// Curiosidades
document.getElementById("btnInfo").addEventListener("click", () => {
    const curiosidades = [
        "Metade do tráfego da internet vem do celular.",
        "Robôs já realizam cirurgias sozinhos.",
        "IA cria textos, imagens e músicas.",
        "Mais de 90% das empresas usam computação em nuvem.",
        "Carros autônomos já circulam em diversos países."
    ];

    const span = document.querySelector("#infoText span");
    span.textContent = curiosidades[Math.floor(Math.random() * curiosidades.length)];
});

// Menu mobile
document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("active");
});

// Dark mode
document.getElementById("toggleDark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});