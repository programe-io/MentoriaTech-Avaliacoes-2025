// Carrinho de compras
let cart = [];
const cartToggle = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const totalEl = document.getElementById('total');
const checkoutBtn = document.querySelector('.checkout-btn');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se há itens no carrinho no localStorage
  const savedCart = localStorage.getItem('hamburgueriaCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCart();
  }
  
  // Configurar eventos
  setupEventListeners();
});

// Configurar todos os event listeners
function setupEventListeners() {
  // Alternar carrinho
  cartToggle.addEventListener('click', toggleCart);
  
  // Fechar carrinho
  closeCart.addEventListener('click', closeCartSidebar);
  overlay.addEventListener('click', closeCartSidebar);
  
  // Adicionar item ao carrinho
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addItemToCart);
  });
  
  // Adicionar bebida ao carrinho
  document.querySelectorAll('.add-drink-to-cart').forEach(button => {
    button.addEventListener('click', addDrinkToCart);
  });
  
  // Filtro de categorias
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', filterMenu);
  });
  
  // Formulário de contato
  document.getElementById('contact-form').addEventListener('submit', handleContactForm);
  
  // Finalizar pedido
  checkoutBtn.addEventListener('click', checkout);
  
  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });
}

// Alternar carrinho
function toggleCart() {
  cartSidebar.classList.add('active');
  overlay.classList.add('active');
}

// Fechar carrinho
function closeCartSidebar() {
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
}

// Adicionar item ao carrinho
function addItemToCart(event) {
  const button = event.target;
  const name = button.getAttribute('data-name');
  const price = parseFloat(button.getAttribute('data-price'));
  
  addToCart(name, price, button);
}

// Adicionar bebida ao carrinho
function addDrinkToCart(event) {
  const button = event.target;
  const select = button.parentElement.querySelector('.drink-size');
  const name = select.getAttribute('data-name');
  const sizeText = select.options[select.selectedIndex].text;
  const price = parseFloat(select.value);
  
  if (select.selectedIndex === 0) {
    alert('Por favor, selecione um tamanho');
    return;
  }
  
  addToCart(`${name} (${sizeText.split(' - ')[0]})`, price, button);
}

// Função para adicionar item ao carrinho
function addToCart(name, price, button) {
  cart.push({ name, price });
  updateCart();
  saveCartToStorage();
  
  // Feedback visual
  const originalText = button.textContent;
  button.textContent = 'Adicionado!';
  button.style.backgroundColor = '#4CAF50';
  
  setTimeout(() => {
    button.textContent = originalText;
    button.style.backgroundColor = '';
  }, 1000);
}

// Atualizar carrinho
function updateCart() {
  // Atualizar contador
  cartToggle.textContent = `Carrinho (${cart.length})