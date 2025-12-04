document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const aluno = document.getElementById("aluno").checked;
    const retorno = document.getElementById("retorno");

    if (aluno) {
        retorno.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada. Bom estudo no CETI Joel Ribeiro!`;
    } else {
        retorno.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    }

    retorno.style.color = "#003366";
    retorno.style.fontWeight = "bold";
});
