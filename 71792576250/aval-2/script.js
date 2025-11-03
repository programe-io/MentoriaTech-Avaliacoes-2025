<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Calculadora JavaScript</title>
</head>
<body>
  <h1>Calculadora de Soma</h1>

  <label for="num1">Número 1:</label>
  <input type="number" id="num1" placeholder="Digite um número">

  <label for="num2">Número 2:</label>
  <input type="number" id="num2" placeholder="Digite outro número">

  <button id="somar">Somar</button>

  <h2 id="resultado"></h2>

  <script>
    // Seleciona os elementos do HTML
    const botao = document.getElementById("somar");
    const resultado = document.getElementById("resultado");

    // Adiciona um evento de clique no botão
    botao.addEventListener("click", function() {
      const n1 = parseFloat(document.getElementById("num1").value);
      const n2 = parseFloat(document.getElementById("num2").value);

      // Verifica se os valores são números válidos
      if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, digite dois números válidos!");
        resultado.textContent = "";
        return;
      \}

      // Calcula a soma
      const soma = n1 + n2;

      // Mostra o resultado no HTML
      resultado.textContent = `O resultado da soma é: \${soma\}`;
    \});
  </script>
</body>
</html>$0