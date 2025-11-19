// Curiosidades do Vasco
document.getElementById("btnInfo").addEventListener("click", () => {
    const curiosidades = [
        "O Vasco foi o primeiro clube a lutar contra o racismo no futebol brasileiro.",
        "O São Januário é o maior estádio privado do Brasil.",
        "O Vasco ganhou a Libertadores em 1998.",
        "Roberto Dinamite é o maior artilheiro da história do Brasileirão.",
        "O Vasco tem uma das maiores torcidas do país."
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

// Hino
document.getElementById("playHino").addEventListener("click", () => {
    const audio = document.getElementById("audioHino");
    audio.currentTime = 0;
    audio.play();
});

// Botão voltar ao topo
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});