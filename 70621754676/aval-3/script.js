// VARIÁVEIS GLOBAIS
let carrinho = {
    nomeItem: "Nenhum perfume adicionado.",
    precoItem: 0.00,
    frete: 15.00, // Frete fixo
    statusRastreio: 0 // 0: Pagamento | 1: Preparo | 2: Transporte | 3: Entregue
};

// --- 1. FUNÇÃO PARA ATUALIZAR O CARRINHO E TOTAIS ---
function atualizarTotais() {
    // Calcula o subtotal e total
    const subtotal = carrinho.precoItem;
    const total = subtotal + carrinho.frete;
    const qtdItens = subtotal > 0 ? 1 : 0; // Simplificação: consideramos 1 item se o subtotal for > 0

    // Atualiza o bloco de exibição do item
    document.getElementById('item-name').textContent = carrinho.nomeItem;
    document.getElementById('item-price').textContent = subtotal > 0 ? `R$ ${subtotal.toFixed(2).replace('.', ',')}` : '';

    // Atualiza os valores finais
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('total-amount').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

    // Atualiza a descrição do subtotal (opcional, para refletir a quantidade)
    const subtotalLabel = document.querySelector('#cart-details-block .space-y-2 span:first-child');
    subtotalLabel.textContent = `Subtotal (${qtdItens} item${qtdItens !== 1 ? 's' : ''}):`;
}

// --- 2. FUNÇÃO CHAMADA AO CLICAR EM UM PERFUME ---
function selecionarPerfume(nome, preco) {
    carrinho.nomeItem = nome;
    carrinho.precoItem = preco;
    
    // Alerta de confirmação visual (opcional)
    alert(`Perfume "${nome}" (R$ ${preco.toFixed(2).replace('.', ',')}) adicionado ao carrinho!`);

    atualizarTotais();
    
    // Rolagem suave para o carrinho para feedback imediato
    document.getElementById('cart-details-block').scrollIntoView({ behavior: 'smooth' });
}

// --- 3. FUNÇÃO PARA FINALIZAR A COMPRA E INICIAR RASTREIO ---
function simulateCheckout() {
    if (carrinho.precoItem === 0) {
        alert("Por favor, adicione um perfume ao carrinho antes de finalizar a compra.");
        return;
    }

    // 1. Mostrar o modal de confirmação
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // 2. Esconder o bloco do carrinho
    document.getElementById('cart-details-block').classList.add('hidden');
    
    // 3. Resetar o status do rastreamento
    carrinho.statusRastreio = 0;
    
    // A função closeModal() é responsável por mostrar o tracker
}

// --- 4. FUNÇÃO PARA FECHAR MODAL E EXIBIR RASTREADOR ---
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    // 1. Exibir o bloco de rastreamento
    const trackerBlock = document.getElementById('tracker-section-block');
    trackerBlock.classList.remove('hidden');

    // 2. Forçar a primeira atualização para o status inicial
    updateTrackingStatus();

    // 3. Rolagem suave para o rastreador
    trackerBlock.scrollIntoView({ behavior: 'smooth' });
}

// --- 5. FUNÇÃO PARA SIMULAR OS PASSOS DO RASTREAMENTO ---
function updateTrackingStatus() {
    const statusDisplay = document.getElementById('status-display');
    const messageBox = document.getElementById('message-box');
    const etaDisplay = document.getElementById('eta');
    const button = document.querySelector('#tracker-section-block button');

    // Define os status e o progresso
    const statusList = [
        { text: "Processando pagamento...", progress: 20, eta: "5-7 dias úteis" },
        { text: "📦 Pedido em separação e embalagem...", progress: 45, eta: "4-6 dias úteis" },
        { text: "🚚 Em transporte: Pedido saiu para entrega!", progress: 80, eta: "1-2 dias úteis" },
        { text: "✨ Pedido entregue! Aproveite a fragrância.", progress: 100, eta: "Entregue!" }
    ];

    // Incrementa o status atual
    carrinho.statusRastreio = (carrinho.statusRastreio + 1) % statusList.length;

    // Se o status for 0, voltamos para "Processando Pagamento" (simulando um novo pedido)
    let currentStatusIndex = carrinho.statusRastreio === 0 ? 0 : carrinho.statusRastreio;
    const currentStatus = statusList[currentStatusIndex];

    // 1. Atualiza o texto do status
    statusDisplay.textContent = currentStatus.text;
    etaDisplay.textContent = currentStatus.eta;

    // 2. Remove classes de ocultação se a entrega não foi finalizada
    messageBox.classList.add('hidden');
    button.classList.remove('hidden');

    // 3. Lógica para a etapa final
    if (currentStatusIndex === statusList.length - 1) {
        messageBox.textContent = statusList[statusList.length - 1].text;
        messageBox.classList.remove('hidden');
        button.classList.add('hidden');
        button.textContent = "Simular Novo Pedido";
        // Após a entrega, o próximo clique reinicia (loop back to 0)
        carrinho.statusRastreio = statusList.length - 1; 
    } else {
        button.textContent = "Simular Próximo Passo da Entrega";
    }

    // Código para atualizar a barra de progresso (se você implementou o CSS)
    const progressFill = document.createElement('div');
    progressFill.classList.add('progress-fill');
    progressFill.style.width = `${currentStatus.progress}%`;

    const progressBarContainer = document.querySelector('#tracker-section-block .p-4').previousElementSibling; // Localização do contêiner do mapa/progresso
    
    // Se não existir, cria o contêiner da barra de progresso (para simplificação no HTML, adicionamos via JS)
    if (!document.getElementById('progress-bar-container')) {
        const div = document.createElement('div');
        div.id = 'progress-bar-container';
        div.classList.add('progress-bar');
        progressBarContainer.innerHTML = '';
        progressBarContainer.appendChild(div);
    }
    
    document.getElementById('progress-bar-container').innerHTML = '';
    document.getElementById('progress-bar-container').appendChild(progressFill);
}

// Inicializa os totais ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o container da barra de progresso ao bloco de rastreio, se ainda não existir.