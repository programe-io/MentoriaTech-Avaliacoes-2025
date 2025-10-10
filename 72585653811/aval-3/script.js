// Exemplo simples de funcionalidade
console.log("Site de hambúrgueres carregado com sucesso!");
const menu = [
  {
    id: 1,
    nome: "Cheese Burger",
    preco: 18.90,
    imagem: "https://images.unsplash.com/photo-1606755962773-0ff72fdd53b9"
  },
  {
    id: 2,
    nome: "Duplo Bacon",
    preco: 22.50,
    imagem: "https://images.unsplash.com/photo-1612198730848-9b5cbe9a4510"
  },
  {
    id: 3,
    nome: "Veggie Burger",
    preco: 17.00,
    imagem: "https://images.unsplash.com/photo-1610401516264-2032b1df0a36"
  }
];

let carrinho = [];

function renderMenu() {
  const container = document.getElementById('menu-items');
  menu.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('item');
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <h3>${item.nome}</h3>
      <p>R$ ${item.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${item.id})">Adicionar</button>
    `;
    container.appendChild(card);
  });
}

function adicionarAoCarrinho(id) {
  const item = menu.find(p => p.id === id);
  carrinho.push(item);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const cartContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const total = document.getElementById('total');
  
  cartContainer.innerHTML = '';
  let valorTotal = 0;

  carrinho.forEach((item, index) => {
    const div = document.createElement('div');
    div.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerItem(${index})">Remover</button>`;
    cartContainer.appendChild(div);
    valorTotal += item.preco;
  });

  total.textContent = valorTotal.toFixed(2);
  cartCount.textContent = carrinho.length;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Pedido finalizado! Obrigado por comprar conosco 😄");
  carrinho = [];
  atualizarCarrinho();
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});
