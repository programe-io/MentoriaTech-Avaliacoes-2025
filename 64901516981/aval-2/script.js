document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");

    this.reset();
});

// Pequena interação visível no site
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");
    titulo.style.transition = "0.8s";
    titulo.addEventListener("mouseover", () => {
        titulo.style.color = "#fff5f8";
    });
    titulo.addEventListener("mouseout", () => {
        titulo.style.color = "white";
    });
});
