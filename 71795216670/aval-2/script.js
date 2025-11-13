<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Fã de Futebol — Tudo sobre o seu time</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
    :root{--accent:#E23B3B;--dark:#0f1720;--muted:#6b7280;--card:#0b1220;--glass: rgba(255,255,255,0.03);--bg: linear-gradient(180deg, #071126 0%, #071a2a 100%);color-scheme: dark}
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Roboto,system-ui,-apple-system,"Segoe UI",Montserrat,Arial;background:var(--bg);color:#e6eef8}
    a{color:var(--accent);text-decoration:none}
    header{display:flex;align-items:center;justify-content:space-between;padding:18px 28px;background:linear-gradient(90deg, rgba(255,255,255,0.03), transparent);backdrop-filter:blur(6px);position:sticky;top:0;z-index:50}
    .logo{display:flex;gap:12px;align-items:center}
    .logo .badge{width:48px;height:48px;border-radius:8px;background:linear-gradient(135deg,var(--accent),#ff7a7a);display:flex;align-items:center;justify-content:center;font-weight:800;box-shadow:0 6px 20px rgba(0,0,0,0.45)}
    nav{display:flex;gap:14px;align-items:center}
    nav a{padding:8px 12px;border-radius:8px;font-weight:600;font-size:14px}
    nav a:hover{background:rgba(255,255,255,0.03)}
    .container{max-width:1100px;margin:28px auto;padding:0 20px}
    .hero{display:grid;grid-template-columns:1fr 380px;gap:26px;align-items:center}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:20px;border-radius:14px;box-shadow:0 8px 30px rgba(2,6,23,0.6)}
    .hero-left h1{font-size:38px;margin:0 0 8px;font-family:Montserrat, sans-serif}
    .hero-left p{color:var(--muted);line-height:1.6}
    .cta-row{margin-top:16px;display:flex;gap:12px}
    .btn{background:var(--accent);color:white;padding:10px 14px;border-radius:10px;font-weight:700;border:none;cursor:pointer}
    .btn.ghost{background:transparent;border:1px solid rgba(255,255,255,0.06)}
    .match-card{display:flex;flex-direction:column;gap:12px}
    .match{display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:10px;background:var(--glass)}
    .team{display:flex;gap:12px;align-items:center}
    .team .crest{width:44px;height:44px;border-radius:8px;background:rgba(255,255,255,0.04);display:flex;align-items:center;justify-content:center;font-weight:700}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:20px}
    .news-list{display:flex;flex-direction:column;gap:12px}
    .news-item{display:flex;gap:12px}
    .news-item img{width:96px;height:64px;object-fit:cover;border-radius:8px}
    .stats{display:flex;gap:12px;justify-content:space-between}
    .stat{flex:1;padding:12px;border-radius:10px;background:var(--card);text-align:center}
    .stat h3{margin:8px 0 4px}
    .gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    .gallery article img{width:100%;height:140px;object-fit:cover;border-radius:8px;cursor:pointer}
    footer{margin-top:28px;padding:20px;text-align:center;color:var(--muted)}
    @media (max-width:980px){.hero{grid-template-columns:1fr;}.grid-3{grid-template-columns:1fr 1fr}.gallery{grid-template-columns:repeat(2,1fr)}}
    @media (max-width:640px){.grid-3{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.logo .badge{width:40px;height:40px}}
    .chip{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(255,255,255,0.03);font-weight:600}
    .muted{color:var(--muted)}
    .modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.6);z-index:100}
    .modal .inner{max-width:820px;width:92%;background:linear-gradient(180deg,#071426,#071a2a);padding:12px;border-radius:12px}
    .modal img{width:100%;height:auto;border-radius:8px}
  </style>
</head>
<body>
  <header>
    <div class="logo">
      <div class="badge">FC</div>
      <div>
        <div style="font-weight:800;letter-spacing:0.6px">Clube do Fã</div>
        <div style="font-size:12px;color:var(--muted)">Paixão, notícias e torcida</div>
      </div>
    </div>
    <nav>
      <a href="#noticias">Notícias</a>
      <a href="#partidas">Partidas</a>
      <a href="#galeria">Galeria</a>
      <a href="#canticos">Cânticos</a>
      <a href="#contato">Contato</a>
      <button class="btn ghost" id="toggleTheme">Modo claro</button>
    </nav>
  </header>

  <main class="container">
    <section class="hero" aria-label="Introdução">
      <div class="card hero-left">
        <h1>Viva o futebol como fã: notícias, partidas e a comunidade</h1>
        <p>Portal criado por e para torcedores — cobertura de jogos, galeria de fotos, estatísticas do time e os cantos que ecoam nas arquibancadas.</p>
        <div class="cta-row">
          <button class="btn" onclick="location.href='#partidas'">Próxima partida</button>
          <button class="btn ghost" onclick="location.href='#noticias'">Últimas notícias</button>
        </div>

        <div style="margin-top:18px" class="grid-3" aria-hidden="false">
          <article class="card" aria-labelledby="ultima-noticia">
            <h3 id="ultima-noticia">Última notícia</h3>
            <p class="muted">Lesão no treino: veja o comunicado oficial do clube e a escalação provável para o próximo confronto.</p>
          </article>

          <article class="card stats" aria-label="Estatísticas do time">
            <div class="stat" role="note"><small class="muted">Posição</small><h3>3º</h3></div>
            <div class="stat" role="note"><small class="muted">Jogos</small><h3>28</h3></div>
            <div class="stat" role="note"><small class="muted">Gols</small><h3>45</h3></div>
          </article>

          <article class="card" aria-labelledby="proximo-adversario">
            <h3 id="proximo-adversario">Próximo adversário</h3>
            <div style="display:flex;align-items:center;gap:10px;margin-top:10px">
              <div style="width:56px;height:56px;border-radius:8px;background:rgba(255,255,255,0.03);display:flex;align-items:center;justify-content:center;font-weight:800">AD</div>
              <div>
                <div style="font-weight:700">Atlético Desportivo</div>
                <div class="muted">Dom, 23 Nov — Estádio Municipal — 16:00</div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <aside class="card match-card" aria-label="Cartão da próxima partida">
        <article aria-labelledby="proxima-partida">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <div>
              <div class="chip">Próxima Partida</div>
              <div id="proxima-partida" style="font-weight:800;margin-top:6px">Campeonato Estadual — Rodada 29</div>
            </div>
            <div class="muted">Entrada: Sold out</div>
          </div>

          <div class="match" style="margin-top:12px">
            <div class="team"><div class="crest">CF</div><div><strong>Clube do Fã</strong><div class="muted">Time da casa</div></div></div>
            <div style="font-weight:800">vs</div>
            <div class="team" style="justify-content:flex-end"><div style="text-align:right"><strong>Atlético Desportivo</strong><div class="muted">Visitante</div></div><div class="crest">AD</div></div>
          </div>
        </article>

        <article class="card" aria-labelledby="local-jogo" style="margin-top:10px">
          <h4 id="local-jogo">Local do jogo</h4>
          <p class="muted">Estádio Municipal — Rua das Torcidas, 123 — Abertura dos portões às 14:00</p>
        </article>

        <div style="display:flex;gap:10px">
          <button class="btn">Comprar ingresso</button>
          <button class="btn ghost">Ver escalação</button>
        </div>
      </aside>
    </section>

    <section id="noticias" aria-label="Notícias recentes" style="margin-top:26px">
      <h2>Notícias recentes</h2>
      <div class="card news-list">
        <article class="news-item" aria-labelledby="not1">
          <img src="https://images.unsplash.com/photo-1517927033932-b3d5a5e1c8e3?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="jogo">
          <div>
            <a id="not1" href="#">Vitória suada garante liderança da tabela</a>
            <div class="muted">Resumo: gols decisivos, pênalti aos 90' e festa da torcida no fim.</div>
          </div>
        </article>

        <article class="news-item" aria-labelledby="not2">
          <img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="treino">
          <div>
            <a id="not2" href="#">Treino tático abre preparação para clássico</a>
            <div class="muted">Técnico ajusta sistema e testa novas formações.</div>
          </div>
        </article>

        <article class="news-item" aria-labelledby="not3">
          <img src="https://images.unsplash.com/photo-1508610048659-a06a6f399a2f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="torcida">
          <div>
            <a id="not3" href="#">Torcida prepara mosaico para o duelo</a>
            <div class="muted">Organização nas arquibancadas promete emoção extra.</div>
          </div>
        </article>
      </div>
    </section>

    <section id="partidas" aria-label="Calendário e resultados" style="margin-top:22px">
      <h2>Calendário e resultados</h2>
      <div class="card">
        <table style="width:100%;border-collapse:collapse;color:#dbeafe">
          <thead class="muted"><tr><th style="text-align:left;padding:8px">Data</th><th style="text-align:left;padding:8px">Adversário</th><th style="text-align:left;padding:8px">Competição</th><th style="text-align:left;padding:8px">Resultado</th></tr></thead>
          <tbody>
            <tr><td style="padding:8px">23 Nov 2025</td><td>Atlético Desportivo</td><td>Campeonato Estadual</td><td>—</td></tr>
            <tr><td style="padding:8px">30 Nov 2025</td><td>Rivais FC</td><td>Copa Nacional</td><td>—</td></tr>
            <tr><td style="padding:8px">07 Dez 2025</td><td>Grêmio Unido</td><td>Continental</td><td>2 — 1</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="galeria" aria-label="Galeria de momentos" style="margin-top:22px">
      <h2>Galeria de momentos</h2>
      <div class="card gallery">
        <article onclick="openModal(this.querySelector('img').src)"><img src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="foto1"></article>
        <article onclick="openModal(this.querySelector('img').src)"><img src="https://images.unsplash.com/photo-1517927033932-b3d5a5e1c8e3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="foto2"></article>
        <article onclick="openModal(this.querySelector('img').src)"><img src="https://images.unsplash.com/photo-1508610048659-a06a6f399a2f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="foto3"></article>
        <article onclick="openModal(this.querySelector('img').src)"><img src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="foto4"></article>
        <article onclick="openModal(this.querySelector('img').src)"><img src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="foto5"></article>
        <article onclick="openModal(this.querySelector('img').src)"><img src="https://images.unsplash.com/photo-1542736667-069246bdbc97?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="foto6"></article>
      </div>
    </section>

    <section id="canticos" aria-label="Cânticos da torcida" style="margin-top:22px">
      <h2>Cânticos da torcida</h2>
      <article class="card">
        <header><strong>Hino da arquibancada</strong></header>
        <pre style="white-space:pre-wrap;color:#cfe8ff">Somos (time), paixão sem igual
Na alegria ou na dor, torcemos até o final
Coração bate forte, verde e branco a brilhar
No estádio, na estrada, vamos sempre apoiar</pre>
        <p class="muted">Grave o seu canto e envie para o podcast da torcida!</p>
      </article>
    </section>

    <section id="contato" aria-label="Contato e comunidade" style="margin-top:22px">
      <h2>Contato e comunidade</h2>
      <div class="card" style="display:flex;gap:16px;flex-wrap:wrap">
        <article style="flex:1;min-width:260px">
          <form onsubmit="event.preventDefault();alert('Obrigado! Mensagem enviada (simulação).')">
            <label class="muted">Nome</label>
            <input required style="width:100%;padding:10px;margin-top:6px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit">
            <label class="muted" style="margin-top:8px;display:block">Mensagem</label>
            <textarea required style="width:100%;padding:10px;margin-top:6px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit;min-height:100px"></textarea>
            <div style="margin-top:10px"><button class="btn" type="submit">Enviar</button></div>
          </form>
        </article>

        <article style="flex:1;min-width:260px">
          <h4>Junte-se à nossa torcida</h4>
          <p class="muted">Grupos no WhatsApp, encontros antes dos jogos e caravanas organizadas pelos torcedores.</p>
          <p class="muted">Siga nas redes:</p>
          <div style="display:flex;gap:8px;margin-top:10px">
            <a href="#" class="chip">Instagram</a>
            <a href="#" class="chip">Twitter</a>
            <a href="#" class="chip">YouTube</a>
          </div>
        </article>
      </div>
    </section>

    <footer>
      <div class="muted">© 2025 Clube do Fã — Criado com paixão por torcedores</div>
    </footer>
  </main>

  <div class="modal" id="modal" onclick="closeModal()">
    <div class="inner" onclick="event.stopPropagation()">
      <img id="modalImg" src="" alt="ampliada">
    </div>
  </div>

  <script>
    function openModal(src){document.getElementById('modalImg').src = src; document.getElementById('modal').style.display = 'flex'}
    function closeModal(){document.getElementById('modal').style.display = 'none'}
    const toggle = document.getElementById('toggleTheme');
    toggle.addEventListener('click', ()=>{
      if(document.documentElement.style.getPropertyValue('--bg') === 'linear-gradient(180deg, #ffffff 0%, #f7fafc 100%)'){
        document.documentElement.style.setProperty('--bg','linear-gradient(180deg, #071126 0%, #071a2a 100%)');
        toggle.textContent = 'Modo claro';
      } else {
        document.documentElement.style.setProperty('--bg','linear-gradient(180deg, #ffffff 0%, #f7fafc 100%)');
        toggle.textContent = 'Modo escuro';
      }
    });
  </script>
</body>
</html>
