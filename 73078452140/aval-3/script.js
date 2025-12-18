// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       INTERAÇÃO COM CARDS DE RECEITAS
    =============================== */
    const botoesReceita = document.querySelectorAll("article a");

    botoesReceita.forEach(function (botao) {
        botao.addEventListener("click", function (event) {
            event.preventDefault();
            alert("🍽️ Receita simples, rápida e deliciosa!");
        });
    });

    /* ===============================
       PLANO DE ESTUDOS - DESTAQUE
    =============================== */
    const blocosEstudo = document.querySelectorAll("aside div");

    blocosEstudo.forEach(function (bloco) {
        bloco.addEventListener("click", function () {
            bloco.style.backgroundColor = "#fff3e0";
            bloco.style.padding = "8px";
            bloco.style.borderRadius = "6px";
        });
    });

    /* ===============================
       EXERCÍCIO DE RESPIRAÇÃO
    =============================== */
    const circulo = document.querySelector(".circulo");
    const textoRespiracao = document.createElement("p");

    if (circulo) {
        textoRespiracao.innerText = "Inspire... Expire...";
        textoRespiracao.style.marginTop = "10px";
        textoRespiracao.style.fontWeight = "bold";
        circulo.after(textoRespiracao);

        let inspirar = true;

        setInterval(function () {
            if (inspirar) {
                textoRespiracao.innerText = "🌬️ Inspire...";
            } else {
                textoRespiracao.innerText = "😮‍💨 Expire...";
            }
            inspirar = !inspirar;
        }, 4000);
    }

});