<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viajante pelo Mundo 🌎</title>
  <style>
    /* === TEMA ESCURO === */
    :root{
      --bg: #071226;
      --bg-2: #081026;
      --card: #0b1220;
      --accent: #ff6b6b;
      --accent-2: #ffaa7f;
      --muted: #94a3b8;
      --glass: rgba(255,255,255,0.03);
      --radius: 14px;
      --text: #e6eef8;
      --logo-text: #0b1220;
      color-scheme: dark;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
    *{box-sizing:border-box}
    body{
      margin:32px;
      background: linear-gradient(180deg,var(--bg) 0%, var(--bg-2) 60%);
      color:var(--text);
      line-height:1.6;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
    }
    a{color:var(--accent);text-decoration:none}
    header{
      display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:24px
    }
    .brand{display:flex;gap:12px;align-items:center}
    .logo{
      width:56px;height:56px;border-radius:12px;
      background:linear-gradient(135deg,var(--accent),var(--accent-2));
      display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--logo-text)
    }
    nav{display:flex;gap:14px;align-items:center}
    nav a{padding:8px 12px;border-radius:10px;font-size:0.95rem}
    nav a:hover{background:var(--glass)}

    .container{display:grid;grid-template-columns:1fr 320px;gap:28px;align-items:start}
    .card{
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      padding:18px;border-radius:var(--radius);
      box-shadow:0 6px 18px rgba(2,6,23,0.6)
    }
    .hero{display:flex;gap:20px;align-items:center}
    .hero img{width:240px;height:140px;border-radius:12px;object-fit:cover}
    .posts{display:grid;gap:16px;margin-top:18px}
    article.post{display:grid;grid-template-columns:160px 1fr;gap:14px;padding:12px;border-radius:12px}
    article.post img{width:100%;height:120px;object-fit:cover;border-radius:8px}
    article.post h3{margin:0 0 6px 0}
    .meta{font-size:0.85rem;color:var(--muted)}

    aside{position:relative}
    .search{display:flex;gap:8px;margin-bottom:12px}
    .search input{
      flex:1;padding:8px 12px;background:transparent;
      border:1px solid rgba(255,255,255,0.04);
      border-radius:10px;color:inherit;outline:none
    }
    .widget{margin-bottom:14px}
    .tags{display:flex;flex-wrap:wrap;gap:8px}
    .tag{padding:6px 10px;border-radius:999px;ba
