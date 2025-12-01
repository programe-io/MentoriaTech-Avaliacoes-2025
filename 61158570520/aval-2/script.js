// Menu mobile
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");

btnMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Carrossel simples
const imagens = [
    "https://via.placeholder.com/600x400?text=Look+1",
    "https://via.placeholder.com/600x400?text=Look+2",
    "https://via.placeholder.com/600x400?text=Look+3"
];

let index = 0;
const img = document.getElementById("carousel-img");

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % imagens.length;
    img.src = imagens[index];
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + imagens.length) % imagens.length;
    img.src = imagens[index];
});

// Formulário
document.getElementById("form-contato").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("msg-sucesso").textContent =
        "Mensagem enviada com sucesso! Obrigado pelo contato!";
});
 mn\cf