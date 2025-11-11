<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Blog da Mariana</title>

  <!-- Conexão com o CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <header class="banner">
      <img class="avatar" src="https://via.placeholder.com/60" alt="Foto da Mariana">

      <div>
        <h1>Mariana</h1>
        <p class="subtitle">Bem-vinda ao meu blog pessoal 💜</p>

        <!-- Botão que o JS controla -->
        <button id="trocar-tema">Trocar Tema</button>
      </div>
    </header>

    <nav>
      <a href="#sobre">Sobre Mim</a>
      <a href="#comida">Comida Preferida</a>
      <a href="#hobby">O que Eu Gosto</a>
    </nav>

    <div class="layout">
      <main>

        <article class="card" id="sobre">
          <h2>Sobre mim</h2>
          <p>Minha comida preferida é macarrão, minha cor preferida é roxo e o que eu gosto de fazer é dormir.</p>
        </article>

        <article class="card" id="comida">
          <h2>Comida Preferida</h2>
          <p>Adoro macarrão porque é saboroso e combina com vários tipos de molho.</p>
        </article>

        <article class="card" id="hobby">
          <h2>O que eu gosto de fazer</h2>
          <p>Eu gosto de dormir porque me relaxa e me deixa feliz.</p>
        </article>

      </main>

      <aside>
        <h3>Curiosidades sobre mim</h3>
        <ul>
          <li>Tenho um bom humor quando acordo descansada.</li>
          <li>Amo ouvir música quietinha.</li>
          <li>Adoro cores suaves e roxos diferentes.</li>
        </ul>
      </aside>
    </div>

    <footer>
      <p>Feito por Mariana</p>
    </footer>
  </div>

  <!-- Conexão com o JavaScript -->
  <script src="script.js"></script>

</body>
</html>
