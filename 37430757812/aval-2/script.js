// === Mensagem de boas-vindas ===
const btnMensagem = document.getElementById("btnMensagem");
const resultado = document.getElementById("resultado");

btnMensagem.addEventListener("click", () => {
  resultado.textContent = "🚀 Parabéns! Você executou o JavaScript com sucesso!";
  resultado.style.color = "#2563eb";
});

// === Calculadora simples ===
const btnSomar = document.getElementById("btnSomar");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resSoma = document.getElementById("resSoma");

btnSomar.addEventListener("click", () => {
  const valor1 = Number(num1.value);
  const valor2 = Number(num2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    resSoma.textContent = "Por favor, digite números válidos!";
    resSoma.style.color = "red";
  } else {
    const soma = valor1 + valor2;
    resSoma.textContent = `Resultado da soma: ${soma}`;
    resSoma.style.color = "green";
  }
});
