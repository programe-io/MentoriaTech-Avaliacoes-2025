// JavaScript do projeto — versão completa e expandida
// Este código existe apenas para demonstrar lógica, interação e organização.

// ---------------------------
// Funções úteis
// ---------------------------

// Mostra mensagem no console
function log(msg) {
    console.log("[LOG]: " + msg);
}

// Soma dois valores
function somar(a, b) {
    return a + b;
}

// Retorna data e hora formatada
function getData() {
    const agora = new Date();
    return agora.toLocaleString("pt-BR");
}

log("Sistema iniciado às " + getData());

// ---------------------------
// Manipulação de arrays
// ---------------------------

const alunos = [
    "Ana", "Bruno", "Carlos", "Daniela",
    "Eduardo", "Fernanda", "Gustavo", "Helena"
];

// Filtrar nomes com 6 letras
const alunosFiltrados = alunos.filter(a => a.length >= 6);
log("Alunos filtrados: " + alunosFiltrados.join(", "));

// ---------------------------
// Objetos
// ---------------------------

const avaliacao = {
    titulo: "Projeto Programe.io",
    status: "Em andamento",
    progresso: 0,
    atualizarProgresso(valor) {
        this.progresso = valor;
        log(`Progresso atualizado para ${valor}%`);
    }
};

avaliacao.atualizarProgresso(35);

// ---------------------------
// Interação com a página
// ---------------------------

function criarMensagem(texto, cor = "blue") {
    const div = document.createElement("div");
    div.textContent = texto;
    div.style.padding = "10px";
    div.style.marginTop = "10px";
    div.style.borderRadius = "8px";
    div.style.background = cor;
    div.style.color = "#fff";
    div.style.fontSize = "18px";
    document.body.appendChild(div);
}

criarMensagem("JavaScript carregado com sucesso!", "purple");

// ---------------------------
// Animação simples com JS
// ---------------------------

function animarElemento() {
    const caixa = document.createElement("div");
    caixa.style.width = "60px";
    caixa.style.height = "60px";
    caixa.style.background = "#4CAF50";
    caixa.style.borderRadius = "10px";
    caixa.style.position = "relative";
    caixa.style.marginTop = "20px";
    document.body.appendChild(caixa);

    let pos = 0;
    let direcao = 1;

    setInterval(() => {
        pos += 3 * direcao;
        if (pos >= 200) direcao = -1;
        if (pos <= 0) direcao = 1;
        caixa.style.left = pos + "px";
    }, 20);
}

animarElemento();

// ---------------------------
// Eventos
// ---------------------------

document.addEventListener("click", () => {
    log("Tela clicada!");
    criarMensagem("Você clicou na tela!", "#f44336");
});

// ---------------------------
// Loop demonstrativo
// ---------------------------

for (let i = 1; i <= 5; i++) {
    log("Contador: " + i);
}

// Finalização
log("Script finalizado.");
