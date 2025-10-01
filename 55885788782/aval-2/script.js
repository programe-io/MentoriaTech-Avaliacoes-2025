// ==================== ESTILOS (CSS via JS) ====================
const style = document.createElement("style");
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  body {
    background: #f4f4f4;
    color: #333;
  }
  header {
    background: orange;
    color: white;
    text-align: center;
    padding: 40px 20px;
  }
  nav {
    background: #333;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
  }
  nav a {
    color: white;
    padding: 14px 20px;
    text-decoration: none;
    display: block;
  }
  nav a:hover {
    background: #555;
  }
  .menu-btn {
    display: none;
    background: #333;
    color: white;
    padding: 14px 20px;
    cursor: pointer;
    text-align: center;
  }
  .container {
    display: flex;
    padding: 20px;
    gap: 20px;
  }
  aside {
    flex: 1;
    min-width: 200px;
    background: #eaeaea;
    padding: 15px;
    border-radius: 8px;
  }
  aside h2 {
    margin-bottom: 10px;
  }
  aside p {
    margin-bottom: 15px;
    line-height: 1.5;
  }
  aside img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  main {
    flex: 3;
  }
  .post {
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  .post img {
    max-width: 100%;
    border-radius: 8px;
    margin: 10px 0;
  }
  .post h2 {
    margin-bottom: 5px;
  }
  .post small {
    color: gray;
    display: block;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    aside { order: 2; }
    main { order: 1; }
  }
  @media (max-width: 480px) {
    header { padding: 20px 10px; }
    header h1 { font-size: 1.4rem; }
    header p { font-size: 0.9rem; }
    .container { padding: 10px; }
    aside, .post { padding: 10px; }
    .menu-btn { display: block; }
    nav { flex-direction: column; max-height: 0; }
    nav.show { max-height: 300px; }
  }
`;
document.head.appendChild(style);

// ==================== HEADER ====================
const header = document.createElement("header");
header.innerHTML = `
  <h1>Site do(a) Allicia</h1>
  <p>Um pouco sobre a Allicia</p>
`;
document.body.appendChild(header);

// ==================== MENU (botão e navbar) ====================
const menuBtn = document.createElement("div");
menuBtn.className = "menu-btn";
menuBtn.textContent = "☰ Menu";
document.body.appendChild(menuBtn);

const nav = document.createElement("nav");
nav.id = "navbar";
nav.innerHTML = `
  <a href="#">Início</a>
  <a href="#">Página 2</a>
  <a href="#">Página 3</a>
  <a href="#">Página 4</a>
`;
document.body.appendChild(nav);

// ==================== CONTEÚDO PRINCIPAL ====================
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

// LADO ESQUERDO - Aside
const aside = document.createElement("aside");
aside.innerHTML = `
  <h2>Sobre Mim</h2>
  <div class="imagem">Fotinha</div>
  <p>MEU NOME É ALLICIA E ESTUDO NO PJ</p>

  <h2>Minha Bio</h2>
  <p>EU SOU DONA DE FRUTARIA E GANHO 500K POR MÊS</p>

  <h2>Minha Galeria</h2>
  <img src="foto1.jpg" alt="Foto 1">
  <img src="foto2.jpg" alt="Foto 2">
`;
container.appendChild(aside);

// LADO DIREITO - Main
const main = document.createElement("main");
main.innerHTML = `
  <article class="post">
    <h2>Meu Primeiro Post</h2>
    <small>Publicado em 01/10/2025</small>
    <p>Esse é um exemplo de conteúdo principal.</p>
    <img src="foto3.jpg" alt="Imagem do post">
  </article>
`;
container.appendChild(main);

// ==================== SCRIPT DO MENU MOBILE ====================
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
