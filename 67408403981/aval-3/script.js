// 1. Dados dos Produtos (Simulando um Banco de Dados)
const produtos = [
    { id: 1, nome: "AeroGlide Pro", preco: 899.99, tipo: "Velocidade", cor: "Laranja/Preto", imagem: "https://via.placeholder.com/300x200?text=AeroGlide+Pro" },
    { id: 2, nome: "PowerStrike Elite", preco: 749.99, tipo: "Potência", cor: "Azul Marinho", imagem: "https://via.placeholder.com/300x200?text=PowerStrike+Elite" },
    { id: 3, nome: "Control Master", preco: 599.99, tipo: "Controle", cor: "Branco/Vermelho", imagem: "https://via.placeholder.com/300x200?text=Control+Master" },
    { id: 4, nome: "Street Fury TF", preco: 450.00, tipo: "Society", cor: "Amarelo Neon", imagem: "https://via.placeholder.com/300x200?text=Street+Fury+TF" }
];

// 2. Variável de Estado Global
let carrinho = [];

// 3. Seleção de Elementos DOM
const produtosGrid = document.getElementById('produtos-grid');
const carrinhoModal = document.getElementById('carrinho-modal');
const contadorCarrinho = document.getElementById('contador-carrinho');
const carrinhoItensContainer = document.getElementById('carrinho-itens');
const carrinhoTotalValor = document.getElementById('carrinho-total-valor');


// 4. Funções Principais

/**
 * Cria os elementos HTML para cada produto e os injeta no grid.
 */
function renderizarProdutos() {
    // Remove o produto estático de conformidade (se houver)
    const estatico = document.querySelector('.exemplo-estatico');
    if (estatico) {
        estatico.remove();
    }
    
    produtos.forEach(produto => {
        const card = document.createElement('article');
        card.classList.add('produto-card');
        
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="tagline">${produto.tipo} - ${produto.cor}</p>
            <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
            <button class="btn-adicionar" data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        
        produtosGrid.appendChild(card);
    });
}

/**
 * Adiciona um produto ao carrinho e atualiza o DOM.
 */
function adicionarAoCarrinho(produtoId) {
    const produtoIdNum = parseInt(produtoId);
    const produto = produtos.find(p => p.id === produtoIdNum);
    
    const itemExistente = carrinho.find(item => item.id === produtoIdNum);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    
    atualizarCarrinhoDOM();
    alert(`"${produto.nome}" adicionado!`);
}

/**
 * Recalcula o total e atualiza o modal e o contador.
 */
function atualizarCarrinhoDOM() {
    carrinhoItensContainer.innerHTML = ''; 
    
    let totalGeral = 0;
    let totalItens = 0;

    if (carrinho.length === 0) {
        carrinhoItensContainer.innerHTML = '<p class="carrinho-vazio">O carrinho está vazio.</p>';
    } else {
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
    }

    // Atualiza o contador e o valor total
    contadorCarrinho.textContent = totalItens;
    carrinhoTotalValor.textContent = totalGeral.toFixed(2).replace('.', ',');
}


// 5. Gerenciamento de Eventos

// 5.1. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarCarrinhoDOM(); 
});

// 5.2. Evento de clique para adicionar ao carrinho
produtosGrid.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-adicionar')) {
        const produtoId = event.target.dataset.id;
        adicionarAoCarrinho(produtoId);
    }
});

// 5.3. Controle do Modal
document.getElementById('carrinho-btn').addEventListener('click', () => {
    carrinhoModal.style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', () => {
    carrinhoModal.style.display = 'none';
});

// Fecha o modal ao clicar fora
window.addEventListener('click', (event) => {
    if (event.target === carrinhoModal) {
        carrinhoModal.style.display = 'none';
    }
});

// 5.4. Simulação de Checkout
document.querySelector('.btn-checkout').addEventListener('click', () => {
    if (carrinho.length > 0) {
        alert("Pedido Finalizado! Agradecemos por escolher a VeloCity Kicks!");
        carrinho = []; 
        carrinhoModal.style.display = 'none';
        atualizarCarrinhoDOM();
    } else {
        alert("Seu carrinho está vazio!");
    }
});