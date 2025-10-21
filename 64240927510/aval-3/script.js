// Dados do cardápio
const menu = [
  { id:1, title:'Frango assado com batata', category:'principais', price:28.5, desc:'Frango temperado, assado lentamente. Acompanha batatas.', img:'https://images.unsplash.com/photo-1604909053333-6a8b6d6b0e1b?q=80&w=900&auto=format&fit=crop' },
  { id:2, title:'Lasagna da casa', category:'principais', price:32.0, desc:'Camadas de massa, molho e queijo.', img:'https://images.unsplash.com/photo-1604908554033-6a8b6d6b0e1b?q=80&w=900&auto=format&fit=crop' },
  { id:3, title:'Arroz à grega', category:'acompanhamentos', price:10.0, desc:'Arroz colorido com legumes.', img:'https://images.unsplash.com/photo-1608743811779-9c8b6d6b0e1b?q=80&w=900&auto=format&fit=crop' },
  { id:4, title:'Pudim de leite', category:'sobremesas', price:12.0, desc:'Pudim cremoso tradicional.', img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=900&auto=format&fit=crop' },
  { id:5, title:'Suco natural', category:'bebidas', price:6.5, desc:'Suco do dia feito com frutas frescas.', img:'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop' }
];

let cart = [];

const menuGrid = document.getElementById('menu-grid');
const template = document.getElementById('menu-template');
const category = document.getElementById('category');
const search = document.getElementById('search');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function formatPrice(v){ return v.toFixed(2).replace('.', ','); }

function renderMenu(list){
  menuGrid.innerHTML = '';
  list.forEach(item => {
    const node = template.content.cloneNode(true);
    node.querySelector('img').src = item.img;
    node.querySelector('img').alt = item.title;
    node.querySelector('h5').textContent = item.title;
    node.querySelector('p').textContent = item.desc;
    node.querySelector('.font-semibold').textContent = 'R$ ' + formatPrice(item.price);
    node.querySelector('.add-btn').addEventListener('click', () => addToCart(item));
    menuGrid.appendChild(node);
  });
}

function addToCart(item){
  const found = cart.find(i => i.id === item.id);
  if(found) found.qty++;
  else cart.push({...item, qty:1});
  updateCartUI();
}

function updateCartUI(){
  const totalQty = cart.reduce((s,i)=>s+i.qty,0);
  cartCount.textContent = totalQty;
  cartItems.innerHTML = '';
  if(cart.length === 0){
    cartItems.innerHTML = '<p class="text-gray-500">Carrinho vazio</p>';
    cartTotal.textContent = '0,00';
    return;
  }
  cart.forEach(it => {
    const div = document.createElement('div');
    div.className = 'flex items-center justify-between gap-3 border-b pb-2';
    div.innerHTML = `
      <div class="flex items-center gap-3">
        <img src="${it.img}" class="w-12 h-12 object-cover rounded" />
        <div>
          <div class="font-semibold">${it.title}</div>
          <div class="text-sm text-gray-500">R$ ${formatPrice(it.price)}</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button data-id="${it.id}" class="decrease px-2">-</button>
        <div>${it.qty}</div>
        <button data-id="${it.id}" class="increase px-2">+</button>
      </div>`;
    cartItems.appendChild(div);
  });
  cartItems.querySelectorAll('.decrease').forEach(b=>b.addEventListener('click', e=>changeQty(e.target.dataset.id, -1)));
  cartItems.querySelectorAll('.increase').forEach(b=>b.addEventListener('click', e=>changeQty(e.target.dataset.id, +1)));
  const total = cart.reduce((s,i)=>s + i.price * i.qty, 0);
  cartTotal.textContent = formatPrice(total);
}

function changeQty(id, delta){
  const idx = cart.findIndex(i => i.id === Number(id));
  if(idx === -1) return;
  cart[idx].qty += delta;
  if(cart[idx].qty <= 0) cart.splice(idx,1);
  updateCartUI();
}

function applyFilters(){
  const cat = category.value;
  const q = search.value.trim().toLowerCase();
  let filtered = menu.filter(m => (cat === 'all' || m.category === cat));
  if(q) filtered = filtered.filter(m => m.title.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q));
  renderMenu(filtered);
}

// Eventos
document.getElementById('mobile-btn').addEventListener('click', ()=> document.getElementById('mobile-menu').classList.toggle('hidden'));
document.getElementById('open-cart').addEventListener('click', ()=>{ cartModal.classList.remove('hidden'); cartModal.classList.add('flex'); });
document.getElementById('close-cart').addEventListener('click', ()=>{ cartModal.classList.add('hidden'); cartModal.classList.remove('flex'); });
document.getElementById('clear-cart').addEventListener('click', ()=>{ cart = []; updateCartUI(); });
document.getElementById('checkout').addEventListener('click', ()=>{
  if(cart.length === 0){ alert('Seu carrinho está vazio!'); return; }
  alert('Pedido realizado! (demo)');
  cart = [];
  updateCartUI();
  cartModal.classList.add('hidden');
  cartModal.classList.remove('flex');
});

category.addEventListener('change', applyFilters);
search.addEventListener('input', applyFilters);
document.getElementById('ver-cardapio').addEventListener('click', ()=> window.scrollTo({ top: document.querySelector('#menu-grid').offsetTop - 60, behavior: 'smooth' }));
document.getElementById('ver-sobre').addEventListener('click', ()=> window.scrollTo({ top: document.querySelector('#about').offsetTop - 60, behavior: 'smooth' }));

renderMenu(menu);
updateCartUI();
