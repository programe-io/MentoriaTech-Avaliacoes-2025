// 1. Dados dos Produtos (Simulando um DB ou API)
const produtos = [
    { id: 101, nome: "Aurora Dourada", preco: 299.00, categoria: "Feminino", imagem: "https://via.placeholder.com/300x200?text=Aurora+Dourada" },
    { id: 102, nome: "Legado Forte", preco: 349.00, categoria: "Masculino", imagem: "https://via.placeholder.com/300x200?text=Legado+Forte" },
    { id: 103, nome: "Brisa Pura", preco: 189.00, categoria: "Unissex", imagem: "https://via.placeholder.com/300x200?text=Brisa+Pura" },
    { id: 104, nome: "Noite de Gala", preco: 450.00, categoria: "Feminino", imagem: "https://via.placeholder.com/300x200?text=Noite+de+Gala" }
];

// 2. Variável de Estado Global
let carrinho = [];

// 3. Seleção de Elementos DOM
const produtosGrid = document.getElementById('produtos-grid');
const carrinhoModal = document.getElementById('carrinho-modal');
const contadorCarrinho = document.getElementById('contador-carrinho');
const carrinhoItensContainer = document.getElementById('carrinho-itens');
const carrinhoTotalValor = document.getElementById('carrinho-total-valor');

// 4. Funções de Renderização e Lógica

/**
 * Cria os elementos HTML para cada produto e os injeta no grid.
 */
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

/**
 * Atualiza o array do carrinho e o DOM (contador e modal).
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
 * Recalcula o total do carrinho e atualiza o modal e o contador.
 */
function atualizarCarrinhoDOM() {
    carrinhoItensContainer.innerHTML = ''; // Limpa o modal
    
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

    // Atualiza o contador na barra de navegação
    contadorCarrinho.textContent = totalItens;
    // Atualiza o valor total no modal
    carrinhoTotalValor.textContent = totalGeral.toFixed(2).replace('.', ',');
}

// 5. Gerenciamento de Eventos (Event Listeners)

// 5.1. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarCarrinhoDOM(); 
});

// 5.2. Adicionar ao Carrinho (Delegação de Eventos)
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
        alert("Compra finalizada com sucesso! Total: R$ " + carrinhoTotalValor.textContent);
        carrinho = []; // Esvazia o carrinho
        carrinhoModal.style.display = 'none';
        atualizarCarrinhoDOM();
    } else {
        alert("Seu carrinho está vazio. Adicione um perfume!");
    }
});