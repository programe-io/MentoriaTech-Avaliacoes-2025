// Mensagem de boas-vindas no console
console.log("Bem-vindo ao MPB Brasil 🎵");

// saudação no header
window.addEventListener("DOMContentLoaded", function () {
    const mensagem = document.createElement("p");
    mensagem.textContent = "Que a música brasileira toque seu coração! 💛";
    mensagem.style.fontStyle = "italic";
    mensagem.style.textAlign = "center";
    document.querySelector("header").appendChild(mensagem);
});

// botão play/pausar música
const audio = new Audio("musica.mp3"); // coloque um mp3 real na pasta
let tocando = false;

function tocarMusica() {
    if (!tocando) {
        audio.play();
        tocando = true;
        document.getElementById("btn-musica").textContent = "⏸ Pausar";
    } else {
        audio.pause();
        tocando = false;
        document.getElementById("btn-musica").textContent = "▶ Tocar MPB";
    }
}

// animação simples ao passar o mouse no menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#FFD84D";
    });

    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});