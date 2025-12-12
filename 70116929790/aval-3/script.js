// -----------------------------
// HÁBITOS DE JS – EXEMPLOS DOM
// -----------------------------

// Alterar o título no HEADER
const header = document.querySelector("header h1");
header.innerText = "Hábitos de Estudo com JavaScript";

// Mudar cor do span dentro do header
const destaque = document.querySelector("header span");
destaque.style.color = "orange";

// Navegação: destacar o primeiro item do NAV
const primeiroMenu = document.querySelector("nav ul li a");
primeiroMenu.style.fontSize = "18px";

// SECTION: alterar conteúdo
const secaoIntroducao = document.querySelector("section#introducao");
secaoIntroducao.style.background = "#e7f3ff";

// ARTICLE: criação dinâmica
const novoArtigo = document.createElement("article");
novoArtigo.innerHTML = `
    <h3>Artigo Gerado via JavaScript</h3>
    <p>Esse conteúdo foi adicionado automaticamente ao site.</p>
`;
document.querySelector("section#conteudo").appendChild(novoArtigo);

// ASIDE: botão para esconder/mostrar
const aside = document.querySelector("aside");
aside.style.cursor = "pointer";

aside.addEventListener("click", () => {
    aside.style.display =
        aside.style.display === "none" ? "block" : "none";
});

// MAIN: alterar borda ao passar o mouse
const main = document.querySelector("main");
main.addEventListener("mouseover", () => {
    main.style.border = "2px solid #4a90e2";
});
main.addEventListener("mouseout", () => {
    main.style.border = "none";
});

// DIV: trocar cor ao clicar
const caixaExtra = document.querySelector("div");
caixaExtra.addEventListener("click", () => {
    caixaExtra.style.background = "#ffe7c4";
});

// IMG: trocar imagem ao passar o mouse
const imagem = document.querySelector("img");
imagem.addEventListener("mouseover", () => {
    imagem.src = "imagem-alternativa.jpg";
});
imagem.addEventListener("mouseout", () => {
    imagem.src = "imagem-estudo.jpg";
});

// SPAN: adicionar efeito de destaque
destaque.addEventListener("click", () => {
    destaque.style.background = "yellow";
});

// FOOTER: inserir ano automaticamente
const footer = document.querySelector("footer");
footer.innerHTML = `© ${new Date().getFullYear()} – Hábitos JS`;
