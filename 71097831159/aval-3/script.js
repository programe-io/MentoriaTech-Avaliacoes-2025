// Mensagem no console só para confirmar que o JS carregou
console.log("Projeto carregado com sucesso!");

// Quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página pronta.");
    });

    // Exemplo de interação: clicar nos cards
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
                alert(`Você clicou no Card ${index + 1}`);
                    });
                    });