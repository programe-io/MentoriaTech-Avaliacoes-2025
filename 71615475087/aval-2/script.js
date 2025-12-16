<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Programação do Dia</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f7fafc;
      color: #333;
      padding: 20px;
    }
    h1 {
      color: #2b6cb0;
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      background: #fff;
      margin: 8px 0;
      padding: 12px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .hora {
      font-weight: bold;
      color: #2b6cb0;
    }
  </style>
</head>
<body>
  <h1>Programação do Dia</h1>
  <ul id="agenda"></ul>

  <script>
    // Lista de atividades
    const atividades = [
      { hora: "08h00", atividade: "☀️ Alongamento matinal" },
      { hora: "09h00", atividade: "📚 Aula de informática básica" },
      { hora: "10h30", atividade: "☕ Intervalo para café" },
      { hora: "11h00", atividade: "🎶 Música e recreação" },
      { hora: "12h30", atividade: "🍽️ Almoço" },
      { hora: "14h00", atividade: "🎨 Oficina de pintura" },
      { hora: "16h00", atividade: "⚽ Jogos esportivos" },
      { hora: "18h00", atividade: "🌇 Encerramento do dia" }
    ];

    // Seleciona a lista no HTML
    const agenda = document.getElementById("agenda");

    // Percorre as atividades e adiciona na página
    atividades.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="hora">${item.hora}</span> - ${item.atividade}`;
      agenda.appendChild(li);
    });
  </script>
</body>
</html>