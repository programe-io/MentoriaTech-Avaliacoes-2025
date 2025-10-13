// Lista de produtos (id, nome, preço, imagem)
const produtos = [
  { id: 1, nome: "Camiseta", preco: 39.90, img: "https://via.placeholder.com/150?text=Camiseta" },
  { id: 2, nome: "Tênis", preco: 199.90, img: "https://via.placeholder.com/150?text=Tênis" },
  { id: 3, nome: "Boné", preco: 29.90, img: "https://via.placeholder.com/150?text=Boné" },
  { id: 4, nome: "Mochila", preco: 89.90, img: "https://via.placeholder.com/150?text=Mochila" }
];

let carrinho = [];

const produtosDiv = document.getElementById("produtos");
const listaCarrinho = document.getElementById("listaCarrinho");
const totalDiv = document.getElementById("total");

// Função para mostrar os produtos
function mostrarProdutos() {
  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}" />
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
    `;
    produtosDiv.appendChild(div);
  });
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  const itemNoCarrinho = carrinho.find(i => i.produto.id === id);

  if (itemNoCarrinho) {
    itemNoCarrinho.quantidade++;
  } else {
    carrinho.push({ produto, quantidade: 1 });
  }
  atualizarCarrinho();
}

// Atualizar carrinho na tela
function atualizarCarrinho() {
  listaCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.produto.nome} x ${item.quantidade}`;
    const precoItem = item.produto.preco * item.quantidade;
    total += precoItem;

    const precoSpan = document.createElement("span");
    precoSpan.textContent = `R$ ${precoItem.toFixed(2)}`;
    li.appendChild(precoSpan);
    listaCarrinho.appendChild(li);
  });

  totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
}

mostrarProdutos();
