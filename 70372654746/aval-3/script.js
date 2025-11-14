// VARIÁVEIS DE ESTADO
let selectedPizza = null;
const DELIVERY_FEE = 5.00;
let currentStatusIndex = 0;
const deliveryStatuses = [
    { text: "Pedido recebido e confirmado! 🎉", markerPosition: "10%" },
    { text: "Preparando sua pizza. 🧑‍🍳", markerPosition: "30%" },
    { text: "Pizza no forno! Quase pronta... 🔥", markerPosition: "50%" },
    { text: "Saindo para entrega! 🛵💨", markerPosition: "70%" },
    { text: "Quase lá! Seu entregador está perto. ⏳", markerPosition: "85%" },
    { text: "Entrega concluída! Aproveite sua pizza 🍕", markerPosition: "100%" }
];

// ELEMENTOS DOM
const itemNameEl = document.getElementById('item-name');
const itemPriceEl = document.getElementById('item-price');
const subtotalEl = document.getElementById('subtotal');
const totalAmountEl = document.getElementById('total-amount');
const trackerSectionBlockEl = document.getElementById('tracker-section-block');
const statusDisplayEl = document.getElementById('status-display');
const deliveryMarkerEl = document.getElementById('delivery-marker');
const confirmationModalEl = document.getElementById('confirmation-modal');
const messageBoxEl = document.getElementById('message-box');
const orderDetailsBlockEl = document.getElementById('order-details-block');

/**
 * Atualiza os valores do subtotal e total na seção do pedido.
 */
function updateOrderSummary() {
    let subtotal = 0;
    if (selectedPizza) {
        subtotal = selectedPizza.price;
    }

    const total = subtotal + DELIVERY_FEE;

    // Formata para BRL (R$ X,XX)
    subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    totalAmountEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

/**
 * Seleciona uma pizza, atualiza o display do pedido e o resumo.
 * Esta função é chamada pelos botões no HTML (onclick="selecionarPizza(...)").
 * @param {string} name - Nome da pizza.
 * @param {number} price - Preço da pizza.
 */
window.selecionarPizza = function(name, price) {
    selectedPizza = { name, price };

    // Atualiza a exibição do item selecionado
    itemNameEl.textContent = selectedPizza.name;
    itemPriceEl.textContent = `R$ ${selectedPizza.price.toFixed(2).replace('.', ',')}`;

    updateOrderSummary();
};

/**
 * Simula a finalização do pedido.
 * Esta função é chamada pelo botão 'Finalizar Pedido'.
 */
window.simulateOrder = function() {
    if (!selectedPizza) {
        alert("Por favor, selecione uma pizza antes de finalizar o pedido.");
        return;
    }

    // Esconde o bloco do pedido e mostra o rastreador
    orderDetailsBlockEl.classList.add('hidden');
    trackerSectionBlockEl.classList.remove('hidden');

    // Inicializa o rastreamento
    currentStatusIndex = 0; // Reinicia o status
    messageBoxEl.classList.add('hidden'); // Esconde a mensagem final
    updateTrackingDisplay();

    // Mostra o Modal de Confirmação
    confirmationModalEl.classList.remove('hidden');
    confirmationModalEl.classList.add('flex');
};

/**
 * Fecha o modal e navega para a seção do rastreador.
 */
window.closeModal = function() {
    confirmationModalEl.classList.add('hidden');
    confirmationModalEl.classList.remove('flex');

    // Scroll para a seção de rastreamento
    trackerSectionBlockEl.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Atualiza o display de status e a posição do marcador no mapa.
 */
function updateTrackingDisplay() {
    const status = deliveryStatuses[currentStatusIndex];
    statusDisplayEl.textContent = status.text;
    
    // Atualiza a posição do marcador da moto
    deliveryMarkerEl.style.left = status.markerPosition;

    // Se a entrega foi concluída
    if (currentStatusIndex === deliveryStatuses.length - 1) {
        messageBoxEl.classList.remove('hidden');
        // Desativa o botão de simulação após a conclusão
        const button = document.querySelector('#tracker-section-block button');
        button.disabled = true;
        button.textContent = "Entrega Concluída!";
    } else {
        // Garante que o botão esteja ativo e com texto normal
        const button = document.querySelector('#tracker-section-block button');
        button.disabled = false;
        button.textContent = "Simular Próximo Passo da Entrega";
    }
}

/**
 * Simula o próximo passo no processo de entrega.
 * Esta função é chamada pelo botão 'Simular Próximo Passo da Entrega'.
 */
window.updateTrackingStatus = function() {
    // Avança para o próximo status, se não for o último
    if (currentStatusIndex < deliveryStatuses.length - 1) {
        currentStatusIndex++;
        updateTrackingDisplay();
    }
};

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o resumo do pedido no carregamento (R$ 5,00 da taxa de entrega)
    updateOrderSummary();

    // Inicializa a exibição de nenhum item selecionado
    itemNameEl.textContent = "Nenhum item selecionado.";
    itemPriceEl.textContent = "";
});