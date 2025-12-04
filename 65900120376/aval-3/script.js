document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    alert("Obrigado pela mensagem, " + nome + "! Em breve entraremos em contato.");
});
