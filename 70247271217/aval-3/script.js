// Constantes e Variáveis de Estado
const DELIVERY_FEE = 7.50; // Taxa de entrega fixa para a confeitaria
let selectedItem = {
    name: 'Nenhum item selecionado.',
    price: 0.00
};
let currentTrackingStep = 0;
const trackingSteps = [
    { status: "Aguardando confirmação...", position: '10%', eta: '50-60 minutos', marker: '🚐' }, // Carro refrigerado
    { status: "Em preparo (Decoração e embalagem)...", position: '10%', eta: '40-50 minutos', marker: '📦' }, // Embalando
    { status: "Saiu para entrega!", position: '35%', eta: '25-35 minutos', marker: '🚐' },
    { status: "A caminho (Próximo ao seu endereço)...", position: '65%', eta: '10-15 minutos', marker: '🚐' },
    { status: "Entregue!", position: '90%', eta: '0 minutos', marker: '✅' } // Entregue
];


// Função para formatar o valor para Real Brasileiro
function formatCurrency(value) {
    // Garante que o valor seja tratado como número e formatado com duas casas decimais
    return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
}

// ----------------------
// LÓGICA DO PEDIDO
// ----------------------

/**
 * Função chamada ao clicar em "Adicionar ao Pedido" para um doce.
 * @param {string} name - Nome do doce.
 * @param {number} price - Preço do doce.
 */
function selecionarDoce(name, price) {
    selectedItem.name = name;
    selectedItem.price = price;
    updateOrderDetails();
    // Feedback visual para o usuário
    console.log(`"${name}" selecionado. Preço: ${formatCurrency(price)}`);
}

/**
 * Atualiza o bloco de detalhes do pedido (subtotal e total) na sidebar.
 */
function updateOrderDetails() {
    const subtotal = selectedItem.price;
    const total = subtotal + DELIVERY_FEE;

    // Atualiza o item selecionado
    document.getElementById('item-name').textContent = selectedItem.name;
    document.getElementById('item-price').textContent = (selectedItem.price > 0) ? formatCurrency(selectedItem.price) : '';
    
    // Atualiza os valores financeiros
    document.getElementById('subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('delivery-fee').textContent = formatCurrency(DELIVERY_FEE);
    document.getElementById('total-amount').textContent = formatCurrency(total);
}

// Inicializa os detalhes do pedido quando a página carregar
document.addEventListener('DOMContentLoaded', updateOrderDetails);


/**
 * Função para simular a finalização do pedido.
 */
function simulateOrder() {
    if (selectedItem.price === 0) {
        alert("Por favor, selecione um item do cardápio antes de finalizar o pedido.");
        return;
    }

    // 1. Mostrar Modal de Confirmação
    document.getElementById('confirmation-modal').classList.remove('hidden');
    document.getElementById('confirmation-modal').classList.add('flex');

    // 2. Resetar e Mostrar Bloco de Rastreamento
    currentTrackingStep = 0; // Inicia no primeiro passo
    updateTrackingStatus(true); // Atualiza com o primeiro passo
    document.getElementById('tracker-section-block').classList.remove('hidden');
    document.getElementById('message-box').classList.add('hidden');
    
    // Opcional: Ocultar o bloco de pedido após a simulação para focar no rastreador
    // document.getElementById('order-details-block').classList.add('hidden');
}

/**
 * Função para fechar o Modal e rolar para a seção de rastreamento.
 */
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
    document.getElementById('confirmation-modal').classList.remove('flex');

    // Rola a página para a seção de rastreamento (melhor experiência)
    document.getElementById('tracker-section-block').scrollIntoView({ behavior: 'smooth' });
}


// ----------------------
// LÓGICA DE RASTREAMENTO
// ----------------------

/**
 * Função para atualizar o status de rastreamento e a posição do marcador.
 * @param {boolean} isInitial - Indica se é o primeiro passo após a finalização do pedido.
 */
function updateTrackingStatus(isInitial = false) {
    // Incrementa o passo, mas não ultrapassa o último passo
    if (!isInitial) {
        currentTrackingStep = Math.min(currentTrackingStep + 1, trackingSteps.length - 1);
    }
    
    const step = trackingSteps[currentTrackingStep];
    
    // Atualiza os elementos de texto e ETA (Tempo Estimado de Chegada)
    document.getElementById('status-display').textContent = step.status;
    document.getElementById('eta').textContent = step.eta;
    
    // Atualiza o marcador (posição e ícone)
    const marker