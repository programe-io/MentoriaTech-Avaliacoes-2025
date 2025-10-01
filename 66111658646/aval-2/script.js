const inputTemp = document.getElementById('inputTemp');
const inputUnit = document.getElementById('inputUnit');
const outputUnit = document.getElementById('outputUnit');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');

function convertTemperature(value, fromUnit, toUnit) {
    let celsius;

    // Converte a temperatura inicial para Celsius
    switch(fromUnit) {
        case 'celsius':
            celsius = value;
            break;
        case 'fahrenheit':
            celsius = (value - 32) * 5/9;
            break;
        case 'kelvin':
            celsius = value - 273.15;
            break;
        default:
            return null;
    }

    // Converte de Celsius para a unidade desejada
    switch(toUnit) {
        case 'celsius':
            return celsius;
        case 'fahrenheit':
            return (celsius * 9/5) + 32;
        case 'kelvin':
            return celsius + 273.15;
        default:
            return null;
    }
}

convertBtn.addEventListener('click', () => {
    const value = parseFloat(inputTemp.value);

    if (isNaN(value)) {
        result.textContent = "Por favor, insira um valor numérico válido.";
        return;
    }

    const fromUnit = inputUnit.value;
    const toUnit = outputUnit.value;

    if (fromUnit === toUnit) {
        result.textContent = `O valor é o mesmo: ${value.toFixed(2)} ${toUnit === 'celsius' ? '°C' : toUnit === 'fahrenheit' ? '°F' : 'K'}`;
        return;
    }

    const converted = convertTemperature(value, fromUnit, toUnit);

    result.textContent = `${value.toFixed(2)} ${fromUnit === 'celsius' ? '°C' : fromUnit === 'fahrenheit' ? '°F' : 'K'} = ${converted.toFixed(2)} ${toUnit === 'celsius' ? '°C' : toUnit === 'fahrenheit' ? '°F' : 'K'}`;
});
