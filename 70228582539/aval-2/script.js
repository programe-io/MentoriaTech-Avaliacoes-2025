// Comentário de linha
/*
  Comentário de múltiplas linhas
*/

// 1. Variáveis (var, let, const)
var nome = "João"; // Escopo de função (evite)
let idade = 30;     // Escopo de bloco (modificável)
const PI = 3.1416;  // Constante (não pode ser reatribuída)

// 2. Tipos de dados
let numero = 42;                     // Number
let texto = "Olá, mundo!";          // String
let verdadeiro = true;              // Boolean
let indefinido;                     // Undefined
let nulo = null;                    // Null
let simbolo = Symbol("id");         // Symbol
let objeto = { chave: "valor" };    // Object
let array = [1, 2, 3];              // Array

// 3. Operadores
let soma = 5 + 3;
let condicional = (idade >= 18) ? "Adulto" : "Menor";

// 4. Estruturas de controle
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

switch (nome) {
    case "João":
        console.log("Olá, João!");
        break;
    default:
        console.log("Olá, visitante.");
}

// 5. Laços de repetição
for (let i = 0; i < 5; i++) {
    console.log("For:", i);
}

let contador = 0;
while (contador < 3) {
    console.log("While:", contador);
    contador++;
}

do {
    console.log("Do While:", contador);
    contador--;
} while (contador > 0);

// 6. Funções
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

const saudacaoArrow = (nome) => `Oi, ${nome}!`;

console.log(saudacao("Maria"));
console.log(saudacaoArrow("José"));

// 7. Objetos e métodos
const pessoa = {
    nome: "Ana",
    idade: 25,
    falar: function() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};
pessoa.falar();

// 8. Arrays e métodos úteis
const frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");       // adiciona
frutas.pop();             // remove último
frutas.forEach((fruta, i) => console.log(i, fruta));

// 9. Funções de alta ordem (map, filter, reduce)
const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(n => n * 2);
const pares = numeros.filter(n => n % 2 === 0);
const somaTotal = numeros.reduce((acum, val) => acum + val, 0);

console.log("Dobro:", dobro);
console.log("Pares:", pares);
console.log("Soma total:", somaTotal);

// 10. Manipulação do DOM (Document Object Model)
// Requer estar vinculado a um HTML
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Texto alterado com JavaScript";

    const botao = document.querySelector("#meuBotao");
    botao.addEventListener("click", () => {
        alert("Botão clicado!");
    });
});

// 11. Eventos
function aoClicar() {
    console.log("Clicou no botão!");
}

// 12. Timer: setTimeout, setInterval
setTimeout(() => {
    console.log("Executado após 2 segundos");
}, 2000);

let intervalo = setInterval(() => {
    console.log("Executando a cada 1 segundo...");
}, 1000);

// Parar intervalo após 5 segundos
setTimeout(() => {
    clearInterval(intervalo);
    console.log("Intervalo parado.");
}, 5000);

// 13. Try/Catch (tratamento de erros)
try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) throw "Divisão por zero!";
} catch (erro) {
    console.error("Erro:", erro);
} finally {
    console.log("Sempre executa.");
}

// 14. Classes e herança (ES6)
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} fez um som`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} latiu`);
    }
}

let dog = new Cachorro("Rex");
dog.falar();

// 15. Módulos (exemplo simbólico para Node.js ou ES6 modules)
// export function minhaFuncao() { }
// import { minhaFuncao } from './modulo.js';

// 16. Promises e async/await
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executarAsync() {
    console.log("Esperando...");
    await esperar(1000);
    console.log("1 segundo depois!");
}

executarAsync();
