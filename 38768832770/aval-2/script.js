<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JOABE | Futebol Interativo</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #000;
            color: #fff;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        header {
            background-color: #111;
            padding: 30px 0;
            border-bottom: 3px solid #0f0;
        }

        header h1 {
            color: #0f0;
            font-size: 2.5em;
            letter-spacing: 2px;
        }

        main {
            padding: 40px 20px;
        }

        p {
            font-size: 1.2em;
            max-width: 700px;
            margin: 20px auto;
        }

        .bola {
            width: 150px;
            height: 150px;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg');
            background-size: cover;
            margin: 30px auto;
            border-radius: 50%;
            box-shadow: 0 0 30px #0f0;
            position: relative;
            transition: transform 0.3s ease;
        }

        button {
            background-color: #0f0;
            border: none;
            color: #000;
            font-size: 1.1em;
            padding: 10px 25px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }

        button:hover {
            background-color: #2aff2a;
        }

        footer {
            background-color: #111;
            padding: 15px;
            border-top: 3px solid #0f0;
            color: #aaa;
            margin-top: 30px;
        }
    </style>
</head>
<body>

    <header>
        <h1>JOABE ⚽ FUTEBOL</h1>
    </header>

    <main>
        <p>
            Bem-vindo ao site do <strong>Joabe</strong>!  
            Clique no botão abaixo e chute a bola de futebol!
        </p>

        <div class="bola" id="bola"></div>

        <button onclick="chutarBola()">Chutar Bola ⚽</button>

        <p id="mensagem"></p>
    </main>

    <footer>
        <p>Feito por Joabe | Tema: Futebol | © 2025</p>
    </footer>

    <script>
        // Função de animação da bola
        function chutarBola() {
            const bola = document.getElementById('bola');
            const mensagem = document.getElementById('mensagem');

            // Move a bola pra cima (efeito de chute)
            bola.style.transform = 'translateY(-200px) rotate(720deg)';
            mensagem.textContent = "GOOOOOL!!! ⚽🔥";

            // Retorna a bola ao lugar depois de 1 segundo
            setTimeout(() => {
                bola.style.transform = 'translateY(0) rotate(0deg)';
                mensagem.textContent = "";
            }, 1000);
        }
    </script>

</body>
</html>
