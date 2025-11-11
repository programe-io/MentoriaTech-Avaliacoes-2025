// Função principal de conversão
function converter() {
  const input = document.getElementById('celsius');
    const resultado = document.getElementById('resultado');

      const celsius = parseFloat(input.value);

        // Verifica se o valor é válido
          if (isNaN(celsius)) {
              resultado.innerHTML = "<p class='erro'>Por favor, digite um valor válido!</p>";
                  return;
                    }

                      // Fórmulas de conversão
                        const fahrenheit = (celsius * 9/5) + 32;
                          const kelvin = celsius + 273.15;

                            // Exibe os resultados formatados
                              resultado.innerHTML = `
                                  <p>Temperatura em Celsius: <strong>${celsius.toFixed(2)} °C</strong></p>
                                      <p>Temperatura em Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong></p>
                                          <p>Temperatura em Kelvin: <strong>${kelvin.toFixed(2)} K</strong></p>
                                            `;
                                            }

                                            // Evento de clique do botão
                                            document.getElementById('btnConverter').addEventListener('click', converter);