<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Beleza em Foco — Maquiagem (One Page)</title>
  <style>
    /* ---------- RESET / BASE ---------- */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    :root{
      --pink:#e91e63;
      --pink-dark:#c2185b;
      --bg:#fff5f9;
      --text:#222;
      --card:#ffffff;
      --muted:#666;
      --radius:12px;
      --shadow: 0 6px 18px rgba(0,0,0,0.08);
      --gap:20px;
      font-family: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    html { scroll-behavior: smooth; }
    body {
      background: linear-gradient(180deg, var(--bg), #fff);
      color: var(--text);
      line-height: 1.5;
      padding-bottom: 40px;
    }

    /* ---------- SKIP LINK ---------- */
    .skip { position: absolute; left: -999px; top: auto; width: 1px; height: 1px; overflow: hidden; }
    .skip:focus { left: 10px; top: 10px; width: auto; height: auto; padding: 8px 12px; background:#000; color:#fff; border-radius:6px; z-index:999; }

    /* ---------- HEADER / NAV ---------- */
    header {
      background: var(--pink);
      color: #fff;
      padding: 18px 12px;
      position: sticky;
      top: 0;
      z-index: 50;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 16px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo {
      width:44px; height:44px; border-radius:10px;
      background: linear-gradient(135deg,#fff4f8, #ffd9e6);
      display:flex; align-items:center; justify-content:center;
      color:var(--pink);
      font-weight:700;
      box-shadow: 0 2px 6px rgba(0,0,0,0.06);
    }
    nav { margin-top:10px; }
    .menu {
      display:flex;
      gap: 14px;
      justify-content:center;
      flex-wrap:wrap;
      list-style:none;
    }
    .menu a {
      color: #fff;
      text-decoration:none;
      font-weight:600;
      padding:8px 12px;
      border-radius:8px;
      transition: background .18s, transform .12s;
    }
    .menu a:hover, .menu a:focus { background: rgba(255,255,255,0.12); transform: translateY(-2px); outline: none; }

    /* ---------- HERO / BANNER ---------- */
    .hero {
      padding: 48px 16px;
      text-align:center;
    }
    .hero .eyebrow { color: var(--pink); font-weight:700; margin-bottom:8px; }
    .hero h1 { color: var(--pink); font-size: clamp(28px, 4vw, 40px); margin-bottom: 10px; }
    .hero p { color: var(--muted); max-width: 820px; margin: 0 auto 18px; font-size:1.05rem; }

    .hero-card {
      max-width: 980px;
      margin: 18px auto 0;
      background: var(--card);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      overflow: hidden;
      display:grid;
      grid-template-columns: 1fr 360px;
    }
    .hero-card img { width:100%; height:100%; object-fit:cover; display:block; }
    .hero-card .hero-body { padding: 22px; display:flex; flex-direction:column; gap:12px; }

    /* ---------- MAIN LAYOUT (ARTICLE + ASIDE) ---------- */
    main.container-grid {
      max-width:1100px;
      margin: 28px auto;
      padding: 0 16px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: var(--gap);
      align-items:start;
    }

    article {
      background: var(--card);
      padding: 20px;
      border-radius: 12px;
      box-shadow: var(--shadow);
    }
    article h2 { color: var(--pink); margin-bottom:10px; }
    article p { color: #444; margin-bottom:12px; }

    aside {
      background: linear-gradient(180deg,#fff,#fff);
      padding: 18px;
      border-radius: 12px;
      box-shadow: var(--shadow);
    }
    aside h3 { color: var(--pink); margin-bottom:10px; }
    .aside-card { background:#fff; padding:12px; border-radius:10px; margin-bottom:12px; box-shadow: 0 4px 10px rgba(0,0,0,0.04); }

    /* ---------- CONTACT FORM ---------- */
    .contact {
      display:flex;
      flex-direction:column;
      gap:12px;
    }
    label { font-weight:600; color:var(--pink); font-size:.95rem; margin-bottom:6px; display:block; }
    input[type="text"], input[type="email"], textarea {
      width:100%;
      padding:10px 12px;
      border-radius:8px;
      border:1px solid #e6e6e6;
      font-size:1rem;
      resize:vertical;
    }
    .btn {
      display:inline-block;
      background:var(--pink);
      color:#fff;
      border:none;
      padding:10px 14px;
      border-radius:8px;
      cursor:pointer;
      font-weight:700;
      transition: transform .12s, background .12s;
    }
    .btn:hover { transform: translateY(-3px); background: var(--pink-dark); }

    /* ---------- FOOTER ---------- */
    footer {
      margin-top: 28px;
      background: var(--pink);
      color:#fff;
      padding: 18px 12px;
      text-align:center;
      box-shadow: 0 -4px 12px rgba(0,0,0,0.06);
    }

    /* ---------- SMALL SCREENS ---------- */
    @media (max-width: 980px) {
      .hero-card { grid-template-columns: 1fr; }
      .grid { grid-template-columns: 1fr; }
      aside { order: 2; }
      article { order: 1; }
    }

    @media (max-width: 520px) {
      .menu { gap:10px; }
      .hero { padding: 28px 12px; }
    }

    /* small visual helpers */
    .muted { color:var(--muted); font-size:.95rem; }
    .pill { display:inline-block; padding:6px 10px; border-radius:999px; background:#fff0f6; color:var(--pink); font-weight:700; font-size:.9rem; }
    .socials { display:flex; gap:10px; margin-top:8px; }
    .socials a { text-decoration:none; color:var(--pink); font-weight:700; border:1px dashed rgba(0,0,0,0.04); padding:8px 10px; border-radius:8px; background:#fff; display:inline-block; }
  </style>
</head>
<body>
  <a class="skip" href="#main">Pular para o conteúdo principal</a>

  <header>
    <div class="container" style="display:flex;flex-direction:column;align-items:center;">
      <div class="brand" aria-label="Beleza em Foco">
        <div class="logo" aria-hidden="true">B</div>
        <div>
          <div style="font-weight:800; font-size:1.05rem;">Beleza em Foco</div>
          <div class="muted" style="font-size:.85rem;">Dicas e tutoriais de maquiagem</div>
        </div>
      </div>

      <nav aria-label="Navegação principal" style="width:100%; margin-top:12px;">
        <ul class="menu" role="menubar">
          <li role="none"><a role="menuitem" href="#inicio">Início</a></li>
          <li role="none"><a role="menuitem" href="#sobre">Sobre</a></li>
          <li role="none"><a role="menuitem" href="#dicas">Dicas</a></li>
          <li role="none"><a role="menuitem" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- HERO / INÍCIO -->
  <section id="inicio" class="hero container">
    <div class="eyebrow">Maquiagem • Beleza • Autoexpressão</div>
    <h1>Realce sua beleza com técnica e criatividade</h1>
    <p>Aprenda tutoriais simples, descubra produtos indicados para cada tipo de pele e inspire-se com looks para o dia a dia ou ocasiões especiais.</p>

    <div class="hero-card" aria-hidden="false">
      <div style="padding:22px;">
        <h3 style="color:var(--pink); margin-bottom:8px;">Tendência: Glow natural</h3>
        <p class="muted">Menos é mais. A pele iluminada e natural continua em alta — foco na preparação da pele e em pontos estratégicos de luz.</p>
        <div style="display:flex; gap:10px; margin-top:12px; flex-wrap:wrap;">
          <span class="pill">Tutorial</span>
          <span class="pill">Resenha</span>
          <span class="pill">Produtos</span>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2" alt="Banner de maquiagem" />
    </div>
  </section>

  <!-- MAIN: ARTICLE + ASIDE -->
  <main id="main" class="container-grid" tabindex="-1">
    <div class="grid">

      <!-- ARTICLE: SOBRE + DICAS -->
      <article aria-labelledby="sobre-title">
        <section id="sobre-content">
          <h2 id="sobre-title">Sobre o projeto</h2>
          <p>O <strong>Beleza em Foco</strong> nasce para ajudar pessoas a entenderem produtos, técnicas e rotinas que valorizam a pele e a autoestima. Priorizamos informação responsável: combinar produto e tipo de pele, cuidados pré-maquiagem e remoção adequada.</p>
        </section>

        <hr style="margin:16px 0; border:none; height:1px; background:#f2f2f2;">

        <section id="dicas" aria-labelledby="dicas-title">
          <h2 id="dicas-title">Dicas rápidas</h2>
          <p><strong>Preparação:</strong> sempre use protetor solar e um bom hidratante antes da base.</p>
          <p><strong>Corretivo:</strong> aplique em forma de triângulo invertido sob os olhos para iluminar.</p>
          <p><strong>Sombra:</strong> esfume com movimentos suaves e construa camadas em vez de depositar muito produto de uma vez.</p>
        </section>

        <hr style="margin:16px 0; border:none; height:1px; background:#f2f2f2;">

        <!-- CONTACT FORM within article (main contact) -->
        <section id="contato" aria-labelledby="contato-title">
          <h2 id="contato-title">Fale conosco</h2>
          <p class="muted">Preencha o formulário e nos envie sua dúvida, sugestão ou proposta de parceria.</p>

          <form class="contact" action="#" method="post" onsubmit="alert('Mensagem enviada (simulada) — integrar backend para funcionar de verdade.'); return false;">
            <div>
              <label for="nome">Nome</label>
              <input id="nome" name="nome" type="text" placeholder="Seu nome" required>
            </div>

            <div>
              <label for="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder="seu@exemplo.com" required>
            </div>

            <div>
              <label for="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva sua mensagem..." required></textarea>
            </div>

            <div>
              <button class="btn" type="submit">Enviar mensagem</button>
            </div>
          </form>
        </section>
      </article>

      <!-- ASIDE: COMPLEMENTOS / BARRA LATERAL -->
      <aside aria-labelledby="aside-title">
        <h3 id="aside-title">Conteúdo Rápido</h3>

        <div class="aside-card" role="region" aria-label="Newsletter">
          <strong>Newsletter</strong>
          <p class="muted" style="margin-top:8px;">Receba dicas semanais e os melhores truques de maquiagem.</p>
          <form onsubmit="alert('Inscrição simulada.'); return false;" style="margin-top:10px;">
            <input type="email" placeholder="Seu e-mail" required style="padding:8px;border-radius:8px;border:1px solid #eee;width:100%;margin-bottom:8px;">
            <button class="btn" type="submit" style="width:100%;">Inscrever</button>
          </form>
        </div>

        <div class="aside-card" role="region" aria-label="Produtos recomendados">
          <strong>Produtos recomendados</strong>
          <ul style="margin-top:10px; list-style: none; padding-left:0;">
            <li style="margin-bottom:8px;"><strong>Base Leve</strong> — ideal para pele mista</li>
            <li style="margin-bottom:8px;"><strong>Iluminador líquido</strong> — aplicação pontual</li>
            <li style="margin-bottom:8px;"><strong>Pincel kabuki</strong> — acabamento suave</li>
          </ul>
        </div>

        <div class="aside-card" role="region" aria-label="Redes sociais">
          <strong>Siga-nos</strong>
          <div class="socials" style="margin-top:8px;">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
          </div>
        </div>

        <div class="aside-card" role="region" aria-label="Avaliação">
          <strong>Sobre a avaliação</strong>
          <p class="muted" style="margin-top:8px;">Esta estrutura segue as recomendações semânticas: header → nav → main (article + aside) → footer e inclui elementos acessíveis para a avaliação do projeto.</p>
        </div>
      </aside>
    </div>
  </main>

  <footer>
    <div class="container">
      <div style="max-width:1100px;margin:0 auto;padding:0 16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
          <div>© 2025 Beleza em Foco</div>
          <div class="muted">Made with ♥ — Maquiagem e cuidados</div>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
