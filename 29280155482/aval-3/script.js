// Variáveis Globais
let selectedItem = null;
const DELIVERY_FEE = 15.00; // Taxa de Entrega (mantive R$ 15,00)
const STATUS_STEPS = [
    { text: "🍰 Confirmação Recebida! Iniciando preparo...", position: '10%' },
    { text: "👨‍🍳 Preparando o Bolo...", position: '30%' },
    { text: "🛵 Em Rota para Entrega!", position: '60%' },
    { text: "🎉 Encomenda Entregue!", position: '80%' }
];
let currentStep = 0;


/**
 * Função para formatar o valor para a moeda brasileira.
 * @param {number} value - O valor a ser formatado.
 * @returns {string} O valor formatado como R$.
 */
function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

/**
 * 1. Seleciona um bolo do catálogo e atualiza os detalhes da encomenda.
 * @param {string} nome - O nome do bolo.
 * @param {number} preco - O preço do bolo.
 */
function selecionarBolo(nome, preco) {
    selectedItem = { nome, preco };

    // Elementos de exibição
    const itemNameEl = document.getElementById('item-name');
    const itemPriceEl = document.getElementById('item-price');
    const subtotalEl = document.getElementById('subtotal');
    const totalAmountEl = document.getElementById('total-amount');

    // Atualiza os detalhes
    itemNameEl.textContent = `Bolo Selecionado: ${nome}`;
    itemPriceEl.textContent = `Valor: ${formatCurrency(preco)}`;
    
    // Calcula o total
    const subtotal = preco;
    const total = subtotal + DELIVERY_FEE;

    subtotalEl.textContent = formatCurrency(subtotal);
    totalAmountEl.textContent = formatCurrency(total);

    // Garante que o tracker esteja escondido ao selecionar um novo item
    document.getElementById('tracker-section-block').classList.add('hidden');
    document.getElementById('order-details-block').classList.remove('hidden');

    // Resetar o status para o início se um novo item for selecionado
    currentStep = 0;
    document.getElementById('status-display').textContent = 'Aguardando Confirmação...';
    document.getElementById('delivery-marker').style.left = '10%';
    document.getElementById('message-box').classList.add('hidden');
}


/**
 * 2. Simula o processo de confirmação da encomenda.
 */
function simulateOrder() {
    if (!selectedItem) {
        alert("Por favor, selecione um bolo antes de finalizar a encomenda!");
        return;
    }

    // Esconde a área de detalhes e mostra o modal
    document.getElementById('order-details-block').classList.add('hidden');
    document.getElementById('confirmation-modal').classList.remove('hidden');

    // Configura o status inicial
    currentStep = 0;
    updateTrackingStatus(true); // Inicializa o status no tracker
}


/**
 * 3. Fecha o modal de confirmação e exibe o tracker.
 */
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
    document.getElementById('tracker-section-block').classList.remove('hidden');

    // Rola para a seção do tracker
    document.getElementById('tracker-section-block').scrollIntoView({ behavior: 'smooth' });
}


/**
 * 4. Simula o avanço do status de rastreamento.
 * @param {boolean} isInitial - Se é a primeira chamada após a confirmação.
 */
function updateTrackingStatus(isInitial = false) {
    const statusDisplay = document.getElementById('status-display');
    const marker = document.getElementById('delivery-marker');
    const eta = document.getElementById('eta');
    const messageBox = document.getElementById('message-box');

    // Se for inicial, usa o primeiro passo, caso contrário, avança
    if (!isInitial && currentStep < STATUS_STEPS.length - 1) {
        currentStep++;
    } else if (!isInitial && currentStep === STATUS_STEPS.length - 1) {
        // Se já estiver na última etapa e clicar novamente, não faz nada
        return;
    }
    
    const statusInfo = STATUS_STEPS[currentStep];

    // Atualiza o texto de status
    statusDisplay.textContent = statusInfo.text;

    // Move o ícone do entregador (motinha)
    marker.style.left = statusInfo.position;

    // Atualiza o ETA (Tempo Estimado de Entrega)
    if (currentStep === 0) {
        eta.textContent = 'Aguardando Preparo';
    } else if (currentStep === 1) {
        eta.textContent = '30-45 Minutos';
    } else if (currentStep === 2) {
        eta.textContent = '10-20 Minutos';
    } else if (currentStep === 3) {
        // Status Final
        eta.textContent = 'Entregue';
        messageBox.classList.remove('hidden'); // Exibe a mensagem final
    }
}


// --- Lógica de Inicialização ---

// No carregamento, garante que o cálculo inicial do total da reserva (R$ 15,00 da taxa) esteja correto.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subtotal').textContent = formatCurrency(0);
    document.getElementById('delivery-fee').textContent = formatCurrency(DELIVERY_FEE);
    document.getElementById('total-amount').textContent = formatCurrency(DELIVERY_FEE);

    // Ajusta o listener dos botões no HTML para a nova função
    // Como a função já foi renomeada acima, a próxima etapa é a correção no HTML.
});