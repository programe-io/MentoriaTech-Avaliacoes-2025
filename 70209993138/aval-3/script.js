// Catálogo de exemplo
const products = [
  { id: 'p1', name: 'Camiseta Básica', price: 49.90, color: '#ef4444', desc:'Camiseta de algodão, confortável e versátil.' },
  { id: 'p2', name: 'Caneca Estampada', price: 29.50, color: '#0ea5a4', desc:'Caneca 350ml, perfeita para cafés e chás.' },
  { id: 'p3', name: 'Mochila Urbana', price: 199.00, color: '#7c3aed', desc:'Mochila com bolsos organizadores e reforço nas alças.' },
  { id: 'p4', name: 'Fone de Ouvido', price: 129.90, color: '#f59e0b', desc:'Fone com boa qualidade de som e microfone embutido.' },
  { id: 'p5', name: 'Caderno Premium', price: 39.00, color: '#06b6d4', desc:'Caderno A5 com capa dura e papel de alta gramatura.' },
  { id: 'p6', name: 'Carteira Minimal', price: 89.90, color: '#10b981', desc:'Carteira compacta em material sintético resistente.' }
];

// Estado do carrinho
let cart = loadCart();

// Elementos
const productsEl = document.getElementById('products');
const cartButton = document.getElementById('cart-button');
const cartEl = document.getElementById('cart');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const closeCartBtn = document.getElementById('close-cart');
const clearCartBtn = document.getElementById('clear-cart');
const checkoutBtn = document.getElementById('checkout');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');

// Inicializa
document.getElementById('year').textContent = new Date().getFullYear();
renderProducts(products);
renderCart();

// Eventos
cartButton.addEventListener('click', () => openCart());
cartBackdrop.addEventListener('click', () => closeCart());
closeCartBtn.addEventListener('click', () => closeCart());
clearCartBtn.addEventListener('click', () => { cart = {}; saveCart(); renderCart(); });
checkoutBtn.addEventListener('click', () => { if(Object.keys(cart).length===0){ alert('Seu carrinho está vazio.'); return; } alert('Obrigado pela compra! (Funcionalidade de pagamento não implementada)'); cart = {}; saveCart(); renderCart(); closeCart(); });

searchInput.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  renderProducts(filtered);
});

sortSelect.addEventListener('change', (e) => {
  let sorted = [...products];
  if(e.target.value === 'price-asc') sorted.sort((a,b)=>a.price-b.price);
  else if(e.target.value === 'price-desc') sorted.sort((a,b)=>b.price-a.price);
  else if(e.target.value === 'name') sorted.sort((a,b)=>a.name.localeCompare(b.name));
  renderProducts(sorted);
});

// Funções de render
function renderProducts(list){
  productsEl.innerHTML = '';
  if(list.length === 0){ productsEl.innerHTML = '<p>Nenhum produto encontrado.</p>'; return; }
  list.forEach(p => {
    const card = document.createElement('article');
    card.className = 'product';
    card.innerHTML = `
      <div class="img" style="background:${p.color};">${p.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="meta">
        <div class="price">R$ ${p.price.toFixed(2)}</div>
        <div>
          <button class="btn btn-primary" data-id="${p.id}">Adicionar</button>
        </div>
      </div>
    `;
    productsEl.appendChild(card);
  });
  // Delegação de evento para os botões "Adicionar"
  productsEl.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
}

function renderCart(){
  cartItemsEl.innerHTML = '';
  const ids = Object.keys(cart);
  if(ids.length === 0){ cartItemsEl.innerHTML = '<p>Seu carrinho está vazio.</p>'; updateCartCount(); updateCartTotal(); return; }
  ids.forEach(id => {
    const qty = cart[id];
    const p = products.find(x=>x.id===id);
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <div class="thumb" style="background:${p.color};">${p.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div style="flex:1">
        <div style="font-weight:700">${p.name}</div>
        <div style="color:#555">R$ ${p.price.toFixed(2)} x ${qty} = R$ ${(p.price*qty).toFixed(2)}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:.25rem;align-items:flex-end">
        <button class="btn btn-outline" data-action="inc" data-id="${id}">+</button>
        <button class="btn btn-outline" data-action="dec" data-id="${id}">-</button>
        <button class="btn btn-danger" data-action="rm" data-id="${id}">Remover</button>
      </div>
    `;
    cartItemsEl.appendChild(item);
  });
  // Eventos dos controles do carrinho
  cartItemsEl.querySelectorAll('button[data-action]').forEach(b => {
    const id = b.dataset.id;
    const action = b.dataset.action;
    b.addEventListener('click', () => {
      if(action === 'inc'){ cart[id] = (cart[id]||0)+1; }
      else if(action === 'dec'){ cart[id] = Math.max(0,(cart[id]||0)-1); if(cart[id]===0) delete cart[id]; }
      else if(action === 'rm'){ delete cart[id]; }
      saveCart(); renderCart();
    });
  });
  updateCartCount(); updateCartTotal();
}

function addToCart(id){
  cart[id] = (cart[id]||0) + 1;
  saveCart(); renderCart();
  openCart();
}

function updateCartCount(){
  const count = Object.values(cart).reduce((s,n)=>s+n,0);
  cartCountEl.textContent = count;
}

function updateCartTotal(){
  const total = Object.entries(cart).reduce((s,[id,qty]) => {
    const p = products.find(x=>x.id===id);
    return s + (p.price * qty);
  },0);
  cartTotalEl.textContent = total.toFixed(2);
}

function openCart(){ cartEl.classList.add('open'); cartBackdrop.hidden = false; }
function closeCart(){ cartEl.classList.remove('open'); cartBackdrop.hidden = true; }

function saveCart(){ try{ localStorage.setItem('loja_cart_v1', JSON.stringify(cart)); }catch(e){ console.warn('Não foi possível salvar o carrinho', e); } }
function loadCart(){ try{ const raw = localStorage.getItem('loja_cart_v1'); return raw ? JSON.parse(raw) : {}; }catch(e){ return {}; } }
