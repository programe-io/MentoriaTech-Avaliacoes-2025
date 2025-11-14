/**
 * app.js
 * Funções para o App de Maquiagem (Beauty Express App)
 * Gerencia a seleção de produtos, cálculos e simulação de rastreamento.
 */

// --- VARIÁVEIS GLOBAIS ---
let carrinho = {
    nome: "Nenhum item selecionado.",
    preco: 0.00,
    taxaEntrega: 15.00 // Frete Expresso Fixo
};

let statusEnvio = 0; // 0: Aguardando | 1: Preparando | 2: Empacotado | 3: Em Rota | 4: Entregue
const statusTexto = [
    "Aguardando pagamento...",
    "Em preparo (separação de itens)...",
    "Empacotado e pronto para envio!",
    "Em rota de entrega (chega hoje!)",
    "Entrega concluída. Aproveite!"
];

// --- FUNÇÕES DE CÁLCULO E EXIBIÇÃO ---

/**
 * Atualiza os valores do carrinho na interface.
 */
function atualizarCarrinhoDisplay() {
    const nomeItemEl = document.getElementById('item-name');
    const precoItemEl = document.getElementById('item-price');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total-amount');

    // Atualiza o item selecionado
    nomeItemEl.textContent = carrinho.nome;

    if (carrinho.preco > 0) {
        precoItemEl.textContent = `R$ ${carrinho.preco.toFixed(2).replace('.', ',')}`;
    } else {
        precoItemEl.textContent = "";
    }

    // Calcula o subtotal e total
    const subtotal = carrinho.preco;
    const total = subtotal + carrinho.taxaEntrega;

    // Atualiza os valores
    subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

/**
 * Seleciona um produto e o adiciona ao carrinho (sobrescrevendo o anterior para simplificação).
 * @param {string} nome O nome do produto de maquiagem.
 * @param {number} preco O preço do produto.
 */
function selecionarPizza(nome, preco) {
    carrinho.nome = nome;
    carrinho.preco = preco;
    statusEnvio = 0; // Reseta o status se um novo item for selecionado
    atualizarCarrinhoDisplay();
    alert(`"${nome}" adicionado à sua Cesta por R$ ${preco.toFixed(2).replace('.', ',')}!`);
}

// Inicializa a exibição do carrinho
document.addEventListener('DOMContentLoaded', atualizarCarrinhoDisplay);


// --- FUNÇÕES DE PEDIDO E RASTREAMENTO ---

/**
 * Simula a finalização do pedido, mostrando o modal e o rastreador.
 */
function simulateOrder() {
    if (carrinho.preco === 0) {
        alert("Por favor, selecione um produto de maquiagem para finalizar a compra!");
        return;
    }

    // Define o status inicial após a compra
    statusEnvio = 1;
    document.getElementById('status-display').textContent = statusTexto[statusEnvio];

    // Esconde o bloco do pedido e mostra o rastreador
    document.getElementById('order-details-block').classList.add('hidden');
    document.getElementById('tracker-section-block').classList.remove('hidden');

    // Exibe o modal de confirmação
    document.getElementById('confirmation-modal').classList.remove('hidden');
    document.getElementById('confirmation-modal').classList.add('flex');

    // Inicializa a posição do pacote no mapa
    const marker = document.getElementById('delivery-marker');
    marker.style.left = '10%';
    marker.style.top = '30%';
}

/**
 * Fecha o modal de confirmação.
 */
function closeModal() {
    document.getElementById('confirmation-modal').classList.add('hidden');
    document.getElementById('confirmation-modal').classList.remove('flex');

    // Rola para a seção do rastreador
    document.getElementById('tracker-section-block').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Simula a atualização do status de rastreamento e move o pacote no mapa.
 */
function updateTrackingStatus() {
    const statusDisplayEl = document.getElementById('status-display');
    const marker = document.getElementById('delivery-marker');
    const messageBoxEl = document.getElementById('message-box');
    const updateButton = document.querySelector('#tracker-section-block button');

    // Incrementa o status (limitado ao máximo de 4 - Entregue)
    if (statusEnvio < 4) {
        statusEnvio++;
    }

    // 1. Atualiza o texto do status
    statusDisplayEl.textContent = statusTexto[statusEnvio];
    messageBoxEl.classList.add('hidden'); // Esconde a mensagem final

    // 2. Simula o movimento do pacote no "mapa"
    switch (statusEnvio) {
        case 2: // Empacotado (Meio do caminho)
            marker.style.left = '35%';
            marker.style.top = '50%';
            break;
        case 3: // Em Rota (Perto do destino)
            marker.style.left = '65%';
            marker.style.top = '25%';
            break;
        case 4: // Entregue (Chegou ao destino)
            marker.style.left = '80%';
            marker.style.top = '10%';
            statusDisplayEl.textContent = "Entrega finalizada. Aproveite!";
            messageBoxEl.classList.remove('hidden');
            updateButton.textContent = "Compra Concluída";
            updateButton.disabled = true;
            break;
    }

    // 3. Bloqueia o botão se a entrega for concluída
    if (statusEnvio === 4) {
        updateButton.textContent = "Compra Concluída";
        updateButton.disabled = true;
    }
}