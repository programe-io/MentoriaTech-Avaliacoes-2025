// fastfood_script.js — Interações para Burguer Flash (carrinho simples)

// Atualizar ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Estado do carrinho
const cart = { items: [] };

// Helpers
function formatMoney(n){return Number(n).toFixed(2).replace('.',',');}
function updateCartCount(){document.getElementById('cartCount').textContent = cart.items.reduce((s,i)=>s+i.qt,0);} 

// Adicionar produtos
document.querySelectorAll('.product .add').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const card = btn.closest('.product');
    const id = card.dataset.id; const name = card.dataset.name; const price = Number(card.dataset.price);
    const existing = cart.items.find(i=>i.id===id);
    if(existing) existing.qt += 1; else cart.items.push({id,name,price,qt:1});
    updateCartCount();
    showTempMessage(`${name} adicionado ao carrinho`);
  });
});

// Abrir modal do carrinho
const cartModal = document.getElementById('cartModal');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

function renderCart(){
  cartItemsEl.innerHTML='';
  let total = 0;
  cart.items.forEach(it=>{
    const row = document.createElement('div'); row.className='cart-item';
    row.innerHTML = `<div>${it.name} x ${it.qt}</div><div>R$ ${formatMoney(it.price*it.qt)}</div>`;
    cartItemsEl.appendChild(row);
    total += it.price*it.qt;
  });
  cartTotalEl.textContent = formatMoney(total);
}

document.getElementById('cartBtn').addEventListener('click', ()=>{
  renderCart(); cartModal.setAttribute('aria-hidden','false');
});

// Fechar modal
document.getElementById('closeCart').addEventListener('click', ()=>{cartModal.setAttribute('aria-hidden','true');});

// Checkout (simples)
document.getElementById('checkout').addEventListener('click', ()=>{
  if(cart.items.length===0){showTempMessage('Seu carrinho está vazio'); return;}
  cart.items = []; updateCartCount(); renderCart(); cartModal.setAttribute('aria-hidden','true');
  showTempMessage('Pedido realizado! Entraremos em contato.');
});

// Botão pedir agora faz scroll para menu
const orderNow = document.getElementById('orderNow');
if(orderNow) orderNow.addEventListener('click', ()=>{document.getElementById('menu').scrollIntoView({behavior:'smooth'});});

// Mensagens temporárias no topo
let msgTimeout;
function showTempMessage(text,duration=2000){
  clearTimeout(msgTimeout);
  let msg = document.getElementById('fastMsg');
  if(!msg){msg = document.createElement('div');msg.id='fastMsg';msg.style.cssText='position:fixed;top:18px;left:50%;transform:translateX(-50%);background:#111827;color:#fff;padding:10px 14px;border-radius:10px;z-index:9999';document.body.appendChild(msg);} 
  msg.textContent = text; msg.style.display='block';
  msgTimeout = setTimeout(()=>{msg.style.display='none';},duration);
}

// Fechar modal ao clicar fora do cartão
cartModal.addEventListener('click', (e)=>{ if(e.target===cartModal) cartModal.setAttribute('aria-hidden','true'); });

// Fallback acessível: sem JS o site mostra menu e informações sem interações
