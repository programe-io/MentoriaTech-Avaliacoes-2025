// carrinho simples
const cartBtn = document.getElementById('cartBtn');
const cart = document.getElementById('cart');
const closeCart = document.getElementById('closeCart');
const addBtns = Array.from(document.querySelectorAll('.add'));
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const checkout = document.getElementById('checkout');
const clearCart = document.getElementById('clearCart');
let items = [];


function formatPrice(v){return Number(v).toFixed(2).replace('.',',')}


function updateCartUI(){
cartList.innerHTML = '';
let total = 0;
items.forEach((it, i)=>{
const li = document.createElement('li');
li.textContent = `${it.name} - R$ ${formatPrice(it.price)}`;
cartList.appendChild(li);
total += Number(it.price);
});
cartTotal.textContent = formatPrice(total);
cartBtn.textContent = `Carrinho (${items.length})`;
}


addBtns.forEach(btn=>{
btn.addEventListener('click', ()=>{
const card = btn.closest('.card');
const id = card.dataset.id;
const name = card.dataset.name;
const price = card.dataset.price;
items.push({id,name,price});
updateCartUI();
});
});


cartBtn.addEventListener('click', ()=> cart.classList.toggle('open'));
closeCart.addEventListener('click', ()=> cart.classList.remove('open'));
clearCart.addEventListener('click', ()=>{ items=[]; updateCartUI(); });
checkout.addEventListener('click', ()=>{ if(items.length===0){ alert('Carrinho vazio'); return } alert('Pedido realizado. Obrigado!'); items=[]; updateCartUI(); cart.classList.remove('open'); });


// formulário de contato (simulado)
const sendContact = document.getElementById('sendContact');
const formStatus = document.getElementById('formStatus');
sendContact.addEventListener('click', ()=>{
const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('email').value.trim();
if(!nome || !email){ formStatus.textContent = 'Preencha nome e e-mail.'; return }
formStatus.textContent = 'Mensagem enviada. Obrigado!';
setTimeout(()=> formStatus.textContent = '', 3000);
});