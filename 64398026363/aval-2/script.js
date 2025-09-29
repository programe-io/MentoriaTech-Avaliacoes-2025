function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);

    if (isNaN(celsius)) {
        document.getElementById("resultado").innerHTML = `
            <p style="color: red;">Por favor, insira uma temperatura válida.</p>
        `;
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("resultado").innerHTML = `
        <p>Temperatura em Celsius: <strong>${celsius.toFixed(1)} °C</strong></p>
        <p>Temperatura em Fahrenheit: <strong>${fahrenheit.toFixed(1)} °F</strong></p>
        <p>Temperatura em Kelvin: <strong>${kelvin.toFixed(2)} K</strong></p>
    `;
}
