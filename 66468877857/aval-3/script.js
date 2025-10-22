// ===================================
// 1. Variáveis Globais e Inicialização
// ===================================

// Array que irá armazenar os produtos do carrinho. 
// Tenta carregar dados do localStorage (simulação de banco de dados).
let carrinho = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || []; 

// Seleciona o elemento para mostrar a contagem do carrinho no cabeçalho.
const contadorCarrinho = document.querySelector('.carrinho');


// ===================================
// 2. Funções Essenciais
// ===================================

/**
 * Atualiza o número de itens no ícone do carrinho no cabeçalho.
 */
function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    contadorCarrinho.textContent = `🛒 Carrinho (${totalItens})`;
}

/**
 * Salva o estado atual do carrinho no Local Storage do navegador.
 */
function salvarCarrinho() {
    localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinho));
}


/**
 * Adiciona um produto ao carrinho.
 * @param {object} produto - O objeto do produto a ser adicionado.
 */
function adicionarAoCarrinho(produto) {
    // Verifica se o produto já existe no carrinho
    const itemExistente = carrinho.find(item => item.id === produto.id);

    if (itemExistente) {
        // Se existir, apenas incrementa a quantidade
        itemExistente.quantidade++;
    } else {
        // Se não existir, adiciona com quantidade 1
        carrinho.push({ ...produto, quantidade: 1 });
    }

    // Salva e atualiza a interface
    salvarCarrinho();
    atualizarContadorCarrinho();
    
    // Alerta de sucesso (poderia ser substituído por um pop-up mais elegante)
    alert(`${produto.nome} adicionado(a) ao carrinho!`);
}


// ===================================
// 3. Configuração de Eventos
// ===================================

/**
 * Itera sobre todos os botões "Adicionar ao Carrinho" e anexa o evento de clique.
 * Nota: No HTML, você precisaria adicionar atributos de dados (data-*) aos botões.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa o contador ao carregar a página
    atualizarContadorCarrinho();
    
    const botoesAdicionar = document.querySelectorAll('.botao-adicionar');

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Encontra o card de produto pai
            const card = evento.target.closest('.produto-card');
            
            if (!card) return; // Sai se não encontrar o card

            // 1. Extrai as informações do produto diretamente do DOM ou de atributos de dados
            const nomeProduto = card.querySelector('h4').textContent;
            const precoTexto = card.querySelector('.preco').textContent; 
            
            // 2. Sanitiza e formata os dados
            const precoNumerico = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim());
            
            // 3