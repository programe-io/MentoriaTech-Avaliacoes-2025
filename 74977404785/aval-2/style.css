<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Site sobre maquiagem: tutoriais, resenhas de produtos, looks e dicas para todos os tipos de pele.">
  <title>Beleza em Pincel — Maquiagem</title>
  <link rel="icon" href="data:;base64,iVBORw0KGgo="> <!-- placeholder -->
  <style>
    /* Reset simples */
    :root{
      --accent:#d63384; /* rosa */
      --accent-2:#6f42c1; /* roxo */
      --bg:#fff;
      --muted:#666;
      --card:#fafafa;
      --glass: rgba(255,255,255,0.7);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,#fff 0%, #fffaf6 100%);color:#222}
    a{color:var(--accent);text-decoration:none}
    header{position:sticky;top:0;background:rgba(255,255,255,0.85);backdrop-filter:blur(6px);box-shadow:0 2px 8px rgba(0,0,0,0.05);z-index:40}
    .container{max-width:1100px;margin:0 auto;padding:1rem}
    .nav{display:flex;align-items:center;justify-content:space-between;gap:1rem}
    .brand{display:flex;align-items:center;gap:.6rem;font-weight:700}
    .brand .logo{width:42px;height:42px;border-radius:8px;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;color:white}
    nav ul{display:flex;gap:1rem;list-style:none;padding:0;margin:0}
    nav li{padding:.4rem .6rem;border-radius:8px}
    .cta{padding:.6rem 1rem;background:var(--accent);color:white;border-radius:10px}
    /* hero */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:2rem;align-items:center;padding:3rem 0}
    .hero h1{font-size:clamp(1.6rem,3.5vw,2.6rem);margin:0 0 .6rem}
    .hero p{color:var(--muted);margin:0 0 1rem}
    .search{display:flex;gap:.6rem}
    .search input{flex:1;padding:.8rem;border-radius:999px;border:1px solid #eee}
    .hero-card{background:linear-gradient(180deg,rgba(255,255,255,0.9),var(--glass));padding:1.2rem;border-radius:14px;box-shadow:0 6px 18px rgba(16,24,40,0.06)}
    /* grid de seções */
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}
    .card{background:var(--card);padding:1rem;border-radius:12px}
    .section{padding:2rem 0}
    h2{margin:0 0 .8rem}
    /* tutoriais*/
    .tutorials{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
    .tutorial img{width:100%;height:150px;object-fit:cover;border-radius:10px}
    .product-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem}
    .product{padding:1rem;border-radius:10px;border:1px solid #f0e9ef;background:white}
    .product img{width:100%;height:140px;object-fit:cover;border-radius:8px}
    /* responsive */
    @media (max-width:900px){
      .hero{grid-template-columns:1fr;}
      .grid{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:600px){
      nav ul{display:none}
      .grid{grid-template-columns:1fr}
      header .mobile-toggle{display:block}
    }
    .footer{background:#111;padding:2rem;color:#ddd;border-top:1px solid rgba(255,255,255,0.02)}
    .btn{display:inline-block;padding:.5rem .9rem;border-radius:10px}
    /* small utilities */
    .muted{color:var(--muted)}
    .tags{display:flex;flex-wrap:wrap;gap:.4rem}
    .tag{padding:.25rem .5rem;border-radius:999px;border:1px solid #eee;font-size:.85rem}
    /* modal */
    .modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.4)}
    .modal.show{display:flex}
    .modal .box{background:white;padding:1rem;border-radius:12px;max-width:720px;width:94%}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="brand">
        <div class="logo">B</div>
        <div>
          <div>Beleza em Pincel</div>
          <small class="muted">Dicas, looks e resenhas</small>
        </div>
      </div>
      <nav aria-label="menu principal">
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#tutoriais">Tutoriais</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#sobre">Sobre</a></li>
        </ul>
      </nav>
      <div style="display:flex;gap:.6rem;align-items:center">
        <a class="cta" href="#contact">Assine</a>
        <button class="btn" onclick="toggleModal()" aria-haspopup="dialog">Login</button>
      </div>
    </div>
  </header>

  <main class="container" id="home">
    <section class="hero">
      <div>
        <h1>Aprenda maquiagem, descubra produtos e crie looks incríveis</h1>
        <p>Guias passo-a-passo para iniciantes e profissionais — cuidados com a pele, seleção de tons, e técnicas atualizadas.</p>
        <div class="search" role="search" aria-label="Buscar tutoriais e produtos">
          <input type="search" id="q" placeholder="Procure por: 'base', 'esfumado', 'pele oleosa'">
          <button class="btn" onclick="searchSite()">Buscar</button>
        </div>
        <div style="margin-top:1rem" class="tags" aria-hidden="false">
          <span class="tag">Maquiagem natural</span>
          <span class="tag">Olhos esfumados</span>
          <span class="tag">Pele madura</span>
          <span class="tag">Vegano</span>
        </div>
      </div>

      <aside class="hero-card" aria-label="destaques">
        <h3>Destaque da semana</h3>
        <p class="muted">Tutorial: Olho esfumado passo a passo (30 min)</p>
        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=60" alt="modelo maquiada" style="width:100%;border-radius:10px;margin-top:1rem">
        <p style="margin-top:.6rem"><strong>Material sugerido:</strong> paleta neutra, sombras mate, pincel esfumar.</p>
        <a href="#tutoriais" class="btn">Ver tutorial</a>
      </aside>
    </section>

    <section id="tutoriais" class="section">
      <h2>Tutoriais populares</h2>
      <div class="tutorials">
        <article class="tutorial card" aria-labelledby="t1">
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60" alt="Passo a passo pele perfeita">
          <h3 id="t1">Pele perfeita: base e corretivo</h3>
          <p class="muted">Técnicas para escolher o tom certo e aplicar sem pesar — 5 passos.</p>
          <a class="btn" href="#">Ver</a>
        </article>

        <article class="tutorial card" aria-labelledby="t2">
          <img src="https://images.unsplash.com/photo-1519838269072-7b82f0b6d0b5?auto=format&fit=crop&w=800&q=60" alt="esfumado glamouroso">
          <h3 id="t2">Olho esfumado glam</h3>
          <p class="muted">Do básico ao avançado: formas, técnicas e escolha de produtos.</p>
          <a class="btn" href="#">Ver</a>
        </article>

        <article class="tutorial card" aria-labelledby="t3">
          <img src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=60" alt="contorno e iluminação">
          <h3 id="t3">Contorno e iluminação</h3>
          <p class="muted">Como realçar sem exagerar: formatos de rosto e produtos.</p>
          <a class="btn" href="#">Ver</a>
        </article>
      </div>
    </section>

    <section id="produtos" class="section">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <h2>Resenhas de produtos</h2>
        <div class="muted">Filtrar: <select id="filter" onchange="filterProducts()"><option value="all">Todos</option><option value="vegano">Vegano</option><option value="barato">Até R$100</option></select></div>
      </div>

      <div class="product-list" id="productList">
        <div class="product" data-tags="vegano">
          <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=60" alt="base compacta">
          <h4>Base líquida Fit Skin</h4>
          <p class="muted">Cobertura média, acabamento natural. R$129</p>
          <a href="#" class="btn">Comprar</a>
        </div>
        <div class="product" data-tags="barato">
          <img src="https://images.unsplash.com/photo-1600180758890-2f8bd1f6f8b7?auto=format&fit=crop&w=800&q=60" alt="paleta de sombras">
          <h4>Paleta Neutra (6 cores)</h4>
          <p class="muted">Ótima para iniciantes. R$79</p>
          <a href="#" class="btn">Comprar</a>
        </div>
        <div class="product" data-tags="vegano">
          <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60" alt="batom rosa">
          <h4>Batom Cremoso Velvet</h4>
          <p class="muted">Acabamento acetinado. R$49</p>
          <a href="#" class="btn">Comprar</a>
        </div>
      </div>
    </section>

    <section id="sobre" class="section">
      <h2>Sobre</h2>
      <p class="muted">Beleza em Pincel é um site criado para compartilhar conhecimento honesto sobre maquiagem — com foco em técnicas, inclusão e sustentabilidade. Nosso objetivo é ajudar você a encontrar o que funciona para seu tom, tipo de pele e estilo.</p>
      <div style="display:flex;gap:1rem;margin-top:1rem;flex-wrap:wrap">
        <div class="card" style="flex:1;min-width:220px">
          <h3>Missão</h3>
          <p class="muted">Educar com responsabilidade e destacar opções sustentáveis.</p>
        </div>
        <div class="card" style="flex:1;min-width:220px">
          <h3>Equipe</h3>
          <p class="muted">Makeup artists, dermatologistas consultores e editores de conteúdo.</p>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <h2>Contato</h2>
      <form onsubmit="event.preventDefault();sendContact()" style="display:grid;gap:.6rem;max-width:600px">
        <label>
          Nome
          <input required type="text" id="name" placeholder="Seu nome" />
        </label>
        <label>
          E-mail
          <input required type="email" id="email" placeholder="seu@exemplo.com" />
        </label>
        <label>
          Mensagem
          <textarea required id="message" rows="4" placeholder="Escreva sua dúvida ou sugestão"></textarea>
        </label>
        <button class="cta" type="submit">Enviar</button>
      </form>
    </section>
  </main>

  <footer class="footer">
    <div class="container" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:1rem">
      <div>
        <strong>Beleza em Pincel</strong>
        <div class="muted">© <span id="year"></span> Todos os direitos reservados</div>
      </div>
      <div class="muted">Contato: contato@belezaempincel.exemplo • Redes: @belezaempincel</div>
    </div>
  </footer>

  <div class="modal" id="modal">
    <div class="box">
      <h3>Entrar</h3>
      <p class="muted">Funcionalidade de login de exemplo — conectar via OAuth/serviço desejado em produção.</p>
      <form onsubmit="event.preventDefault();alert('Logado (exemplo)')">
        <label>E-mail <input type="email" required></label>
        <label>Senha <input type="password" required></label>
        <div style="margin-top:.6rem;display:flex;gap:.6rem">
          <button type="submit" class="cta">Entrar</button>
          <button type="button" class="btn" onclick="toggleModal()">Fechar</button>
        </div>
      </form>
    </div>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    function toggleModal(){document.getElementById('modal').classList.toggle('show')}
    function searchSite(){const q=document.getElementById('q').value.trim();if(!q){alert('Digite algo para buscar');return;}alert('Busca simulada: '+q)}
    function filterProducts(){const f=document.getElementById('filter').value;const list=document.querySelectorAll('#productList .product');list.forEach(p=>{if(f==='all'){p.style.display='block';return}const tags=p.dataset.tags||'';p.style.display=tags.includes(f)?'block':'none'})}
    function sendContact(){const n=document.getElementById('name').value;const e=document.getElementById('email').value;alert('Obrigado, '+n+"! Recebemos sua mensagem.");document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value=''}
  </script>
</body>
</html>
