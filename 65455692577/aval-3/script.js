// app.js - Lógica para o App de Vestidos e Status de Entrega

// Variáveis Globais de Estado
let vestidoSelecionado = { // RENOMEADO
    nome: 'Nenhum vestido',
    preco: 0.00
};
const TAXA_ENTREGA = 25.00; // VALOR E NOME AJUSTADOS (R$ 500.00 -> R$ 25.00)

// Nomes dos elementos DOM (Mantidos, pois são genéricos o suficiente)
const itemNameDisplay = document.getElementById('item-name');
const itemPriceDisplay = document.getElementById('item-price');
const subtotalDisplay = document.getElementById('subtotal');
const deliveryFeeDisplay = document.getElementById('delivery-fee');
const totalAmountDisplay = document.getElementById('total-amount');
const trackerSectionBlock = document.getElementById('tracker-section-block');
const statusDisplay = document.getElementById('status-display');
const deliveryMarker = document.getElementById('delivery-marker');
const messageBox = document.getElementById('message-box');
const confirmationModal = document.getElementById('confirmation-modal');

// Array de status de rastreamento para o processo de ENVIO (ATUALIZADO)
const statusSteps = [
    { text: "Pedido Confirmado. Aguardando separação no estoque.", position: '10%' },
    { text: "📦 Em Processo de Embalagem e Etiquetagem.", position: '35%' },
    { text: "🚚 Enviado para a Transportadora (Em trânsito).", position: '60%' },
    { text: "🏠 Saiu para Entrega! O pacote está a caminho.", position: '80%', final: true }
];
let currentStatusIndex = 0;


// Função para atualizar o resumo do pedido na lateral
function updateOrderSummary() {
    const subtotal = vestidoSelecionado.preco;
    const total = subtotal > 0 ? subtotal + TAXA_ENTREGA : TAXA_ENTREGA; // Usa TAXA_ENTREGA

    // Atualiza o display do item selecionado
    itemNameDisplay.textContent = vestidoSelecionado.nome;
    
    // Formata os valores como moeda brasileira (BRL)
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    itemPriceDisplay.textContent = vestidoSelecionado.preco > 0 ? formatter.format(vestidoSelecionado.preco) : '';
    subtotalDisplay.textContent = formatter.format(subtotal);
    deliveryFeeDisplay.textContent = formatter.format(TAXA_ENTREGA); // Usa TAXA_ENTREGA
    totalAmountDisplay.textContent = formatter.format(total);
}

// 1. Função chamada ao clicar em "Comprar / Adicionar ao Carrinho" (RENOMEADA)
window.selecionarVestido = function(nome, preco) {
    vestidoSelecionado = { nome, preco }; // USA vestidoSelecionado
    updateOrderSummary();
    
    // Feedback visual de seleção
    const selectedItem = document.getElementById('selected-item-display');
    selectedItem.classList.add('border-primary-dark', 'border-2');
    setTimeout(() => {
        selectedItem.classList.remove('border-primary-dark', 'border-2');
    }, 500);
    
    console.log(`Vestido selecionado: ${nome} - ${preco}`);
};
// ALIAS PARA O BOTÃO NO HTML ORIGINAL:
window.selecionarPizza = window.selecionarVestido; 


// 2. Função chamada ao clicar em "Finalizar Pedido"
window.simulateOrder = function() {
    // Verifica se o preço é > TAXA_ENTREGA, garantindo que algo foi selecionado além do custo de envio
    if (vestidoSelecionado.preco === 0) {
        alert("Por favor, selecione um vestido do catálogo antes de finalizar o pedido.");
        return;
    }

    // Reseta o rastreador para o início
    currentStatusIndex = 0;
    messageBox.classList.add('hidden');
    
    // Exibe a seção de rastreamento/status
    trackerSectionBlock.classList.remove('hidden');
    
    // Abre o Modal de Confirmação
    confirmationModal.classList.add('flex');
    confirmationModal.classList.remove('hidden');

    // Atualiza o primeiro status
    updateTrackingStatus(true); 

    console.log("Pedido confirmado. Status de envio iniciado.");
};


// 3. Função para fechar o Modal (chamada ao clicar em "Ver Status de Envio")
window.closeModal = function() {
    confirmationModal.classList.add('hidden');
    confirmationModal.classList.remove('flex');

    // Rola para a seção de rastreamento
    trackerSectionBlock.scrollIntoView({ behavior: 'smooth' });
};


// 4. Função chamada ao clicar em "Simular Próximo Passo do Envio"
window.updateTrackingStatus = function(isInitial = false) {
    const trackerButton = document.querySelector('#tracker-section-block button');
    
    if (!isInitial) {
        // Se não for a chamada inicial, avança para o próximo passo
        currentStatusIndex = (currentStatusIndex + 1) % statusSteps.length;
    }

    const currentStep = statusSteps[currentStatusIndex];
    statusDisplay.textContent = currentStep.text;
    deliveryMarker.style.left = currentStep.position;
    
    // Opcional: Adiciona um pequeno efeito de pulsação ao marker
    deliveryMarker.classList.add('animate-pulse');
    setTimeout(() => {
        deliveryMarker.classList.remove('animate-pulse');
    }, 1000);

    // Se for o último passo, exibe a mensagem final e desabilita o botão
    if (currentStep.final) {
        messageBox.classList.remove('hidden');
        messageBox.textContent = 'Seu pacote foi entregue! Aproveite seu novo vestido. 🛍️';
        trackerButton.textContent = 'Pacote Entregue! (Fim da Simulação)';
        trackerButton.disabled = true;
    } else {
        messageBox.classList.add('hidden');
        trackerButton.textContent = 'Simular Próximo Passo do Envio';
        trackerButton.disabled = false;
    }
};

// Inicializa o resumo da reserva ao carregar
document.addEventListener('DOMContentLoaded', updateOrderSummary);