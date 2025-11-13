let contador = 0;
const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('btn');

botao.addEventListener('click', () => {
  contador++;
  contadorElemento.textContent = contador;
});
