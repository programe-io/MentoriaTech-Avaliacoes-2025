function favoritar(nome) {
    alert(nome + " adicionado aos favoritos!");
}

function buscarReceita() {
    const busca = document.getElementById("campoBusca").value.toLowerCase();
    const receitas = document.querySelectorAll(".receita");

    receitas.forEach(receita => {
        const titulo = receita.querySelector("h2").textContent.toLowerCase();

        if (titulo.includes(busca)) {
            receita.style.display = "block";
        } else {
            receita.style.display = "none";
        }
    });
}
