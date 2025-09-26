function mostrarMais() {
  const info = document.getElementById("infoExtra");
  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  document.getElementById("confirmacao").textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
  
  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";
}
