function enviarMensagem() {
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome.trim() === "" || mensagem.trim() === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Obrigado pela mensagem, " + nome + "!");
}

