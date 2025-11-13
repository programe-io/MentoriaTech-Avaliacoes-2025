<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Site Simples</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Cabeçalho -->
  <header>
    <h1>Meu Site Simples</h1>
    <nav>
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <!-- Conteúdo principal -->
  <main>
    <section id="home">
      <h2>Bem-vindo!</h2>
      <p>Este é um site simples feito com HTML, CSS e JavaScript.</p>
      <button id="btnMensagem">Clique aqui</button>
      <p id="mensagem"></p>
    </section>

    <section id="sobre">
      <h2>Sobre</h2>
      <p>Este projeto demonstra como combinar estrutura, estilo e interatividade.</p>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <form id="formContato">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" required>
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <button type="submit">Enviar</button>
      </form>
      <p id="status"></p>
    </section>
  </main>

  <!-- Rodapé -->
  <footer>
    <p>&copy; 2025 - Meu Site Simples</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
