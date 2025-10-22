document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Carrinho (Mantida) ---
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    const contadorCarrinho = document.getElementById('contador-carrinho');
    let totalItensCarrinho = 0;

    function atualizarContadorCarrinho() {
        contadorCarrinho.textContent = totalItensCarrinho;
    }

    function adicionarAoCarrinho(event) {
        const cardProduto = event.target.closest('.produto-card');
        const nomeProduto = cardProduto.dataset.nome;
        const precoProduto = cardProduto.dataset.preco;

        totalItensCarrinho++;
        atualizarContadorCarrinho();

        // Alerta simples para feedback
        alert(`"${nomeProduto}" (R$ ${precoProduto}) foi adicionado ao seu carrinho!\nTotal de itens: ${totalItensCarrinho}`);
    }

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    document.getElementById('btn-carrinho').addEventListener('click', () => {
        alert(`Você tem ${totalItensCarrinho} itens no carrinho. Implemente a página de checkout!`);
    });

    // --- Lógica do Filtro (NOVA) ---
    const rangePreco = document.getElementById('filtro-preco');
    const valorPrecoSpan = document.getElementById('valor-preco');

    // Inicializa o valor do filtro
    valorPrecoSpan.textContent = `R$ ${rangePreco.value}`;

    // Adiciona um ouvinte de evento para atualizar o valor exibido
    rangePreco.addEventListener('input', (event) => {
        // Atualiza o texto do span a cada movimento do range
        valorPrecoSpan.textContent = `R$ ${event.target.value}`;
    });
    
    // Adiciona um alerta ao aplicar os filtros (simulando a função)
    document.querySelector('.btn-aplicar').addEventListener('click', () => {
        // Aqui seria a lógica para filtrar os produtos na lista
        const maxPreco = rangePreco.value;
        alert(`Filtros Aplicados:\nPreço Máximo: R$ ${maxPreco}.\n(A lógica real de filtragem deve ser implementada aqui!)`);
    });

    atualizarContadorCarrinho();
});