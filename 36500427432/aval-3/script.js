// 🔍 CAMPO DE PESQUISA
const campoPesquisa = document.getElementById("campo-pesquisa");

// Função de busca
campoPesquisa.addEventListener("input", function () {
    const termo = campoPesquisa.value.toLowerCase(); // texto digitado
    const cards = document.querySelectorAll(".carro"); // todos os cards

    cards.forEach(card => {
        const nomeCarro = card.querySelector("h3").textContent.toLowerCase();
        const descricao = card.querySelector("p").textContent.toLowerCase();

        // Se o nome ou a descrição contiver o termo digitado, mostra o card
        if (nomeCarro.includes(termo) || descricao.includes(termo)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
