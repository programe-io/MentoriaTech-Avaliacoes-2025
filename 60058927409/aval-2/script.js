<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <title>Exemplo de JavaScript</title>
</head>
<body>
    <h1>Bem-vindo ao Nosso Site</h1>
    <p id="mensagem">Clique no botão abaixo para uma mensagem especial.</p>
    <button id="meuBotao">Clique Aqui</button>

    <script>
        // Exibe uma mensagem ao carregar a página
        window.onload = function() {
            alert("Página carregada com sucesso! Bem-vindo!");
        };

        // Adiciona um evento de clique ao botão
        document.getElementById("meuBotao").addEventListener("click", function() {
            document.getElementById("mensagem").textContent = "Obrigado por clicar! Tenha um ótimo dia!";
        });
    </script>
</body>
</html>