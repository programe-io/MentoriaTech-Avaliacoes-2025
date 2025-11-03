<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo JavaScript</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background-color: #f4f4f4;
    \}

    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: white;
      transition: background-color 0.3s;
    \}

    button:hover {
      background-color: #ff9800;
    \}

    #mensagem {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
    \}
  </style>
</head>
<body>

  <h1>Exemplo de JavaScript</h1>
  <button id="botao">Clique aqui!</button>
  <div id="mensagem"></div>

  <script>
    // Seleciona o botão e o elemento de mensagem
    const botao = document.getElementById('botao');
    const mensagem = document.getElementById('mensagem');

    // Adiciona um evento de clique ao botão
    botao.addEventListener('click', function() {
      // Altera o conteúdo do elemento de mensagem
      mensagem.textContent = 'Olá! Você clicou no botão. 😄';
      // Altera a cor da mensagem aleatoriamente
      const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6'];
      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
      mensagem.style.color = corAleatoria;
    \});
  </script>

</body>
</html>$0