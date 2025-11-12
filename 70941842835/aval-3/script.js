<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exploração Espacial</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: radial-gradient(circle at bottom, #000015 0%, #000010 100%);
      overflow: hidden;
      font-family: 'Orbitron', sans-serif;
      color: white;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
    }

    .planet {
      position: absolute;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .planet:hover {
      transform: scale(1.2);
    }

    .info-box {
      position: absolute;
      top: 20px;
      left: 20px;
      background: rgba(0, 0, 30, 0.8);
      padding: 15px;
      border: 2px solid #00ffff;
      border-radius: 10px;
      width: 250px;
      display: none;
    }

    .info-box h2 {
      margin: 0 0 10px 0;
      color: #00ffff;
    }

    .info-box p {
      margin: 0;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <canvas id="stars"></canvas>

  <!-- Planetas -->
  <div id="mercurio" class="planet" style="top: 60%; left: 20%; width: 40px; height: 40px; background: gray;"></div>
  <div id="venus" class="planet" style="top: 50%; left: 35%; width: 60px; height: 60px; background: gold;"></div>
  <div id="terra" class="planet" style="top: 45%; left: 50%; width: 70px; height: 70px; background: dodgerblue;"></div>
  <div id="marte" class="planet" style="top: 55%; left: 65%; width: 50px; height: 50px; background: orangered;"></div>

  <!-- Caixa de informações -->
  <div id="info" class="info-box"></div>

  <script>
    // Fundo estelar animado
    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
      });
    }

    function animateStars() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animateStars);
    }

    animateStars();

    // Interatividade dos planetas
    const infoBox = document.getElementById("info");
    const planetas = {
      mercurio: {
        nome: "Mercúrio",
        texto: "O menor planeta do Sistema Solar e o mais próximo do Sol."
      },
      venus: {
        nome: "Vênus",
        texto: "Conhecido como a 'estrela d'alva', Vênus é o planeta mais quente."
      },
      terra: {
        nome: "Terra",
        texto: "Nosso lar azul, o único planeta conhecido com vida."
      },
      marte: {
        nome: "Marte",
        texto: "Chamado de 'planeta vermelho', é um dos alvos principais da exploração espacial."
      }
    };

    Object.keys(planetas).forEach(id => {
      const planeta = document.getElementById(id);
      planeta.addEventListener("click", () => {
        const { nome, texto } = planetas[id];
        infoBox.style.display = "block";
        infoBox.innerHTML = `<h2>${nome}</h2><p>${texto}</p>`;
      });
    });
  </script>
</body>
</html>
