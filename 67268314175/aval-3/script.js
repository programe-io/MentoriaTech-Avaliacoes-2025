// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function() {

    // Seleciona todos os links do menu lateral
    const linksMenu = document.querySelectorAll("aside ul li a");

    linksMenu.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // evita o comportamento padrão de link
            alert(`Você clicou em: ${link.textContent}`);
        });
    });

    // Exemplo de contador de cliques em botões
    let contador = 0;
    const botao = document.createElement("button");
    botao.textContent = "Clique aqui!";
    document.body.appendChild(botao);

    const contadorTexto = document.createElement("p");
    contadorTexto.textContent = `Você clicou ${contador} vezes.`;
    document.body.appendChild(contadorTexto);

    botao.addEventListener("click", function() {
        contador++;
        contadorTexto.textContent = `Você clicou ${contador} vezes.`;
    });

});
