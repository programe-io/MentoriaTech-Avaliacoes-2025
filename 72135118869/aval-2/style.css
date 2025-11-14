<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Real Madrid - Site Completo</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        header {
            background-color: #00529F;
            color: white;
            padding: 20px;
            text-align: center;
        }

        nav {
            background-color: #001B56;
            display: flex;
            justify-content: center;
        }

        nav a {
            color: white;
            text-decoration: none;
            padding: 15px 20px;
            font-weight: bold;
            cursor: pointer;
        }

        nav a:hover {
            background-color: #00308F;
        }

        main {
            display: flex;
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            gap: 20px;
        }

        section {
            flex: 3;
            background: white;
            padding: 20px;
            border-radius: 5px;
        }

        aside {
            flex: 1;
            background: #e0e0e0;
            padding: 20px;
            border-radius: 5px;
            height: fit-content;
        }

        article {
            background: #ffffff;
            padding: 15px;
            border-left: 5px solid #00529F;
            margin-bottom: 20px;
            border-radius: 4px;
        }

        footer {
            margin-top: 40px;
            background-color: #001B56;
            color: white;
            text-align: center;
            padding: 10px;
        }

        .pagina { display: none; }
        .ativa { display: block; }

        img {
            width: 100%;
            max-width: 350px;
            border-radius: 8px;
            display: block;
            margin: 10px auto;
        }

        input, textarea, button {
            width: 100%;
            padding: 10px;
        }

        button {
            background-color: #001B56;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #00308F;
        }
    </style>
</head>

<body>

<header>
    <h1>Real Madrid</h1>
    <p>O maior clube do mundo</p>
</header>

<nav>
    <a onclick="mostrarPagina('inicio')">Início</a>
    <a onclick="mostrarPagina('sobre')">Sobre</a>
    <a onclick="mostrarPagina('contato')">Contato</a>
</nav>

<main>

    <!-- ASIDE -->
    <aside>
        <h2>Últimas Notícias</h2>
        <p>• Real Madrid vence mais uma na Champions!</p>
        <p>• Mbappé chega ao clube oficialmente.</p>
        <p>• Novo uniforme lançado!</p>

        <hr>

        <h3>Links úteis</h3>
        <ul>
            <li><a href="#">Elenco</a></li>
            <li><a href="#">Loja Oficial</a></li>
            <li><a href="#">Calendário</a></li>
        </ul>
    </aside>

    <!-- SEÇÃO PRINCIPAL -->
    <section>

        <!-- PAGINA INICIAL -->
        <div id="inicio" class="pagina ativa">
            <article>
                <h1>Bem-vindo ao Real Madrid</h1>
                <p>O clube mais vitorioso da história do futebol mundial.</p>

                <!-- IMG OBRIGATÓRIA -->
                <img src="https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" 
                     alt="Escudo do Real Madrid">
            </article>

            <article>
                <h2>Títulos do Clube</h2>
                <ul>
                    <li>14× Champions League</li>
                    <li>36× Liga Espanhola</li>
                    <li>20× Copa do Rei</li>
                    <li>5× Mundial de Clubes</li>
                </ul>
            </article>
        </div>

        <!-- PAGINA SOBRE -->
        <div id="sobre" class="pagina">
            <article>
                <h1>Sobre o Real Madrid</h1>
                <p>Fundado em 1902, o Real Madrid é o maior clube do século XX.</p>

                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Santiago_Bernabeu_2023.jpg" 
                     alt="Estádio Santiago Bernabéu">
            </article>

            <article>
                <h2>Ídolos Históricos</h2>
                <ul>
                    <li>Cristiano Ronaldo</li>
                    <li>Raúl González</li>
                    <li>Di Stéfano</li>
                    <li>Zidane</li>
                    <li>Casillas</li>
                </ul>
            </article>
        </div>

        <!-- PAGINA CONTATO -->
        <div id="contato" class="pagina">
            <article>
                <h1>Contato</h1>
                <p>Envie sua mensagem usando o formulário abaixo:</p>

                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Real_Madrid_CF.svg"
                     alt="Escudo Real Madrid pequeno">
            </article>

            <article>
                <form>
                    <label>Nome:</label><br>
                    <input type="text" placeholder="Seu nome"><br><br>

                    <label>Email:</label><br>
                    <input type="email" placeholder="Seu email"><br><br>

                    <label>Mensagem:</label><br>
                    <textarea placeholder="Digite sua mensagem" rows="5"></textarea><br><br>

                    <button type="submit">Enviar</button>
                </form>
            </article>
        </div>

    </section>

</main>

<footer>
    © 2025 Real Madrid Fan Site — Todos os direitos reservados.
</footer>

<script>
    function mostrarPagina(pagina) {
        document.querySelectorAll('.pagina').forEach(div =>
            div.classList.remove('ativa')
        );
        document.getElementById(pagina).classList.add('ativa');
    }
</script>

</body>
</html>
