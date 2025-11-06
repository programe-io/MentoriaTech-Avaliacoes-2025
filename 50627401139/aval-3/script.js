// Função simples de curtir os posts
const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(botao => {
    botao.addEventListener("click", () => {
        if (botao.classList.contains("ativo")) {
            botao.classList.remove("ativo");
            botao.textContent = "❤️ Curtir";
        } else {
            botao.classList.add("ativo");
            botao.textContent = "💖 Curtido!";
        }
    });
});
