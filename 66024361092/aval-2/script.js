/* ==== RESET ==== */
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial,Helvetica,sans-serif;background:#0f172a;color:#e2e8f0;line-height:1.6}
img{max-width:100%;display:block;border-radius:10px}

/* ==== HEADER ==== */
header{background:#1e293b;padding:24px 16px;text-align:center;color:#fff}
header h1{font-size:32px;margin-bottom:6px}
header p{color:#cbd5e1;font-size:15px}

/* ==== NAV ==== */
nav{background:#334155;display:flex;justify-content:center;gap:20px;padding:12px}
nav a{color:#cbd5e1;text-decoration:none;font-weight:bold;transition:0.2s}
nav a:hover{color:#38bdf8;transform:translateY(-2px)}

/* ==== LAYOUT PRINCIPAL ==== */
main{max-width:900px;margin:30px auto;padding:16px}

/* ==== SEÇÕES ==== */
section{margin-bottom:40px}
section h2{margin-bottom:16px;color:#f1f5f9}

/* ==== ARTIGOS ==== */
article{background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;box-shadow:0 4px 14px rgba(0,0,0,0.25);transition:0.2s}
article:hover{transform:translateY(-4px);box-shadow:0 6px 20px rgba(0,0,0,0.3)}
article h2{margin-bottom:10px}
article p{color:#cbd5e1}
article ul{margin-top:12px;padding-left:20px}
article li{margin-bottom:6px}

/* ==== ASIDE ==== */
aside{background:#1e293b;padding:20px;border-radius:12px;margin-top:20px;box-shadow:0 4px 12px rgba(0,0,0,0.25)}
aside h3{margin-bottom:10px;color:#f8fafc}

/* ==== FOOTER ==== */
footer{background:#1e293b;color:#fff;padding:20px;text-align:center;margin-top:40px}
footer small{color:#94a3b8}

/* ==== LINKS ==== */
a{cursor:pointer}

/* ==== RESPONSIVIDADE ==== */
@media (max-width:720px){
  nav{flex-wrap:wrap;gap:12px}
  header h1{font-size:26px}
  main{padding:10px}
  article{padding:16px}
}
