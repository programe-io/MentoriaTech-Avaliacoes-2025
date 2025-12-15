const times = [
"Time Azul",
"Time Vermelho",
"Time Verde",
"Time Amarelo"
];


const jogos = [
{ casa: "Time Azul", fora: "Time Vermelho", horario: "10:00" },
{ casa: "Time Verde", fora: "Time Amarelo", horario: "11:00" }
];


let placar = {
casa: 0,
fora: 0
};


// ====== FUNÇÕES ======


// Mostrar lista de times
function mostrarTimes() {
const lista = document.getElementById("lista-times");
lista.innerHTML = "";


times.forEach(time => {
const li = document.createElement("li");
li.textContent = time;
lista.appendChild(li);
});
}


// Mostrar tabela de jogos
function mostrarJogos() {
const tabela = document.getElementById("tabela-jogos");
tabela.innerHTML = "";


jogos.forEach(jogo => {
const p = document.createElement("p");
p.textContent = `${jogo.casa} x ${jogo.fora} - ${jogo.horario}`;
tabela.appendChild(p);
});
}


// Atualizar placar
function golCasa() {
placar.casa++;
atualizarPlacar();
}


function golFora() {
placar.fora++;
atualizarPlacar();
}


}