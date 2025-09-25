// Exibir mensagem de boas-vindas
window.onload = function () {
  alert("Bem-vinda ao meu site, Fernanda!");
};

// Mudar cor do cabeçalho quando o mouse passar por cima
const header = document.querySelector("header");
header.addEventListener("mouseenter", () => {
  header.style.background = "#ff6600";
});
header.addEventListener("mouseleave", () => {
  header.style.background = "orange";
});

// Botão para mostrar/ocultar a galeria
const aside = document.querySelector("aside");
const botao = document.createElement("button");
botao.textContent = "Mostrar/Ocultar Galeria";
botao.style.marginTop = "10px";
aside.appendChild(botao);

const galeria = document.querySelectorAll(".imagem");
botao.addEventListener("click", () => {
  galeria.forEach(img => {
    img.style.display = img.style.display === "none" ? "flex" : "none";
  });
});

// Alterar título da postagem ao clicar nele
const tituloPost = document.querySelector(".postagem h2");
tituloPost.addEventListener("click", () => {
  let novoTitulo = prompt("Digite um novo título para a postagem:");
  if (novoTitulo) {
    tituloPost.textContent = novoTitulo;
  }
});
