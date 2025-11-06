// -----------------------------------------
// JS | Como Pilotar Moto — imagem + dicas
// -----------------------------------------

// Pegando elementos
const imgMoto = document.getElementById("foto-moto");
const dica = document.getElementById("dica");
const botao = document.getElementById("btn-trocar");

// Coleção de imagens + pequenas dicas
const dicasPilotagem = [
  {
    src: "https://via.placeholder.com/400x220?text=Equilibrio",
    texto: "Mantenha o equilíbrio: olhar para frente ajuda o corpo a se alinhar."
  },
  {
    src: "https://via.placeholder.com/400x220?text=Troca+de+Marchas",
    texto: "Troque marchas suavemente para não assustar o motor."
  },
  {
    src: "https://via.placeholder.com/400x220?text=Seguranca",
    texto: "Segurança primeiro: use capacete, luvas e botas reforçadas."
  }
];

let indice = 0;

// Função que troca imagem + dica
function trocar() {
  indice++;
  if (indice >= dicasPilotagem.length) indice = 0;

  imgMoto.src = dicasPilotagem[indice].src;
  dica.textContent = dicasPilotagem[indice].texto;
}

// Evento do botão
botao.addEventListener("click", trocar);
