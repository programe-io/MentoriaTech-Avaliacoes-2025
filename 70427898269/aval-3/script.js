/** Variáveis de Estado */
let selectedItem = null;
const DELIVERY_FEE = 12.00;
let trackingStatusIndex = 0;
const TRACKING_STATUSES = [
    "Aguardando envio...",
    "Embalando o item 📦",
    "Produto enviado. Em trânsito!",
    "Chegando em sua cidade...",
    "Produto saiu para entrega! 🚚",
    "Entregue com sucesso! 🎉"
];

/** Elementos do DOM */
const itemNameElement = document.getElementById('item-name');
const itemPriceElement = document.getElementById('item-price');
const subtotalElement = document.getElementById('subtotal');
const totalAmountElement = document.getElementById('total-amount');
const orderDetailsBlock = document.getElementById('order-details-block');
const trackerSectionBlock = document.getElementById('tracker-section-block');
const confirmationModal = document.getElementById('confirmation-modal');
const statusDisplay = document.getElementById('status-display');
const deliveryMarker = document.getElementById('delivery-marker');
const messageBox = document.getElementById('message-box');

// Inicializa o Total com a taxa de Frete (R$ 12,00)
totalAmountElement.textContent = `R$ ${DELIVERY_FEE.toFixed(2).replace('.', ',')}`;

// --- FUNÇÕES PRINCIPAIS ---

/**
 * 1. Seleciona o item e atualiza o carrinho.
 * (Corrigindo o nome da função que estava 'selecionarPizza' para 'selecionarProduto',
 * mantendo compatibilidade com o HTML)
 * @param {string} name Nome do produto
 * @param {number} price Preço do produto
 */
function selecionarPizza(name, price) {
    selectedItem = { name, price };
    
    // Calcula os valores
    const subtotal = selectedItem.price;
    const total = subtotal + DELIVERY_FEE;
    
    // Atualiza a exibição do carrinho
    itemNameElement.textContent = `${selectedItem.name}`;
    itemPriceElement.textContent = `Preço: R$ ${selectedItem.price.toFixed(2).replace('.', ',')}`;
    subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    totalAmountElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    console.log(`Produto selecionado: ${name} (R$ ${price.toFixed(2)})`);
}

/**
 * 2. Simula a finalização da compra.
 */
function simulateOrder() {
    if (!selectedItem) {
        alert("Por favor, selecione um produto antes de finalizar a compra.");
        return;
    }

    // Esconde o bloco do carrinho/pedido
    orderDetailsBlock.classList.add('hidden');
    // Exibe o bloco de rastreamento
    trackerSectionBlock.classList.remove('hidden');
    // Exibe o modal de confirmação
    confirmationModal.classList.remove('hidden');
    confirmationModal.classList.add('flex');
    
    // Reseta o rastreamento
    trackingStatusIndex = 0;
    updateTrackingStatus(true); // Atualiza para o primeiro status
    
    console.log("Compra finalizada e modal exibido.");
}

/**
 * 3. Fecha o modal de confirmação e leva o usuário à seção de rastreamento.
 */
function closeModal() {
    confirmationModal.classList.add('hidden');
    confirmationModal.classList.remove('flex');
    
    // Scrolla para a seção de rastreamento
    trackerSectionBlock.scrollIntoView({ behavior: 'smooth' });
    
    console.log("Modal fechado. Foco no rastreamento.");
}

/**
 * 4. Atualiza o status de rastreamento e o marcador no mapa simulado.
 * @param {boolean} reset Se deve forçar o status inicial.
 */
function updateTrackingStatus(reset = false) {
    if (reset) {
        trackingStatusIndex = 0;
        messageBox.classList.add('hidden');
    }

    if (trackingStatusIndex >= TRACKING_STATUSES.length) {
        // Se já entregue, não faz nada mais
        return;
    }

    // Atualiza o texto de status
    statusDisplay.textContent = TRACKING_STATUSES[trackingStatusIndex];

    // Calcula a nova posição do marcador (caixa) - Simulação de progresso
    // 10% (início) a 80% (fim, antes da casa)
    const startPos = 10;
    const endPos = 80;
    const maxSteps = TRACKING_STATUSES.length - 1; // 5 passos de movimento
    const stepSize = (endPos - startPos) / maxSteps;
    
    const currentPos = startPos + (trackingStatusIndex * stepSize);

    // Ajusta o marcador na tela
    deliveryMarker.style.left = `${currentPos}%`;
    deliveryMarker.style.top = `${30 - (trackingStatusIndex * 5)}%`; // Pequeno movimento vertical

    if (trackingStatusIndex === TRACKING_STATUSES.length - 1) {
        // Último status: Entregue
        messageBox.classList.remove('hidden');
        statusDisplay.textContent = "ENTREGUE COM SUCESSO! ✅";
        statusDisplay.classList.remove('text-blue-800');
        statusDisplay.classList.add('text-green-600');
        deliveryMarker.style.left = '85%'; // Perto da casa
        deliveryMarker.style.top = '10%'; 
    } else {
        statusDisplay.classList.remove('text-green-600');
        statusDisplay.classList.add('text-blue-800');
    }

    // Avança para o próximo status
    trackingStatusIndex++;
}

console.log("app.js carregado. Funções de compra e rastreamento definidas.");