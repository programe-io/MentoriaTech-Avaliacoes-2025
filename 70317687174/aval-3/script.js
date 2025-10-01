// Comentário de uma linha
/*
 Comentário de várias linhas
*/

// ==== VARIÁVEIS E TIPOS ====
let nome = "Maria";        // string
const idade = 30;          // number
var ativo = true;          // boolean
let indefinido;            // undefined
let nulo = null;           // null
let simbolo = Symbol("id"); // symbol
let bigint = 1234567890123456789012345678901234567890n;

// ==== ARRAYS E OBJETOS ====
let lista = [1, 2, 3, 4];
let pessoa = {
    nome: "João",
    idade: 25,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

// ==== OPERADORES ====
let soma = 10 + 5;
let mult = 2 * 3;
let igualdade = (10 == "10");   // true
let estrita = (10 === "10");    // false
let logico = true && false || !false;

// ==== CONTROLE DE FLUXO ====
if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 12) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

switch (nome) {
    case "Maria":
        console.log("Olá, Maria!");
        break;
    case "João":
        console.log("Olá, João!");
        break;
    default:
        console.log("Olá, visitante!");
}

// ==== LAÇOS DE REPETIÇÃO ====
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

let i = 0;
while (i < 3) {
    console.log("While: ", i);
    i++;
}

do {
    console.log("Do...While");
} while (false);

for (let item of lista) {
    console.log("For...of:", item);
}

for (let key in pessoa) {
    console.log(`Propriedade ${key}: ${pessoa[key]}`);
}

// ==== FUNÇÕES ====
function saudacao(nome = "Visitante") {
    return `Olá, ${nome}`;
}

const saudacao2 = function(nome) {
    return `Oi, ${nome}`;
};

const saudacao3 = nome => `Oi, ${nome}`;

console.log(saudacao("Lucas"));
console.log(saudacao2("Ana"));
console.log(saudacao3("Pedro"));

// ==== CLASSES ====
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz um som.`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late.`);
    }
}

const dog = new Cachorro("Rex");
dog.falar();

// ==== MANIPULAÇÃO DE DOM ====
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("meuBotao");
    botao.addEventListener("click", () => {
        alert("Botão clicado!");
    });

    const div = document.querySelector(".minhaDiv");
    div.style.backgroundColor = "lightblue";
    div.innerText = "Texto alterado via JavaScript!";
});

// ==== EVENTOS ====
window.addEventListener("resize", () => {
    console.log("A janela foi redimensionada.");
});

// ==== FUNÇÕES DE ORDEM SUPERIOR ====
lista.forEach(item => console.log("forEach:", item));

let novaLista = lista.map(num => num * 2);
console.log("map:", novaLista);

let filtrados = lista.filter(num => num > 2);
console.log("filter:", filtrados);

let somaTudo = lista.reduce((acc, val) => acc + val, 0);
console.log("reduce:", somaTudo);

// ==== PROMISES E ASYNC/AWAIT ====
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
    console.log("Esperando 1 segundo...");
    await esperar(1000);
    console.log("Terminou!");
}

executar();

// ==== TRY/CATCH ====
try {
    throw new Error("Erro de exemplo!");
} catch (e) {
    console.error("Erro capturado:", e.message);
} finally {
    console.log("Sempre executa.");
}

// ==== STORAGE ====
localStorage.setItem("chave", "valor");
console.log(localStorage.getItem("chave"));
localStorage.removeItem("chave");

// ==== FETCH API ====
async function carregarDados() {
    try {
        let resposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let dados = await resposta.json();
        console.log("Dados recebidos:", dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}
carregarDados();

// ==== MÓDULOS (em arquivos separados) ====
// export function soma(a, b) { return a + b; }
// import { soma } from './meuModulo.js';

// ==== OUTROS ====
console.table(lista);
console.warn("Aviso!");
console.info("Info!");
console.assert(1 === 2, "Isso está errado!");

