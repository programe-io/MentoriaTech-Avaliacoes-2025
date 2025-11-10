// Constante de conversão (1 colher de sopa equivale a 15 ml)
const CONVERSAO_ML = 15;

/**
 * Função para calcular a conversão de colheres para mililitros.
 */
function converterMedida() {
    // 1. Capturar o valor inserido no input
    const colheresInput = document.getElementById('colheres');
    const resultadoDiv = document.getElementById('resultado-conversao');
    
    // Converte o valor para número
    const colheres = parseFloat(colheresInput.value); 

    // 2. Validação da entrada
    if (isNaN(colheres) || colheres <= 0) {
        resultadoDiv.innerHTML = 'Por favor, insira uma quantidade válida e positiva de colheres.';
        resultadoDiv.style.backgroundColor = '#f8d7da'; // Cor de erro
        return; 
    }

    // 3. Cálculo da conversão
    const mililitros = colheres * CONVERSAO_ML;

    // 4. Exibir o resultado
    resultadoDiv.innerHTML = `**${colheres}** colheres de sopa equivalem a **${mililitros.toFixed(1)} ml** (mililitros).`;
    resultadoDiv.style.backgroundColor = '#c8e6c9'; // Cor de sucesso
}

// Observação: A função é chamada diretamente no botão HTML usando onclick="converterMedida()"