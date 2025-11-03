// -------------------- MENU MOBILE --------------------
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// -------------------- CARRINHO --------------------
let cartItems = [];

const formatCurrency = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const updateCartCount = () => {
  const totalQuantity = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  document.getElementById("cart-count-desktop").textContent = totalQuantity;
  document.getElementById("cart-count-mobile").textContent = totalQuantity;

  const checkoutBtn = document.getElementById("checkout-button");
  const emptyMsg = document.getElementById("empty-cart-message");

  if (totalQuantity > 0) {
    checkoutBtn.disabled = false;
    emptyMsg.classList.add("hidden");
  } else {
    checkoutBtn.disabled = true;
    emptyMsg.classList.remove("hidden");
  }
};

const addToCart = (id, name, price) => {
  const existing = cartItems.find((item) => item.id === id);
  if (existing) existing.quantity++;
  else cartItems.push({ id, name, price, quantity: 1 });

  showMessage(`"${name}" adicionado ao carrinho.`);
  updateCartCount();
};

const renderCart = () => {
  const container = document.getElementById("cart-items-container");
  const totalEl = document.getElementById("cart-total");
  container.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const html = `
      <div class="flex items-center justify-between p-3 bg-gray-700 rounded-lg shadow-md">
        <div class="flex-1 min-w-0 pr-4">
          <h4 class="font-semibold text-white">${item.name}</h4>
          <p class="text-sm text-gray-400">
            ${formatCurrency(item.price)} x ${item.quantity}
          </p>
        </div>
        <div class="text-right">
          <span class="font-bold text-lg text-bautz-gold">${formatCurrency(subtotal)}</span>
          <button onclick="removeItem('${item.id}')" class="text-red-400 hover:text-red-500 ml-3 text-sm">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });

  totalEl.textContent = formatCurrency(total);
  updateCartCount();
};

const removeItem = (id) => {
  cartItems = cartItems.filter((i) => i.id !== id);
  renderCart();
};

const openCartModal = () => {
  renderCart();
  document.getElementById("cart-modal").classList.remove("hidden");
};

const closeCartModal = () => {
  document.getElementById("cart-modal").classList.add("hidden");
};

const checkout = () => {
  cartItems = [];
  showCheckoutMessage("Obrigado pela compra! Entraremos em contato em breve.");
  updateCartCount();
};

const showMessage = (msg) => {
  const n = document.createElement("div");
  n.className =
    "fixed top-20 right-4 p-4 rounded-xl shadow-lg bg-bautz-gold text-bautz-dark font-semibold z-[110] transition-opacity duration-300";
  n.textContent = msg;
  document.body.appendChild(n);
  setTimeout(() => {
    n.style.opacity = "0";
    setTimeout(() => n.remove(), 300);
  }, 3000);
};

const showCheckoutMessage = (msg) => {
  const modal = document.getElementById("cart-modal").querySelector(".cart-content");
  const success = document.createElement("div");
  success.className =
    "absolute inset-0 bg-gray-900/95 flex flex-col items-center justify-center p-8 text-center";
  success.innerHTML = `
    <i class="fas fa-check-circle text-6xl text-green-400 mb-4"></i>
    <h4 class="text-3xl font-bold text-white mb-2">Pedido Realizado!</h4>
    <p class="text-lg text-gray-300 mb-6">${msg}</p>
    <button onclick="closeCartModal()" class="py-2 px-6 bg-bautz-gold text-bautz-dark font-bold rounded-full hover:bg-yellow-300">
      Fechar
    </button>
  `;
  modal.appendChild(success);
  setTimeout(() => closeCartModal(), 5000);
};

window.onload = updateCartCount;