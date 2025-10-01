/* Exemplo extenso de JavaScript demonstrando muitos recursos */

// “use strict” para modo estrito
"use strict";

// Variáveis com let, const
const PI = 3.14159;
let contador = 0;
var saudacao = "Olá";

// Funções tradicionais / funções arrow / funções como expressão
function somar(a, b = 0) {
  return a + b;
}
const subtrair = (a, b = 0) => a - b;

// Função geradora
function* geradorSequencia(start = 0) {
  let i = start;
  while (true) {
    yield i++;
  }
}

// Função assíncrona / await / async
async function fetchJson(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Erro HTTP: ${resp.status}`);
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error("Erro em fetchJson:", err);
    throw err;
  }
}

// Classe com herança
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

// Módulo (em ambiente que suporte módulos)
// export function moduloExemplo() { return "algo"; }
// import { moduloExemplo } from "./outro.js";

// Manipulação de arrays / métodos úteis
let arr = [1, 2, 3, 4, 5];
let arrMap = arr.map(x => x * 2);
let arrFilter = arr.filter(x => x % 2 === 0);
let arrReduce = arr.reduce((acc, x) => acc + x, 0);
let arrSome = arr.some(x => x > 3);
let arrEvery = arr.every(x => x < 10);

// Conjuntos / mapas / weakmap / weakset
let mapa = new Map();
mapa.set("chave1", "valor1");
mapa.set("chave2", 2);
let conjunto = new Set([1, 2, 3]);
let weakmap = new WeakMap();
let weakset = new WeakSet();

// Objetos literais / spread / destruturação
let obj = {
  a: 1,
  b: { c: 2, d: 3 },
  metodo() {
    return this.a + this.b.c;
  }
};
let { a: alpha, b: { c: gamma } } = obj;
let obj2 = { ...obj, e: 5 };

// Template strings / literais
let nomeUsuario = "Maria";
let mensagem = `Olá, ${nomeUsuario}! Você tem ${arr.length} itens.`;

// Operadores (ternário, coalescência nula, encadeamento opcional)
let valor = null;
let resultado = valor ?? "padrão";
let usuario = obj.nonexistent?.deep?.deep2;
let cond = (contador > 0) ? "positivo" : "não positivo";

// Operadores bit a bit, shift, lógico, etc
let x = 5;
let y = x << 1;  // shift left
let z = x & 3;   // AND bit a bit

// Tratamento de exceções
try {
  let invalido = somar("a", 5);
  if (isNaN(invalido)) throw new TypeError("Resultado não numérico");
} catch (e) {
  console.error("Erro capturado:", e);
} finally {
  console.log("Bloco finally executado");
}

// Timers / setTimeout / setInterval / clearInterval
let timerId = setTimeout(() => {
  console.log("Executado após 2 segundos");
}, 2000);

let countInterval = 0;
let intervalo = setInterval(() => {
  console.log("Intervalo:", ++countInterval);
  if (countInterval >= 3) {
    clearInterval(intervalo);
  }
}, 1000);

// Eventos do DOM / manipuladores / evento de carregamento
window.addEventListener("load", () => {
  console.log("Página carregada");
});
document.addEventListener("click", event => {
  console.log("Clicou em:", event.target);
});

// Criação de elementos / manipulação do DOM
function criaElemento() {
  const div = document.createElement("div");
  div.id = "minhaDiv";
  div.className = "classeExemplo";
  div.textContent = "Conteúdo de teste";
  document.body.appendChild(div);
}
criaElemento();

// Atributos / estilos / classes
const elem = document.getElementById("minhaDiv");
if (elem) {
  elem.setAttribute("data-info", "teste");
  elem.style.backgroundColor = "#eef";
  elem.classList.add("outra-classe");
  elem.classList.toggle("classe-toggle");
}

// Traversal do DOM / nós / pai / filhos / siblings
if (elem) {
  console.log("Pai:", elem.parentNode);
  console.log("Filhos:", elem.childNodes);
  console.log("Próximo irmão:", elem.nextSibling);
  console.log("Anterior:", elem.previousSibling);
}

// Manipulação de atributos / dataset
if (elem) {
  console.log("Dataset:", elem.dataset.info);
}

// Consulta de seletores / querySelector / querySelectorAll
const ps = document.querySelectorAll("p");
ps.forEach(p => {
  p.style.color = "green";
});

// Uso de MutationObserver
const observer = new MutationObserver((mutationsList, obs) => {
  for (let m of mutationsList) {
    console.log("Mutação:", m.type, m);
  }
});
observer.observe(document.body, { childList: true, subtree: true });

// Interação com localStorage / sessionStorage / cookies (em navegador)
localStorage.setItem("chave", "valor");
let v = localStorage.getItem("chave");
sessionStorage.setItem("sess", "info");
document.cookie = "usuario=Maria; path=/; max-age=3600";

// WebSockets / comunicação em tempo real (exemplo)
let ws;
try {
  ws = new WebSocket("wss://echo.websocket.org");
  ws.onopen = () => {
    console.log("WebSocket aberto");
    ws.send("Olá servidor");
  };
  ws.onmessage = evt => {
    console.log("Mensagem recebida via WS:", evt.data);
  };
  ws.onerror = err => {
    console.error("Erro WebSocket:", err);
  };
  ws.onclose = () => {
    console.log("WebSocket fechado");
  };
} catch (e) {
  console.warn("Não suportado WebSocket:", e);
}

// Uso de fetch com POST / cabeçalhos / formData / blob / arrayBuffer
async function enviaDados() {
  const fd = new FormData();
  fd.append("nome", nomeUsuario);
  fd.append("arquivo", new Blob(["conteúdo"], { type: "text/plain" }), "arquivo.txt");

  const resp = await fetch("/api/upload", {
    method: "POST",
    headers: {
      "X-Custom-Header": "meu-header"
    },
    body: fd,
    mode: "cors",
    credentials: "include"
  });
  const texto = await resp.text();
  console.log("Resposta do POST:", texto);
}

// JSON / stringify / parse
const objetoJson = { a: 1, b: [2, 3] };
const jsonString = JSON.stringify(objetoJson);
const objParse = JSON.parse(jsonString);

// Uso de Intl / formatação / datas
const f = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
console.log("Moeda formatada:", f.format(12345.67));

const d = new Date();
console.log("Data/hora:", d.toISOString());

// Uso de funções de protótipo / herança prototípica
Object.prototype.meuMetodo = function() {
  return "método adicionado ao protótipo de Object";
};
console.log({}.meuMetodo());

// Proxies / Reflect
const alvo = { x: 10, y: 20 };
const proxy = new Proxy(alvo, {
  get(target, prop, receiver) {
    console.log(`Acessando ${String(prop)}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Definindo ${String(prop)} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
});
proxy.x;   // leitura
proxy.y = 50;  // escrita

// Uso de Symbols
const sym1 = Symbol("id");
obj[sym1] = 123;
console.log("Symbol:", obj[sym1]);

// Métodos de string / regexp
let str = "Olá Mundo";
let sub = str.substring(1, 4);
let match = str.match(/Mundo/i);
let repl = str.replace("Mundo", "JS");

/* Exemplo de API moderna: Web Workers (em ambiente que suporte) */
if (window.Worker) {
  const worker = new Worker(URL.createObjectURL(new Blob([`
    self.onmessage = e => {
      self.postMessage("Eco: " + e.data);
    };
  `], { type: "application/javascript" })));
  worker.onmessage = e => console.log("Worker respondeu:", e.data);
  worker.postMessage("Oi worker");
}

// Demonstração de finalização / limpeza
window.addEventListener("beforeunload", e => {
  // execução antes da página ser descarregada
});

// IIFE (Immediately Invoked Function Expression)
(function() {
  console.log("IIFE executada imediatamente");
})();

// Exemplo de undecorated / reflect-metadata / decoradores (experimental)
function decoradorExemplo(target, propertyKey, descriptor) {
  console.log("Decorador aplicado em", propertyKey);
}
class ClasseDecorada {
  @decoradorExemplo
  metodo() {
    console.log("Método decorado");
  }
}

// Fim do exemplo

