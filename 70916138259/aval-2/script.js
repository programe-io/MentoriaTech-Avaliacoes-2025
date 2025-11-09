// 1. Obter o elemento canvas e o contexto 2D
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 2. Definir algumas variáveis para o jogo
const largura = canvas.width;
const altura = canvas.height;

// Posição e tamanho de um quadrado de exemplo
let x = 50;
let y = 50;
const tamanho = 30;
const velocidade = 2;

// 3. Função para desenhar o estado atual do jogo
function desenhar() {
    // Limpa a tela a cada quadro
        ctx.clearRect(0, 0, largura, altura); 
            
                // Desenha o quadrado
                    ctx.fillStyle = 'blue';
                        ctx.fillRect(x, y, tamanho, tamanho);
                        }

                        // 4. Função principal de atualização (Game Loop)
                        function atualizar() {
                            // Lógica de movimento simples (move o quadrado para a direita)
                                x += velocidade;
                                    
                                        // Se o quadrado sair da tela, reseta a posição
                                            if (x > largura) {
                                                    x = -tamanho; 
                                                        }
                                                            
                                                                // Desenha o novo estado
                                                                    desenhar();
                                                                        
                                                                            // Chama a função novamente para criar o loop de animação
                                                                                requestAnimationFrame(atualizar);
                                                                                }

                                                                                // 5. Iniciar o Game Loop
                                                                                atualizar(); 
                                                                                