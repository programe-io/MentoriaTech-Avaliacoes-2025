// Arquivo: app.js
// Tema: Pet Shop / Cachorros

let servicoSelecionado = null;
const TAXA_AGENDAMENTO = 5.00; // Custo fixo por agendamento
const DESCONTO_FIDELIDADE = 0.00; // Simulação de desconto
let totalServico = 0.00;
let statusServicoIndex = 0;

// Estágios do Serviço (Simulação de Banho e Tosa ou Passeio)
const STATUS_SERVICO = [
    "Aguardando a Busca...", // Index 0 (Padrão)
    "Pet a caminho do Pet Shop 🚐", // Index 1 (Se for busca em casa)
    "Na Área de Banho (Iniciando o Serviço) 🛁", // Index 2
    "Tosa e Secagem (Quase pronto) 💇", // Index 3
    "Finalizando: Brincadeiras e Mimos 🎾", // Index 4
    "Serviço Concluído! Pronto para Buscar! ✅" // Index 5
];

/**
 * 1. Seleciona o item (serviço/adoção) e calcula o valor total.
 * @param {string} nomeServico - Nome do serviço ou pet.
 * @param {number} precoBase - Preço base do serviço (ou 0.00 para adoção).
 */
function selecionarServico(nomeServico, precoBase) {
    servicoSelecionado = {
        nome: nomeServico,
        preco: precoBase
    };
    statusServicoIndex = 0; // Reseta o status ao selecionar um novo item
    
    // Cálculo do total: Preço Base + Taxa de Agendamento - Desconto
    totalServico = servicoSelecionado.preco + TAXA_AGENDAMENTO - DESCONTO_FIDELIDADE;
    
    // Atualiza o bloco de Detalhes do Serviço
    document.getElementById('item-name').textContent = `Item Selecionado: ${servicoSelecionado.nome}`;
    document.getElementById('item-price').textContent = `Preço Base: R$ ${servicoSelecionado.preco.toFixed(2)}`;
    
    document.getElementById('subtotal').textContent = `R$ ${TAXA_AGENDAMENTO.toFixed(2)}`;
    document.getElementById('delivery-fee').textContent = `- R$ ${DESCONTO_FIDELIDADE.toFixed(2)}`; // Usando delivery-fee para desconto
    
    document.getElementById('total-amount').textContent = `R$ ${totalServico.toFixed(2)}`;

    // Altera o texto do botão
    const buttonText = servicoSelecionado.preco === 0.00 ? "Entrar em Contato para Adoção" : "Confirmar Agendamento";
    document.querySelector('#order-details-block button').textContent = buttonText;

    // Mostra o bloco de detalhes
    document.getElementById('order-details-block').classList.remove('hidden');
}

/**
 * 2. Simula a confirmação do agendamento.
 */
function confirmarAgendamento() {
    if (!servicoSelecionado) {
        alert("Por favor, selecione um serviço ou pet antes de confirmar.");
        return;
    }
    
    // Se for adoção, não inicia o rastreador de serviço
    if (servicoSelecionado.preco === 0.00) {
        alert(`Obrigado pelo interesse em adotar ${servicoSelecionado.nome}! Entraremos em contato.`);
        return;
    }

    // Atualiza o status inicial do serviço
    statusServicoIndex = 1; 
    document.getElementById('status-display').textContent = STATUS_SERVICO[statusServicoIndex];

    // Esconde o bloco de detalhes e mostra o rastreador
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
 * 4. Simula o avanço do status do serviço e a animação do pet.
 */
function updateTrackingStatus() {
    if (!servicoSelecionado || servicoSelecionado.preco === 0.00) {
        alert("Nenhum serviço em andamento para rastrear.");
        return;
    }

    // Avança para o próximo status
    statusServicoIndex++;

    // Garante que não ultrapasse o último status
    if (statusServicoIndex >= STATUS_SERVICO.length) {
        statusServicoIndex = STATUS_SERVICO.length - 1;
    }

    // Atualiza o texto de status
    document.getElementById('status-display').textContent = STATUS_SERVICO[statusServicoIndex];

    // Simula a movimentação do pet no 'mapa' (alterando a posição do ícone)
    const marker = document.getElementById('delivery-marker');
    let leftPosition;

    switch (statusServicoIndex) {
        case 1: // A caminho do Pet Shop
            leftPosition = '25%';
            break;
        case 2: // Iniciando o Banho
            leftPosition = '40%';
            break;
        case 3: // Na Tosa/Secagem
            leftPosition = '65%';
            break;
        case 4: // Finalizando
            leftPosition = '80%';
            break;
        case 5: // Concluído
            leftPosition = '90%'; 
            document.getElementById('message-box').classList.remove('hidden');
            document.querySelector('#tracker-section-block button').disabled = true;
            document.querySelector('#tracker-section-block button').textContent = "Serviço Finalizado!";
            break;
        default:
            leftPosition = '10%';
    }

    // Aplica a nova posição com transição CSS
    marker.style.transition = 'left 1s ease-in-out';
    marker.style.left = leftPosition;

    // Se o status for concluído, resetar após 5 segundos (simulação)
    if (statusServicoIndex === STATUS_SERVICO.length - 1) {
        setTimeout(() => {
            resetApp();
        }, 5000);
    }
}

/**
 * Função para resetar o estado da aplicação após a conclusão.
 */
function resetApp() {
    servicoSelecionado = null;
    totalServico = 0.00;
    statusServicoIndex = 0;

    // Resetar UI
    document.getElementById('item-name').textContent = "Nenhum item selecionado.";
    document.getElementById('item-price').textContent = "Clique para adicionar ao seu carrinho.";
    document.getElementById('subtotal').textContent = `R$ ${TAXA_AGENDAMENTO.toFixed(2)}`;
    document.getElementById('delivery-fee').textContent = `- R$ ${DESCONTO_FIDELIDADE.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `R$ ${TAXA_AGENDAMENTO.toFixed(2)}`; // Total inicial é só a taxa

    document.getElementById('status-display').textContent = STATUS_SERVICO[0];
    document.getElementById('message-box').classList.add('hidden');
    document.getElementById('delivery-marker').style.left = '10%';
    document.querySelector('#tracker-section-block button').disabled = false;
    document.querySelector('#tracker-section-block button').textContent = "Atualizar Status do Serviço";
    
    // Volta para o estado inicial
    document.getElementById('tracker-section-block').classList.add('hidden');
    document.getElementById('order-details-block').classList.remove('hidden');
    document.querySelector('#order-details-block button').textContent = "Confirmar Agendamento";

}

// Inicializa a escuta do botão principal (usando 'simulateOrder' do HTML original)
document.querySelector('#order-details-block button').addEventListener('click', confirmarAgendamento);

// Inicializa a escuta do botão 'Atualizar Status'
// Este botão já está configurado no HTML com onclick="updateTrackingStatus()"

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a app com o status padrão
    document.getElementById('status-display').textContent = STATUS_SERVICO[0];
});