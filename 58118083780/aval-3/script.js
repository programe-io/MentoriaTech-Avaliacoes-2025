document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Atualiza o conteúdo do SPAN dentro do parágrafo
    document.querySelector("#resultado span").innerText =
        "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso para o CETI Joel Ribeiro.";

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
});
