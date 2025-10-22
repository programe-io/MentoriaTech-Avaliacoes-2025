// Onde armazenamos os dados do carrinho (simples, sem persistência)
let carrinho = [];

// Elemento HTML que mostra a contagem total de itens no carrinho
const contadorCarrinho = document.querySelector('.icone-carrinho'); 
// O seletor é o <a> que está no <div class="utilidades"> no seu HTML
const botoesAdicionar = document.querySelectorAll('.produto-card button');


/* ------------------------------------------------------------------- */
/* 1. FUNÇÕES DO CARRINHO                                              */
/* ------------------------------------------------------------------- */

/**
 * Atualiza o número de itens no ícone do carrinho no cabeçalho.
 */
function atualizarContadorCarrinho() {
    // Calcula o total de itens no carrinho
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    // Atualiza o texto do ícone (ex: 🛒 (3))
    if (contadorCarrinho) {
        contadorCarrinho.textContent = `🛒 (${totalItens})`;
    }
}

/**
 * Adiciona um item ao carrinho ou aumenta sua quantidade se já existir.
 * @param {string} nome - Nome do produto.
 * @param {number} preco - Preço do produto.
 */
function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        // Se o produto já está no carrinho, aumenta a quantidade
        itemExistente.quantidade += 1;
    } else {
        // Se é um novo produto, adiciona ao array
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    // Ação visual e de dados
    console.log(`"${nome}" adicionado ao carrinho.`);
    atualizarContadorCarrinho();
    
    // Alerta básico para feedback
    alert(`"${nome}" adicionado! Itens no carrinho: ${carrinho.reduce((t, i) => t + i.quantidade, 0)}`);
}


/* ------------------------------------------------------------------- */
/* 2. INICIALIZAÇÃO E EVENT LISTENERS                                 */
/* ------------------------------------------------------------------- */

// Percorre todos os botões "Adicionar ao Carrinho"
botoesAdicionar.forEach(botao => {
    
    botao.addEventListener('click', (event) => {
        // Encontra o elemento pai que é o <article class="produto-card">
        const card = event.target.closest('.produto-card');
        
        if (card) {
            // 1. Extrai o nome do produto (do <h3>)
            const nomeProduto = card.querySelector('h3').textContent;
            
            // 2. Extrai o preço (e remove "R$ "