// Cria o header
const header = document.createElement("header");
const titulo = document.createElement("h1");
titulo.textContent = "Meu Site";
const subtitulo = document.createElement("p");
subtitulo.textContent = "Bem-vindo ao meu site";
header.appendChild(titulo);
header.appendChild(subtitulo);

// Cria a barra de navegação
const nav = document.createElement("nav");
["Início", "Página 2", "Página 3", "Página 4"].forEach(texto => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = texto;
    nav.appendChild(link);
});

// Cria a seção principal
const section = document.createElement("section");
section.id = "row";

const aside = document.createElement("aside");
const h2 = document.createElement("h2");
h2.textContent = "Eu me chamo Jeferson, tenho 16 anos e estou cursando Desenvolvimento de Sistemas.";
const h3 = document.createElement("h3");
h3.textContent = "Fotinha";

// Criando uma imagem falsa (caixa cinza)
const fakeImage = document.createElement("div");
fakeImage.className = "fakeimag
