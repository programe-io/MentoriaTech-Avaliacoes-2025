// 1. Dados dos Produtos (Simulando um Banco de Dados)
const produtos = [
    { id: 1, nome: "Essência Lunar", preco: 199.90, categoria: "Feminino", imagem: "https://via.placeholder.com/300x200?text=Lunar" },
    { id: 2, nome: "Força Negra", preco: 249.90, categoria: "Masculino", imagem: "https://via.placeholder.com/300x200?text=Negra" },
    { id: 3, nome: "Frescor Cítrico", preco: 149.90, categoria: "Unissex", imagem: "https://via.placeholder.com/300x200?text=Citrico" },
    { id: 4, nome: "Ouro Real", preco: 329.90, categoria: "Feminino", imagem: "https://via.placeholder.com/300x200?text=Ouro" }
];

// 2. Variáveis de Estado (Carrinho)
let carrinho = [];

// 3. Seleção de Elementos DOM
const produtosGrid = document.getElementById('produtos-grid');
const carrinhoBtn = document.getElementById('carrinho-btn');
const carrinhoModal = document.getElementById('carrinho-modal');
const closeBtn = document.querySelector('.close-btn');
const carrinhoItensContainer = document.getElementById('carrinho-itens');
const contadorCarrinho = document.getElementById('contador-carrinho');
const carrinhoTotalValor = document.getElementById('carrinho-total-valor');


// 4. Funções Principais

// Função para renderizar os produtos na tela
function renderizarProdutos() {
    produtos.forEach(produto => {
        const card = document.createElement('article');
        card.classList.add('produto-card');
        
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.categoria}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
            <button class="btn-adicionar" data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        
        produtosGrid.appendChild(card);
    });
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    
    // Verifica se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    
    atualizarCarrinhoDOM();
    alert(`${produto.nome} adicionado ao carrinho!`);
}

// Função para renderizar os itens e o total do carrinho no modal
function atualizarCarrinhoDOM() {
    carrinhoItensContainer.innerHTML = ''; // Limpa o conteúdo atual

    if (carrinho.length === 0) {
        carrinhoItensContainer.innerHTML = '<p class="carrinho-vazio">O carrinho está vazio.</p>';
        contadorCarrinho.textContent = '0';
        carrinhoTotalValor.textContent = '0,00';
        return;
    }

    let totalGeral = 0;
    let totalItens = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        totalGeral += subtotal;
        totalItens += item.quantidade;
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carrinho-item');
        itemDiv.innerHTML = `
            <span>${item.nome} (${item.quantidade}x)</span>
            <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
        `;
        carrinhoItensContainer.appendChild(itemDiv);
    });

    // Atualiza o contador e o valor total
    contadorCarrinho.textContent = totalItens;
    carrinhoTotalValor.textContent = totalGeral.toFixed(2).replace('.', ',');
}


// 5. Event Listeners

// Inicializa a renderização dos produtos
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarCarrinhoDOM(); // Garante que o contador comece em 0
});

// Evento para os botões "Adicionar ao Carrinho" (usa delegação de eventos)
produtosGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-adicionar')) {
        const produtoId = parseInt(event.target.dataset.id);
        adicionarAoCarrinho(produtoId);
    }
});

// Eventos para abrir e fechar o modal do carrinho
carrinhoBtn.addEventListener('click', () => {
    carrinhoModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    carrinhoModal.style.display = 'none';
});

// Fecha o modal se o usuário clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === carrinhoModal) {
        carrinhoModal.style.display = 'none';
    }
});

// Evento de Checkout (apenas simulação)
document.querySelector('.btn-checkout').addEventListener('click', () => {
    if (carrinho.length > 0) {
        alert("Obrigado pela sua compra! Total: R$ " + carrinhoTotalValor.textContent);
        carrinho = []; // Limpa o carrinho
        carrinhoModal.style.display = 'none';
        atualizarCarrinhoDOM();
    } else {
        alert("Seu carrinho está vazio!");
    }
});