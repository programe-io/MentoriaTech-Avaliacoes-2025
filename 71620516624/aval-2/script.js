let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    const totalElem = document.getElementById('total');
    
    // Limpa a lista
    lista.innerHTML = '';

    // Recria com os itens do carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });

    // Atualiza o total
    totalElem.textContent = `Total: R$ ${total.toFixed(2)}`;
}
