// Espera o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona todos os botões/links "Ver receita"
    const links = document.querySelectorAll("article a");

    // Adiciona evento de clique em cada card
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Pega o nome da receita
            const titulo = this.parentElement.querySelector("h3").innerText;

            // Exibe uma mensagem simples
            alert("Você clicou na receita: " + titulo);
        });
    });

});