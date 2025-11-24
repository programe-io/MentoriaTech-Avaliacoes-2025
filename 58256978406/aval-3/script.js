// app.js - Lógica para o App de Carros e Status de Preparação

// Variáveis Globais de Estado
let veiculoSelecionado = {
    nome: 'Nenhum veículo',
    preco: 0.00
};
const TAXA_RESERVA = 500.00; // Valor fixo da taxa de reserva

// Nomes dos elementos DOM
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

// Array de status de rastreamento para o processo de veículo
const statusSteps = [
    { text: "Reserva Confirmada. Aguardando processamento...", position: '10%' },
    { text: "Documentação em Análise pelo Financeiro.", position: '35%' },
    { text: "Veículo em Preparação e Higienização.", position: '60%' },
    { text: "Pronto para Retirada! Entrar em Contato.", position: '80%', final: true }
];
let currentStatusIndex = 0;


// Função para atualizar o resumo da reserva na lateral
function updateOrderSummary() {
    const subtotal = veiculoSelecionado.preco;
    const total = subtotal > 0 ? subtotal + TAXA_RESERVA : TAXA_RESERVA;

    // Atualiza o display do item selecionado
    itemNameDisplay.textContent = veiculoSelecionado.nome;
    
    // Formata os valores como moeda brasileira (BRL)
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    itemPriceDisplay.textContent = veiculoSelecionado.preco > 0 ? formatter.format(veiculoSelecionado.preco) : '';
    subtotalDisplay.textContent = formatter.format(subtotal);
    deliveryFeeDisplay.textContent = formatter.format(TAXA_RESERVA);
    totalAmountDisplay.textContent = formatter.format(total);
}

// 1. Função chamada ao clicar em "Reservar para Test Drive"
window.selecionarPizza = function(nome, preco) {
    veiculoSelecionado = { nome, preco };
    updateOrderSummary();
    
    // Feedback visual de seleção
    const selectedItem = document.getElementById('selected-item-display');
    selectedItem.classList.add('border-primary-dark', 'border-2');
    setTimeout(() => {
        selectedItem.classList.remove('border-primary-dark', 'border-2');
    }, 500);
    
    console.log(`Veículo selecionado: ${nome} - ${preco}`);
};


// 2. Função chamada ao clicar em "Confirmar Reserva"
window.simulateOrder = function() {
    if (veiculoSelecionado.preco === 0) {
        alert("Por favor, selecione um veículo do catálogo antes de confirmar a reserva.");
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

    console.log("Reserva confirmada. Status de preparação iniciado.");
};


// 3. Função para fechar o Modal (chamada ao clicar em "Ver Status de Preparação")
window.closeModal = function() {
    confirmationModal.classList.add('hidden');
    confirmationModal.classList.remove('flex');

    // Rola para a seção de rastreamento
    trackerSectionBlock.scrollIntoView({ behavior: 'smooth' });
};


// 4. Função chamada ao clicar em "Simular Próximo Passo do Processo"
window.updateTrackingStatus = function(isInitial = false) {
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

    // Se for o último passo, exibe a mensagem final
    if (currentStep.final) {
        messageBox.classList.remove('hidden');
    } else {
        messageBox.classList.add('hidden');
    }
};

// Inicializa o resumo da reserva ao carregar
document.addEventListener('DOMContentLoaded', updateOrderSummary);