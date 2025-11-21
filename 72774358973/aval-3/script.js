// Mensagem de boas-vindas ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site carregado com sucesso!");
});

// Efeito ao clicar em qualquer imagem da galeria
const imagens = document.querySelectorAll(".galeria img");

imagens.forEach(img => {
    img.addEventListener("click", () => {
        alert("Você clicou em uma imagem da novela!");
    });
});