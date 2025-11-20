// Função para calcular os ingredientes com base no número de porções
function calcularIngredientes() {
    // 1. Obter o valor do campo de input
    // Usamos Number() para garantir que o valor seja tratado como um número
    const porcoes = Number(document.getElementById('inputPorcoes').value);

    // 2. Definir as proporções base para 1 porção (conforme o seu HTML)
    // 1 Porção:
    const flocaoBase = 1;      // 1 xícara de flocão
    const aguaBase = 0.5;      // 0.5 xícara de água
    const salBase = 1;         // 1 colher de chá de sal (apenas referência)

    let resultadoTexto = "";

    // 3. Validar a entrada
    if (isNaN(porcoes) || porcoes <= 0) {
        resultadoTexto = "⚠️ Por favor, insira um número de porções válido (maior que zero).";
    } else {
        // 4. Calcular os novos valores
        const flocaoTotal = flocaoBase * porcoes;
        const aguaTotal = aguaBase * porcoes;
        const salTotal = salBase * porcoes;

        // 5. Formatar o resultado
        resultadoTexto = `
            Para **${porcoes} porç${porcoes > 1 ? 'ões' : 'ão'}** de cuscuz, você precisará de:
            <ul>
                <li>**${flocaoTotal.toFixed(1)}** xícara(s) de flocão de milho</li>
                <li>**${aguaTotal.toFixed(1)}** xícara(s) de água</li>
                <li>**${salTotal}** colher(es) de chá de sal (ajuste a gosto)</li>
            </ul>
        `;
    }

    // 6. Inserir o resultado no elemento HTML
    document.getElementById('resultadoCalculo').innerHTML = resultadoTexto;
}