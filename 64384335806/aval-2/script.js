function converter() {
  const valor = parseFloat(document.getElementById('valor').value);
  const de = document.getElementById('de').value;
  const para = document.getElementById('para').value;
  const resultadoEl = document.querySelector('#resultado p');

  if (isNaN(valor)) {
    resultadoEl.textContent = 'Por favor, insira um valor numérico válido.';
    return;
  }

  if (de === para) {
    resultadoEl.textContent = `Resultado: ${valor.toFixed(2)} ${unidadeSimbolo(para)}`;
    return;
  }

  let celsius;

  switch(de) {
    case 'celsius':
      celsius = valor;
      break;
    case 'fahrenheit':
      celsius = (valor - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = valor - 273.15;
      break;
  }

  let resultado;

  switch(para) {
    case 'celsius':
      resultado = celsius;
      break;
    case 'fahrenheit':
      resultado = (celsius * 9/5) + 32;
      break;
    case 'kelvin':
      resultado = celsius + 273.15;
      break;
  }

  resultadoEl.textContent = `Resultado: ${resultado.toFixed(2)} ${unidadeSimbolo(para)}`;
}

function unidadeSimbolo(unidade) {
  switch(unidade) {
    case 'celsius': return '°C';
    case 'fahrenheit': return '°F';
    case 'kelvin': return 'K';
    default: return '';
  }
}
