<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Palmeiras - Site Modelo (Página Única)</title>
  <style>
    /* Reset e variáveis */
    *{box-sizing:border-box;margin:0;padding:0}
    :root{
      --verde:#006437; --verde-esc:#004d2b; --bg:#f3f5f4; --white:#fff; --max-w:1100px;
    }
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial; background:var(--bg); color:#222; line-height:1.5}
    .container{max-width:var(--max-w);margin:0 auto;padding:0 16px}

    /* Header */
    header{background:linear-gradient(90deg,var(--verde),#008a55); color:var(--white); position:sticky;top:0;z-index:40}
    .header-inner{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 0}
    .brand{display:flex;align-items:center;gap:12px}
    .brand img{width:52px;height:52px;border-radius:6px;object-fit:cover}
    .brand h1{font-size:1.05rem;letter-spacing:.3px}
    nav.primary{display:flex;gap:12px;align-items:center}
    nav.primary a{color:var(--white);text-decoration:none;font-weight:700;padding:8px 10px;border-radius:8px}
    nav.primary a:hover, nav.primary a[aria-current="true"]{background:rgba(255,255,255,0.08)}

    /* Layout main + aside */
    main{display:flex;gap:20px;align-items:flex-start;margin:22px auto;max-width:var(--max-w)}
    .content{flex:1 1 65%}
    aside{flex:0 0 300px;background:var(--white);padding:16px;border-radius:10px;box-shadow:0 8px 20px rgba(0,0,0,0.06);position:sticky;top:86px}

    /* Sections */
    section.card{background:var(--white);padding:18px;border-radius:10px;margin-bottom:18px;box-shadow:0 6px 18px rgba(0,0,0,0.04)}
    .banner{position:relative;border-radius:10px;overflow:hidden}
    .banner img{width:100%;height:auto;display:block}
    .banner .banner-text{position:absolute;left:18px;bottom:18px;color:var(--white);text-shadow:0 3px 10px rgba(0,0,0,0.4)}
    h2{color:var(--verde);margin-bottom:8px}

    /* Form */
    form{display:flex;flex-direction:column;gap:10px}
    label{font-weight:600}
    input, textarea{padding:12px;border-radius:8px;border:1px solid #ddd;font-size:1rem}
    button{background:var(--verde);color:var(--white);padding:12px;border-radius:8px;border:none;cursor:pointer;font-weight:700}
    button:hover{background:var(--verde-esc)}

    /* Aside content */
    .aside img{width:100%;border-radius:8px;margin-bottom:12px;display:block}

    /* Footer */
    footer{background:var(--verde-esc);color:var(--white);text-align:center;padding:14px;margin-top:18px;border-top-left-radius:6px;border-top-right-radius:6px}

    /* Responsivo */
    @media (max-width:980px){main{flex-direction:column;padding:0 12px} aside{position:relative;top:0;width:100%}}
    @media (max-width:480px){.brand h1{font-size:1rem};nav.primary{flex-wrap:wrap}}
  </style>
</head>
<body>
  <header role="banner">
    <div class="container header-inner" aria-hidden="false">
      <!-- Logo (img obrigatório) -->
      <div class="brand" role="img" aria-label="Escudo do Palmeiras">
        <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/1a/SE_Palmeiras_%28escudo%29.svg/1200px-SE_Palmeiras_%28escudo%29.svg.png"
             alt="Escudo da Sociedade Esportiva Palmeiras" />
        <div>
          <h1>Sociedade Esportiva Palmeiras</h1>
          <small>Site modelo — Fan Made</small>
        </div>
      </div>

      <nav class="primary" aria-label="Navegação principal">
        <a href="#" data-target="inicio" onclick="navigate(event)" aria-current="true">Início</a>
        <a href="#" data-target="sobre" onclick="navigate(event)">Sobre</a>
        <a href="#" data-target="contato" onclick="navigate(event)">Contato</a>
      </nav>
    </div>
  </header>

  <main class="container" id="main" role="main">
    <!-- Conteúdo principal -->
    <div class="content">
      <!-- INÍCIO -->
      <section id="inicio" class="card" aria-labelledby="inicio-title">
        <div class="banner" aria-hidden="false">
          <!-- imagem principal (img obrigatório) -->
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Allianz_Parque_-_Setembro_2015.jpg"
               alt="Allianz Parque, Estádio do Palmeiras — foto panorâmica" />
          <div class="banner-text">
            <h2 id="inicio-title">Bem-vindo ao Verdão!</h2>
            <p>Notícias, história e informações sobre a Sociedade Esportiva Palmeiras.</p>
          </div>
        </div>

        <article class="card" aria-labelledby="news-title" style="margin-top:16px;">
          <h3 id="news-title">Notícias Recentes</h3>
          <p>Confira as últimas notícias e resultados do Palmeiras.</p>
          <!-- imagem de notícia (img obrigatório): exemplo de jogador -->
          <figure style="margin-top:12px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Raphael_Veiga_2022.jpg"
                 alt="Jogador do Palmeiras em ação" style="width:100%;border-radius:8px" />
            <figcaption style="font-size:.9rem;margin-top:6px;color:#555">Exemplo de imagem de jogador (ilustrativa).</figcaption>
          </figure>
        </article>
      </section>

      <!-- SOBRE -->
      <section id="sobre" class="card" style="display:none;" aria-labelledby="sobre-title">
        <h2 id="sobre-title">Sobre o Palmeiras</h2>

        <article aria-labelledby="historia">
          <h3 id="historia">História</h3>
          <p>Fundado em 26 de agosto de 1914 por imigrantes italianos, o Palmeiras construiu uma rica trajetória com diversas conquistas nacionais e internacionais.</p>
        </article>

        <article aria-labelledby="titulos" style="margin-top:12px;">
          <h3 id="titulos">Títulos</h3>
          <ul>
            <li>Campeonato Brasileiro</li>
            <li>Copa Libertadores da América</li>
            <li>Copa do Brasil</li>
            <li>Campeonato Paulista</li>
          </ul>
          <!-- imagem histórica (img obrigatório) -->
          <figure style="margin-top:10px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Palmeiras%2C_1920s.jpg"
                 alt="Foto histórica do Palmeiras" style="width:100%;border-radius:8px" />
            <figcaption style="font-size:.9rem;color:#555;margin-top:6px">Foto histórica (ilustrativa).</figcaption>
          </figure>
        </article>
      </section>

      <!-- CONTATO -->
      <section id="contato" class="card" style="display:none;" aria-labelledby="contato-title">
        <h2 id="contato-title">Contato</h2>
        <p>Envie uma mensagem — formulário de exemplo (simulação sem back-end).</p>

        <form class="form" onsubmit="handleSubmit(event)" aria-label="Formulário de contato">
          <label for="nome">Nome</label>
          <input id="nome" name="nome" type="text" placeholder="Seu nome" required />

          <label for="email">Email</label>
          <input id="email" name="email" type="email" placeholder="seu@email.com" required />

          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem" required></textarea>

          <button type="submit">Enviar Mensagem</button>
        </form>

        <div id="resposta" style="margin-top:12px;color:var(--verde);display:none;"></div>
      </section>
    </div>

    <!-- ASIDE (obrigatório) -->
    <aside aria-labelledby="aside-title">
      <h3 id="aside-title" style="color:var(--verde);margin-bottom:8px">Rápido & útil</h3>

      <!-- imagem no aside (img obrigatório) -->
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Allianz_Parque_Interno.jpg"
           alt="Vista interna do Allianz Parque" class="aside" />

      <p><strong>Fundado:</strong> 26/08/1914</p>
      <p><strong>Estádio:</strong> Allianz Parque</p>

      <hr style="margin:12px 0;border:none;border-top:1px solid #eee" />

      <h4 style="margin-bottom:8px">Links</h4>
      <ul style="list-style:none;padding-left:0">
        <li><a href="https://www.palmeiras.com.br" target="_blank" rel="noopener">Site oficial</a></li>
        <li><a href="https://pt.wikipedia.org/wiki/Palmeiras" target="_blank" rel="noopener">Página Wikipédia</a></li>
      </ul>
    </aside>
  </main>

  <footer role="contentinfo">
    <div class="container">
      <small>Site modelo — Conteúdo ilustrativo. © 2025</small>
    </div>
  </footer>

  <script>
    // Navegação entre seções e ajuste aria-current
    function navigate(e){
      e.preventDefault();
      const target = e.currentTarget.getAttribute('data-target');
      if(!target) return;
      document.querySelectorAll('main .content > section').forEach(s => s.style.display = 'none');
      document.getElementById(target).style.display = 'block';

      document.querySelectorAll('nav.primary a').forEach(a => {
        a.removeAttribute('aria-current');
        if(a.getAttribute('data-target') === target) a.setAttribute('aria-current','true');
      });

      document.getElementById(target).scrollIntoView({behavior:'smooth', block:'start'});
    }

    // Submissão simulada do formulário (sem back-end)
    function handleSubmit(e){
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('mensagem').value.trim();
      if(!nome||!email||!msg){ alert('Preencha todos os campos'); return; }

      const resposta = document.getElementById('resposta');
      resposta.textContent = 'Mensagem enviada! Obrigado, ' + nome + '.';
      resposta.style.display = 'block';
      e.target.reset();
      setTimeout(()=> resposta.style.display='none',6000);
    }
  </script>
</body>
</html>
