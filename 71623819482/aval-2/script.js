/**
 * script.js
 * Adiciona interatividade básica à página da Farmácia Bem-Estar.
 * Funções principais:
 * 1. Gerenciar a contagem de itens no carrinho.
 * 2. Exibir um modal de feedback ao adicionar um item.
 */

// Estado do Carrinho (simulado)
let carrinhoCount = 0;

// Referências aos elementos DOM
const cartCountElement = document.getElementById('cart-count');
const cartButton = document.getElementById('cart-button');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const modalOverlay = document.getElementById('feedback-modal-overlay');
const modalMessage = document.getElementById('modal-message');

/**
 * Função para atualizar o número de itens exibido no carrinho.
 */
function updateCartCount() {
    if (cartCountElement) {
        cartCountElement.textContent = carrinhoCount;
        // Torna o contador visível apenas se houver itens
        cartCountElement.style.display = carrinhoCount > 0 ? 'inline-flex' : 'none';
    }
}

/**
 * Função para exibir o modal de feedback.
 * @param {string} message - A mensagem a ser exibida.
 */
function showFeedbackModal(message) {
    if (modalOverlay && modalMessage) {
        modalMessage.textContent = message;
        modalOverlay.classList.remove('hidden');
        modalOverlay.classList.add('flex');
        
        // Esconde o modal automaticamente após 2 segundos
        setTimeout(() => {
            modalOverlay.classList.remove('flex');
            modalOverlay.classList.add('hidden');
        }, 2000);
    }
}

/**
 * Lida com a lógica de adicionar um produto ao carrinho.
 * @param {Event} event - O evento de clique.
 */
function handleAddToCart(event) {
    // Encontra o título do produto para a mensagem de feedback
    const productCard = event.target.closest('.product-card');
    const productName = productCard ? productCard.querySelector('.product-title').textContent : 'Item';

    // 1. Atualiza o estado
    carrinhoCount++;
    
    // 2. Atualiza a interface
    updateCartCount();
    
    // 3. Exibe feedback
    showFeedbackModal(`${productName} adicionado ao carrinho!`);

    // Adiciona uma animação temporária ao ícone do carrinho
    cartButton.classList.add('animate-pop'); 
    setTimeout(() => {
        cartButton.classList.remove('animate-pop');
    }, 300);
}

// -------------------------------------------
// Inicialização
// -------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa a contagem do carrinho
    updateCartCount();

    // 2. Adiciona listeners de clique aos botões de 'Adicionar ao Carrinho'
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });
});

// Nota: Para que este script funcione, o HTML precisa ter elementos com os IDs e classes correspondentes:
// - #cart-count (o contador de itens)
// - #cart-button (o botão/ícone do carrinho)
// - .add-to-cart-btn (os botões de adicionar produto)
// - #feedback-modal-overlay e #modal-message (para o modal de feedback)