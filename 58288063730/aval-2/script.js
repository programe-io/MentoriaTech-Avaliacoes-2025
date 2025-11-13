const botao = document.getElementById("mudarCor");
const boneco = document.querySelector(".boneco");

botao.addEventListener("click", () => {
  // Gera uma cor aleatória
  const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Aplica ao corpo e aos braços do boneco
  document.querySelectorAll(".corpo, .braco").forEach(el => {
    el.style.backgroundColor = cor;
  });
});
const botao = document.getElementById("mudarCor");
const boneco = document.querySelector(".boneco");

botao.addEventListener("click", () => {
  // Gera uma cor aleatória
  const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Aplica ao corpo e aos braços do boneco
  document.querySelectorAll(".corpo, .braco").forEach(el => {
    el.style.backgroundColor = cor;
  });
});
