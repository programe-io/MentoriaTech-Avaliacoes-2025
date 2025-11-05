<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vlog de Penteados Infantis ✨</title>
    <style>
        body {
            font-family: 'Comic Sans MS', cursive, sans-serif;
            background-color: #fff8f0;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #ffb6c1;
            color: white;
            padding: 40px 20px;
        }

        header h1 {
            margin: 0;
            font-size: 2.5em;
        }

        #galeria-container {
            margin: 40px auto;
        }

        #galeria-container img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        #galeria-container img:hover {
            transform: scale(1.05);
        }

        button {
            margin: 20px 10px;
            padding: 10px 20px;
            font-size: 1em;
            border: none;
            border-radius: 10px;
            background-color: #e91e63;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #ff4081;
        }

        footer {
            background-color: #ffb6c1;
            color: white;
            padding: 20px;
            margin-top: 40px;
        }
    </style>
</head>
<body>

    <header>
        <h1>Vlog de Penteados Infantis 💕</h1>
        <p>Explore os penteados mais fofos e criativos!</p>
    </header>

    <section id="galeria-container">
        <img id="penteado-img" src="https://via.placeholder.com/300.png?text=Penteado+1" alt="Penteado Infantil">
        <div>
            <button onclick="anterior()">⬅️ Anterior</button>
            <button onclick="proximo()">Próximo ➡️</button>
        </div>
    </section>

    <footer>
        <p>📧 Contato: <a href="mailto:vlogpenteados@gmail.com" style="color:white;">vlogpenteados@gmail.com</a></p>
        <p>© 2025 Vlog de Penteados Infantis | Feito com 💖</p>
    </footer>

    <script>
        // Array com URLs das imagens
        const imagens = [
            "https://via.placeholder.com/300.png?text=Penteado+1",
            "https://via.placeholder.com/300.png?text=Penteado+2",
            "https://via.placeholder.com/300.png?text=Penteado+3",
            "https://via.placeholder.com/300.png?text=Penteado+4"
        ];

        let indiceAtual = 0; // imagem inicial

        // Função para mostrar a imagem atual
        function mostrarImagem() {
            const imgElemento = document.getElementById('penteado-img');
            imgElemento.src = imagens[indiceAtual];
        }

        // Função para próxima imagem
        function proximo() {
            indiceAtual++;
            if(indiceAtual >= imagens.length) {
                indiceAtual = 0; // volta para a primeira
            }
            mostrarImagem();
        }

        // Função para imagem anterior
        function anterior() {
            indiceAtual--;
            if(indiceAtual < 0) {
                indiceAtual = imagens.length - 1; // vai para a última
            }
            mostrarImagem();
        }

        // Inicializa a primeira imagem
        mostrarImagem();
    </script>

</body>
</html>
