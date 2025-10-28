// Efeito simples de brilho alternado na bandeira
const bandeira = document.querySelector(".bandeira");
const botao = document.getElementById("botaoBrilho");

// Variável global para manter o estado de brilho
let brilhando = false;

botao.addEventListener("click", function() {
  brilhando = !brilhando; // inverte o estado

  if (brilhando) {
    bandeira.style.transition = "box-shadow 0.5s ease-in-out";
    bandeira.style.boxShadow = "0 0 40px 10px yellow";
  } else {
    bandeira.style.transition = "box-shadow 0.5s ease-in-out";
    bandeira.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
  }
});
