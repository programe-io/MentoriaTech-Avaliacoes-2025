<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Top Chuteiras - Loja de Futebol</title>

  <!-- ===== CSS (Estilos) ===== -->
  <style>
    /* ===== RESET E BASE ===== */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f8fafc;
      color: #222;
      line-height: 1.5;
    }

    /* ===== CABEÇALHO ===== */
    header {
      background: #111827;
      color: white;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    header h1 {
      font-size: 1.5rem;
      font-weight: 700;
    }

    header input {
      padding: 0.5rem;
      border-radius: 6px;
      border: none;
      outline: none;
      width: 200px;
    }

    header button {
      background: #2563eb;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      cursor: pointer;
    }

    header button:hover {
      background: #1d4ed8;
    }

    /* ===== CONTEÚDO PRINCIPAL ===== */
    main {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 1.5rem;
    }

    /* ===== CATEGORIAS ===== */
    aside {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .categories button {
      margin: 0.25rem;
      border: none;
      padding: 0.5rem 0.8rem;
      border-radius: 9999px;
      background: #eee;
      cursor: pointer;
      transition: 0.2s;
    }

    .categories button:hover {
      background: #ddd;
    }

    .categories button.active {
      background: #2563eb;
      color: white;
    }

    /* ===== PRODUTOS ===== */
    .products {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }

    .product {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      display: flex;
      flex-direction: column;
      transition: transform 0.2s;
    }

    .product:hover {
      transform: scale(1.02);
    }

    .product img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }

    .product .info {
      padding: 1rem;
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .product h4 {
      margin: 0;
      font-size: 1rem;
    }

    .product p {
      flex: 1;
      font-size: 0.9rem;
      color: #555;
      margin: 0.5rem 0;
    }

    .product .price {
      font-weight: 700;
      margin-top: auto;
    }

    .product button.add {
      margin-top: 0.5rem;
      padding: 0.5rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      background: #2563eb;
      color: white;
    }

    .product button.add:hover {
      background: #1d4ed8;
    }

    /* ===== CARRINHO ===== */
    #cart {
      position: fixed;
      top: 0;
      right: -400px;
      width: 350px;
      height: 100vh;
      background: white;
      box-shadow: -2px 0 6px rgba(0,0,0,0.2);
      padding: 1rem;
      transition: right 0.3s;
      overflow-y: auto;
      z-index: 200;
    }

    #cart.open {
      right: 0;
    }

    .cart-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .cart-item img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 6px;
    }

    .cart-item .details {
      flex: 1;
    }

    .cart-item .qty {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .cart-item button {
      border: 1px solid #ccc;
      padding: 0.2rem 0.5rem;
      background: none;
      cursor: pointer;
    }

    .cart-total {
      border-top: 1px solid #ccc;
      padding-top: 1rem;
      margin-top: 1rem;
      font-weight: 700;
    }

    /* ===== RODAPÉ ===== */
    footer {
      background: #111827;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: 3rem;
    }
  </style>
</head>

<body>

  <!-- ===== CABEÇALHO ===== -->
  <header>
    <h1>Top Chuteiras</h1>
    <input type="search" id="search" placeholder="Buscar chuteira...">
    <button id="cart-btn">Carrinho (<span id="cart-count">0</span>)</button>
  </header>

  <!-- ===== CONTEÚDO ===== -->
  <main>
    <aside>
      <h3>Categorias</h3>
      <div class="categories" id="categories"></div>
    </aside>

    <section>
      <h2>Chuteiras</h2>
      <div class="products" id="product-list"></div>
    </section>
  </main>

  <!-- ===== CARRINHO ===== -->
  <div id="cart">
    <h3>Seu Carrinho</h3>
    <div id="cart-items"></div>
    <div class="cart-total">Total: R$ <span id="cart-total">0,00</span></div>
    <button onclick="toggleCart()">Fechar</button>
  </div>

  <!-- ===== RODAPÉ ===== -->
  <footer>
    © <span id="year"></span> Top Chuteiras — Todos os direitos reservados.
  </footer>

  <!-- ===== JAVASCRIPT (Funcionalidades) ===== -->
  <script>
    const PRODUCTS = [
      {id:1, name:'Nike Mercurial Vapor', category:'Nike', price:799.9, img:'https://images.unsplash.com/photo-1613771404721-e1d974d9df66?auto=format&fit=crop&w=800&q=60', desc:'Leve, rápida e ideal para jogadores explosivos.'},
      {id:2, name:'Adidas Predator Edge', category:'Adidas', price:699.9, img:'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=60', desc:'Controle total da bola com tecnologia Zone Skin.'},
      {id:3, name:'Puma Ultra', category:'Puma', price:599.9, img:'https://images.unsplash.com/photo-1617634667039-5a3e9780f1dc?auto=format&fit=crop&w=800&q=60', desc:'Design ultraleve para máxima velocidade.'},
      {id:4, name:'Umbro Velocita', category:'Umbro', price:499.9, img:'https://images.unsplash.com/photo-1603575448367-361a4e4228a4?auto=format&fit=crop&w=800&q=60', desc:'Conforto e desempenho com ótimo custo-benefício.'},
      {id:5, name:'Nike Phantom GX', category:'Nike', price:849.9, img:'https://images.unsplash.com/photo-1617634667039-5a3e9780f1dc?auto=format&fit=crop&w=800&q=60', desc:'Precisão e controle para craques criativos.'},
    ];

    let cart = [];
    let selectedCategory = 'Todas';
    const categoriesEl = document.getElementById('categories');
    const productsEl = document.getElementById('product-list');
    const cartEl = document.getElementById('cart');
    const cartItemsEl = document.getElementById('cart-items');
    const cartCountEl = document.getElementById('cart-count');
    const cartTotalEl = document.getElementById('cart-total');
    const searchEl = document.getElementById('search');
    document.getElementById('year').textContent = new Date().getFullYear();

    function renderCategories() {
      const cats = ['Todas', ...new Set(PRODUCTS.map(p=>p.category))];
      categoriesEl.innerHTML = cats.map(c=>`<button class="${c===selectedCategory?'active':''}" onclick="filterCategory('${c}')">${c}</button>`).join('');
    }

    function renderProducts() {
      const query = searchEl.value.toLowerCase();
      const filtered = PRODUCTS.filter(p =>
        (selectedCategory==='Todas' || p.category===selectedCategory) &&
        (p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query))
      );
      productsEl.innerHTML = filtered.map(p=>`
        <div class="product">
          <img src="${p.img}" alt="${p.name}">
          <div class="info">
            <h4>${p.name}</h4>
            <p>${p.desc}</p>
            <div class="price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
            <button class="add" onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
          </div>
        </div>
      `).join('');
    }

    function filterCategory(cat){ selectedCategory = cat; renderCategories(); renderProducts(); }

    function addToCart(id){
      const item = cart.find(i=>i.id===id);
      if(item) item.qty++; else cart.push({...PRODUCTS.find(p=>p.id===id), qty:1});
      updateCart(); toggleCart(true);
    }

    function updateCart(){
      cartItemsEl.innerHTML = cart.map(i=>`
        <div class="cart-item">
          <img src="${i.img}" alt="${i.name}">
          <div class="details">
            <div>${i.name}</div>
            <div>R$ ${i.price.toFixed(2).replace('.', ',')}</div>
            <div class="qty">
              <button onclick="changeQty(${i.id}, -1)">-</button>
              <span>${i.qty}</span>
              <button onclick="changeQty(${i.id}, 1)">+</button>
              <button onclick="removeItem(${i.id})">Remover</button>
            </div>
          </div>
        </div>
      `).join('');
      const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
      cartTotalEl.textContent = total.toFixed(2).replace('.', ',');
      cartCountEl.textContent = cart.reduce((s,i)=>s+i.qty,0);
    }

    function changeQty(id, delta){
      const item = cart.find(i=>i.id===id);
      if(item){ item.qty+=delta; if(item.qty<=0) cart=cart.filter(i=>i.id!==id); updateCart(); }
    }

    function removeItem(id){ cart = cart.filter(i=>i.id!==id); updateCart(); }

    function toggleCart(open){ cartEl.classList.toggle('open', open); }

    document.getElementById('cart-btn').addEventListener('click', ()=>toggleCart());
    searchEl.addEventListener('input', renderProducts);

    renderCategories();
    renderProducts();
  </script>
</body>
</html>
