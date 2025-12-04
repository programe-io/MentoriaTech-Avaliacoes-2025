function abrirModal(nome) {
  const modal = document.getElementById("modal");
  const texto = document.getElementById("modalTexto");

  texto.innerText = "Informações sobre " + nome;
  modal.showModal();
}

function fecharModal() {
  document.getElementById("modal").close();
}

document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const resposta = document.getElementById("resposta").value;
  const resultado = document.getElementById("resultado");
  const progresso = document.getElementById("progresso");

  if (resposta === "mundo") {
    resultado.innerText = "Resposta correta!";
    progresso.value = 1;
  } else {
    resultado.innerText = "Resposta errada!";
    progresso.value = 0;
  }
});

document.getElementById("contatoForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});
