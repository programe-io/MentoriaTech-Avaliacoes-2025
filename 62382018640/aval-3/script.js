// Arquivo: app.js
// Tema: Motofrete / Logística

let entregaSelecionada = null;
const TAXA_BASE_KM = 5.00; // Taxa fixa que o entregador recebe por km (simulado)
let comissaoTotal = 0.00;
let statusEntregaIndex = 0;

// Estágios da Rota/Entrega
const STATUS_ENTREGA = [
    "Aguardando Coleta...", // Index 0 (Padrão)
    "A caminho da Coleta 🏍️", // Index 1
    "Na Coleta (Aguardando Pacote) ⏱️", // Index 2
    "Pacote Coletado. A caminho do Destino 💨", // Index 3
    "Próximo ao Destino (Entrega Iminente) 📍", // Index 4
    "Entrega Concluída e Registrada! ✅" // Index 5
];

/**
 * 1. Seleciona o item (pacote/entrega) e calcula a comissão.
 * @param {string} nomeEntrega - Nome do pacote.
 * @param {number} valorCorrida - Valor base da corrida/comissão.
 */
function selecionarEntrega(nomeEntrega, valorCorrida) {
    entregaSelecionada = {
        nome: nomeEntrega,
        valor: valorCorrida
    };
    statusEntregaIndex = 0; // Reseta o status ao selecionar uma nova entrega
    
    // Simula a distância (pode ser fixo para simplificar)
    const distanciaKm = 5.5; 
    
    // Cálculo de comissão: Valor da Corrida + (Taxa Base por Km * Distância)
    comissaoTotal = valorCorrida + (TAXA_BASE_KM * distanciaKm);
    
    // Atualiza o bloco de Detalhes da Rota
    document.getElementById('item-name').textContent = `Pacote: ${entregaSelecionada.nome}`;
    document.getElementById('item-price').textContent = `Valor Base da Corrida: R$ ${entregaSelecionada.valor.toFixed(2)}`;
    document.getElementById('delivery-fee').textContent = `${distanciaKm} Km`; // Usando o campo delivery-fee para distância
    document.getElementById('subtotal').textContent = `R. Alvo Coleta, 100`; // Usando o campo subtotal para endereço
    document.getElementById('total-amount').textContent = `R$ ${comissaoTotal.toFixed(2)}`;

    // Altera o texto do botão para refletir a seleção
    document.querySelector('#order-details-block button').textContent = "Confirmar Coleta e Iniciar Rota";

    // Mostra o bloco de detalhes, caso estivesse escondido
    document.getElementById('order-details-block').classList.remove('hidden');
}

/**
 * 2. Simula o início da rota após a confirmação.
 */
function iniciarRota() {
    if (!entregaSelecionada) {
        alert("Por favor, selecione uma entrega/pacote antes de iniciar a rota.");
        return;
    }

    // Atualiza o status inicial no painel do entregador
    statusEntregaIndex = 1; 
    document.getElementById('status-display').textContent = STATUS_ENTREGA[statusEntregaIndex];

    // Esconde o bloco de detalhes da rota e mostra o rastreador (Painel do Entregador)
    document.getElementById('order-details-block').classList.add('hidden');
    document.getElementById('tracker-section-block').classList.remove('hidden');

    // Mostra o Modal de Confirmação
    document.getElementById('confirmation-modal').classList.remove('hidden');
    document.getElementById('confirmation-modal').classList.add('flex');
}

/**
 * 3. Fecha o modal de confirmação.
 */
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
    document.getElementById('confirmation-modal').classList.remove('flex');
}

/**
 * 4. Simula o avanço do status da entrega e a animação no mapa.
 */
function updateTrackingStatus() {
    if (!entregaSelecionada) {
        alert("Nenhuma rota em andamento.");
        return;
    }

    // Avança para o próximo status
    statusEntregaIndex++;

    // Garante que não ultrapasse o último status
    if (statusEntregaIndex >= STATUS_ENTREGA.length) {
        statusEntregaIndex = STATUS_ENTREGA.length - 1;
    }

    // Atualiza o texto de status
    document.getElementById('status-display').textContent = STATUS_ENTREGA[statusEntregaIndex];

    // Simula a movimentação no mapa (alterando a posição do ícone da moto)
    const marker = document.getElementById('delivery-marker');
    let leftPosition;

    switch (statusEntregaIndex) {
        case 1: // A caminho da Coleta
            leftPosition = '25%';
            break;
        case 2: // Na Coleta
            leftPosition = '40%';
            break;
        case 3: // A caminho do Destino
            leftPosition = '65%';
            break;
        case 4: // Próximo ao Destino
            leftPosition = '80%';
            break;
        case 5: // Concluída
            leftPosition = '90%'; // Chegou no destino (ícone da casa/ponto)
            document.getElementById('message-box').classList.remove('hidden');
            document.querySelector('#tracker-section-block button').disabled = true;
            document.querySelector('#tracker-section-block button').textContent = "Rota Finalizada";
            break;
        default:
            leftPosition = '10%';
    }

    // Aplica a nova posição com transição CSS (para animação)
    marker.style.transition = 'left 1s ease-in-out';
    marker.style.left = leftPosition;

    // Se o status for concluído, resetar após 5 segundos (simulação)
    if (statusEntregaIndex === STATUS_ENTREGA.length - 1) {
        setTimeout(() => {
            resetApp();
        }, 5000);
    }
}

/**
 * Função para resetar o estado da aplicação após a conclusão.
 */
function resetApp() {
    entregaSelecionada = null;
    comissaoTotal = 0.00;
    statusEntregaIndex = 0;

    // Resetar UI
    document.getElementById('item-name').textContent = "Nenhuma entrega selecionada.";
    document.getElementById('item-price').textContent = "";
    document.getElementById('subtotal').textContent = "R. Coleta Padrão, 00";
    document.getElementById('delivery-fee').textContent = "0 Km";
    document.getElementById('total-amount').textContent = "R$ 0,00";
    document.getElementById('status-display').textContent = STATUS_ENTREGA[0];
    document.getElementById('message-box').classList.add('hidden');
    document.getElementById('delivery-marker').style.left = '10%';
    document.querySelector('#tracker-section-block button').disabled = false;
    document.querySelector('#tracker-section-block button').textContent = "Avançar Status (Simular Etapa)";
    
    // Volta para o estado inicial
    document.getElementById('tracker-section-block').classList.add('hidden');
    document.getElementById('order-details-block').classList.remove('hidden');
    document.querySelector('#order-details-block button').textContent = "Finalizar Pedido"; // Volta ao texto original, se preferir

}

// Inicializa a escuta do botão principal para iniciar a rota
document.querySelector('#order-details-block button').addEventListener('click', iniciarRota);

// Chama uma função inicial (opcional)
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a app com o status padrão
    document.getElementById('status-display').textContent = STATUS_ENTREGA[0];
});