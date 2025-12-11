// Elementos
const botoesAdd = document.querySelectorAll('.add-carrinho');
const listaCarrinho = document.getElementById('carrinho-itens');
const totalCarrinho = document.getElementById('carrinho-total');
const btnLimpar = document.getElementById('limpar-carrinho');
const formPedido = document.getElementById('form-pedido');

let carrinho = [];

// Atualiza visual do carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';

    let total = 0;

    carrinho.forEach((item, i) => {
        total += item.preco;

        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = '✕';
        btnRemover.setAttribute('aria-label', `Remover ${item.nome} do carrinho`);
        btnRemover.addEventListener('click', () => {
            carrinho.splice(i, 1);
            atualizarCarrinho();
        });

        li.appendChild(btnRemover);
        listaCarrinho.appendChild(li);
    });

    totalCarrinho.textContent = total.toFixed(2);
}

// Adiciona item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

// Eventos dos botões "Adicionar"
botoesAdd.forEach(botao => {
    botao.addEventListener('click', () => {
        const produto = botao.closest('.produto');
        const nome = produto.querySelector('h3').textContent;
        const preco = parseFloat(produto.querySelector('.preco').dataset.preco);
        adicionarAoCarrinho(nome, preco);
        alert(`${nome} adicionado ao carrinho!`);
    });
});

// Limpar carrinho
btnLimpar.addEventListener('click', () => {
    if (confirm('Deseja realmente limpar o carrinho?')) {
        carrinho = [];
        atualizarCarrinho();
    }
});

// Envio do pedido
formPedido.addEventListener('submit', (e) => {
    e.preventDefault();

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio! Adicione produtos antes de enviar o pedido.');
        return;
    }

    // Validação simples dos campos
    const nome = formPedido.nome.value.trim();
    const endereco = formPedido.endereco.value.trim();
    const telefone = formPedido.telefone.value.trim();
    const detalhes = formPedido['pedido-texto'].value.trim();

    if (!nome || !endereco || !telefone || !detalhes) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    // Aqui você poderia enviar para um servidor via fetch/ajax
    alert(`Pedido enviado com sucesso!\n\nNome: ${nome}\nEndereço: ${endereco}\nTelefone: ${telefone}\nDetalhes: ${detalhes}\nItens no carrinho: ${carrinho.length}`);

    // Reseta formulário e carrinho
    formPedido.reset();
    carrinho = [];
    atualizarCarrinho();
});
