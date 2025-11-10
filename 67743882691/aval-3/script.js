// 1. Variáveis de Elementos
const containerNotas = document.getElementById('containerNotas');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnCalcular = document.getElementById('btnCalcular');
const mediaSimplesEl = document.getElementById('mediaSimples');
const mediaPonderadaEl = document.getElementById('mediaPonderada');
const statusFinalEl = document.getElementById('statusFinal');

// Média mínima para aprovação (pode ser ajustada)
const MEDIA_APROVACAO = 70; // Ex: 70/100

// 2. Função para adicionar nova linha de nota/peso
function adicionarLinhaNota() {
    const novaLinha = document.createElement('div');
    novaLinha.classList.add('linha-nota');
    novaLinha.innerHTML = `
        <input type="number" class="nota" placeholder="Nota (0-100)" min="0" max="100">
        <input type="number" class="peso" placeholder="Peso (1-10)" min="1" max="10">
    `;
    containerNotas.appendChild(novaLinha);
}

// 3. Função principal de cálculo
function calcularMedias() {
    const notasInput = document.querySelectorAll('.nota');
    const pesosInput = document.querySelectorAll('.peso');

    let somaNotas = 0;
    let somaPesos = 0;
    let somaProdutos = 0; // Para Média Ponderada
    let numNotas = 0;

    // 4. Coleta e processa os dados
    for (let i = 0; i < notasInput.length; i++) {
        const nota = parseFloat(notasInput[i].value);
        const peso = parseFloat(pesosInput[i].value);

        // Validação básica: garante que ambos os campos estão preenchidos com números válidos
        if (isNaN(nota) || nota < 0 || nota > 100 || isNaN(peso) || peso <= 0) {
            continue; // Ignora linhas inválidas/vazias
        }

        somaNotas += nota;
        numNotas++;

        somaPesos += peso;
        somaProdutos += (nota * peso);
    }

    if (numNotas === 0) {
        alert("Insira pelo menos uma nota válida.");
        return;
    }

    // 5. Cálculo das Médias
    const mediaSimples = somaNotas / numNotas;
    const mediaPonderada = somaProdutos / somaPesos;

    // 6. Exibição e Status
    mediaSimplesEl.textContent = mediaSimples.toFixed(2);
    mediaPonderadaEl.textContent = mediaPonderada.toFixed(2);

    let statusTexto = "";
    let statusClasse = "";

    if (mediaPonderada >= MEDIA_APROVACAO) {
        statusTexto = "🥳 Aprovado!";
        statusClasse = "aprovado";
    } else if (mediaPonderada >= (MEDIA_APROVACAO * 0.5)) { // Ex: acima de 50/100
        statusTexto = "⚠️ Em Recuperação.";
        statusClasse = "recuperacao";
    } else {
        statusTexto = "❌ Reprovado.";
        statusClasse = "reprovado";
    }

    statusFinalEl.textContent = statusTexto;
    statusFinalEl.className = ''; // Limpa classes anteriores
    statusFinalEl.classList.add(statusClasse);
}

// 7. Event Listeners
btnAdicionar.addEventListener('click', adicionarLinhaNota);
btnCalcular.addEventListener('click', calcularMedias);

// Garante que a linha inicial seja adicionada ao carregar (já está no HTML, mas mantém aqui para adicionar mais)
// adicionarLinhaNota();