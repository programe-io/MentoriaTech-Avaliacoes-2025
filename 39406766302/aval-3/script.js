let respirando = false;
let etapaAtual = 0;
let intervaloRespiracao;

const etapas = [
    { texto: "Inspire profundamente...", duracao: 4000 },
    { texto: "Segure o ar...", duracao: 2000 },
    { texto: "Expire lentamente...", duracao: 4000 }
];

const botao = document.getElementById("btn-respirar");
const estado = document.getElementById("estado-respiracao");
const circulo = document.querySelector(".circulo");

// Inicia ou para o exercício
botao.addEventListener("click", () => {
    if (!respirando) {
        iniciarRespiracao();
    } else {
        pararRespiracao();
    }
});

function iniciarRespiracao() {
    respirando = true;
    botao.textContent = "Parar";
    etapaAtual = 0;
    executarEtapa();
}

function pararRespiracao() {
    respirando = false;
    botao.textContent = "Iniciar Respiração Guiada";
    clearTimeout(intervaloRespiracao);
    estado.textContent = "";
    circulo.style.animation = ""; // pausa animação
}

function executarEtapa() {
    if (!respirando) return;

    const etapa = etapas[etapaAtual];
    estado.textContent = etapa.texto;

    // Muda a animação do círculo para acompanhar a respiração
    if (etap
