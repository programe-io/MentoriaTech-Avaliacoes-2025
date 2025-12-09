// Array para armazenar os itens do carrinho
let cart = [];

// Elementos do DOM
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const checkoutButton = document.getElementById('checkout-button');
const emptyCartMessage = document.getElementById('empty-cart-message');

// Função para formatar o preço para BRL
const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// 1. Atualiza o Carrinho no DOM e o Total
const updateCart = () => {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutButton.disabled = true;
    } else {
        emptyCartMessage.style.display = 'none';
        checkoutButton.disabled = false;
    }

    cart.forEach((item, index) => {
        // Cálculo do total
        total += item.price * item.quantity;

        // Criação do elemento do item no carrinho
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} (${item.quantity}x)</span>
            <span>${formatPrice(item.price * item.quantity)}</span>
            <button data-index="${index}" class="remove-from-cart">Remover</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Atualiza o total e o contador
    cartTotalElement.textContent = formatPrice(total);
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
};

// 2. Adiciona um Produto ao Carrinho
const addToCart = (productId, name, price) => {
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
};

// 3. Remove um Produto do Carrinho
const removeFromCart = (itemIndex) => {
    if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
    } else {
        cart.splice(itemIndex, 1);
    }

    updateCart();
};

// 4. Finalizar Pedido (Simulação)
const checkout = () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const orderList = cart.map(item => `${item.name} (${item.quantity}x)`).join('\n');
    const total = cartTotalElement.textContent;

    alert(`✅ Pedido para Pedro B. Delivery Finalizado!\n\nItens:\n${orderList}\n\nTotal a pagar: ${total}\n\nObrigado, Pedro! O pedido será entregue em breve.`);
    
    // Limpa o carrinho após a finalização (simulação)
    cart = [];
    updateCart();
};

// --- Configuração dos Event Listeners ---

// Adiciona listener para os botões "Adicionar ao Carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const id = parseInt(card.dataset.id); 
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);
        
        addToCart(id, name, price);
    });
});

// Adiciona listener para os botões "Remover" no carrinho
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-from-cart')) {
        const index = parseInt(e.target.dataset.index);
        removeFromCart(index);
    }
});

// Adiciona listener para o botão "Finalizar Pedido"
checkoutButton.addEventListener('click', checkout);

// Chamada inicial
updateCart();