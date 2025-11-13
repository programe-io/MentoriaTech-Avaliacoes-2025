<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Fire - Battle Royale</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
        }

        body {
            background-color: #0f0f0f;
            color: #fff;
        }

        header {
            background: linear-gradient(90deg, #ff4b2b, #ff416c);
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            font-size: 3em;
            color: #fff;
        }

        nav {
            margin-top: 10px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #ffd700;
        }

        .hero {
            background-image: url('https://images.unsplash.com/photo-1601597118501-0b8a5a0c5d8a?fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero h2 {
            font-size: 3em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 10px #000;
        }

        .hero p {
            font-size: 1.2em;
            width: 60%;
            text-shadow: 1px 1px 8px #000;
        }

        .hero button {
            margin-top: 30px;
            padding: 15px 30px;
            font-size: 1.2em;
            border: none;
            background-color: #ff416c;
            color: #fff;
            cursor: pointer;
            border-radius: 10px;
            transition: background-color 0.3s;
        }

        .hero button:hover {
            background-color: #ff4b2b;
        }

        main {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 60px 20px;
        }

        section {
            flex: 1 1 600px;
            margin: 20px;
        }

        section h2 {
            font-size: 2.5em;
            margin-bottom: 20px;
            color: #ff416c;
        }

        section p {
            font-size: 1em;
            color: #ccc;
            line-height: 1.6;
        }

        aside {
            background-color: #1a1a1a;
            padding: 20px;
            border-radius: 15px;
            margin: 20px;
            flex: 1 1 300px;
            height: fit-content;
        }

        aside h3 {
            color: #ffd700;
            margin-bottom: 15px;
        }

        aside ul {
            list-style: none;
        }

        aside ul li {
            margin-bottom: 10px;
        }

        aside ul li a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s;
        }

        aside ul li a:hover {
            color: #ff416c;
        }

        .cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }

        article.card {
            background-color: #1a1a1a;
            width: 300px;
            padding: 20px;
            border-radius: 15px;
            transition: transform 0.3s;
        }

        article.card img {
            width: 100%;
            border-radius: 10px;
        }

        article.card h3 {
            margin: 15px 0 10px;
            color: #ffd700;
        }

        article.card p {
            font-size: 0.95em;
            color: #ccc;
        }

        article.card:hover {
            transform: scale(1.05);
        }

        footer {
            background-color: #111;
            padding: 20px 0;
            text-align: center;
            color: #888;
        }

        footer a {
            color: #ff416c;
            text-decoration: none;
            margin: 0 10px;
        }

        footer a:hover {
            color: #ffd700;
        }

        @media (max-width: 768px) {
            .hero h2 {
                font-size: 2em;
            }

            .hero p {
                width: 80%;
            }

            main {
                flex-direction: column;
                align-items: center;
            }

            aside {
                order: -1;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>Free Fire</h1>
    <nav>
        <a href="#sobre">Sobre</a>
        <a href="#personagens">Personagens</a>
        <a href="#armas">Armas</a>
        <a href="#contato">Contato</a>
    </nav>
</header>

<section class="hero">
    <h2>Battle Royale no Seu Melhor Estilo</h2>
    <p>Participe das batalhas intensas de Free Fire e mostre suas habilidades em um mundo cheio de desafios. Escolha seu personagem, equipe suas armas e vença!</p>
    <button>Jogar Agora</button>
</section>

<main>
    <!-- SOBRE -->
    <section id="sobre">
        <h2>Sobre Free Fire</h2>
        <p>Free Fire é um jogo de Battle Royale para celular desenvolvido pela Garena. Lute para sobreviver em partidas rápidas de até 50 jogadores, com gráficos incríveis e ação sem parar.</p>
    </section>

    <!-- ASIDE -->
    <aside>
        <h3>Dicas de Jogo</h3>
        <ul>
            <li><a href="#">Escolha bem sua zona de aterrissagem</a></li>
            <li><a href="#">Use o mapa para planejar rotas</a></li>
            <li><a href="#">Equipe armas e habilidades adequadas</a></li>
            <li><a href="#">Forme parcerias com jogadores confiáveis</a></li>
        </ul>
    </aside>

    <!-- PERSONAGENS -->
    <section id="personagens">
        <h2>Personagens</h2>
        <div class="cards">
            <article class="card">
                <img src="https://via.placeholder.com/300x200" alt="Alok">
                <h3>Alok</h3>
                <p>DJ famoso que ajuda sua equipe com habilidades de cura e velocidade.</p>
            </article>
            <article class="card">
                <img src="https://via.placeholder.com/300x200" alt="K">
                <h3>K</h3>
                <p>Psicólogo com habilidades de energia mental para aumentar sua performance em combate.</p>
            </article>
            <article class="card">
                <img src="https://via.placeholder.com/300x200" alt="Kelly">
                <h3>Kelly</h3>
                <p>Corredora rápida que consegue escapar e surpreender adversários em campo.</p>
            </article>
        </div>
    </section>

    <!-- ARMAS -->
    <section id="armas">
        <h2>Armas</h2>
        <div class="cards">
            <article class="card">
                <img src="https://via.placeholder.com/300x200" alt="AK">
                <h3>AK</h3>
                <p>Rifle poderoso, ideal para combates de médio alcance.</p>
            </article>
            <article class="card">
                <img src="https://via.placeholder.com/300x200" alt="MP40">
                <h3>MP40</h3>
                <p>Submetralhadora perfeita para ação rápida e letal em curta distância.</p>
            </article>
            <article class="card">
                <img src="https://via.placeholder.com/300x200" alt="Sniper">
                <h3>Sniper</h3>
                <p>Para jogadores precisos que gostam de eliminar inimigos de longe.</p>
            </article>
        </div>
    </section>
</main>

<footer id="contato">
    <p>© 2025 Free Fire Fan Page. Todos os direitos reservados.</p>
    <p>
        <a href="#">Facebook</a> | 
        <a href="#">Instagram</a> | 
        <a href="#">Twitter</a>
    </p>
</footer>

</body>
</html>
