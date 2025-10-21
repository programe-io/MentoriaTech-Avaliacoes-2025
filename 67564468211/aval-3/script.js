// ===============================
// Loja de Tênis - Sneakery JS
// ===============================

const produtos = [
  {
    id: 1,
    nome: "Nike Air Red",
    preco: 499.90,
    imagem: "https://images.unsplash.com/photo-1606813902791-9af0e4b3f4b8?w=1000&q=80"
  }
];

let carrinho = [];

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  carrinho.push(produto);
  atualizarCarrinho();
  alert(`${produto.nome} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalEl = document.getElementById('total');

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

    const btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.style.marginLeft = "10px";
    btn.onclick = () => removerDoCarrinho(index);

    li.appendChild(btn);
    lista.appendChild(li);
    total += item.preco;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

window.onload = () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  atualizarCarrinho();
};
