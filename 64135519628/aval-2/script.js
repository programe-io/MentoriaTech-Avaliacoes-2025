function converter() {
    const tipo = document.getElementById("escala").value;
    const valor = parseFloat(document.getElementById("temperatura").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.innerHTML = "⚠️ Por favor, insira um número válido.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (tipo) {
        case "celsius":
            celsius = valor;
            fahrenheit = (celsius * 9) / 5 + 32;
            kelvin = celsius + 273.15;
            break;
        case "fahrenheit":
            fahrenheit = valor;
            celsius = (fahrenheit - 32) * 5 / 9;
            kelvin = celsius + 273.15;
            break;
        case "kelvin":
            kelvin = valor;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9) / 5 + 32;
            break;
    }

    resultado.innerHTML = `
        🌡️ Entrada: <strong>${valor.toFixed(2)} ${tipo === 'celsius' ? '°C' : tipo === 'fahrenheit' ? '°F' : 'K'}</strong><br><br>
        🌡️ Celsius: <strong>${celsius.toFixed(2)} °C</strong><br>
        🔥 Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong><br>
        ❄️ Kelvin: <strong>${kelvin.toFixed(2)} K</strong>
    `;
}
