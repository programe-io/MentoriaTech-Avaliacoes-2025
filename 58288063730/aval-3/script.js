const botao = document.getElementById("btnMudarCor");

botao.addEventListener("click", () => {
  const cores = ["#FF5733", "#33FF57", "#3357FF", "#FFD700", "#8A2BE2"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
});
