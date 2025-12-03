<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            transition: background-color 0.5s;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
        }
        p {
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Interação com JavaScript</h1>
    <p id="mensagem">Clique no botão para ver a mágica!</p>
    <button onclick="alterarPagina()">Clique Aqui</button>

    <script>
        function alterarPagina() {
            // Alterar o conteúdo do parágrafo
            const paragrafo = document.getElementById('mensagem');
            paragrafo.textContent = "Parabéns! Você clicou no botão.";

            // Alterar a cor de fundo aleatoriamente
            const cores = ['#FFB6C1', '#87CEFA', '#90EE90', '#FFD700', '#FFA07A'];
            const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            document.body.style.backgroundColor = corAleatoria;
        }
    </script>
</body>
</html>
