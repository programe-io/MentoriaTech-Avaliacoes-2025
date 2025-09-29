function converter() {
    const celsius = parseFloat(document.getElementById('celsius').value);

    if (isNaN(celsius)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById('resultado').innerHTML = `
        <p><strong>Temperatura em Celsius:</strong> ${celsius.toFixed(2)} °C</p>
        <p><strong>Temperatura em Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
        <p><strong>Temperatura em Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
    `;
}
