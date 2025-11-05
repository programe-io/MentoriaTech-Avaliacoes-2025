<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cardápio Digital</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>🍕 Cardápio Digital - Bella Pizzaria</h1>
    <p>Peça direto pelo WhatsApp!</p>
    <input type="text" id="busca" placeholder="🔍 Buscar item..." />
  </header>

  <div class="menu" id="menu">
    <h2>Pizzas</h2>
    <div class="item">
      <div class="item-info">
        <h3>Calabresa</h3>
        <p>Molho de tomate, mussarela, calabresa e cebola roxa.</p>
      </div>
      <div class="acoes">
        <span class="preco">R$ 39,90</span>
        <button class="btn-pedir" data-item="Pizza Calabresa">Pedir</button>
      </div>
    </div>

    <div class="item">
      <div class="item-info">
        <h3>Quatro Queijos</h3>
        <p>Mussarela, provolone, gorgonzola e parmesão.</p>
      </div>
      <div class="acoes">
        <span class="preco">R$ 44,90</span>
        <button class="btn-pedir" data-item="Pizza Quatro Queijos">Pedir</button>
      </div>
    </div>

    <h2>Bebidas</h2>
    <div class="item">
      <div class="item-info">
        <h3>Refrigerante Lata</h3>
        <p>Coca-Cola, Guaraná, Fanta...</p>
      </div>
      <div class="acoes">
        <span class="preco">R$ 6,00</span>
        <button class="btn-pedir" data-item="Refrigerante Lata">Pedir</button>
      </div>
    </div>

    <div class="item">
      <div class="item-info">
        <h3>Suco Natural</h3>
        <p>Laranja, abacaxi, maracujá...</p>
      </div>
      <div class="acoes">
        <span class="preco">R$ 8,50</span>
        <button class="btn-pedir" data-item="Suco Natural">Pedir</button>
      </div>
