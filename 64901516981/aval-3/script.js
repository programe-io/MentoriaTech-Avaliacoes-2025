// Confirma envio do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Contato enviado com sucesso! Em breve o CETI retornará.");

    this.reset();
});

// Efeito no título
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");
    titulo.style.transition = "0.7s";

    titulo.addEventListener("mouseover", () => {
        titulo.style.color = "#ffea70";
    });

    titulo.addEventListener("mouseout", () => {
        titulo.style.color = "white";
    });
});
