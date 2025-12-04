document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const fan = document.getElementById("fan").checked;
    const retorno = document.getElementById("retorno");

    if (fan) {
        retorno.textContent = `Obrigado, ${nome}! Um verdadeiro fã do Mundo Invertido!`;
    } else {
        retorno.textContent = `Mensagem enviada! Obrigado, ${nome}.`;
    }

    retorno.style.color = "red";
});
