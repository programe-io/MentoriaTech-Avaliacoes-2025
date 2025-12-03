<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Completo com Todas as Tags</title>

    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
        }

        header {
            background: #4a90e2;
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav {
            background: #333;
            padding: 10px;
        }

        nav a {
            color: white;
            margin-right: 15px;
            text-decoration: none;
            font-weight: bold;
        }

        main {
            padding: 20px;
        }

        .container {
            background: #f4f4f4;
            padding: 20px;
            border-radius: 4px;
        }

        article {
            margin-bottom: 20px;
        }

        img {
            max-width: 100%;
            border-radius: 6px;
        }

        .destaque {
            color: #e67e22;
            font-weight: bold;
        }
    </style>
</head>

<body>

    <header>
        <h1>Meu Site <span class="destaque">Exemplo</span></h1>
        <p>Projeto seguindo o modelo da avaliação</p>
    </header>

    <nav>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
    </nav>

    <main>
        <div class="container">
            <article>
                <h2>Artigo com Imagem e Span</h2>
                <p>
                    Este texto contém um <span class="destaque">span de destaque</span>
                    para cumprir o requisito da tag <strong>span</strong>.
                </p>

                <!-- Imagem obrigatória -->
                <img src="https://via.placeholder.com/600x300" alt="Imagem de Exemplo">
            </article>
        </div>
    </main>

</body>
</html>
