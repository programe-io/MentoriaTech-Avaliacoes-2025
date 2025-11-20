// A função principal que será chamada quando o botão for clicado
function calcularPrevisao() {
    // 1. Capturar o valor de entrada do usuário
        const horasInput = document.getElementById('horas_estudo');
            const horasEstudo = parseFloat(horasInput.value);

                // Selecionar o elemento onde o resultado será exibido
                    const resultadoDiv = document.getElementById('resultado_previsao');
                        
                            // Validar a entrada
                                if (isNaN(horasEstudo) || horasEstudo <= 0) {
                                        resultadoDiv.innerHTML = '<p class="erro">Por favor, insira um número válido de horas de estudo (maior que zero).</p>';
                                                resultadoDiv.style.display = 'block';
                                                        return;
                                                            }

                                                                // --- 2. Simulação da Lógica do Modelo ML (Backend) ---
                                                                    /*
                                                                          Em um sistema real, esta parte faria uma requisição AJAX (fetch/axios)
                                                                                para um endpoint de API (por exemplo, '/api/prever'), que executaria
                                                                                      o modelo Python e retornaria a previsão.
                                                                                            
                                                                                                  Exemplo de como seria a fórmula da regressão linear (baseada em um modelo
                                                                                                        com Coeficiente Angular de ~5.5 e Intercepto de ~45):
                                                                                                              Nota Prevista = (horasEstudo * 5.5) + 45
                                                                                                                  */
                                                                                                                      
                                                                                                                          // Simulação direta para fins de exemplo no frontend
                                                                                                                              const coeficienteAngular = 5.5;
                                                                                                                                  const intercepto = 45.0;
                                                                                                                                      const notaPrevista = (horasEstudo * coeficienteAngular) + intercepto;
                                                                                                                                          
                                                                                                                                              // Formatar a nota com duas casas decimais
                                                                                                                                                  const notaFormatada = notaPrevista.toFixed(2);


                                                                                                                                                      // --- 3. Exibir o Resultado na Interface ---
                                                                                                                                                          
                                                                                                                                                              resultadoDiv.innerHTML = `
                                                                                                                                                                      <p class="sucesso">Previsão Concluída! 🚀</p>
                                                                                                                                                                              <div class="previsao-final">
                                                                                                                                                                                          Para **${horasEstudo} horas** de estudo, a nota final prevista é: 
                                                                                                                                                                                                      <span class="valor">${notaFormatada}</span>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                  `;

                                                                                                                                                                                                                      // Tornar a div de resultado visível
                                                                                                                                                                                                                          resultadoDiv.style.display = 'block';
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                          // Opcional: Adicionar um listener para rodar a função quando o botão for clicado
                                                                                                                                                                                                                          document.addEventListener('DOMContentLoaded', () => {
                                                                                                                                                                                                                              const botao = document.getElementById('btn_prever');
                                                                                                                                                                                                                                  if (botao) {
                                                                                                                                                                                                                                          botao.addEventListener('click', calcularPrevisao);
                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                              });
                                                                                                                                                                                                                                              