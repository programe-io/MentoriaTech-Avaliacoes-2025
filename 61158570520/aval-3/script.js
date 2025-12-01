// Menu mobile
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");

btnMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Carrossel
const imagens = [
    "https://via.placeholder.com/600x400?text=CETI+Joel+Ribeiro+1",
    "https://via.placeholder.com/600x400?text=CETI+Joel+Ribeiro+2",
    "https://via.placeholder.com/600x400?text=CETI+Joel+Ribeiro+3"
];

let i = 0;
const img = document.getElementById("carousel-img");

document.querySelector(".next").addEventListener("click", () => {
    i = (i + 1) % imagens.length;
    img.src = imagens[i];
});

document.querySelector(".prev").addEventListener("click", () => {
    i = (i - 1 + imagens.length) % imagens.length;
    img.src = imagens[i];
});

// Formulário
document.getElementById("form-contato").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("msg").textContent = "Mensagem enviada com sucesso!";
});
