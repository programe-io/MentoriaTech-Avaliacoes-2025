<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo com JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            text-align: center;
            margin-top: 100px;
        }

        button {
            background-color: #004aad;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
        }

        button:hover {
            background-color: #00357a;
        }

        #mensagem {
            margin-top: 20px;
            font-size: 18px;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Exemplo de JavaScript</h1>
    <p>Clique no botão abaixo para receber uma saudação:</p>

    <button onclick="mostrarMensagem()">Clique aqui</button>

    <div id="mensagem"></div>

    <script>
        // Função que mostra uma mensagem personalizada
        function mostrarMensagem() {
            // Pega a hora atual
            const hora = new Date().getHours();
            let saudacao;

            if (hora < 12) {
                saudacao = "Bom dia! ☀️";
            } else if (hora < 18) {
                saudacao = "Boa tarde! 🌤️";
            } else {
                saudacao = "Boa noite! 🌙";
            }

            // Mostra a mensagem na tela
            const msg = document.getElementById("mensagem");
            msg.textContent = saudacao + " Seja bem-vindo(a) ao meu site!";
        }
    </script>
</body>
</html>