/* ---------- Estilo geral da página ---------- */
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #0d0d0d;
    color: #ffffff;
    margin: 0;
    padding: 0;
}

/* Centralizar todo o conteúdo */
main, header, footer {
    width: 90%;
    max-width: 900px;
    margin: auto;
    padding: 20px 0;
}

/* ---------- Cabeçalho ---------- */
header {
    text-align: center;
    margin-top: 20px;
}

header h1 {
    color: #00e1ff;
    text-shadow: 0px 0px 10px #00e1ff;
}

nav a {
    color: #ffffff;
    text-decoration: none;
    margin: 0 8px;
    font-weight: bold;
}

nav a:hover {
    color: #00e1ff;
}

/* ---------- Seções e Artigos ---------- */
h2, h3 {
    color: #00e1ff;
}

/* Artigos */
article {
    background-color: #1a1a1a;
    border: 1px solid #333;
    padding: 15px;
    border-radius: 10px;
}

article img {
    width: 100%;
    border-radius: 10px;
}

/* Linha divisória */
hr {
    border: none;
    border-top: 1px solid #333;
    margin: 30px 0;
}

/* ---------- Rodapé ---------- */
footer {
    text-align: center;
    font-size: 14px;
    padding-bottom: 30px;
}

footer a {
    color: #00e1ff;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
