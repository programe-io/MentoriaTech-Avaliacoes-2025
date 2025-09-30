function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;
  let resultado = 0;

  if (isNaN(valor)) {
    document.getElementById("resultado").textContent = "Por favor, digite um número válido.";
    return;
  }

  // Convertendo para Celsius primeiro
  let celsius;
  if (de === "C") celsius = valor;
  else if (de === "F") celsius = (valor - 32) * 5/9;
  else if (de === "K") celsius = valor - 273.15;

  // Convertendo de Celsius para destino
  if (para === "C") resultado = celsius;
  else if (para === "F") resultado = (celsius * 9/5) + 32;
  else if (para === "K") resultado = celsius + 273.15;

  document.getElementById("resultado").textContent = 
    `${valor}°${de} = ${resultado.toFixed(2)}°${para}`;
}