<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Loja com JavaScript</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
    header { background: #333; color: #fff; padding: 20px; text-align: center; }
    .produtos { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 20px; }
    .produto { background: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); text-align: center; }
    .produto img { width: 100%; border-radius: 10px; }
    button { padding: 10px 15px; border: none; background: #333; color: #fff; border-radius: 6px; cursor: pointer; }
    button:hover { background: #555; }
    #carrinho { background: #fff; padding: 20px; margin: 20px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    .item-carrinho { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #ddd; }
  </style>
</head>
<body>
  <header>
    <h1>Loja JavaScript</h1>
  </header>

  <section class="produtos" id="lista-produtos"></section>

  <section id="carrinho">
    <h2>Carrinho</h2>
    <div id="itens-carrinho"></div>
    <h3>Total: R$ <span id="total">0,00</span></h3>
  </section>

<script>
  const produtos = [
    { id: 1, nome: "Smartphone X", preco: 1999.90, img: "https://via.placeholder.com/250" },
    { id: 2, nome: "Fone de Ouvido Pro", preco: 299.99, img: "https://via.placeholder.com/250" },
    { id: 3, nome: "Notebook Ultra", preco: 4599.00, img: "https://via.placeholder.com/250" }
  ];

  const carrinho = [];

  function renderProdutos() {
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";

    produtos.forEach(p => {
      lista.innerHTML += `
        <div class="produto">
          <img src="${p.img}" alt="${p.nome}" />
          <h3>${p.nome}</h3>
          <p>R$ ${p.preco.toFixed(2)}</p>
          <button onclick="adicionarCarrinho(${p.id})">Adicionar</button>
        </div>`;
    });
  }

  function adicionarCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    renderCarrinho();
  }

  function renderCarrinho() {
    const itens = document.getElementById("itens-carrinho");
    const total = document.getElementById("total");
    itens.innerHTML = "";

    let soma = 0;
    carrinho.forEach((item, index) => {
      soma += item.preco;
      itens.innerHTML += `
        <div class="item-carrinho">
          <span>${item.nome}</span>
          <span>R$ ${item.preco.toFixed(2)}</span>
        </div>`;
    });

    total.textContent = soma.toFixed(2);
  }

  renderProdutos();
</script>
</body>
</html>