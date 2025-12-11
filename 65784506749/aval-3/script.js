// --- CONFIGURAÇÕES INICIAIS ---
const TAXA_ENTREGA = 8.00;

// Estado atual da aplicação (o que está acontecendo agora)
let pedidoAtual = {
    item: null,
    preco: 0
};

// Passos da simulação de entrega
const etapasEntrega = [
    { texto: "Pedido Recebido na Cozinha 📝", progresso: "10%" },
    { texto: "Fritando seus salgados 🔥", progresso: "35%" },
    { texto: "Escorrendo e secando 🥣", progresso: "55%" },
    { texto: "Embalando para viagem 📦", progresso: "75%" },
    { texto: "Saiu para entrega! 🛵", progresso: "85%" },
    { texto: "Chegou! Bom apetite 🥟", progresso: "92%" }
];

let indiceEtapaAtual = 0;

/* * -------------------------------------------------------------
 * FUNÇÕES PRINCIPAIS
 * -------------------------------------------------------------
 */

// 1. Selecionar um item do cardápio
function selecionarItem(nome, preco) {
    // Atualiza o estado
    pedidoAtual.item = nome;
    pedidoAtual.preco = preco;

    // Atualiza a interface (HTML)
    document.getElementById('item-name').innerText = nome;
    
    // Formata o preço para o padrão brasileiro (troca ponto por vírgula)
    document.getElementById('item-price').innerText = formatarMoeda(preco);
    
    // Remove a cor cinza e destaca o box do pedido
    const displayBox = document.getElementById('selected-item-display');
    displayBox.classList.remove('bg-gray-50', 'border-gray-200');
    displayBox.classList.add('bg-yellow-50', 'border-yellow-200'); // Cores temáticas

    atualizarTotais();
}

// 2. Calcular e atualizar os valores totais
function atualizarTotais() {
    const subtotal = pedidoAtual.preco;
    const total = subtotal + TAXA_ENTREGA;

    document.getElementById('subtotal').innerText = formatarMoeda(subtotal);
    // A taxa de entrega é fixa, mas garantimos a formatação
    document.getElementById('delivery-fee').innerText = formatarMoeda(TAXA_ENTREGA); 
    document.getElementById('total-amount').innerText = formatarMoeda(total);
}

// 3. Simular o envio do pedido (Botão "Finalizar Pedido")
function simulateOrder() { // Mantive o nome usado no HTML anterior
    // Validação: Impede pedir sem escolher nada
    if (!pedidoAtual.item) {
        alert("Ops! Escolha um cento de salgados ou combo primeiro. 😋");
        return;
    }

    // Exibe o Modal (Popup)
    const modal = document.getElementById('confirmation-modal');
    modal.classList.remove('hidden'); // Remove classe que esconde
    modal.classList.add('flex');    // Adiciona classe para centralizar (flexbox)
}

// 4. Fechar o modal e iniciar o rastreamento
function closeModal() {
    const modal = document.getElementById('confirmation-modal');
    
    // Esconde o modal
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    // Mostra a seção de rastreamento na lateral
    const trackerSection = document.getElementById('tracker-section-block');
    trackerSection.classList.remove('hidden');

    // Rola a tela suavemente até o rastreador
    trackerSection.scrollIntoView({ behavior: 'smooth' });

    // Reseta o rastreamento caso seja um novo pedido
    indiceEtapaAtual = 0;
    document.getElementById('message-box').classList.add('hidden');
    atualizarVisualRastreio();
}

// 5. Atualizar o status da entrega (Botão "Atualizar Status")
function updateTrackingStatus() {
    // Avança para a próxima etapa se ainda houver etapas
    if (indiceEtapaAtual < etapasEntrega.length - 1) {
        indiceEtapaAtual++;
        atualizarVisualRastreio();
    } else {
        // Se já chegou no final
        finalizarEntrega();
    }
}

/* * -------------------------------------------------------------
 * FUNÇÕES AUXILIARES (AJUDANTES)
 * -------------------------------------------------------------
 */

// Atualiza o texto e a posição da moto no mapa
function atualizarVisualRastreio() {
    const etapa = etapasEntrega[indiceEtapaAtual];
    
    // Atualiza texto de status
    document.getElementById('status-display').innerText = etapa.texto;
    
    // Move a motoquinha (altera o CSS 'left')
    const marcador = document.getElementById('delivery-marker');
    marcador.style.left = etapa.progresso;
}

// Mostra a mensagem de sucesso final
function finalizarEntrega() {
    const msgBox = document.getElementById('message-box');
    msgBox.classList.remove('hidden');
    
    document.getElementById('status-display').innerText = "Pedido Entregue! ✅";
    document.getElementById('eta').innerText = "Chegou!";
    
    // Desabilita o botão para não clicar mais
    // (Opcional, apenas visual)
}

// Formata número para Real Brasileiro (R$ 00,00)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}