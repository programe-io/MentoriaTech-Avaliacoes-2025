<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Loja JavaScript</title>
  <style>
    body{font-family:Arial;margin:0;padding:20px;background:#f5f5f5}
    h1{text-align:center}
    .produtos{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:20px}
    .card{background:#fff;padding:16px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.1)}
    .card img{width:100%;border-radius:8px;height:150px;object-fit:cover}
    .btn{margin-top:10px;width:100%;padding:10px;border:none;border-radius:8px;background:#0077ff;color:#fff;cursor:pointer}
    #carrinho{position:fixed;right:20px;top:20px;background:#fff;padding:20px;border-radius:10px;box-shadow:0 4px 12px rgba(0,0,0,0.1);width:260px}
    .item{display:flex;justify-content:space-between;margin-bottom:8px}
  </style>
</head>
<body>
  <h1>Loja com JavaScript</h1>

  <div class="produtos" id="listaProdutos"></div>

  <div id="carrinho">
    <h3>Carrinho</h3>
    <div id="itensCarrinho"></div>
    <strong>Total: R$ <span id="total">0,00</span></strong>
  </div>

<script>
  const produtos=[
    {id:1,nome:"Camiseta Azul",preco:79.90,img:"https://source.unsplash.com/400x400/?tshirt"},
    {id:2,nome:"Tênis Branco",preco:249.00,img:"https://source.unsplash.com/400x400/?shoes"},
    {id:3,nome:"Boné Preto",preco:49.90,img:"https://source.unsplash.com/400x400/?hat"},
  ];

  const lista=document.getElementById("listaProdutos");
  const itensCarrinho=document.getElementById("itensCarrinho");
  const totalEl=document.getElementById("total");
  let carrinho=[];

  function mostrarProdutos(){
    produtos.forEach(p=>{
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`
        <img src="${p.img}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco.toFixed(2)}</p>
        <button class="btn" onclick="adicionar(${p.id})">Adicionar</button>
      `;
      lista.appendChild(card);
    })
  }

  function adicionar(id){
    const produto=produtos.find(p=>p.id===id);
    carrinho.push(produto);
    atualizarCarrinho();
  }

  function atualizarCarrinho(){
    itensCarrinho.innerHTML="";
    let total=0;
    carrinho.forEach(item=>{
      total+=item.preco;
      const div=document.createElement("div");
      div.className="item";
      div.textContent=`${item.nome} - R$ ${item.preco.toFixed(2)}`;
      itensCarrinho.appendChild(div);
    });
    totalEl.textContent=total.toFixed(2);
  }

  mostrarProdutos();
</script>
</body>
</html>