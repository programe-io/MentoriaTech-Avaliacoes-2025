<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Conversor de Temperatura</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }

        .container {
            max-width: 500px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-weight: bold;
        }

        input[type="number"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 16px;
        }

        p {
            margin: 10px 0;
            padding: 5px;
            border-bottom: 1px dashed #eee;
        }

        strong {
            color: #007bff;
        }
    </style>
</head>

<body>

    <div class="container">
        <h2>Conversor de Temperatura (°C, °F, K)</h2>

        <label for="celsiusInput">Digite a Temperatura em Celsius (°C):</label>
        <input type="number" id="celsiusInput" value="25.0" step="0.01" oninput="converter()">

        <hr>

        <p><strong>Temperatura em Celsius:</strong> <span id="celsiusOutput"></span> °C</p>
        <p><strong>Temperatura em Fahrenheit:</strong> <span id="fahrenheitOutput"></span> °F</p>
        <p><strong>Temperatura em Kelvin:</strong> <span id="kelvinOutput"></span> K</p>
    </div>

    <script>
        function converter() {
            // 1. Receber o valor de Celsius do input
            const celsiusInput = document.getElementById('celsiusInput');
            let celsius = parseFloat(celsiusInput.value);

            // 2. Verificar se a entrada é um número válido
            if (isNaN(celsius)) {
                celsius = 0; // Define como 0 ou pode limpar os campos
            }

            // --- Cálculos de Conversão ---

            // 3. Conversão para Fahrenheit (°F)
            // Fórmula: Fahrenheit = (Celsius × 9/5) + 32
            let fahrenheit = (celsius * 9 / 5) + 32;

            // 4. Conversão para Kelvin (K)
            // Fórmula: Kelvin = Celsius + 273.15
            let kelvin = celsius + 273.15;

            // --- Exibição dos resultados (formatando para 2 casas decimais) ---
            document.getElementById('celsiusOutput').textContent = celsius.toFixed(2);
            document.getElementById('fahrenheitOutput').textContent = fahrenheit.toFixed(2);
            document.getElementById('kelvinOutput').textContent = kelvin.toFixed(2);
        }

        // Chama a função ao carregar a página para exibir os valores iniciais
        converter();
    </script>

</body>

</html>