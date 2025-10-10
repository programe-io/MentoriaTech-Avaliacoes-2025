const products = [
  {
    id: 1,
    title: 'Cheeseburger Clássico',
    desc: 'Hambúrguer artesanal, queijo cheddar, alface e molho especial.',
    price: 24.90,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 2,
    title: 'X-Bacon Supreme',
    desc: 'Pão brioche, carne suculenta, bacon crocante e queijo duplo.',
    price: 29.90,
    img: 'https://images.unsplash.com/photo-1565958011705-44e21199e8e2'
  },
  {
    id: 3,
    title: 'Batata Frita Grande',
    desc: 'Porção crocante de batata frita com sal temperado.',
    price: 12.00,
    img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90'
  },
  {
    id: 4,
    title: 'Milkshake de Chocolate',
    desc: 'Sorvete cremoso com calda de chocolate e chantilly.',
    price: 14.90,
    img: 'https://images.unsplash.com/photo-1617196036484-8e56b9e5a23e'
  },
  {
    id: 5,
    title: 'Wrap de Frango',
    desc: 'Wrap com frango grelhado, legumes e molho especial.',
    price: 18.90,
    img: 'https://images.unsplash.com/photo-1606756792952-43cd7c98d2f9'
  }
];

const cart = [];
const grid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const productModal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.getElementById('closeModal');
const addToCart = document.getElementById('addToCart');
let currentProduct = null;

function init() {
  renderProducts();
  document.getElementById('year').textContent = new Date().getFullYear();
}

function renderProducts() {
  grid.innerHTML = '';
  products.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src=\"${p.img}\" alt=\"${p.title}\">
      <div class=\"card-body\">
        <h5>${p.title}</h5>
        <p>${p.desc}</p>
      </div>
      <div class=\"card-actions\">
        <strong>R$ ${p.price.toFixed(2)}</strong>
        <button class=\"btn\" data-id=\"${p.id}\">Ver</button>
      </div>
    `;
    grid.appendChild(el);
  });

  document.querySelectorAll('.btn[data-id]').forEach(btn => {
    btn.addEventListener('click', () => openModal(+btn.dataset.id));
  });
}

function openModal(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  currentProduct = p;
  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = p.price.toFixed(2);
  productModal.classList.add('open');
}

closeModal.addEventListener('click', () => productModal.classList.remove('open'));

addToCart.addEventListener('click', () => {
  if (currentProduct) {
    const existing = cart.find(i => i.id === currentProduct.id);
    if (existing) existing.qty++;
    else cart.push({ ...currentProduct, qty: 1 });
    updateCart();
    productModal.classList.remove('open');
  }
});

cartBtn.addEventListener('click', () => cartDrawer.classList.add('open'));
closeCart.addEventListener('click', () => cartDrawer.classList.remove('open'));

function updateCart() {
  cartCount.textContent = cart.reduce((s, i) => s + i.qty, 0);
  cartItems.innerHTML = '';
  cart.forEach(i => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src=\"${i.img}\" alt=\"${i.title}\">
      <div style=\"flex:1\">
        <strong>${i.title}</strong><br>
        R$ ${i.price.toFixed(2)} x ${i.qty}
      </div>
      <div>
        <button onclick=\"changeQty(${i.id}, 'minus')\">-</button>
        <button onclick=\"changeQty(${i.id}, 'plus')\">+</button>
      </div>
    `;
    cartItems.appendChild(el);
  });
  cartTotal.textContent = cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2);
}

function changeQty(id, action) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  if (action === 'plus') item.qty++;
  else if (action === 'minus') item.qty--;
  if (item.qty <= 0) cart.splice(cart.indexOf(item), 1);
  updateCart();
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return alert('Carrinho vazio!');
  alert('Pedido finalizado! Total: R$ ' + cart.reduce((s, i) => s + i.price * i.qty, 0).toFixed(2));
  cart.length = 0;
  updateCart();
  cartDrawer.classList.remove('open');
});

init();
