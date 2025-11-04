<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imagem com JavaScript</title>

    <style>
        img {
            width: 300px;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.3s;
        }

        img:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <h1>Exemplo de Imagem com JavaScript</h1>

    <img id="minhaImagem" 
         src="https://www.w3schools.com/html/pic_trulli.jpg" 
         alt="Imagem 1">

    <script>
        // Seleciona a imagem pelo ID
        const img = document.getElementById("minhaImagem");

        // Define duas imagens diferentes
        const imagem1 = "https://www.w3schools.com/html/pic_trulli.jpg";
        const imagem2 = "https://www.w3schools.com/html/img_chania.jpg";

        // Adiciona um evento de clique para alternar as imagens
        img.addEventListener("click", () => {
            if (img.src === imagem1) {
                img.src = imagem2;
            } else {
                img.src = imagem1;
            }
        });
    </script>
</body>
</html>
