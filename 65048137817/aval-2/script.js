// ==========================
// VARIÁVEIS E TIPOS DE DADOS
// ==========================
var variavelVar = "Sou var"; // Escopo global ou função
let variavelLet = "Sou let"; // Escopo de bloco
const variavelConst = "Sou const"; // Valor constante

let numero = 42;        // Number
let texto = "Olá Mundo"; // String
let booleano = true;    // Boolean
let nulo = null;        // Null
let indefinido;         // Undefined
let simbolo = Symbol("id"); // Symbol
let objeto = { nome: "Vanessa", idade: 30 }; // Object
let array = [1, 2, 3, "quatro"]; // Array

// ==========================
// OPERADORES
// ==========================
let soma = 10 + 5;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 5;
let modulo = 10 % 3;
let exponencial = 2 ** 3;

// Operadores lógicos
let e = true && false; // AND
let ou = true || false; // OR
let nao = !true;        // NOT

// ==========================
// FUNÇÕES
// ==========================
function funcaoTradicional(nome) {
    return `Olá, ${nome}`;
}

const funcaoArrow = (nome) => `Olá, ${nome}`;

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE executada imediatamente!");
})();

// ==========================
// CONDICIONAIS
// ==========================
if(numero > 10) {
    console.log("Número maior que 10");
} else if(numero === 10) {
    console.log("Número igual a 10");
} else {
    console.log("Número menor que 10");
}

switch(texto) {
    case "Olá Mundo":
        console.log("Texto correto!");
        break;
    default:
        console.log("Texto diferente");
        break;
}

// ==========================
// LOOPS
// ==========================
for(let i = 0; i < array.length; i++) {
    console.log(`Array[${i}] = ${array[i]}`);
}

for(const item of array) {
    console.log("For of:", item);
}

array.forEach((item, index) => {
    console.log(`forEach[${index}] = ${item}`);
}

let contador = 0;
while(contador < 3) {
    console.log("While loop:", contador);
    contador++;
}

let doContador = 0;
do {
    console.log("Do...while loop:", doContador);
    doContador++;
} while(doContador < 2);

// ==========================
// OBJETOS E ARRAYS
// ==========================
objeto.sobrenome = "da Mata";
const { nome, idade } = objeto; // Destructuring
const novoArray = [...array, 5, 6]; // Spread operator
const filtrado = novoArray.filter(num => typeof num === "number");
const mapeado = novoArray.map(num => `${num}-item`);
console.log(filtrado, mapeado);

// ==========================
// DOM
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    // Seletores
    const header = document.querySelector("header");
    const botoes = document.querySelectorAll("button");
    
    // Criar elemento
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Parágrafo criado via JS";
    header.appendChild(novoParagrafo);

    // Alterar estilo
    header.style.backgroundColor = "#ffcc00";

    // Eventos
    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            alert("Botão clicado!");
        });
    });
});

// ==========================
// TIMER
// ==========================
setTimeout(() => console.log("Timeout executado após 2s"), 2000);
let intervalo = setInterval(() => console.log("Intervalo a cada 1s"), 1000);
setTimeout(() => clearInterval(intervalo), 5000);

// ==========================
// TRATAMENTO DE ERROS
// ==========================
try {
    throw new Error("Erro de teste");
} catch(e) {
    console.error("Erro capturado:", e.message);
} finally {
    console.log("Bloco finally executado");
}

// ==========================
// FETCH / PROMISES / ASYNC-AWAIT
// ==========================
const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    .then(response => response.json())
    .then(data => console.log("Fetch then:", data))
    .catch(err => console.error("Erro fetch:", err));

async function buscarDados() {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        console.log("Async/Await:", dados);
    } catch(e) {
        console.error("Erro async:", e);
    }
}
buscarDados();

// ==========================
// CLASSES
// ==========================
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const pessoa1 = new Pessoa("Vanessa", 30);
pessoa1.saudacao();
