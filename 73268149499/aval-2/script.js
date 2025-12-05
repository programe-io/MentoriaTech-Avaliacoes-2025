<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fake News – Detector Educativo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>Detector Educativo de Fake News</h1>
        <p>Aprenda a identificar conteúdos suspeitos antes de compartilhar.</p>
    </header>

    <nav>
        <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">O que são?</a></li>
            <li><a href="#">Como evitar?</a></li>
            <li><a href="#">Detector</a></li>
        </ul>
    </nav>

    <section class="banner">
        <h2>Verifique sempre antes de acreditar.</h2>
    </section>

    <main>

        <!-- Detector Fake News -->
        <section class="detector">
            <h2>Detector Educativo de Possíveis Fake News</h2>
            <p>Digite abaixo um texto ou notícia e o sistema analisará se contém sinais de alerta.</p>

            <textarea id="texto" placeholder="Digite uma notícia ou frase aqui..."></textarea>

            <button onclick="analisarTexto()">Analisar</button>

            <div id="resultado"></div>
        </section>

    </main>

    <footer>
        <p>© 2025 Projeto Anti Fake News – Uso educativo.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
