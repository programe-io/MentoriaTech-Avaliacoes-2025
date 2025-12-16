// Aguarda o carregamento completo do HTML
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todos os links "Ver receita"
    const linksReceitas = document.querySelectorAll("article a");

    // Percorre cada link
    linksReceitas.forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault(); // impede recarregar a página

            // Nome da receita (h3 do card)
            const nomeReceita = this.parentElement.querySelector("h3").innerText;

            // Tempo da receita (span do card)
            const tempoReceita = this.parentElement.querySelector("span").innerText;

            // Mensagem exibida
            alert(
                "🍽 Receita selecionada:\n\n" +
                "Nome: " + nomeReceita + "\n" +
                "Tempo: " + tempoReceita + "\n\n" +
                "Receita rápida e deliciosa!"
            );
        });
    });

});
