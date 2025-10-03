document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagem-sucesso").textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
    this.reset();
});
