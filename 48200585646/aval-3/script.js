/**
 * Constantes de consumo de água em Litros (L).
 * Valores baseados em estimativas médias:
 * - Banho (por minuto): 9 a 15 L/min
 * - Escovar dentes (torneira aberta): 10 a 20 L/vez
 * - Descarga (caixa acoplada): 6 a 10 L/acionamento
 */
const CONSUMO_POR_MINUTO_BANHO = 12; // Média 12 L/min
const CONSUMO_POR_VEZ_ESCOVAR = 15;  // Média 15 L/vez
const CONSUMO_POR_DESCARGA = 8;      // Média 8 L/descarga

function calcularConsumo() {
    // 1. Capturar os valores dos inputs
    const minutosBanho = parseFloat(document.getElementById('banho').value) || 0;
    const vezesEscovar = parseFloat(document.getElementById('escovar').value) || 0;
    const descargas = parseFloat(document.getElementById('descarga').value) || 0;
    const resultadoDiv = document.getElementById('resultado-consumo');

    // 2. Realizar os cálculos
    const gastoBanho = minutosBanho * CONSUMO_POR_MINUTO_BANHO;
    const gastoEscovar = vezesEscovar * CONSUMO_POR_VEZ_ESCOVAR;
    const gastoDescarga = descargas * CONSUMO_POR_DESCARGA;
    
    const consumoTotal = gastoBanho + gastoEscovar + gastoDescarga;

    // 3. Exibir o resultado
    if (consumoTotal === 0) {
        resultadoDiv.innerHTML = 'Insira seus hábitos de consumo para calcular sua pegada hídrica.';
        resultadoDiv.style.backgroundColor = '#ffcdd2'; // Cor de aviso
    } else {
        resultadoDiv.innerHTML = `
            Seu consumo diário estimado é de **${consumoTotal.toFixed(1)} Litros**.
            <br><br>
            **Detalhamento:**
            <ul>
                <li>Banho: ${gastoBanho.toFixed(1)} L</li>
                <li>Escovação (aberta): ${gastoEscovar.toFixed(1)} L</li>
                <li>Descargas: ${gastoDescarga.toFixed(1)} L</li>
            </ul>
            <p style="margin-top: 10px;">Lembre-se: A média brasileira é de cerca de 150 L por pessoa/dia (incluindo outros usos). Seus números são um bom ponto de partida!</p>
        `;
        resultadoDiv.style.backgroundColor = '#e0f2f1'; // Cor de sucesso
    }
}