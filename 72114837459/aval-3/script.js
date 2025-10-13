const produtos = [
  {
    nome: "X-Burguer",
    preco: 15.99,
    imagem: "https://via.placeholder.com/200x150?text=X-Burguer"
  },
  {
    nome: "X-Salada",
    preco: 17.99,
    imagem: "https://via.placeholder.com/200x150?text=X-Salada"
  },
  {
    nome: "X-Bacon",
    preco: 19.99,
    imagem: "https://via.placeholder.com/200x150?text=X-Bacon"
  },
  {
    nome: "Batata Frita",
    preco: 9.99,
    imagem: "https://via.placeholder.com/200x150?text=Batata+Frita"
  },
  {
    nome: "Refrigerante",
    preco: 5.00,
    imagem: "https://via.placeholder.com/200x150?text=Refrigerante"
  }
];

const carrinho = [];
const produtosContainer = document.getElementById("produtos");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalSpan = document.getElementById("total");
const contador = document.getElementById("contador");

function renderizarProdutos() {
  produtos.forEach((produto, index) => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${index})">Adicionar ao carrinho</button>
    `;
    produtosContainer.appendChild(div);
  });
}

function adicionarAoCarrinho(index) {
  carrinho.push(produtos[index]);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  itensCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    itensCarrinho.appendChild(li);
    total += item.preco;
  });

  totalSpan.textContent = total.toFixed(2);
  contador.textContent = carrinho.length;
}

function toggleCarrinho() {
  document.getElementById("carrinho").classList.toggle("aberto");
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  alert("Compra finalizada com sucesso!");
  carrinho.length = 0;
  atualizarCarrinho();
  toggleCarrinho();
}

renderizarProdutos();
