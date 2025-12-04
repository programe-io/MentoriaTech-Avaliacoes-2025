document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("status").innerText =
        "Mensagem enviada com sucesso!";

    this.reset();
});
