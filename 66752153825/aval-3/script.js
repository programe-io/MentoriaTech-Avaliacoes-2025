const botao = document.getElementById("verMais");
const maisJogos = document.getElementById("maisJogos");

botao.addEventListener("click", () => {
  if (maisJogos.classList.contains("oculto")) {
    maisJogos.classList.remove("oculto");
    botao.textContent = "Ver menos jogos";
  } else {
    maisJogos.classList.add("oculto");
    botao.textContent = "Ver mais jogos";
  }
});
