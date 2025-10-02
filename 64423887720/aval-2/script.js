function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, insira um valor válido!</p>";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("resultado").innerHTML =
        `<p>Temperatura em Celsius: ${celsius.toFixed(2)}°C</p>
         <p>Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
         <p>Temperatura em Kelvin: ${kelvin.toFixed(2)} K</p>`;
}
