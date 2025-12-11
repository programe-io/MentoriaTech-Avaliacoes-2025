/* --- 1. VARIÁVEIS GLOBAIS (O "Tanque" de dados) --- */
let pedidoAtual = {
    nome: null,
    preco: 0
};
const VALOR_FRETE = 15.00;

// Configuração das etapas do rastreio
const etapasRastreio = [
    { texto: "Separando no Estoque 📦", posicao: "15%" },
    { texto: "Embalagem Reforçada 🛡️", posicao: "35%" },
    { texto: "Motoboy na Pista 🏍️💨", posicao: "60%" },
    { texto: "Próximo ao endereço 📍", posicao: "80%" },
    { texto: "Chegou! Acelera! 🏁", posicao: "90%" }
];

let indiceRastreio = 0;


/* --- 2. FUNÇÃO DE SELEÇÃO DE PRODUTO (O "Carrinho") --- */
function selecionarItem(nome, preco) {
    // Atualiza os dados na memória
    pedidoAtual.nome = nome;
    pedidoAtual.preco = preco;

    // Atualiza o visual do carrinho (DOM)
    const displayNome = document.getElementById('item-name');
    const displayPreco = document.getElementById('item-price');
    const displaySubtotal = document.getElementById('subtotal');
    const displayTotal = document.getElementById('total-amount');

    // Preenche os textos
    displayNome.innerText = nome;
    displayNome.style.color = "#ffffff"; // Deixa branco para destacar
    
    // Formatação de moeda (R$)
    displayPreco.innerText = formatarMoeda(preco);
    displaySubtotal.innerText = formatarMoeda(preco);
    
    // Calcula total final
    const total = preco + VALOR_FRETE;
    displayTotal.innerText = formatarMoeda(total);

    // Efeito visual simples: piscar a borda do carrinho
    const boxCarrinho = document.getElementById('carrinho-box');
    boxCarrinho.style.borderColor = "#ef4444"; // Vermelho
    setTimeout(() => {
        boxCarrinho.style.borderColor = ""; // Volta ao original
    }, 300);
}


/* --- 3. CONTROLE DO MODAL (Janela de Confirmação) --- */
function abrirModal() {
    // Validação: Não deixa comprar sem escolher peça
    if (!pedidoAtual.nome) {
        alert("⚠️ Opa! Escolha uma peça ou acessório primeiro.");
        return;
    }

    // Mostra o modal
    const modal = document.getElementById('modal-confirma');
    modal.classList.add('aberto');
}

function fecharModal() {
    // Esconde o modal
    const modal = document.getElementById('modal-confirma');
    modal.classList.remove('aberto');

    // Mostra a área de rastreio (que estava escondida)
    const trackerBox = document.getElementById('tracker-box');
    trackerBox.style.display = 'block';

    // Rola a tela suavemente até o rastreador
    window.location.href = "#tracker-box";
}


/* --- 4. SISTEMA DE RASTREIO (Animação da Moto) --- */
function atualizarRastreio() {
    const statusText = document.getElementById('status-text');
    const marker = document.getElementById('delivery-marker');
    const msgFinal = document.getElementById('msg-final');

    // Verifica se ainda há etapas para percorrer
    if (indiceRastreio < etapasRastreio.length) {
        const etapa = etapasRastreio[indiceRastreio];

        // Atualiza texto e move a moto (mudando o CSS 'left')
        statusText.innerText = etapa.texto;
        marker.style.left = etapa.posicao;

        // Prepara para o próximo passo
        indiceRastreio++;

        // Se for o último passo, mostra mensagem de sucesso
        if (indiceRastreio === etapasRastreio.length) {
            msgFinal.classList.add('visivel');
        }

    } else {
        // RESET: Se clicar de novo no fim, volta para o começo (loop)
        indiceRastreio = 0;
        marker.style.left = "5%";
        statusText.innerText = "Aguardando nova atualização...";
        msgFinal.classList.remove('visivel');
    }
}


/* --- 5. FUNÇÃO UTILITÁRIA --- */
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}