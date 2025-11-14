<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fashionista - Moda</title>

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">

    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Montserrat', sans-serif; }
        body { line-height: 1.6; color: #333; background-color: #fff; }
        a { text-decoration: none; color: inherit; }

        header {
            position: fixed; width: 100%; background: rgba(255,255,255,0.95);
            display: flex; justify-content: space-between; align-items: center;
            padding: 20px 50px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;
        }
        header h1 { font-family: 'Playfair Display', serif; font-size: 32px; color: #e91e63; }
        nav a { margin-left: 25px; font-weight: 600; color: #333; transition: color 0.3s; }
        nav a:hover { color: #e91e63; }

        .hero {
            background-image: url('https://images.unsplash.com/photo-1520975860606-1366a3454c44?auto=format&fit=crop&w=1950&q=80');
            background-size: cover; background-position: center; height: 90vh;
            display: flex; justify-content: center; align-items: center; text-align: center;
            color: #fff; position: relative;
        }
        .hero::after {
            content: ''; position: absolute; top:0; left:0; right:0; bottom:0; background: rgba(0,0,0,0.4);
        }
        .hero-content { position: relative; z-index: 1; max-width: 800px; }
        .hero h2 { font-size: 52px; font-family: 'Playfair Display', serif; margin-bottom: 20px; text-transform: uppercase; }
        .hero p { font-size: 20px; }
        .hero button { margin-top: 20px; padding: 12px 30px; font-size: 18px; font-weight: bold; border: none; background: #e91e63; color: white; cursor: pointer; border-radius: 30px; transition: background 0.3s; }
        .hero button:hover { background: #d81b60; }

        main { padding-top: 100px; }

        .colecoes {
            display: flex; flex-wrap: wrap; padding: 80px 50px;
            background: linear-gradient(to right, #ffe6f0, #fff0f5);
        }

        .produtos {
            flex: 3;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 40px;
        }

        article.produto {
            background-color: white; border-radius: 15px; overflow: hidden;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        article.produto:hover {
            transform: translateY(-10px); box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }

        article.produto img { width: 100%; height: 320px; object-fit: cover; }
        article.produto h3 { padding: 15px; font-size: 24px; color: #e91e63; }
        article.produto p { padding: 0 15px 20px; color: #555; font-size: 16px; }
        article.produto button { margin: 0 15px 15px; padding: 10px 20px; font-weight: bold; border: none; background: #e91e63; color: white; border-radius: 25px; cursor: pointer; transition: background 0.3s; }
        article.produto button:hover { background: #d81b60; }

        aside {
            flex: 1; background: #fff; margin-left: 40px; border-radius: 15px;
            padding: 20px; height: fit-content; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        aside h3 { color: #e91e63; margin-bottom: 15px; font-family: 'Playfair Display', serif; }
        aside ul { list-style: none; }
        aside li { margin-bottom: 10px; font-size: 16px; }
        aside li a { color: #333; transition: color 0.3s; }
        aside li a:hover { color: #e91e63; }

        .sobre { padding: 80px 50px; background: #fff; }
        .sobre h2 { text-align: center; margin-bottom: 30px; font-size: 42px; color: #e91e63; font-family: 'Playfair Display', serif; }
        .sobre p { max-width: 900px; margin: 0 auto; text-align: center; font-size: 18px; color: #555; line-height: 1.8; }

        footer { background: #e91e63; color: white; text-align: center; padding: 40px 20px; }
        footer h3 { font-size: 24px; margin-bottom: 15px; }
        footer p { font-size: 16px; }
        footer a { color: white; font-weight: bold; transition: color 0.3s; }
        footer a:hover { color: #ffb6c1; }

        @media (max-width: 1024px) {
            .colecoes { flex-direction: column; }
            aside { margin-left: 0; margin-top: 40px; }
        }

        @media (max-width: 768px) {
            .hero h2 { font-size: 36px; }
            .hero p { font-size: 16px; }
            header { padding: 15px 20px; }
            .sobre h2 { font-size: 32px; }
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header>
        <h1>Fashionista</h1>
        <nav>
            <a href="#colecoes">Coleções</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="hero-content">
            <h2>Estilo que inspira</h2>
            <p>Explore as últimas tendências e eleve seu guarda-roupa com peças exclusivas.</p>
            <button>Ver Coleções</button>
        </div>
    </section>

    <!-- Main -->
    <main>

        <!-- Coleções com Aside -->
        <section class="colecoes" id="colecoes">
            <div class="produtos">
                <article class="produto">
                    <img src="https://images.unsplash.com/photo-1520975860606-1366a3454c44?auto=format&fit=crop&w=800&q=80" alt="Vestido Elegante">
                    <h3>Vestido Elegante</h3>
                    <p>Perfeito para festas e eventos especiais.</p>
                    <button>Comprar</button>
                </article>

                <article class="produto">
                    <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80" alt="Jaqueta Fashion">
                    <h3>Jaqueta Fashion</h3>
                    <p>Estilo urbano e confortável para o dia a dia.</p>
                    <button>Comprar</button>
                </article>

                <article class="produto">
                    <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80" alt="Bolsa Premium">
                    <h3>Bolsa Premium</h3>
                    <p>Acessório que combina elegância e praticidade.</p>
                    <button>Comprar</button>
                </article>
            </div>

            <!-- Aside com promoções -->
            <aside>
                <h3>Promoções</h3>
                <ul>
                    <li><a href="#">10% de desconto em vestidos</a></li>
                    <li><a href="#">Frete grátis acima de R$200</a></li>
                    <li><a href="#">Coleção Outono/Inverno 2025</a></li>
                    <li><a href="#">Novidades toda semana</a></li>
                </ul>
            </aside>
        </section>

        <!-- Sobre a marca -->
        <section class="sobre" id="sobre">
            <h2>Sobre a Fashionista</h2>
            <p>
                A Fashionista nasceu para transformar o estilo do dia a dia em expressão de personalidade.
                Cada peça é cuidadosamente desenhada com atenção aos detalhes, tendências internacionais e materiais de alta qualidade.
                Nosso objetivo é que cada cliente se sinta confiante e elegante, refletindo sua própria essência através da moda.
            </p>
        </section>

    </main>

    <!-- Footer / Contato -->
    <footer id="contato">
        <h3>Entre em Contato</h3>
        <p>Email: <a href="mailto:contato@fashionista.com">contato@fashionista.com</a></p>
        <p>Telefone: (11) 99999-9999</p>
        <p>&copy; 2025 Fashionista. Todos os direitos reservados.</p>
    </footer>

</body>
</html>
