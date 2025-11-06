<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Futebol em Imagens - Galeria Interativa</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #e8f5e9;
            color: #1b5e20;
            text-align: center;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #2e7d32;
        }

        img {
            width: 350px;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s;
        }

        img:hover {
            transform: scale(1.05);
        }

        #legenda {
            margin-top: 10px;
            font-style: italic;
            color: #388e3c;
        }

        button {
            background-color: #2e7d32;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 1em;
            margin-top: 15px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background-color: #43a047;
        }

        footer {
            background-color: #1b5e20;
            color: white;
            padding: 15px;
            margin-top: 30px;
        }
    </style>
</head>
<body>

    <h1>⚽ Galeria Interativa do Futebol</h1>
    <p>Clique no botão e veja momentos marcantes do futebol mundial!</p>

    <!-- Imagem e legenda -->
    <div>
        <img id="foto" src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Pele_con_Boca_Juniors_1969_%28cropped%29.jpg" alt="Imagem de futebol">
        <p id="legenda">Pelé — O Rei do Futebol 🇧🇷</p>
    </div>

    <!-- Botão que muda a imagem -->
    <button onclick="proximaImagem()">Próxima Imagem ➡️</button>

    <footer>
        <p>Site criado por um fã do futebol 💚 | &copy; 2025</p>
    </footer>

    <!-- JavaScript -->
    <script>
        // Lista de imagens de futebol
        const imagens = [
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Pele_con_Boca_Juniors_1969_%28cropped%29.jpg",
                legenda: "Pelé — O Rei do Futebol 🇧🇷"
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Lionel_Messi_20180626.jpg",
                legenda: "Lionel Messi — O Maestro Argentino 🇦🇷"
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
                legenda: "Cristiano Ronaldo — O Fenômeno Português 🇵🇹"
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Maracana_Stadium_in_Rio_de_Janeiro.jpg",
                legenda: "Maracanã — O Templo do Futebol Brasileiro 🏟️"
            },
            {
                src: "https://upload.wikimedia.org/wikipedia/commons/8/86/World_Cup_2014_Final_-_Germany_vs_Argentina_%2814326904370%29.jpg",
                legenda: "Final da Copa do Mundo de 2014 — Alemanha x Argentina 🏆"
            }
        ];

        let indice = 0;

        // Função que muda para a próxima imagem
        function proximaImagem() {
            indice++;
            if (indice >= imagens.length) {
                indice = 0; // volta ao início
            }

            const img = document.getElementById("foto");
            const legenda = document.getElementById("legenda");

            img.src = imagens[indice].src;
            legenda.textContent = imagens[indice].legenda;
        }
    </script>

</body>
</html>
