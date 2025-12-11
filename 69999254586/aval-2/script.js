// Script simples para botão de "curtir" em cada post
document.addEventListener("DOMContentLoaded", () => {
    const botoesCurtir = document.querySelectorAll(".like-btn");

    botoesCurtir.forEach((botao) => {
        botao.addEventListener("click", () => {
            const contador = botao.nextElementSibling;
            const valorAtual = parseInt(contador.textContent, 10);
            contador.textContent = valorAtual + 1;
        });
    });
});
