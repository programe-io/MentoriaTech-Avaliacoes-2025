document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem").value;

    document.getElementById("resultado").innerText =
        "Obrigado, " + nome + "! Sua mensagem foi enviada:\n" + mensagem;

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
});
