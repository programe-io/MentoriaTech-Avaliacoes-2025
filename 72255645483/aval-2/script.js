<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flamengo Fã - O Mais Querido</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #111;
            color: #fff;
        }

        header {
            background-color: #d60000;
            color: #fff;
            text-align: center;
            padding: 20px;
        }

        nav {
            background-color: #000;
            text-align: center;
            padding: 10px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
            transition: 0.3s;
        }

        nav a:hover {
            color: #d60000;
        }

        main {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
            max-width: 1200px;
            margin: auto;
        }

        section {
            flex: 3;
            min-width: 600px;
        }

        article {
            background-color: #1b1b1b;
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 8px;
        }

        article h2 {
            color: #d60000;
            border-bottom: 2px solid #d60000;
            padding-bottom: 5px;
        }

        aside {
            flex: 1;
            min-width: 250px;
            background-color: #000;
            padding: 20px;
            border-left: 2px solid #d60000;
            border-radius: 8px;
            height: fit-content;
        }

        aside h3 {
            color: #d60000;
            border-bottom: 2px solid #d60000;
            padding-bottom: 5px;
            text-align: center;
        }

        aside ul {
            list-style: none;
            padding: 0;
        }

        aside li {
            margin: 10px 0;
        }

        aside a {
            color: #fff;
            text-decoration: none;
        }

        aside a:hover {
            color: #d60000;
        }

        footer {
            background-color: #000;
            text-align: center;
            padding: 20px;
            color: #ccc;
        }

        .banner {
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/8b/CR_Flamengo_logo.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 150px;
            background-color: #000;
            color: #fff;
            text-align: center;
            padding: 60px 0;
            text-shadow: 2px 2px 5px #000;
        }

        .banner h1 {
            margin: 0;
            font-size: 2.2em;
        }

        .galeria img {
            width: 30%;
            border: 3px solid #d60000;
            border-radius: 5px;
            margin: 1%;
            transition: transform 0.3s;
        }

        .galeria img:hover {
            transform: scale(1.05);
        }

        form input, form textarea {
            width: 100%;
            padding: 10px;
            margin: 5px 0 10px 0;
            border: none;
            border-radius: 5px;
        }

        form button {
            background-color: #d60000;
            color: #fff;
            border: none;
            padding: 10px 20px;
            font-size: 1em;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
        }

        form button:hover {
            background-color: #a50000;
        }

        @media (max-width: 800px) {
            main {
                flex-direction: column;
                align-items: center;
            }

            section {
                min-width: 100%;
            }

            aside {
                min-width: 100%;
                margin-top: 20px;
            }

            .galeria img {
                width: 90%;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Clube de Regatas do Flamengo</h1>
    </header>

    <nav>
        <a href="#historia">História</a>
        <a href="#elenco">Elenco</a>
        <a href="#titulos">Títulos</a>
        <a href="#contato">Contato</a>
    </nav>

    <div class="banner">
        <h1>O Mais Querido do Brasil</h1>
        <p>Paixão, Raça e Amor pelo Mengão!</p>
    </div>

    <main>
        <section>
            <article id="historia">
                <h2>História</h2>
                <p>O Flamengo foi fundado em 17 de novembro de 1895, inicialmente como um clube de remo. 
                Com o passar dos anos, tornou-se o clube de futebol mais popular do Brasil, com uma torcida apaixonada 
                e títulos memoráveis. O estádio do Maracanã é a sua segunda casa, palco de grandes conquistas rubro-negras.</p>
            </article>

            <article id="elenco">
                <h2>Elenco Atual</h2>
                <ul>
                    <li>Pedro</li>
                    <li>Gabigol</li>
                    <li>Arrascaeta</li>
                    <li>Everton Ribeiro</li>
                    <li>David Luiz</li>
                    <li>Matheus Cunha</li>
                </ul>
            </article>

            <article id="titulos">
                <h2>Principais Títulos</h2>
                <ul>
                    <li>Libertadores da América: 1981, 2019, 2022</li>
                    <li>Mundial Interclubes: 1981</li>
                    <li>Campeonato Brasileiro: 1980, 1982, 1983, 1992, 2009, 2019, 2020</li>
                    <li>Copa do Brasil: 1990, 2006, 2013, 2022</li>
                    <li>Campeonato Carioca: 37 títulos</li>
                </ul>
            </article>

            <article id="galeria">
                <h2>Galeria Rubro-Negra</h2>
                <div class="galeria">
                    <img src="https://i.imgur.com/Lz8HMT0.jpg" alt="Torcida do Flamengo">
                    <img src="https://i.imgur.com/QOHPyCC.jpg" alt="Time do Flamengo">
                    <img src="https://i.imgur.com/LuBTcb2.jpg" alt="Arrascaeta comemorando">
                </div>
            </article>

            <article id="contato">
                <h2>Contato do Fã</h2>
                <form onsubmit="enviarMensagem(event)">
                    <input type="text" id="nome" placeholder="Seu nome" required>
                    <input type="email" id="email" placeholder="Seu e-mail" required>
                    <textarea id="mensagem" rows="4" placeholder="Sua mensagem" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </article>
        </section>

        <!-- ASIDE OBRIGATÓRIO -->
        <aside>
            <h3>Notícias Recentes</h3>
            <ul>
                <li><a href="#">Flamengo vence clássico no Maracanã!</a></li>
                <li><a href="#">Pedro marca golaço e garante vitória.</a></li>
                <li><a href="#">Arrascaeta renova contrato até 2028.</a></li>
                <li><a href="#">Gabigol se torna o 10º maior artilheiro da história do clube.</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>Feito com ❤️ pelo maior fã do Mengão | © 2025 Flamengo Fã</p>
    </footer>

    <script>
        function enviarMensagem(event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value;
            alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso. SRN ❤️🖤");
        }
    </script>
</body>
</html>
