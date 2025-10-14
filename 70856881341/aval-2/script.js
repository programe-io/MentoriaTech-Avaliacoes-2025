function mostrarTime() {
  const time = document.getElementById("timeInput").value;
  const resposta = document.getElementById("resposta");

  if (time.trim() === "") {
    resposta.textContent = "Por favor, digite o nome de um time.";
  } else {
    resposta.textContent = `Você gosta do ${time}? Que legal! ⚽`;
  }
}