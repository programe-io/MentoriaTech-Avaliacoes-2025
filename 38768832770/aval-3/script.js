<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol Interativo - Joabe</title>
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
            padding: 25px;
            border-bottom: 3px solid #00ff66;
        }

        header h1 {
            color: #00ff66;
            margin: 0;
        }

        main {
            padding: 40px 20px;
        }

        button {
            background-color: #111;
            color: #00ff66;
            border: 2px solid #00ff66;
            padding: 10px 20px;
            font-size: 1em;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            margin-top: 20px;
        }

        button:hover {
            background-color: #00ff66;
            color: #000;
        }

        #info {
            margin-top: 30px;
            padding: 20px;
            border: 2px solid #00ff66;
            border-radius: 10px;
            display: inline-block;
            background-color: #111;
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
        <h1>Futebol Interativo - Joabe ⚽</h1>
    </header>

    <main>
        <h2>Descubra informações sobre os times!</h2>
        <p>Clique no botão abaixo para ver os dados do time escolhido.</p>

        <button onclick="mostrarInfo('Palmeiras')">Palmeiras</button>
        <button onclick="mostrarInfo('Flamengo')">Flamengo</button>
        <button onclick="mostrarInfo('São Paulo')">São Paulo</button>

        <div id="info">
            <p>Escolha um time acima para ver as informações.</p>
        </div>
    </main>

    <footer>
        <p>© 2025 Joabe | Tema: Futebol ⚽</p>
    </footer>

    <script>
        function mostrarInfo(time) {
            let info = document.getElementById('info');
            let texto = '';

            switch(time) {
                case 'Palmeiras':
                    texto = '<h3>Palmeiras</h3><p>Vitórias: 18<br>Empates: 5<br>Derrotas: 3<br>Pontos: 59</p>';
                    break;
                case 'Flamengo':
                    texto = '<h3>Flamengo</h3><p>Vitórias: 17<br>Empates: 6<br>Derrotas: 3<br>Pontos: 57</p>';
                    break;
                case 'São Paulo':
                    texto = '<h3>São Paulo</h3><p>Vitórias: 15<br>Empates: 7<br>Derrotas: 4<br>Pontos: 52</p>';
                    break;
                default:
                    texto = '<p>Escolha um time acima para ver as informações.</p>';
            }

            info.innerHTML = texto;
        }
    </script>

</body>
</html>
