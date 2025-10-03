const products = [
  {
    id: 1,
    name: "Sombras na Floresta",
    price: 49.90,
    image: "https://via.placeholder.com/200x280?text=Sombras+na+Florest"
  },
  {
    id: 2,
    name: "O Sussurro da Meia-Noite",
    price: 59.90,
    image: "https://via.placeholder.com/200x280?text=Sussurro+da+Meia-Noite"
  },
  {
    id: 3,
    name: "Maldição dos Corvos",
    price: 39.90,
    image: "https://via.placeholder.com/200x280?text=Maldição+dos+Corvos"
  },
  {
    id: 4,
    name: "A Casa Abandonada",
    price: 54.90,
    image: "https://via.placeholder.com/200x280?text=Casa+Abandonada"
  }
];

const cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>R$ ${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    `;

    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalPrice = document.getElementById("total-price");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  totalPrice.textContent = total.toFixed(2);
}

renderProducts();
