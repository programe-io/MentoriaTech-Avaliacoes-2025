console.log("Site Stranger Things carregado!");

// ---------- DIALOG ----------
const alerta = document.getElementById("alerta");

// Botão para abrir o dialog vem diretamente do HTML.
// Aqui adicionamos um efeito sonoro opcional:
if (alerta) {
    alerta.addEventListener("close", () => {
        console.log("Dialog fechado.");
    });
}

// ---------- CANVAS DESENHO ----------
const canvas = document.getElementById("canvas");
if (canvas) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.font = "20px Arial";
    ctx.fillText("Mundo Invertido", 50, 75);
}

// ---------- TEMPLATE (ADICIONA UM CARD) ----------
const template = document.getElementById("cardTemplate");

if (template) {
    const newCard = template.content.cloneNode(true);
    document.getElementById("galeria").appendChild(newCard);
}

// ---------- EFEITO MUNDO INVERTIDO (SIMPLIFICADO) ----------
let invertido = false;

document.addEventListener("keydown", (e) => {
    if (e.key === "i" || e.key === "I") {
        invertido = !invertido;

        document.body.style.filter = invertido ? "invert(1)" : "invert(0)";
        console.log("Modo invertido:", invertido);
    }
});
