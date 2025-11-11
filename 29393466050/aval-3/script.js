<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Blog da Jeissiane</title>

  <style>
    :root{
      --roxo-escuro: #ff8aba; /* fundo rosa */
      --roxo-claro: #8b5cf6; /* faixa do nome */
      --texto: #f6f3ff;
      --card-bg: rgba(255,255,255,0.03);
    }

    *{box-sizing:border-box;margin:0;padding:0;font-family:Inter, system-ui, Arial}
    html,body{height:100%}
    body{
      background:var(--roxo-escuro);
      color:var(--texto);
      line-height:1.5;
      padding:2rem;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .site{
      width:min(920px,96%);
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 8px 30px rgba(0,0,0,0.45);
    }

    /* Header */
    .hero{
      background:var(--roxo-claro);
      padding:2.2rem 1.6rem;
      display:flex;
      align-items:center;
      gap:1rem;
    }

    .hero img{
      width:80px;
      height:80px;
      border-radius:50%;
      object-fit:cover;
      border:2px solid white;
    }

    .nome{
      font-size:2rem;
      font-weight:700;
      color:#fff;
    }

    nav{
      background: rgba(255,255,255,0.1);
      padding: 0.8rem 1.2rem;
      display:flex;
      gap:1rem;
      font-size:12px;
    }

    nav a{
      color:white;
      text-decoration:none;
    }

    main{
      padding:2rem;
      display:grid;
      grid-template-columns:1fr 320px;
      gap:1.2rem;
    }

    .conteudo{
      background:var(--card-bg);
      padding:1.4rem;
      border-radius:12px;
    }

    aside .card{
      background:rgba(255,255,255,0.03);
      padding:1rem;
      border-radius:12px;
      margin-bottom:1rem;
    }

    .favorito{
      display:flex;
      flex-direction:column;
      gap:0.6rem;
    }

    .tag{
      padding:0.25rem 0.6rem;
      border-radius:999px;
      background:rgba(255,255,255,0.1);
    }

    footer{
      padding:1rem 2rem;
      text-align:center;
      font-size:0.9rem;
      color:rgba(255,255,255,0.75);
    }

    @media (max-width:880px){
      main{grid-template-columns:1fr;}
    }
  </style>

</head>
<body>

  <div class="site">
    <header class="hero">
      <!-- Troque foto.jpg pelo nome da sua imagem -->
      <img src="foto.jpg" alt="Foto da Jeissiane">
      <div>
        <h1 class="nome">Jeissiane</h1>
        <p class="subtitulo">Olá! Bem-vindo(a) ao meu cantinho pessoal.</p>
      </div>
    </header>

    <nav>
      <a href="#sobre">Sobre</a>
      <a href="#favoritos">Favoritos</a>
      <a href="#contato">Contato</a>
    </nav>

    <main>
      <article class="conteudo" id="sobre">
        <h2>Sobre mim</h2>
        <p>Oi — eu sou a Jeissiane. Neste blog eu compartilho pequenas coisas sobre mim e o que eu gosto.</p>

        <h2>O que eu gosto de fazer</h2>
        <p>Eu gosto de dormir — descansar é sagrado!</p>

        <h2>Minha comida favorita</h2>
        <p>Minha comida preferida é <strong>macarrão</strong>.</p>

        <h2>Minha cor favorita</h2>
        <p>Eu amo a cor <span class="tag">roxo</span>.</p>
      </article>

      <aside>
        <div class="card" id="favoritos">
          <h3>Favoritos</h3>
          <div class="favorito">
            <p><strong>Comida:</strong> Macarrão</p>
            <p><strong>Cor:</strong> Roxo</p>
            <p><strong>Passatempo:</strong> Dormir</p>
          </div>
        </div>

        <div class="card" id="contato">
          <h3>Contato</h3>
          <p>Aqui você pode colocar redes sociais.</p>
        </div>
      </aside>
    </main>

    <footer>
      © <span id="ano"></span> Jeissiane — Feito com carinho.
    </footer>
  </div>

  <script>
    document.getElementById('ano').textContent = new Date().getFullYear();
    document.body.style.fontSize = '10px';
  </script>

</body>
</html>
