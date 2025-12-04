// ARQUIVO: javascript_completo.js

// --- 1. VARIÁVEIS, CONSTANTES E TIPOS DE DADOS ---
const PI = 3.14159; // Constante (não muda)
let contador = 0; // Variável (pode mudar)
var legado = "Evitar usar 'var' em código moderno"; // Variável antiga
let isJogoAtivo = true;
let nomeJogador = null; // Valor nulo
let tipoObjeto; // Valor undefined

// Tipos de Dados complexos
const arrayDePontos = [10, 20, 30]; // Array
const objetoJogador = { vida: 100, x: 50, y: 50 }; // Objeto
const mapa = new Map(); // Estrutura de dados Map

// --- 2. FUNÇÕES E ARROW FUNCTIONS ---
function somar(a, b) {
    return a + b;
    }

    const subtrair = (a, b) => a - b; // Arrow function curta

    const logarMensagem = (msg) => {
        console.log(`[LOG] ${msg}`);
        };

        // Chamadas de funções
        logarMensagem(`A soma é: ${somar(5, 3)}`);

        // --- 3. ESTRUTURAS DE CONTROLE (Fluxo) ---

        // Condicional IF/ELSE/ELSE IF
        if (contador === 0) {
            logarMensagem("Início do contador.");
            } else if (contador > 0) {
                logarMensagem("Contador positivo.");
                } else {
                    logarMensagem("Contador negativo.");
                    }

                    // Loop FOR
                    for (let i = 0; i < arrayDePontos.length; i++) {
                        logarMensagem(`Ponto ${i}: ${arrayDePontos[i]}`);
                        }

                        // Loop FOR...OF (Para iterar sobre valores de array)
                        for (const ponto of arrayDePontos) {
                            logarMensagem(`Valor do ponto: ${ponto}`);
                            }

                            // Loop
                            