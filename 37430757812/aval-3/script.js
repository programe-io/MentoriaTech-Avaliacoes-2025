const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const generateBtn = document.getElementById('generateBtn');

function gerarCorAleatoria() {
  const cor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  colorBox.style.backgroundColor = cor;
  colorCode.textContent = cor;
\}

generateBtn.addEventListener('click', gerarCorAleatoria);$0