document.addEventListener("DOMContentLoaded", () => {
    const secoes = document.querySelectorAll("section");

    secoes.forEach(secao => {
        secao.addEventListener("click", () => {
            alert("Você clicou na seção: " + secao.id);
        });
    });
});
