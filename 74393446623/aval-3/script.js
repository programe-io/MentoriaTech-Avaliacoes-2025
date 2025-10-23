document.addEventListener('DOMContentLoaded', function() {
    // =======================================================
    // 1. SIMULADOR DE FINANCIAMENTO (SEÇÃO #financiamento)
    // =======================================================

    const formFinanciamento = document.querySelector('#financiamento form');
    const resultadoContainer = document.createElement('div');
    resultadoContainer.id = 'resultado-simulacao';
    formFinanciamento.parentNode.insertBefore(resultadoContainer, formFinanciamento.nextSibling);

    // Variável para a taxa de juros (pode ser fixa para o exemplo)
    const TAXA_JUROS_ANUAL = 0.12; // 12% ao ano
    const TAXA_JUROS_MENSAL = TAXA_JUROS_ANUAL / 12; // 1% ao mês

    formFinanciamento.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio tradicional do formulário

        // 1. Captura dos valores
        const valorTotal = parseFloat(document.getElementById('valor').value);
        const numeroParcelas = parseInt(document.getElementById('parcelas').value);
        
        // ** (Opcional: você pode adicionar um campo de Entrada no HTML e capturá-lo aqui)
        const valorEntrada = 0; 

        if (isNaN(valorTotal) || valorTotal <= 0 || isNaN(numeroParcelas) || numeroParcelas <= 0) {
            resultadoContainer.innerHTML = '<p class="erro">Por favor, insira valores válidos.</p>';
            return;
        }

        const valorFinanciado = valorTotal - valorEntrada;

        // 2. Cálculo da Parcela (Método PRICE - Fórmula da Amortização)
        // PMT = PV * [i * (1 + i)^n] / [(1 + i)^n - 1]
        // Onde:
        // PV = Valor Financiado
        // i = Taxa de Juros Mensal
        // n = Número de Parcelas
        
        const i_potencia_n = Math.pow(1 + TAXA_JUROS_MENSAL, numeroParcelas);
        
        // Se a taxa for zero, o cálculo é apenas PV / n, mas evitamos divisão por zero.
        let valorParcela;
        if (TAXA_JUROS_MENSAL === 0) {
             valorParcela = valorFinanciado / numeroParcelas;
        } else {
            valorParcela = valorFinanciado * (TAXA_JUROS_MENSAL * i_potencia_n) / (i_potencia_n - 1);
        }

        // 3. Cálculos Adicionais
        const totalPago = valorParcela * numeroParcelas;
        const totalJuros = totalPago - valorFinanciado;

        // 4. Exibição dos resultados (Formatando para moeda BRL)
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        resultadoContainer.innerHTML = `
            <h3>Resultado da Simulação</h3>
            <p>Valor Financiado: <strong>${formatter.format(valorFinanciado)}</strong></p>
            <p>Taxa de Juros (mensal): <strong>${(TAXA_JUROS_MENSAL * 100).toFixed(2)}%</strong></p>
            <p>Nº de Parcelas: <strong>${numeroParcelas}x</strong></p>
            <p class="destaque-parcela">Valor da Parcela Mensal: <strong>${formatter.format(valorParcela)}</strong></p>
            <p class="total-juros">Total de Juros: ${formatter.format(totalJuros)}</p>
            <p class="total-pago">Total Final Pago: ${formatter.format(totalPago)}</p>
        `;

        // Adiciona um pouco de CSS inline para o destaque da parcela (opcional)
        document.querySelector('.destaque-parcela').style.cssText = 'font-size: 1.3em; color: var(--cor-secundaria); font-weight: bold;';
    });


    // =======================================================
    // 2. FUNÇÃO SIMPLES PARA GALERIA/SLIDER DE CARROS
    // (Apenas um esqueleto para demonstração de interatividade)
    // =======================================================
    
    // ** NOTA: Para que isso funcione, você precisaria de uma estrutura HTML
    //    com botões "Próximo" e "Anterior" e os cards de carros dentro de um container.

    /*
    
    // Exemplo de como usar:
    const sliderContainer = document.querySelector('#estoque');
    if (sliderContainer) {
        let indiceAtual = 0;
        const carros = sliderContainer.querySelectorAll('.carro-destaque');
        const totalCarros = carros.length;

        function mostrarCarro(index) {
            carros.forEach((carro, i) => {