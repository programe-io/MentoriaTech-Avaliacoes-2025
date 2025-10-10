const products = [
  {
    id: 1,
    name: "Burger Clássico",
    price: 22.90,
    image: "https://via.placeholder.com/300x200?text=Burger1"
  },
  {
    id: 2,
    name: "Burger com Bacon",
    price: 28.50,
    image: "https://via.placeholder.com/300x200?text=Burger2"
  },
  {
    id: 3,
    name: "Combo • Fritas + Burger",
    price: 35.00,
    image: "https://via.placeholder.com/300x200?text=Combo"
  }
];

const cart = [];

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  products.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>R$ ${prod.price.toFixed(2)}</p>
      <button onclick="addToCart(${prod.id})">Adicionar ao Carrinho</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const prod = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").innerText = count;

  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.qty} × ${item.name} — R$ ${(item.qty * item.price).toFixed(2)}`;
    list.appendChild(li);
    total += item.qty * item.price;
  });

  document.getElementById("cart-total").innerText = total.toFixed(2);
}

function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("hidden");
}

function finalizePurchase() {
  if (cart.length === 0) {
    alert("Carrinho vazio!");
    return;
  }
  alert("Compra finalizada com sucesso!");
  cart.length = 0;
  updateCartUI();
  toggleCart();
}

// Inicializa
renderProducts();
