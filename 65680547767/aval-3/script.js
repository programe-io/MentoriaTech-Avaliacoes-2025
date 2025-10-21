/**
 * =======================================================
 * JAVASCRIPT PARA A LOJA DE CHUTEIRAS (CHUTEIRA PRIME)
 * =======================================================
 *
 * Funcionalidades incluídas:
 * 1. Sistema de Carrinho de Compras (Adicionar ao Carrinho).
 * 2. Interação com o botão do Banner (Role para os produtos).
 *
 */

// Array simples para simular o carrinho de compras
let carrinho = [];
let totalCarrinho = 0;

// =======================================================
// 1. INICIALIZAÇÃO E LISTENERS
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1.1. Adiciona um listener em todos os botões "Adicionar ao Carrinho"
    // Os botões estão dentro dos divs de classe 'produto'
    const botoesAdicionar = document.querySelectorAll('.produto button');
    
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    // 1.2. Inicializa a funcionalidade de interação do destaque
    inicializarDestaque();
});

// =======================================================
// 2. FUNCIONALIDADE DO CARRINHO DE COMPRAS
// =======================================================

/**
 * Função responsável por adicionar um produto ao carrinho.
 * @param {Event} event - O evento de clique.
 */
function adicionarAoCarrinho(event) {
    // Pega o elemento pai do botão (o <div class="produto">)
    const produtoElement = event.target.closest('.produto');

    // Extrai o nome do produto
    const nome = produtoElement.querySelector('h3').innerText;
    
    // EXTRAÇÃO DO PREÇO: Pega o SPAN com a classe .preco-valor e limpa para obter um número
    const precoSpan = produtoElement.querySelector('.preco-valor').innerText;
    // Remove "R$", substitui vírgula por ponto e converte para número
    const preco = parseFloat(precoSpan.replace('R$', '').replace(',', '.').trim());

    // Verifica se a extração do preço foi bem-sucedida
    if (isNaN(preco)) {
        console.error("Erro ao extrair o preço. Verifique o formato do texto no HTML.");
        alert(`Não foi possível adicionar ${nome} ao carrinho. Preço inválido.`);
        return;
    }

    // Cria um objeto de produto
    const item = {
        nome: nome,
        preco: preco,
        quantidade: 1
    };

    // Adiciona ao carrinho (Simulação simples)
    carrinho.push(item);
    totalCarrinho += preco;

    // Feedback para o usuário
    alert(`"${nome}" adicionado ao carrinho! \nTotal atual: R$ ${totalCarrinho.toFixed(2).replace('.', ',')}`);

    // Chamada a uma função fictícia para atualizar a interface do carrinho
    atualizarInterfaceCarrinho();
}

/**
 * Função para atualizar elementos