// Variáveis de estado global
let cart = [];
const shippingFee = 25.00; // Taxa de envio fixa
// Elementos do DOM
const cartButton = document.querySelector('nav button');
const cartDisplay = document.querySelector('nav button span:first-child');
// Certifique-se de que a variável 'cartButton' está correta para o seu HTML.
// No seu HTML de Chuteira, o botão de carrinho é o único botão na nav, então o seletor está ok.


// --- Funções de Lógica de Negócios ---

/**
 * Adiciona uma chuteira ao carrinho e atualiza o display.
 * @param {string} name - Nome da chuteira.
 * @param {number} price - Preço da chuteira.
 */
function addToCart(name, price) {
    // Procura se o item já existe no carrinho para apenas aumentar a quantidade
    const item = cart.find(i => i.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCartDisplay();
    // Mensagem de feedback visual
    alert(`"${name}" adicionada ao carrinho!`);
}

/**
 * Calcula o subtotal e o total do carrinho.
 * @returns {{subtotal: number, total: number}}
 */
function calculateTotals() {
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    // Se o carrinho tem itens, adiciona o frete
    const total = subtotal + (subtotal > 0 ? shippingFee : 0);

    return { subtotal, total };
}

/**
 * Atualiza o número de itens exibidos no botão do carrinho no cabeçalho.
 */
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartDisplay.textContent = `Carrinho (${totalItems})`;

    // Ajusta o estilo do botão do carrinho
    if (totalItems > 0) {
        // Usa a cor verde-limão personalizada (primary)
        cartButton.classList.remove('bg-yellow-300');
        cartButton.classList.add('color-primary', 'text-gray-900'); 
    } else {
        // Volta para o amarelo quando está vazio
        cartButton.classList.add('bg-yellow-300');
        cartButton.classList.remove('color-primary', 'text-gray-900');
    }
}

/**
 * Simula a finalização do pedido.
 */
function simulateCheckout() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio. Adicione uma chuteira para finalizar a compra.");
        return;
    }

    const { subtotal, total } = calculateTotals();
    let receipt = "⚽ Resumo do Pedido - Chuteira Power:\n\n";

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        receipt += `* ${item.name} (${item.quantity}x) - R$ ${itemTotal.toFixed(2).replace('.', ',')}\n`;
    });

    receipt += `\n------------------------\n`;
    receipt += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    receipt += `Frete: R$ ${shippingFee.toFixed(2).replace('.', ',')}\n`;
    receipt += `Total Final: R$ ${total.toFixed(2).replace('.', ',')}\n`;
    receipt += `\n✅ Obrigado por comprar na Chuteira Power!`;

    alert(receipt);
    
    // Limpa o carrinho após a "compra" simulada
    cart = [];
    updateCartDisplay();
}

// --- Inicialização e Escopos ---

// Adiciona o evento de clique para o botão de carrinho (para abrir o resumo)
cartButton.addEventListener('click', simulateCheckout);

// Torna a função global para que o HTML possa chamá-la nos botões 'onclick'
window.addToCart = addToCart;

// Inicializa o display do carrinho
updateCartDisplay();