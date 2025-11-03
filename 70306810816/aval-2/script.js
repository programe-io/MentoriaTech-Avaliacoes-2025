<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interatividade com Diego</title>
  <style>
    body {
      background-color: #222; /* Fundo escuro */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: white; /* Cor inicial branca */
      font-size: 64px;
      transition: color 0.5s; /* Suaviza a mudança de cor */
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1 id="nome">Diego</h1>
  <button onclick="mudarCor()">Mudar Cor</button>

  <script>
    function mudarCor() {
      // Gera cores aleatórias em RGB
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Seleciona o elemento e muda a cor
      const nome = document.getElementById("nome");
      nome.style.color = `rgb(${r}, ${g}, ${b})`;
    }
  </script>
</body>
</html>
