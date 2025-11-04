<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Imagem Academia JS</title>

<style>
  body {
    background-color: #0d0d0d;
    font-family: 'Poppins', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .academia-container {
    position: relative;
    width: 400px;
    height: 300px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(255, 102, 0, 0.5);
    transition: transform 0.5s ease;
  }

  .academia-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .academia-container:hover img {
    transform: scale(1.05);
  }

  .academia-texto {
    margin-top: 15px;
    font-size: 1.3em;
    text-align: center;
    color: #ff6600;
    transition: color 0.3s ease;
  }

  button {
    margin-top: 20px;
    padding: 10px 25px;
    font-size: 1em;
    background: #ff6600;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  button:hover {
    background: #ff8533;
  }
</style>
</head>

<body>
  <div class="academia-container">
    <img id="imgAcademia" 
      src="https://images.unsplash.com/photo-1571019613914-85f342c55f23?auto=format&fit=crop&w=800&q=80" 
      alt="Academia">
  </div>

  <div class="academia-texto" id="textoAcademia">"Sem dor, sem ganho 💪"</div>

  <button onclick="trocarImagem()">Mudar Motivação</button>

  <script>
    // Lista de imagens e frases motivacionais
    const imagens = [
      {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
        texto: "Treine com foco! 🏋️‍♂️"
      },
      {
        src: "https://images.unsplash.com/photo-1576675784511-611e0ad3d1a3?auto=format&fit=crop&w=800&q=80",
        texto: "A força vem da persistência 🔥"
      },
      {
        src: "https://images.unsplash.com/photo-1599058917212-d750089bc07d?auto=format&fit=crop&w=800&q=80",
        texto: "Cada treino é uma vitória 💥"
      }
    ];

    let indice = 0;

    function trocarImagem() {
      indice = (indice + 1) % imagens.length;
      const img = document.getElementById("imgAcademia");
      const texto = document.getElementById("textoAcademia");

      img.src = imagens[indice].src;
      texto.textContent = imagens[indice].texto;
    }
  </script>
</body>
</html>
