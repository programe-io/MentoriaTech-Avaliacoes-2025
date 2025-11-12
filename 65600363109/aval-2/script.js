/**
 * Função para calcular a área de um círculo.
 * Fórmula: Área = $\pi * raio^2$
 * @param {number} raio - O raio do círculo.
 * @returns {number} - A área calculada.
 */
function calcularAreaCirculo(raio) {
  // Usamos Math.PI para o valor de Pi
  const area = Math.PI * Math.pow(raio, 2);
  return area;
}

// Raio do círculo
const raioDoCirculo = 5;

// Chamando a função
const resultado = calcularAreaCirculo(raioDoCirculo);

// Exibindo o resultado no console
console.log(`O raio é: ${raioDoCirculo}`);
console.log(`A área do círculo é: ${resultado.toFixed(2)}`);

// Resultado esperado no console:
// O raio é: 5
// A área do círculo é: 78.54