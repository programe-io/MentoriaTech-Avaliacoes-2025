// Mapeamento de produtos (mantendo os itens de música vintage)
const productMap = [
    { id: 0, name: 'Vinil Clássico - Jazz Vol. 1', price: 149.90 },
    { id: 1, name: 'Toca-Discos Retrô 3 Velocidades', price: 899.90 },
    { id: 2, name: 'Pacote Fitas Cassete Mix \'80', price: 79.90 }
];

const buyButtons = document.querySelectorAll('.add-to-cart-btn');
const priceElements = document.querySelectorAll('.product-price'); 
const navLinks = document.querySelectorAll('nav a[href^="#"]'); 
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const cartCountBadge = document.getElementById('cart-count-badge');
let cart = [];

function formatPrice(price) {
    return 'R$ ' + price.toFixed(2).replace('.', ',');
}

function updateCartCountBadge() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalItems;
     
    if (totalItems > 0) {
        cartCountBadge.classList.remove('hidden');
    } else {
        cartCountBadge.classList.add('hidden');
    }
}
 
// Função para scroll suave (mantida)
function setupSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
             
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
             
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}
 
function displayPrices() {
    priceElements.forEach(span => {
        const productId = parseInt(span.getAttribute('data-price-id'));
        const product = productMap.find(p => p.id === productId);
        if (product) {
            span.textContent = formatPrice(product.price);
        }
    });
}
 
function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-500 italic">Sua coleção está vazia.</p>';
        checkoutButton.disabled = true;
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex justify-between py-2 border-b border-gray-200';
            itemDiv.innerHTML = `
                <span>${item.name} (${item.quantity}x)</span>
                <span class="font-semibold">${formatPrice(item.price * item.quantity)}</span>
            `;
            cartItemsContainer.appendChild(itemDiv);
            total += item.price * item.quantity;
        });
        checkoutButton.disabled = false;
    }

    cartTotalElement.textContent = total.toFixed(2).replace('.', ',');
    updateCartCountBadge();
}

buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); 

        const productId = parseInt(button.getAttribute('data-product-id'));
        const product = productMap.find(p => p.id === productId);

        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
         
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartDisplay();
         
        // Feedback visual rápido (as cores mudam via CSS)
        const originalText = button.textContent;
        // Salva se o botão tinha a classe 'blink'
        const wasBlinking = button.classList.contains('blink');

        // Note que 'bg-green-500' é a cor de feedback de sucesso,
        // que contrasta bem com o tema natalino (verde no vermelho/dourado)
        button.textContent = 'Adicionado!';
        button.classList.add('bg-green-500'); 
        button.classList.remove('bg-yellow-700', 'hover:bg-yellow-800', 'blink');
         
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.add('bg-yellow-700', 'hover:bg-yellow-800');
            button.classList.remove('bg-green-500');

            // Restaura a animação 'blink' se ela existia
            if (wasBlinking) {
                button.classList.add('blink');
            }
        }, 1000);
    });
});

checkoutButton.addEventListener('click', () => {
    // Alerta é mantido com a mensagem Groove
    alert('Parabéns, seu Groove foi finalizado! Total: R$ ' + cartTotalElement.textContent);
    cart = [];
    updateCartDisplay();
});

// Inicializa as funcionalidades
setupSmoothScroll(); 
displayPrices(); 
updateCartDisplay();