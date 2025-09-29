// Dados dos produtos
const produtos = {
    doces: [
        {
            id: 1,
            nome: "Brigadeiro Gourmet",
            descricao: "Brigadeiro cremoso com chocolate belga",
            preco: 3.50,
            imagem: "brigadeiro.jpg",
            categoria: "popular"
        },
        {
            id: 2,
            nome: "Beijinho de Coco",
            descricao: "Doce tradicional com coco fresco ralado",
            preco: 3.00,
            imagem: "beijinho.jpg",
            categoria: "popular"
        },
        {
            id: 3,
            nome: "Cajuzinho",
            descricao: "Amendoim e chocolate em uma combinação perfeita",
            preco: 3.00,
            imagem: "cajuzinho.jpg",
            categoria: "popular"
        },
        {
            id: 4,
            nome: "Trufa de Morango",
            descricao: "Trufa recheada com creme de morango",
            preco: 4.50,
            imagem: "trufa-morango.jpg",
            categoria: "novo"
        }
    ],
    bolos: [
        {
            id: 5,
            nome: "Bolo de Chocolate",
            descricao: "Massa fofinha com cobertura de chocolate",
            preco: 25.00,
            imagem: "bolo-chocolate.jpg",
            categoria: "popular"
        },
        {
            id: 6,
            nome: "Bolo de Cenoura",
            descricao: "Massa úmida com cobertura de chocolate",
            preco: 22.00,
            imagem: "bolo-cenoura.jpg",
            categoria: "popular"
        },
        {
            id: 7,
            nome: "Bolo Red Velvet",
            descricao: "Massa aveludada com cream cheese",
            preco: 35.00,
            imagem: "red-velvet.jpg",
            categoria: "novo"
        },
        {
            id: 8,
            nome: "Bolo de Limão",
            descricao: "Massa cítrica com glacê de limão",
            preco: 20.00,
            imagem: "bolo-limao.jpg",
            categoria: "promocao",
            precoAntigo: 25.00
        }
    ],
    sobremesas: [
        {
            id: 9,
            nome: "Pudim de Leite",
            descricao: "Pudim cremoso com calda de caramelo",
            preco: 12.00,
            imagem: "pudim.jpg",
            categoria: "popular"
        },
        {
            id: 10,
            nome: "Mousse de Maracujá",
            descricao: "Mousse leve e refrescante",
            preco: 8.00,
            imagem: "mousse-maracuja.jpg",
            categoria: "popular"
        },
        {
            id: 11,
            nome: "Cheesecake de Morango",
            descricao: "Base de biscoito com creme e geléia",
            preco: 15.00,
            imagem: "cheesecake.jpg",
            categoria: "novo"
        },
        {
            id: 12,
            nome: "Tiramisu",
            descricao: "Sobremesa italiana clássica",
            preco: 18.00,
            imagem: "tiramisu.jpg",
            categoria: "promocao",
            precoAntigo: 22.00
        }
    ],
    bebidas: [
        {
            id: 13,
            nome: "Suco Natural",
            descricao: "Laranja, morango ou abacaxi",
            preco: 6.00,
            imagem: "suco.jpg",
            categoria: "popular"
        },
        {
            id: 14,
            nome: "Milkshake",
            descricao: "Chocolate, morango ou baunilha",
            preco: 12.00,
            imagem: "milkshake.jpg",
            categoria: "popular"
        },
        {
            id: 15,
            nome: "Café Especial",
            descricao: "Café gourmet com chantilly",
            preco: 8.00,
            imagem: "cafe.jpg",
            categoria: "novo"
        },
        {
            id: 16,
            nome: "Chocolate Quente",
            descricao: "Cremoso com marshmallows",
            preco: 10.00,
            imagem: "chocolate.jpg",
            categoria: "promocao",
            precoAntigo: 12.00
        }
    ]
};

// Estado da aplicação
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let filtroAtual = 'all';
let termoBusca = '';

// Elementos DOM
const elementos = {
    productsGrid: document.querySelector('.products-grid'),
    cartItems: document.getElementById('cartItems'),
    cartTotal: document.getElementById('cartTotal'),
    cartCount: document.querySelector('.cart-count'),
    cartModal: document.getElementById('cartModal'),
    cartToggle: document.getElementById('cartToggle'),
    closeCart: document.getElementById('closeCart'),
    clearCart: document.getElementById('clearCart'),
    checkout: document.getElementById('checkout'),
    searchInput: document.getElementById('searchInput'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    navLinks: document.querySelectorAll('.nav-link'),
    menuSections: document.querySelectorAll('.menu-section')
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarNavegacao();
    inicializarFiltros();
    inicializarCarrinho();
    carregarProdutos('doces');
    atualizarCarrinho();
});

// Navegação entre seções
function inicializarNavegacao() {
    elementos.navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Atualizar navegação ativa
            elementos.navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Mostrar seção correspondente
            elementos.menuSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    carregarProdutos(targetId);
                }
            });
        });
    });
}

// Filtros e busca
function inicializarFiltros() {
    // Filtros por categoria
    elementos.filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            elementos.filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filtroAtual = this.dataset.filter;
            aplicarFiltros();
        });
    });

    // Busca em tempo real
    elementos.searchInput.addEventListener('input', function() {
        termoBusca = this.value.toLowerCase();
        aplicarFiltros();
    });
}

// Carregar produtos na seção
function carregarProdutos(categoria) {
    const produtosCategoria = produtos[categoria] || [];
    elementos.productsGrid.innerHTML = '';
    
    produtosCategoria.forEach(produto => {
        elementos.productsGrid.appendChild(criarCardProduto(produto));
    });
}

// Criar card de produto
function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = `product-card ${produto.categoria}`;
    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="product-image" onerror="this.src='placeholder.jpg'">
        <h3>${produto.nome}</h3>
        <p class="product-description">${produto.descricao}</p>
        <div class="product-price">
            R$ ${produto.preco.toFixed(2)}
            ${produto.precoAntigo ? `<span class="product-old-price">R$ ${produto.precoAntigo.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-actions">
            <div class="quantity-controls">
                <button class="quantity-btn minus" onclick="alterarQuantidade(${produto.id}, -1)">-</button>
                <span class="quantity" id="qty-${produto.id}">1</span>
                <button class="quantity-btn plus" onclick="alterarQuantidade(${produto.id}, 1)">+</button>
            </div>
            <button class="add-to-cart" onclick="adicionarAoCarrinho(${produto.id})">
                🛒 Adicionar
            </button>
        </div>
    `;
    return card;
}

// Aplicar filtros
function aplicarFiltros() {
    const produtosVisiveis = document.querySelectorAll('.product-card');
    
    produtosVisiveis.forEach(card => {
        const nome = card.querySelector('h3').textContent.toLowerCase();
        const categoria = card.classList[1];
        
        const correspondeBusca = nome.includes(termoBusca);
        const correspondeFiltro = filtroAtual === 'all' || categoria === filtroAtual;
        
        card.style.display = (correspondeBusca && correspondeFiltro) ? 'block' : 'none';
    });
}

// Funcionalidades do Carrinho
function inicializarCarrinho() {
    elementos.cartToggle.addEventListener('click', toggleCarrinho);
    elementos.closeCart.addEventListener('click', toggleCarrinho);
    elementos.clearCart.addEventListener('click', limparCarrinho);
    elementos.checkout.addEventListener('click', finalizarPedido);
    
    // Fechar modal clicando fora
    elementos.cartModal.addEventListener('click', function(e) {
        if (e.target === elementos.cartModal) {
            toggleCarrinho();
        }
    });
}

function toggleCarrinho() {
    elementos.cartModal.classList.toggle('active');
}

function adicionarAoCarrinho(produtoId) {
    const produto = encontrarProduto(produtoId);
    const quantidade = parseInt(document.getElementById(`qty-${produtoId}`).textContent);
    
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            ...produto,
            quantidade: quantidade
        });
    }
    
    atualizarCarrinho();
    mostrarFeedback('Produto adicionado ao carrinho!');
    resetarQuantidade(produtoId);
}

function alterarQuantidade(produtoId, delta) {
    const quantidadeElement = document.getElementById(`qty-${produtoId}`);
    let quantidade = parseInt(quantidadeElement.textContent);
    quantidade = Math.max(1, quantidade + delta);
    quantidadeElement.textContent = quantidade;
}

function resetarQuantidade(produtoId) {
    document.getElementById(`qty-${produtoId}`).textContent = '1';
}

function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    // Atualizar lista de itens
    elementos.cartItems.innerHTML = '';
    
    if (carrinho.length === 0) {
        elementos.cartItems.innerHTML = '<p style="text-align: center; color: #666;">Seu carrinho está vazio</p>';
    } else {
        carrinho.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.nome}</h4>
                    <p>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                </div>
                <div class="cart-item-price">
                    R$ ${(item.preco