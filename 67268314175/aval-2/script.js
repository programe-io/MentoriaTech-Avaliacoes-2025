// Espera o conteúdo da página carregar
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona o botão e o parágrafo
    const botao = document.getElementById("meuBotao");
    const texto = document.getElementById("meuTexto");

    // Quando o botão for clicado...
    botao.addEventListener("click", function() {
        texto.textContent = "Você clicou no botão!";
        alert("Ação realizada com sucesso!");
    });
});
