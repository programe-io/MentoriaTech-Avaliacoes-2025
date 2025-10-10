let total = 0;

function adicionarPedido(nome, preco) {
    const lista = document.getElementById('lista-pedidos');
    const item = document.createElement('li');
    item.textContent = `${nome} - R$ ${preco},00`;
    lista.appendChild(item);

    total += preco;
    document.getElementById('total').textContent = total;
}
