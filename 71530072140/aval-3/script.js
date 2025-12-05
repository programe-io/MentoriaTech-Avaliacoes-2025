let cart = [];
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = ''; // Limpa a lista atual
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
        total += item.price;
    });

    cartTotalElement.textContent = `R$ ${total.toFixed(2)}`;
}

function toggleCart() {
    // Função simples para mostrar/esconder o carrinho, útil para mobile
    const cartAside = document.getElementById('cart');
    cartAside.classList.toggle('cart-closed');
    alert("Funcionalidade de toggle em desenvolvimento. O carrinho está sempre visível na versão desktop.");
}

function checkout() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    alert(`Pedido finalizado! Total a pagar: ${cartTotalElement.textContent}. Obrigado pela preferência!`);
    cart = []; // Esvazia o carrinho após o checkout
    updateCart();
}
