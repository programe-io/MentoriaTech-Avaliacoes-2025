// Dados dos produtos (incluindo URL de placeholder para imagens)
const products = [
    { id: 1, name: "Super Burger Clássico", description: "Pão, carne 150g, queijo, alface, tomate e maionese especial.", price: 29.90, image: "https://via.placeholder.com/300x150?text=Super+Burger" },
    { id: 2, name: "Pizza Calabresa Familiar", description: "Massa fininha, molho, muita calabresa e cebola. Serve 4 pessoas.", price: 55.00, image: "https://via.placeholder.com/300x150?text=Pizza+Calabresa" },
    { id: 3, name: "Refrigerante 2 Litros", description: "Coca-Cola Original gelada.", price: 10.50, image: "https://via.placeholder.com/300x150?text=Refrigerante" },
    { id: 4, name: "Açai Turbinado", description: "Açai 500ml, granola, banana e leite em pó.", price: 18.00, image: "https://via.placeholder.com/300x150?text=Acai" }
];

// Estado do Carrinho
let cart = [];

// Elementos do DOM
const menuContainer = document.getElementById('menu-container');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalValue = document.getElementById('cart-total-value');
const checkoutBtn = document.getElementById('checkout-btn');

/**
 * Formata o preço para BRL.
 */
const formatPrice = (price) => {
    return parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

/**
 * 1. Renderiza os cartões de produtos na página.
 */
const renderProducts = () => {
    const productList = document.createElement('div');
    productList.className = 'product-list';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${formatPrice(product.price)}</span>
            <button class="add-to-cart-btn" data-id="${product.id}">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(card);
    });

    menuContainer.appendChild(productList);
};

/**
 * 2. Adiciona ou incrementa um item no carrinho.
 */
const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    renderCart();
};

/**
 * 3. Remove ou decrementa um item do carrinho.
 */
const removeFromCart = (productId) => {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        const item = cart[itemIndex];
        if (item.quantity > 1) {
            item.quantity -= 1; 
        } else {
            cart.splice(itemIndex, 1);
        }
    }

    renderCart();
};

/**
 * 4. Renderiza o conteúdo do carrinho (itens e total).
 */
const renderCart = () => {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">O carrinho está vazio.</p>';
        cartTotalValue.textContent = formatPrice(0);
        return;
    }

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name} (x${item.quantity})</span>
                <span class="cart-item-price">${formatPrice(itemTotal)}</span>
            </div>
            <button class="remove-item-btn" data-id="${item.id}" aria-label="Remover item">&times;</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    cartTotalValue.textContent = formatPrice(total);
};

/**
 * 5. Gerencia os eventos de clique.
 */
const setupEventListeners = () => {
    // Adicionar ao carrinho
    menuContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        }
    });

    // Remover do carrinho
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item-btn')) {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        }
    });

    // Evento de checkout simulado
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Seu carrinho está vazio. Adicione itens antes de finalizar.");
            return;
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        let orderSummary = "✅ Pedido Finalizado com Sucesso!\n";
        orderSummary += "--------------------------------------\n";
        cart.forEach(item => {
            orderSummary += `- ${item.name} x${item.quantity}\n`;
        });
        orderSummary += `\nTotal a Pagar: ${formatPrice(total)}`;

        alert(orderSummary);
        
        // Limpar o carrinho
        cart = [];
        renderCart();
    });
};

// Inicializa a aplicação
const init = () => {
    renderProducts();
    renderCart(); 
    setupEventListeners();
};

init();