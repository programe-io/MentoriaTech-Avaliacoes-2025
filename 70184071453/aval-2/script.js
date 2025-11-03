<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Academia PowerFit</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #111;
      color: #eee;
      transition: background-color 0.5s;
    }

    header {
      background-color: #000;
      padding: 40px 20px;
      text-align: center;
      border-bottom: 2px solid #444;
    }

    header h1 {
      font-size: 3em;
      color: #f39c12;
      margin-bottom: 10px;
    }

    header p {
      color: #ccc;
      font-size: 1.2em;
    }

    section {
      padding: 60px 20px;
      max-width: 1200px;
      margin: auto;
    }

    section h2 {
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 50px;
      color: #f39c12;
    }

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
    }

    .card {
      background-color: #222;
      border: 1px solid #444;
      border-radius: 12px;
      width: 250px;
      padding: 20px;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(243, 156, 18, 0.5);
    }

    .card h3 {
      color: #f39c12;
      margin-bottom: 15px;
    }

    .card p {
      font-size: 0.95em;
      color: #ccc;
      margin-bottom: 15px;
    }

    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #f39c12;
      color: #111;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s;
      cursor: pointer;
    }

    .btn:hover {
      background-color: #e67e22;
    }

    footer {
      background-color: #000;
      padding: 20px;
      text-align: center;
      border-top: 2px solid #444;
      color: #777;
    }

    @media (max-width: 768px) {
      .cards {
        flex-direction: column;
        align-items: center;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>PowerFit Academia</h1>
    <p>Transforme seu corpo, fortaleça sua mente.</p>
    <button class="btn" onclick="toggleBackground()">Alterar Fundo</button>
  </header>

  <section>
    <h2>Nossos Treinos</h2>
    <div class="cards">
      <div class="card">
        <h3>Musculação</h3>
        <p>Treinos completos para força, resistência e hipertrofia muscular.</p>
        <button class="btn" onclick="cardClick('Musculação')">Saiba Mais</button>
      </div>
      <div class="card">
        <h3>Cardio</h3>
        <p>Exercícios aeróbicos para queimar gordura e melhorar a saúde cardiovascular.</p>
        <button class="btn" onclick="cardClick('Cardio')">Saiba Mais</button>
      </div>
      <div class="card">
        <h3>Yoga & Flexibilidade</h3>
        <p>Aumente sua flexibilidade, equilíbrio e relaxamento mental.</p>
        <button class="btn" onclick="cardClick('Yoga & Flexibilidade')">Saiba Mais</button>
      </div>
      <div class="card">
        <h3>Treino Funcional</h3>
        <p>Movimentos naturais que melhoram força, coordenação e resistência.</p>
        <button class="btn" onclick="cardClick('Treino Funcional')">Saiba Mais</button>
      </div>
    </div>
  </section>

  <footer>
    &copy; 2025 PowerFit Academia. Todos os direitos reservados.
  </footer>

  <script>
    // Função para alternar o fundo da página
    let dark = true;
    function toggleBackground() {
      if(dark) {
        document.body.style.backgroundColor = "#222";
        dark = false;
      } else {
        document.body.style.backgroundColor = "#111";
        dark = true;
      }
    }

    // Função para interagir com cards
    function cardClick(nomeTreino) {
      alert("Você clicou em: " + nomeTreino);
    }
  </script>
</body>
</html>
