<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Meu Site</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    nav {
      background-color: #6200ea;
      padding: 10px;
    }
    nav ul {
      list-style: none;
      display: flex;
      gap: 20px;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    main {
      padding: 20px;
    }
  </style>
</head>
<body>

  <nav>
    <ul>
      <li><a href="#">Início</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </nav>

  <main>
    <h1>Bem-vinda, Larisse!</h1>
    <p>Este é um exemplo de site com navegação e interatividade.</p>
    <button onclick="mostrarMensagem()">Clique aqui</button>
  </main>

  <script>
    function mostrarMensagem() {
      alert("Você clicou no botão! 🎉");
    }
  </script>

</body>
</html>