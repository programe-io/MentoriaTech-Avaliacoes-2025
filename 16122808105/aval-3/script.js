// Aqui você pode adicionar interações futuramente.
// Exemplo simples de click no card:

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Card clicado!");
    });
});
