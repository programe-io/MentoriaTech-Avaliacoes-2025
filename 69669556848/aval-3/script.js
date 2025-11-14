// Botão da Home
function mostrarMensagem() {
    alert("Obrigado por visitar o site!");
}

// Formulário de contato
function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    document.getElementById("status").innerText =
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    // Aqui você poderia enviar para um servidor real
}
