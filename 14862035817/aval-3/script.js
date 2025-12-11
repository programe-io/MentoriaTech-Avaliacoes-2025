console.log("Página carregada com sucesso!");

// Exemplo: evento simples nos cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Você clicou em um post!");
    });
});