// ----------- ESTILOS VIA JAVASCRIPT -----------
const css = `
    body {
        margin: 0;
        font-family: "Georgia", serif;
        background-color: #1b1b1b;
        color: #f0f0f0;
    }

    header {
        background: #2e2e2e;
        padding: 20px;
        text-align: center;
        border-bottom: 3px solid #7a00ff;
    }

    nav {
        background: #1f1f1f;
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 10px;
    }

    nav a {
        color: #c7a8ff;
        text-decoration: none;
        font-weight: bold;
    }

    nav a:hover {
        color: white;
    }

    /* LAYOUT PRINCIPAL COM ASIDE */
    .layout {
        display: flex;
        max-width: 1200px;
        margin: auto;
        padding: 20px;
        gap: 20px;
    }

    aside {
        width: 260px;
        background: #222;
        padding: 20px;
        height: fit-content;
        border-radius: 10px;
        border: 1px solid #444;
        position: sticky;
        top: 20px;
    }

    aside h2 {
        color: #c48bff;
    }

    aside ul {
        list-style: none;
        padding: 0;
    }

    aside ul li {
        margin: 10px 0;
    }

    aside a {
        color: #b68cff;
        text-decoration: none;
    }

    aside a:hover {
        color: white;
    }

    section {
        flex: 1;
        background: #262626;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    h1, h2 {
        color: #b379ff;
    }

    .classes {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .classe-card {
        background: #333;
        padding: 15px;
        border-radius: 10px;
        flex: 1;
        min-width: 200px;
    }

    footer {
        text-align: center;
        padding: 20px;
        background: #2e2e2e;
        margin-top: 40px;
        color: #aaa;
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        margin: 5px 0 15px;
        background: #3a3a3a;
        border: 1px solid #555;
        color: white;
        border-radius: 5px;
    }

    button {
        background: #7a00ff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 6px;
        cursor: pointer;
    }

    button:hover {
        background: #9d47ff;
    }
`;

const style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);


// ----------- CONTEÚDO VIA JAVASCRIPT -----------

// header
const header = document.createElement("header");
header.innerHTML = `
    <h1>MUNDO ARCANO</h1>
    <p>Um RPG de fantasia épica</p>
`;
document.body.appendChild(header);

// nav
const nav = document.createElement("nav");
nav.innerHTML = `
    <a href="#historia">História</a>
    <a href="#classes">Classes</a>
    <a href="#ficha">Ficha do Personagem</a>
`;
document.body.appendChild(nav);

// layout principal
const layout = document.createElement("div");
layout.className = "layout";
document.body.appendChild(layout);

// ASIDE (barra lateral)
const aside = document.createElement("aside");
aside.innerHTML = `
    <h2>📌 Menu Rápido</h2>
    <ul>
        <li><a href="#historia">História do Mundo</a></li>
        <li><a href="#classes">Classes Jogáveis</a></li>
        <li><a href="#ficha">Criar Personagem</a></li>
    </ul>

    <h2>💡 Dica de RPG</h2>
    <p>Interprete seu personagem com personalidade única para enriquecer a aventura!</p>

    <h2>🌍 Mundo</h2>
    <p>As Fontes Arcanas estão despertando... prepare-se para o caos.</p>
`;
layout.appendChild(aside);

// coluna principal
const mainColumn = document.createElement("div");
mainColumn.style.flex = "1";
layout.appendChild(mainColumn);

// seção história
const historia = document.createElement("section");
historia.id = "historia";
historia.innerHTML = `
    <h2>📖 História</h2>
    <p>
        Em um mundo onde a magia flui como rios invisíveis, quatro reinos disputam o controle 
        das Fontes Arcanas — cristais ancestrais capazes de alterar o destino. 
        Criaturas antigas despertam, heróis emergem e alianças são testadas.
    </p>
`;
mainColumn.appendChild(historia);

// seção classes
const classes = document.createElement("section");
classes.id = "classes";
classes.innerHTML = `
    <h2>⚔️ Classes</h2>

    <div class="classes">
        <div class="classe-card">
            <h3>Guerreiro</h3>
            <p>Combatentes treinados, especialistas em força e resistência.</p>
        </div>

        <div class="classe-card">
            <h3>Mago</h3>
            <p>Dominam as artes arcanas, manipulando energia pura.</p>
        </div>

        <div class="classe-card">
            <h3>Arqueiro</h3>
            <p>Ágeis e precisos, atacam à distância com letalidade.</p>
        </div>

        <div class="classe-card">
            <h3>Ladino</h3>
            <p>Mestres da furtividade, ataques surpresa e venenos.</p>
        </div>
    </div>
`;
mainColumn.appendChild(classes);

// seção ficha
const ficha = document.createElement("section");
ficha.id = "ficha";
ficha.innerHTML = `
    <h2>🧙 Ficha de Personagem</h2>

    <form>
        <label>Nome do Personagem:</label>
        <input type="text" placeholder="Ex: Aelion Sombrabril">

        <label>Raça:</label>
        <input type="text" placeholder="Humano, Elfo, Anão, etc">

        <label>Classe:</label>
        <input type="text" placeholder="Guerreiro, Mago...">

        <label>História do Personagem:</label>
        <textarea rows="5" placeholder="Descreva a origem, personalidade e feitos do personagem"></textarea>

        <button type="submit">Salvar Ficha</button>
    </form>
`;
mainColumn.appendChild(ficha);

// footer
const footer = document.createElement("footer");
footer.innerHTML = `<p>© 2025 — Mundo Arcano RPG</p>`;
document.body.appendChild(footer);
