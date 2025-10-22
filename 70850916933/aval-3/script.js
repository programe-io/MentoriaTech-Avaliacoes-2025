/**
 * ======================================================
 * JAVASCRIPT PARA LOJA DE ROUPAS (FUNCIONALIDADES BÁSICAS)
 * ======================================================
 */

// 1. Variável global para rastrear o estado do carrinho
let carrinho = [];

// 2. Elemento DOM onde o total de itens será exibido no header
const elementoContadorCarrinho = document.querySelector('a[href="#carrinho"]');

/**
 * Função para adicionar um produto ao carrinho.
 * Esta função é acionada pelo 'onsubmit' dos formulários de compra.
 * @param {Event} event - O evento de submissão do formulário.
 */
function adicionarAoCarrinho(event) {
    // Impede o envio padrão do formulário (que recarregaria a página)
    event.preventDefault();

    // Obtém o formulário que disparou o evento
    const form = event.target;
    
    // Extrai informações do produto do formulário (usando o produto de exemplo 'Camisa Polo')
    const produtoNome = form.querySelector('h3').textContent || "Produto Desconhecido"; 
    
    // Obtém a quantidade do input type="number"
    const quantidadeInput = form.querySelector('input[name="quantidade"]');
    const quantidade = quantidadeInput ? parseInt(quantidadeInput.value) : 1;
    
    // Simulação: Preço do produto. Em um sistema real, isso viria de um banco de dados.
    let precoUnitario = 99.90; // Preço da Camisa Polo

    // Se for o formulário do Vestido de Verão, ajusta o preço
    if (produtoNome.includes('Vestido')) {
        precoUnitario = 90.00;
    }


    const novoItem = {
        nome: produtoNome,
        preco: precoUnitario,
        quantidade: quantidade
    };

    // Adiciona o item ao array do carrinho
    carrinho.push(novoItem);
    
    // Atualiza a interface do carrinho
    atualizarCarrinhoDOM();

    // Alerta de sucesso
    alert(`${quantidade} x "${produtoNome}" adicionado(s) ao carrinho!`);
}

/**
 * Função para atualizar o contador de itens no cabeçalho e a tabela.
 */
function atualizarCarrinhoDOM() {
    let totalItens = 0;
    let totalGeral = 0;
    
    // Itera sobre o carrinho para calcular totais
    carrinho.forEach(item => {
        totalItens += item.quantidade;
        totalGeral += item.preco * item.quantidade;
    });

    // 1. Atualiza o contador de itens no header (link #carrinho)
    if (elementoContadorCarrinho) {
        elementoContadorCarrinho.textContent = `Carrinho (${totalItens})`;
    }

    // 2. Atualiza a tabela do carrinho (#carrinho)
    const corpoTabela = document.querySelector('#carrinho tbody');
    const peTabelaTotal = document.querySelector('#carrinho tfoot strong');

    // Limpa as linhas existentes, exceto a linha de exemplo que pode ser mantida se o carrinho estiver vazio.
    // Neste exemplo, vamos apenas adicionar ao que já existe no HTML estático:
    
    // Em um cenário real, você faria um loop e criaria as linhas (<tr>) dinamicamente.
    // Como estamos usando a tabela estática do HTML, esta função é uma simulação simples de atualização.

    // Apenas para mostrar o novo total, já que a tabela estática não é fácil de manipular com JS simples:
    if (peTabelaTotal) {
        peTabelaTotal.textContent = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
    }

    // Se quiséssemos mostrar *todos* os itens dinamicamente, o código seria mais complexo e limparia a tabela primeiro.
}


/**
 * Função de inicialização: Adiciona listeners de evento aos formulários de compra.
 * Também adiciona interatividade a outros elementos.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Adicionar event listeners aos formulários de compra
    const formsDeCompra = document.querySelectorAll('article form');
    formsDeCompra.forEach(form => {
        // Quando o formulário for submetido, chama a função 'adicionarAoCarrinho'
        form.addEventListener('submit', adicionarAoCarrinho);
    });

    // B. Altera a imagem do placeholder ao passar o mouse para dar um efeito
    const imagensProdutos = document.querySelectorAll('figure img');
    
    imagensProdutos.forEach(img => {
        // Altera a URL para simular um zoom ou outra cor
        const urlOriginal = img.src;
        const urlHover = urlOriginal.replace(/text=([A-Za-z0-9]+)/, 'text=$1+ZOOM');

        img.addEventListener('mouseover', () => {
            img.src = urlHover;
            img.style.cursor = 'pointer';
            img.style.border = '2px solid var(--cor-secundaria)'; // Adiciona borda de destaque (se o CSS for importado)
        });

        img.addEventListener('mouseout', () => {
            img.src = urlOriginal;
            img.style.border = 'none';
        });
    });
    
    // C. Inicializa o contador do carrinho com 0 (ou com os itens estáticos do HTML)
    atualizarCarrinhoDOM();
});