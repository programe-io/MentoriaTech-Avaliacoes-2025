let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById('cartCount').textContent = cart.length;
  alert(`${name} adicionado ao carrinho!`);
}

document.getElementById('cartButton').addEventListener('click', toggleCart);

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.classList.toggle('hidden');
  updateCart();
}

function updateCart() {
  const list = document.getElementById('cartItems');
  const total = document.getElementById('cartTotal');
  list.innerHTML = '';
  let sum = 0;
  cart.forEach(item => {
    sum += item.price;
    const li = document.createElement('li');
    li.classList.add('flex', 'justify-between');
    li.innerHTML = `<span>${item.name}</span><span>R$ ${item.price.toFixed(2)}</span>`;
    list.appendChild(li);
  });
  total.textContent = sum.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Pedido finalizado com sucesso! 🥟");
  cart = [];
  updateCart();
  document.getElementById('cartCount').textContent = 0;
  toggleCart();
}
