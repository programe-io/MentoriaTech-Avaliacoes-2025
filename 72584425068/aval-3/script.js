const cart = document.getElementById('cart');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let total = 0;

openCartBtn.addEventListener('click', () => {
  cart.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
  cart.classList.remove('open');
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement;
    const name = card.querySelector('h3').innerText;
    const price = parseFloat(card.querySelector('span').dataset.price);

    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
      <span>${name} - R$ ${price.toFixed(2)}</span>
      <button class="remove">X</button>
    `;
    cartItemsContainer.appendChild(item);

    total += price;
    cartTotal.innerText = total.toFixed(2);

    item.querySelector('.remove').addEventListener('click', () => {
      cartItemsContainer.removeChild(item);
      total -= price;
      cartTotal.innerText = total.toFixed(2);
    });
  });
});
