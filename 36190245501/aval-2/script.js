// Lista de imagens da galeria
const imagens = [
  "https://upload.wikimedia.org/wikipedia/en/0/05/Hello_Kitty_character_portrait.png",
  "https://i.pinimg.com/originals/f1/fc/1d/f1fc1d23e5b1e2c1ecfbf9c4ac3c8a6d.png",
  "https://i.pinimg.com/originals/f2/14/9d/f2149df87025a0eae79cbe444a45e015.png"
];

let indice = 0;
const imgElemento = document.getElementById("imagem-galeria");
const btnProxima = document.getElementById("proxima");
const btnAnterior = document.getElementById("anterior");

// Função para mostrar a imagem atual
function mostrarImagem() {
  imgElemento.src = imagens[indice];
}

// Evento: clicar em "Próxima"
btnProxima.addEventListener("click", () => {
  indice = (indice + 1) % imagens.length;
  mostrarImagem();
});

// Evento: clicar em "Anterior"
btnAnterior.addEventListener("click", () => {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarImagem();
});