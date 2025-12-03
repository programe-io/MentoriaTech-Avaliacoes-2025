<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Dietas Saudáveis — Guia Rápido</title>
  <style>
    :root{
      --bg:#fbfbfb; --card:#fff; --accent:#0b8043; --muted:#556;
      --glass:rgba(255,255,255,0.6); --maxw:1000px;
    }
    *{box-sizing:border-box}
    body{font-family:Inter,system-ui,Segoe UI,Arial,sans-serif;margin:0;background:linear-gradient(180deg,#f0fff4,#fbfbfb);color:#042;line-height:1.5}
    .wrap{max-width:var(--maxw);margin:20px auto;padding:18px}
    header{display:flex;justify-content:space-between;align-items:center;gap:12px}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#29b06b)}
    nav a{margin-left:8px;text-decoration:none;color:var(--muted);padding:8px 10px;border-radius:8px;font-weight:600}
    nav a.active{background:rgba(11,128,67,0.12);color:var(--accent)}
    main{margin-top:18px}
    .hero{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 8px 30px rgba(2,40,20,0.04);display:flex;justify-content:space-between;gap:12px;align-items:center}
    .hero h1{margin:0;font-size:1.3rem;color:var(--accent)}
    .controls{display:flex;gap:8px;align-items:center}
    input,select,textarea,button{font-size:0.95rem}
    input[type="search"], select{padding:10px;border-radius:10px;border:1px solid #e6efe8}
    button{background:var(--accent);color:#fff;border:0;padding:10px 12px;border-radius:10px;cursor:pointer}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-top:16px}
    .card{background:var(--card);padding:14px;border-radius:10px;border:1px solid rgba(2,40,20,0.04)}
    .tag{display:inline-block;background:#eef9f1;color:var(--accent);padding:6px 9px;border-radius:999px;font-weight:700}
    .small{color:var(--muted);font-size:0.9rem}
    .diets .diet{display:flex;flex-direction:column;gap:8px}
    .actions{display:flex;gap:8px;flex-wrap:wrap}
    footer{margin-top:20px;text-align:center;color:var(--muted);font-size:0.9rem}
    @media(min-width:900px){ .hero{padding:28px} }
    /* modal simples */
    .modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(3,10,5,0.45)}
    .modal .box{background:#fff;padding:18px;border-radius:12px;max-width:720px;width:94%;box-shadow:0 14px 50px rgba(2,40,20,0.25)}
    .close{background:transparent;border:0;color:var(--muted);cursor:pointer;font-weight:700}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <div>
          <div style="font-weight:800">Dietas Saudáveis</div>
          <div style="font-size:0.85rem;color:var(--muted)">Guia prático e comparações</div>
        </div>
      </div>
      <nav id="nav">
        <a href="#home" data-target="home" class="active">Início</a>
        <a href="#diets" data-target="diets">Dietas</a>
        <a href="#planner" data-target="planner">Planejador</a>
        <a href="#articles" data-target="articles">Artigos</a>
        <a href="#contact" data-target="contact">Contato</a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div>
          <h1>Escolha uma dieta que combine com seu objetivo</h1>
          <p class="small" style="margin-top:6px">Comparações rápidas, vantagens, restrições e exemplo de cardápio.</p>
        </div>
        <div class="controls">
          <input id="search" type="search" placeholder="Pesquisar dieta (ex: vegana, cetogênica)" />
          <select id="filter">
            <option value="">Todas</option>
            <option value="weight">Perda de peso</option>
            <option value="health">Saúde</option>
            <option value="performance">Desempenho</option>
            <option value="plant">Base vegetal</option>
          </select>
          <button id="go">Ir</button>
        </div>
      </section>

      <section id="diets" style="margin-top:16px">
        <div class="grid diets" id="diets-list"></div>
      </section>

      <section id="planner" style="margin-top:16px" hidden>
        <div class="card">
          <h2>Planejador rápido</h2>
          <p class="small">Selecione uma dieta e gere um exemplo de cardápio diário.</p>
          <div style="display:flex;gap:8px;margin-top:10px">
            <select id="planner-diet"></select>
            <button id="generate">Gerar cardápio</button>
          </div>
          <div id="plan-result" style="margin-top:12px" class="small"></div>
        </div>
      </section>

      <section id="articles" style="margin-top:16px" hidden>
        <div class="card">
          <h2>Artigos</h2>
          <article style="margin-top:10px">
            <h3>Diferenças entre dieta low-carb e cetogênica</h3>
            <div class="small">Por NutriLab • 12 Mar 2025</div>
            <p class="small" style="margin-top:8px">Explicações simples sobre restrição de carboidratos e quando cada abordagem é indicada.</p>
            <div style="margin-top:8px"><button class="read-more" data-article="a1">Ler mais</button></div>
          </article>
        </div>
      </section>

      <section id="contact" style="margin-top:16px" hidden>
        <div class="card">
          <h2>Contato</h2>
          <p class="small">Dúvidas ou sugestões? Envie uma mensagem (simulação).</p>
          <form id="contact-form" style="margin-top:10px">
            <input id="name" type="text" placeholder="Seu nome" required style="padding:10px;border-radius:8px;border:1px solid #eef"/>
            <div style="height:8px"></div>
            <input id="email" type="email" placeholder="E-mail" required style="padding:10px;border-radius:8px;border:1px solid #eef"/>
            <div style="height:8px"></div>
            <textarea id="msg" rows="4" placeholder="Mensagem" style="padding:10px;border-radius:8px;border:1px solid #eef"></textarea>
            <div style="margin-top:8px"><button type="submit">Enviar</button></div>
            <p id="cfb" class="small" style="color:green;display:none;margin-top:8px">Mensagem enviada (simulação).</p>
          </form>
        </div>
      </section>

      <footer>
        © 2025 • Dietas Saudáveis — Informativo. Consulte um profissional antes de começar qualquer dieta.
      </footer>
    </main>
  </div>

  <!-- Modal simples -->
  <div class="modal" id="modal">
    <div class="box" role="dialog" aria-modal="true">
      <div id="modal-content"></div>
      <div style="margin-top:12px;text-align:right"><button class="close" id="modal-close">Fechar</button></div>
    </div>
  </div>

  <script>
  (function(){
    const diets = [
      { id: 'keto', name:'Cetogênica (Keto)', goal:'weight', description:'Baixos carboidratos, alto teor de gorduras; usado para perda de peso e controle glicêmico. Requer acompanhamento.', pros:['Perda de peso inicial rápida','Redução de fome'],'cons':['Restritiva','Pode causar "keto flu"'] ,
        sample:['Café: ovos e abacate','Almoço: salmão e brócolis','Jantar: frango com salada'] },
      { id: 'med', name:'Dieta Mediterrânea', goal:'health', description:'Foco em alimentos não processados, azeite, peixes, vegetais e grãos integrais. Ótima para saúde cardiovascular.', pros:['Equilibrada','Evidência científica'],'cons':['Menos focada em perda rápida'] ,
        sample:['Café: iogurte com frutas','Almoço: salada com grão-de-bico','Jantar: peixe grelhado'] },
      { id: 'vegan', name:'Vegana', goal:'plant', description:'Sem produtos de origem animal; rica em fibras e fitonutrientes. Requer planejamento para proteínas e B12.', pros:['Sustentável','Reduz risco de certas doenças'],'cons':['Necessita suplementação às vezes'] ,
        sample:['Café: smoothie verde','Almoço: tofu com quinoa','Jantar: curry de lentilhas'] },
      { id: 'paleo', name:'Paleo', goal:'health', description:'Alimentos "integrais" semelhantes aos caçadores-coletores; evita grãos e laticínios.', pros:['Baixo processamento'],'cons':['Restritiva em alguns grupos alimentares'] ,
        sample:['Café: omelete com vegetais','Almoço: bife e salada','Jantar: peixe e aspargos'] },
      { id: 'intermit', name:'Jejum Intermitente', goal:'weight', description:'Janela de alimentação limitada por horário; pode ajudar controle calórico e sensibilidade à insulina.', pros:['Prático','Pode reduzir ingestão total'],'cons':['Não é uma "dieta" por si só'] ,
        sample:['Café: água e café preto (jejum)','Almoço: refeições equilibradas na janela','Jantar: leve conforme janela'] }
    ];

    const el = id => document.getElementById(id);
    const sections = ['home','diets','planner','articles','contact'];

    function renderDiets(list){
      const root = el('diets-list');
      root.innerHTML = '';
      list.forEach(d=>{
        const card = document.createElement('div');
        card.className = 'card diet';
        card.innerHTML = `
          <div style="display:flex;justify-content:space-between;align-items:start">
            <div>
              <div style="font-weight:800">${d.name}</div>
              <div class="small" style="margin-top:6px">${d.description}</div>
            </div>
            <div style="text-align:right">
              <span class="tag">${d.goal === 'plant' ? 'Base vegetal' : (d.goal === 'weight' ? 'Perda de peso' : 'Saúde')}</span>
            </div>
          </div>
          <div class="actions" style="margin-top:10px">
            <button class="btn-detail" data-id="${d.id}">Detalhes</button>
            <button class="btn-sample" data-id="${d.id}">Exemplo</button>
          </div>
        `;
        root.appendChild(card);
      });

      // handlers
      root.querySelectorAll('.btn-detail').forEach(b=>{
        b.addEventListener('click', e=>{
          const id = e.target.dataset.id;
          const d = diets.find(x=>x.id===id);
          showModal(`<h2>${d.name}</h2>
            <p class="small">${d.description}</p>
            <p><strong>Prós:</strong> ${d.pros.join(', ')}</p>
            <p><strong>Contras:</strong> ${d.cons.join(', ')}</p>`);
        });
      });
      root.querySelectorAll('.btn-sample').forEach(b=>{
        b.addEventListener('click', e=>{
          const id = e.target.dataset.id;
          const d = diets.find(x=>x.id===id);
          showModal(`<h3>Exemplo de cardápio — ${d.name}</h3><ul>${d.sample.map(s=>`<li>${s}</li>`).join('')}</ul>`);
        });
      });
    }

    function showModal(html){
      el('modal-content').innerHTML = html;
      el('modal').style.display = 'flex';
    }

    function hideModal(){ el('modal').style.display = 'none'; el('modal-content').innerHTML = ''; }

    function applyFilter(){
      const q = el('search').value.trim().toLowerCase();
      const cat = el('filter').value;
      const filtered = diets.filter(d=>{
        const text = (d.name + ' ' + d.description).toLowerCase();
        const okQ = !q || text.includes(q);
        const okCat = !cat || (cat === 'weight' ? d.goal === 'weight' : cat === 'plant' ? d.goal === 'plant' : cat === 'performance' ? d.goal === 'performance' : d.goal === cat || cat === '');
        return okQ && okCat;
      });
      renderDiets(filtered);
      // preenche planner select
      populatePlanner(filtered.length ? filtered : diets);
      if(q || cat) navigateTo('diets');
    }

    function populatePlanner(list){
      const sel = el('planner-diet');
      sel.innerHTML = '';
      list.forEach(d=>{ const o = document.createElement('option'); o.value = d.id; o.textContent = d.name; sel.appendChild(o); });
    }

    function generatePlan(){
      const id = el('planner-diet').value;
      const d = diets.find(x=>x.id===id);
      if(!d) return;
      const html = `<strong>${d.name} — Cardápio diário (exemplo)</strong><ul>${d.sample.map(s=>`<li>${s}</li>`).join('')}</ul>`;
      el('plan-result').innerHTML = html;
      navigateTo('planner');
    }

    function navigateTo(name){
      sections.forEach(s=>{
        const sec = el(s);
        if(!sec) return;
        sec.hidden = s !== name;
        const a = document.querySelector(`#nav a[data-target="${s}"]`);
        if(a) a.classList.toggle('active', s===name);
      });
      history.replaceState(null,'',`#${name}`);
    }

    // events
    document.addEventListener('DOMContentLoaded', ()=>{
      renderDiets(diets);
      populatePlanner(diets);

      // initial section
      const initial = (location.hash||'#home').replace('#','');
      navigateTo(sections.includes(initial) ? initial : 'home');

      el('search').addEventListener('input', debounce(applyFilter,200));
      el('filter').addEventListener('change', applyFilter);
      el('go').addEventListener('click', applyFilter);

      document.querySelectorAll('#nav a').forEach(a=>{
        a.addEventListener('click', e=>{ e.preventDefault(); navigateTo(a.dataset.target); });
      });

      el('generate').addEventListener('click', generatePlan);

      el('modal-close').addEventListener('click', hideModal);
      el('modal').addEventListener('click', e=>{ if(e.target === el('modal')) hideModal(); });

      el('contact-form').addEventListener('submit', e=>{
        e.preventDefault();
        el('cfb').style.display = 'block';
        el('contact-form').reset();
      });

      document.querySelectorAll('.read-more').forEach(b=>{
        b.addEventListener('click', ()=> showModal('<h3>Artigo — Diferenças entre low-carb e cetogênica</h3><p class="small">Conteúdo de exemplo...</p>'));
      });
    });

    function debounce(fn,wait=200){ let t; return function(...a){ clearTimeout(t); t=setTimeout(()=>fn.apply(this,a), wait); }; }

  })();
  </script>
</body>
</html>