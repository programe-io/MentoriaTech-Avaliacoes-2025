// Animação: Texto piscando
const title = document.querySelector("header h1");

setInterval(() => {
    title.style.textShadow = 
        title.style.textShadow === "0 0 25px red"
        ? "0 0 5px red"
        : "0 0 25px red";
}, 700);

// Botão que muda a imagem para o Mundo Invertido
function inverter() {
    const img = document.querySelector(".image-box img");

    if (!img.classList.contains("invertido")) {
        img.style.filter = "invert(100%) hue-rotate(180deg)";
        img.classList.add("invertido");
        alert("Você entrou no Mundo Invertido!");
    } else {
        img.style.filter = "invert(0%)";
        img.classList.remove("invertido");
        alert("Você voltou ao mundo normal!");
    }
}
