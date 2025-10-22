// Função de curtir com animação
const botoesCurtir = document.querySelectorAll(".like-btn");

botoesCurtir.forEach((botao) => {
  botao.addEventListener("click", () => {
    const contador = botao.querySelector(".like-count");
    let valorAtual = parseInt(contador.textContent);

    // Evita múltiplos cliques consecutivos
    if (!botao.classList.contains("curtido")) {
      valorAtual++;
      contador.textContent = valorAtual;
      botao.classList.add("curtido");
      botao.querySelector(".like-text").textContent = "Curtido!";
    } else {
      valorAtual--;
      contador.textContent = valorAtual;
      botao.classList.remove("curtido");
      botao.querySelector(".like-text").textContent = "Curtir";
    }
  });
});