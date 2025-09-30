function converter() {
  const escala = document.getElementById('escala').value;
  const tempInput = document.getElementById('temperatura').value;
  const resultado = document.getElementById('resultado');

  if (tempInput === '') {
    resultado.textContent = 'Por favor, digite uma temperatura.';
    return;
  }

  const temp = parseFloat(tempInput);

  let celsius, fahrenheit, kelvin;

  switch (escala) {
    case 'celsius':
      celsius = temp;
      fahrenheit = (temp * 9) / 5 + 32;
      kelvin = temp + 273.15;
      break;
    case 'fahrenheit':
      celsius = ((temp - 32) * 5) / 9;
      fahrenheit = temp;
      kelvin = celsius + 273.15;
      break;
    case 'kelvin':
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = temp;
      break;
    default:
      resultado.textContent = 'Escala desconhecida.';
      return;
  }

  resultado.innerHTML = `
    <p>Celsius: ${celsius.toFixed(2)} °C</p>
    <p>Fahrenheit: ${fahrenheit.toFixed(2)} °F</p>
    <p>Kelvin: ${kelvin.toFixed(2)} K</p>
  `;
}
