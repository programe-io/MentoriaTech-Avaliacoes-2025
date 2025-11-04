<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galería de Academia</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
        }

        h1 {
            color: #333;
        }

        #academia-img {
            width: 400px;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 8px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s;
        }

        #academia-img:hover {
            transform: scale(1.05);
        }

        button {
            padding: 10px 20px;
            margin: 20px 10px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Galería de Nuestra Academia</h1>
    <img id="academia-img" src="https://images.unsplash.com/photo-1599058917218-2f2e8a318d8e" alt="Imagen de academia">
    <br>
    <button onclick="anterior()">Anterior</button>
    <button onclick="siguiente()">Siguiente</button>

    <script>
        // Array de imágenes de la academia
        const imagenes = [
            "https://images.unsplash.com/photo-1599058917218-2f2e8a318d8e",
            "https://images.unsplash.com/photo-1594737625785-0f4be80c7998",
            "https://images.unsplash.com/photo-1599058947210-3e2f8a318f9a"
        ];

        let indice = 0; // Imagen actual

        const imgElemento = document.getElementById('academia-img');

        // Función para mostrar la siguiente imagen
        function siguiente() {
            indice++;
            if (indice >= imagenes.length) {
                indice = 0;
            }
            imgElemento.src = imagenes[indice];
        }

        // Función para mostrar la imagen anterior
        function anterior() {
            indice--;
            if (indice < 0) {
                indice = imagenes.length - 1;
            }
            imgElemento.src = imagenes[indice];
        }

        // Cambio automático cada 5 segundos
        setInterval(siguiente, 5000);
    </script>
</body>
</html>
