// Espera o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btn-alerta");

    botao.addEventListener("click", function() {
        alert("Você clicou no botão! 🚀");
    });
});
