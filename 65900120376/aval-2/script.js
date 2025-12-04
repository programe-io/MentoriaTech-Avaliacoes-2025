// Rolagem automática para os carros
function scrollToCars() {
    document.querySelector("#carros").scrollIntoView({ behavior: "smooth" });
}

// Ação ao clicar em comprar
const botoesCompra = document.querySelectorAll(".comprar-btn");

botoesCompra.forEach(botao => {
    botao.addEventListener("click", () => {
        const carro = botao.dataset.carro;
        alert(`Você selecionou: ${carro}. Em breve entraremos em contato!`);
    });
});
