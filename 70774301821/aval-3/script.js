/* ----------------------  JAVASCRIPT  ---------------------- */

const products = [
  {
    id: 1,
    name: "Camisa Treino Pro",
    price: 129.90,
    img: "https://images.pexels.com/photos/5886048/pexels-photo-5886048.jpeg"
  },
  {
    id: 2,
    name: "Jaqueta Warm-Up Elite",
    price: 249.90,
    img: "https://images.pexels.com/photos/6311571/pexels-photo-6311571.jpeg"
  },
  {
    id: 3,
    name: "Chuteira Street Control",
    price: 359.90,
    img: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg"
  },
  {
    id: 4,
    name: "Moletom Pós-Jogo",
    price: 199.90,
    img: "https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg"
  },
  {
    id: 5,
    name: "Shorts Drible Rápido",
    price: 89.90,
    img: "https://images.pexels.com/photos/9361093/pexels-photo-9361093.jpeg"
  },
  {
    id: 6,
    name: "Meião Profissional",
    price: 39.90,
    img: "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg"
  }
];

let cart = [];

/* Renderizar produtos */
const grid = document.getElementById("productsGrid");

products.forEach(p => {
  grid.innerHTML += `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>R$ ${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Adicionar ao Carrinho</button>
    </div>
  `;
});

/* Carrinho */
function toggleCart() {
  let box = document.getElementById("cartBox");
  box.style.right = box.style.right === "0px" ? "-350px" : "0px";
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;

  let cartHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    cartHTML += `
      <div class="cart-item">
        ${item.name} — R$ ${item.price.toFixed(2)}
        <br>
        <button onclick="removeItem(${i})">Remover</button>
      </div>
    `;
  });

  document.getElementById("cartItems").innerHTML = cartHTML;
  document.getElementById("cartTotal").innerText = total.toFixed(2);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}
