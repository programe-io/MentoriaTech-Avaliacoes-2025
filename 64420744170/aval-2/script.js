let isTyping = false;

function converter(origem) {
  if (isTyping) return;
  isTyping = true;

  let celsius, fahrenheit, kelvin;

  if (origem === "celsius") {
    celsius = parseFloat(document.getElementById("celsius").value);
    if (isNaN(celsius)) {
      limparCampos();
      isTyping = false;
      return;
    }
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = celsius + 273.15;

    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  } else if (origem === "fahrenheit") {
    fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (isNaN(fahrenheit)) {
      limparCampos();
      isTyping = false;
      return;
    }
    celsius = (fahrenheit - 32) * 5/9;
    kelvin = celsius + 273.15;

    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  } else if (origem === "kelvin") {
    kelvin = parseFloat(document.getElementById("kelvin").value);
    if (isNaN(kelvin)) {
      limparCampos();
      isTyping = false;
      return;
    }
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }

  isTyping = false;
}

function limparCampos() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("kelvin").value = "";
}
