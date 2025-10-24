// Mensagem interativa ao clicar no botão
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botaoReceita");
    botao.addEventListener("click", () => {
        alert("🍰 Dica de hoje: Experimente adicionar raspas de laranja no seu bolo de cenoura!");
    });
});
