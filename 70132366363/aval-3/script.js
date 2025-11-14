/* ==================================== */
/* app.js (Tema Bolo do Potte) */
/* ==================================== */

// Variáveis Globais
let selectedItem = null;
const deliveryFee = 7.00; // Taxa de entrega fixa para bolos de pote
let trackingStatusIndex = 0;

// Array com os estágios de rastreamento do pedido de bolo
const statuses = [
    "Pedido recebido e confirmado",
    "Bolo em Preparo (com muito carinho! 🥄)",
    "Saiu para entrega! (A caminho do seu endereço 🛵)",
    "Entregue!"
];

// Posições de left (%) do marcador de entrega no "mapa"
const markerPositions = [10, 30, 70, 90]; 

// --- FUNÇÕES DE UTILIDADE ---

// Função para formatar o valor monetário para o padrão brasileiro (R$)
function formatCurrency(value) {
    // Garante duas casas decimais e substitui ponto por vírgula
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
}

// --- FUNÇÕES PRINCIPAIS DO APP ---

// 1. SELECIONAR ITEM (Chamada pelos botões do cardápio)
function selecionarBolo(name, price) {
    selectedItem = { name: name, price: price };
    
    // Elementos de exibição
    const subtotalElement = document.getElementById('subtotal');
    const totalAmountElement = document.getElementById('total-amount');
    const itemNameDisplay = document.getElementById('item-name');
    const itemPriceDisplay = document.getElementById('item-price');
    const selectedItemBlock = document.getElementById('selected-item-display');

    // Atualiza a exibição do item selecionado
    itemNameDisplay.textContent = selectedItem.name;
    itemPriceDisplay.textContent = formatCurrency(selectedItem.price);
    
    // Adiciona classes específicas do tema (doce-principal e fofo)
    itemPriceDisplay.classList.add('text-lg', 'font-bold', 'text-doce-principal');
    selectedItemBlock.classList.remove('text-gray-700'); // Remove texto genérico, se houver
    selectedItemBlock.classList.add('bg-fundo-doce'); 

    // Calcula e atualiza os totais
    const subtotal = selectedItem.price;
    const total = subtotal + deliveryFee;

    subtotalElement.textContent = formatCurrency(subtotal);
    totalAmountElement.textContent = formatCurrency(total);
}

// 2. FINALIZAR PEDIDO (SIMULAÇÃO)
function simulateOrder() {
    // Verifica se um bolo foi selecionado
    if (!selectedItem) {
        alert("Ops! Por favor, selecione um bolo de pote primeiro para finalizar o pedido.");
        return;
    }

    // Ações de início de rastreamento
    trackingStatusIndex = 0; // Começa sempre do primeiro status
    document.getElementById('status-display').textContent = statuses[0];
    document.getElementById('delivery-marker').style.left = markerPositions[0] + '%';
    
    // Exibe a seção de rastreamento
    document.getElementById('tracker-section-block').classList.remove('hidden');
    document.getElementById('message-box').classList.add('hidden'); // Oculta a mensagem de "entregue"

    // Exibe o modal de confirmação
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// 3. FECHAR MODAL e ROLAR PARA O RASTREADOR
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    // Rola a página para a seção do rastreador para que o usuário acompanhe
    document.getElementById('tracker-section-block').scrollIntoView({ behavior: 'smooth' });
}

// 4. ATUALIZAR STATUS DO RASTREAMENTO (SIMULAÇÃO)
function updateTrackingStatus() {
    if (trackingStatusIndex < statuses.length - 1) {
        trackingStatusIndex++;
        const newStatus = statuses[trackingStatusIndex];
        const newPosition = markerPositions[trackingStatusIndex];

        // Atualiza o texto de status
        document.getElementById('status-display').textContent = newStatus;

        // Atualiza a posição do marcador no "mapa" com transição suave (CSS fará o movimento)
        const marker = document.getElementById('delivery-marker');
        marker.style.left = newPosition + '%';

        // Ação quando o último status (Entregue) é alcançado
        if (trackingStatusIndex === statuses.length - 1) {
            document.getElementById('message-box').classList.remove('hidden');
        }

    } else {
        alert("O Bolo do Potte já foi entregue! Aproveite sua sobremesa.");
    }
}

// --- INICIALIZAÇÃO ---

// Configura os valores iniciais de taxa de entrega e total na carga da página
document.addEventListener('DOMContentLoaded', () => {
    // A função formatCurrency lida com a formatação
    document.getElementById('delivery-fee').textContent = formatCurrency(deliveryFee);
    
    // Total inicial é igual à taxa de entrega, pois o subtotal é 0
    document.getElementById('total-amount').textContent = formatCurrency(deliveryFee);
});

// Nota: A função 'selecionarBolo' é chamada diretamente no HTML, nos botões 'onclick'.