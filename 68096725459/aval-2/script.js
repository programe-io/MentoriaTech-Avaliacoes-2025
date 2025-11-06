// script.js
const titulo = document.getElementById("titulo");
let texto = titulo.textContent;
titulo.textContent = "";

let i = 0;
function escreverTitulo() {
  if (i < texto.length) {
    titulo.textContent += texto.charAt(i);
    i++;
    setTimeout(escreverTitulo, 150);
  }
}

escreverTitulo();