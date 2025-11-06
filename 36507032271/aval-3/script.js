<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academia Fitness - Calculadora de Treino</title>
    <style>
        body {
            background-color: #000;
            color: #fff;
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #111;
            padding: 30px;
            border-bottom: 3px solid #00ff66;
        }

        header h1 {
            color: #00ff66;
            margin: 0;
        }

        main {
            padding: 40px 20px;
        }

        h2 {
            color: #00ff66;
            margin-bottom: 20px;
        }

        input[type="number"] {
            padding: 10px;
            width: 150px;
            border-radius: 5px;
            border: 2px solid #00ff66;
            background-color: #111;
            color: #fff;
            margin-right: 10px;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            background-color: #00ff66;
            color: #000;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background-color: #00cc55;
        }

        #resultado {
            margin-top: 20px;
            font-size: 1.2em;
            color: #00ff66;
        }

        footer {
            background-color: #111;
            border-top: 3px solid #00ff66;
            padding: 15px;
            color: #aaa;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Academia Fitness 💪</h1>
    </header>

    <main>
        <h2>Calculadora de Treino</h2>
        <p>Descubra quantas calorias você queimou!</p>

        <input type="number" id="minutos" placeholder="Minutos de treino">
        <select id="intensidade">
            <option value="5">Leve (5 cal/min)</option>
            <option value="8">Moderado (8 cal/min)</option>
            <option value="12">Intenso (12 cal/min)</option>
        </select>
        <button onclick="calcularCalorias()">Calcular</button>

        <div id="resultado"></div>
    </main>

    <footer>
        <p>© 2025 Academia Fitness | Tema: Saúde e Treino</p>
    </footer>

    <script>
        function calcularCalorias() {
            // Pega os valores do input
            const minutos = document.getElementById('minutos').value;
            const intensidade = document.getElementById('intensidade').value;

            // Validação simples
            if (minutos === "" || minutos <= 0) {
                alert("Por favor, insira um valor válido de minutos!");
                return;
            }

            // Cálculo de calorias
            const calorias = minutos * intensidade;

            // Mostra o resultado
            document.getElementById('resultado').innerText = 
                `Você queimou aproximadamente ${calorias} calorias! 🔥`;
        }
    </script>

</body>
</html>
