// ARQUIVO: script.js - Referência de TODAS as Estruturas Essenciais

// --- 1. VARIÁVEIS E OBJETOS GLOBAIS ---
const PI = Math.PI; 
let contador = 0; 

// Estruturas de Dados
const array = [1, 2, 3]; 
const objeto = { id: 1, nome: "Item" }; 

// --- 2. CLASSES E POO ---
class Entity { // Classe Base
    constructor(x, y) {
            this.x = x;
                    this.y = y;
                        }
                        }

                        class Player extends Entity { // Herança (Extends)
                            constructor(x, y) {
                                    super(x, y); 
                                            this.vida = 100;
                                                }
                                                    async carregar() { /* Método Assíncrono */ }
                                                    }

                                                    const jogador = new Player(10, 10);

                                                    // --- 3. FUNÇÕES E FLUXO DE CONTROLE ---
                                                    function somar(a, b) { return a + b; }
                                                    const subtrair = (a, b) => a - b; // Arrow Function

                                                    if (contador === 0) {
                                                        /* Bloco IF */
                                                        }

                                                        // --- 4. MANIPULAÇÃO DO DOM (HTML) E EVENTOS ---

                                                        document.addEventListener('DOMContentLoaded', () => { 
                                                            const elemento = document.getElementById('gameCanvas'); 
                                                                
                                                                    if (elemento) {
                                                                            console.log("Elemento encontrado:", elemento);
                                                                                    
                                                                                            elemento.addEventListener('click', (evento) => {
                                                                                                        evento.preventDefault(); 
                                                                                                                });
                                                                                                                        
                                                                                                                                const novoDiv = document.createElement('div'); 
                                                                                                                                        document.body.appendChild(novoDiv); 
                                                                                                                                            }
                                                                                                                                            });

                                                                                                                                            // --- 5. ASSÍNCRONO E PROMISES ---

                                                                                                                                            const minhaPromise = new Promise((resolve, reject) => { /* Criação de Promise */ resolve("Sucesso"); });

                                                                                                                                            async function executarAsync() {
                                                                                                                                                try { 
                                                                                                                                                        const resultado = await minhaPromise; 
                                                                                                                                                                console.log(resultado);
                                                                                                                                                                    } catch (erro) { 
                                                                                                                                                                            console.error(erro);
                                                                                                                                                                                } 
                                                                                                                                                                                }
                                                                                                                                                                                executarAsync();

                                                                                                                                                                                // --- 6. GAME LOOP ---
                                                                                                                                                                                const gameLoop = (timestamp) => {
                                                                                                                                                                                    // requestAnimationFrame(gameLoop); 
                                                                                                                                                                                    };
                                                                                                                                                                                    // requestAnimationFrame(gameLoop); 

                                                                                                                                                                                    // --- 7. MÉTODOS DE ARRAY ---
                                                                                                                                                                                    array.forEach((item) => { /* Itera */ });
                                                                                                                                                                                    const filtrados = array.filter(item => item > 1); 

                                                                                                                                                                                    // Desestruturação
                                                                                                                                                                                    const { id } = objeto; 
                                                                                                                                                                                    