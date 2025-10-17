// Quando o botão for clicado, exibe uma curiosidade sobre o futsal
document.getElementById("curiosidadeBtn").addEventListener("click", function () {
    const texto = document.getElementById("curiosidadeTexto");

    texto.textContent = "Você sabia? Ronaldinho Gaúcho, Neymar e Falcão começaram no futsal antes de brilhar no futebol!";
});
