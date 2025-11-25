// Variáveis Globais
let selectedItem = null;
const DELIVERY_FEE = 10.00; // Taxa de Entrega para pizza
const STATUS_STEPS = [
    { text: "Pedido Recebido! Processando...", position: '10%' },
    { text: "🍕 Pizza no Forno!", position: '25%' },
    { text: "📦 Preparando para Entrega...", position: '50%' },
    { text: "🛵 Entregador a Caminho!", position: '75%' },
    { text: "✅ Pedido Entregue!", position: '90%' }
];
let currentStep = 0;


/**
 * Função para formatar o valor para a moeda brasileira (R$).
 * @param {number} value - O valor a ser formatado.
 * @returns {string} O valor formatado como R$.
 */
function formatCurrency(value) {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

/**
 * 1. Seleciona uma pizza do cardápio e atualiza os detalhes do pedido.
 * @param {string} nome - O nome da pizza.
 * @param {number} preco - O preço da pizza.
 */
function selecionarPizza(nome, preco) {
    selectedItem = { nome, preco };

    // Elementos de exibição
    const itemNameEl = document.getElementById('item-name');
    const itemPriceEl = document.getElementById('item-price');
    const subtotalEl = document.getElementById('subtotal');
    const totalAmountEl = document.getElementById('total-amount');

    // Atualiza os detalhes
    itemNameEl.textContent = `Pizza Selecionada: ${nome}`;
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
    document.getElementById('delivery-marker').style.left = STATUS_STEPS[0].position;
    document.getElementById('message-box').classList.add('hidden');
}


/**
 * 2. Simula o processo de finalização e confirmação do pedido.
 */
function simulateOrder() {
    if (!selectedItem) {
        alert("Por favor, selecione uma pizza antes de finalizar o pedido!");
        return;
    }

    // Esconde a área de detalhes e mostra o modal de confirmação
    document.getElementById('order-details-block').classList.add('hidden');
    document.getElementById('confirmation-modal').classList.remove('hidden');

    // Inicializa o status no tracker
    currentStep = 0;
    updateTrackingStatus(true); 
}


/**
 * 3. Fecha o modal de confirmação e exibe o tracker de entrega.
 */
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
    document.getElementById('tracker-section-block').classList.remove('hidden');

    // Rola para a seção do tracker
    document.getElementById('tracker-section-block').scrollIntoView({ behavior: 'smooth' });
}


/**
 * 4. Simula o avanço do status de rastreamento e a posição do entregador.
 * @param {boolean} isInitial - Se é a primeira chamada após a confirmação.
 */
function updateTrackingStatus(isInitial = false) {
    const statusDisplay = document.getElementById('status-display');
    const marker = document.getElementById('delivery-marker');
    const eta = document.getElementById('eta');
    const messageBox = document.getElementById('message-box');

    // Avança para o próximo passo (se não for a primeira chamada e não estiver no final)
    if (!isInitial && currentStep < STATUS_STEPS.length - 1) {
        currentStep++;
    } else if (!isInitial && currentStep === STATUS_STEPS.length - 1) {
        // Já entregue, não avança mais
        return;
    }
    
    const statusInfo = STATUS_STEPS[currentStep];

    // Atualiza o texto de status
    statusDisplay.textContent = statusInfo.text;

    // Move o ícone do entregador (motinha)
    marker.style.left = statusInfo.position;
    marker.style.transition = 'left 1.5s ease-out'; // Transição suave

    // Atualiza o ETA (Tempo Estimado de Entrega)
    switch(currentStep) {
        case 0: eta.textContent = '30-45 Minutos'; break;
        case 1: eta.textContent = '25-35 Minutos'; break;
        case 2: eta.textContent = '15-25 Minutos'; break;
        case 3: eta.textContent = '5-15 Minutos'; break;
        case 4: 
            eta.textContent = 'Entregue!'; 
            messageBox.classList.remove('hidden'); // Exibe a mensagem final
            break;
    }
}


// --- Lógica de Inicialização ---

document.addEventListener('DOMContentLoaded', () => {
    // Garante que o cálculo inicial do total da taxa esteja correto (R$ 10,00)
    document.getElementById('subtotal').textContent = formatCurrency(0);
    document.getElementById('delivery-fee').textContent = formatCurrency(DELIVERY_FEE);
    document.getElementById('total-amount').textContent = formatCurrency(DELIVERY_FEE);
});