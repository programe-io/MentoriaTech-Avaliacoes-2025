<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comidas Deliciosas</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fff8e6;
            margin: 0;
        }

        header {
            background-color: #ffac33;
            padding: 20px;
            text-align: center;
            color: white;
        }

        nav {
            background-color: #ffd280;
            padding: 10px;
            text-align: center;
        }

        nav a {
            margin: 0 10px;
            text-decoration: none;
            color: #8a4b00;
            font-weight: bold;
        }

        .container {
            padding: 20px;
        }

        main {
            margin-top: 20px;
        }

        .card {
            background: white;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }

        .card img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 10px;
        }

        .destaque {
            color: #d35400;
            font-weight: bold;
        }

        footer {
            background-color: #ffac33;
            text-align: center;
            padding: 10px;
            color: white;
        }
    </style>
</head>

<body>

    <header>
        <h1>🍽️ Comidas Deliciosas</h1>
        <p>Conheça pratos famosos do mundo todo</p>
    </header>

    <nav>
        <a href="#brasileira">Brasileira</a>
        <a href="#japonesa">Japonesa</a>
        <a href="#italiana">Italiana</a>
    </nav>

    <!-- DIV obrigatória -->
    <div class="container">

        <!-- MAIN obrigatória -->
        <main>

            <!-- Card 1 -->
            <section class="card" id="brasileira">
                <h2>🇧🇷 Comida Brasileira</h2>
                <!-- IMG obrigatória -->
                <img src="https://via.placeholder.com/600x300?text=Feijoada" alt="Imagem de feijoada">
                <p>A feijoada é considerada <span class="destaque">um dos pratos mais típicos do Brasil</span> e é muito apreciada em todo o país.</p>
            </section>

            <!-- Card 2 -->
            <section class="card" id="japonesa">
                <h2>🍣 Comida Japonesa</h2>
                <img src="https://via.placeholder.com/600x300?text=Sushi" alt="Imagem de sushi">
                <p>O sushi é famoso pela <span class="destaque">leveza e frescor dos ingredientes</span>, sendo muito popular no mundo todo.</p>
            </section>

            <!-- Card 3 -->
            <section class="card" id="italiana">
                <h2>🍝 Comida Italiana</h2>
                <img src="https://via.placeholder.com/600x300?text=Massa+Italiana" alt="Imagem de massa italiana">
                <p>A culinária italiana é conhecida pelas massas e pizzas, que têm <span class="destaque">sabores tradicionais e marcantes</span>.</p>
            </section>

        </main>

    </div>

    <footer>
        <p>© 2025 — Comidas Deliciosas</p>
    </footer>

</body>
</html>
