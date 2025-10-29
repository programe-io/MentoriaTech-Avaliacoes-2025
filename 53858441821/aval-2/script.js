function evtDownload(platform) {
  alert(`O download para ${platform.toUpperCase()} ainda não está disponível (protótipo).`);
}

function sendDownloadLink() {
  const email = document.getElementById("emailDownload").value.trim();
  if (!email) return alert("Por favor, insira um e-mail válido.");
  alert(`Link de download será enviado para: ${email} (simulação)`);
  document.getElementById("emailDownload").value = "";
}

function evtContato(event) {
  event.preventDefault();
  alert("Mensagem enviada! (protótipo)");
  event.target.reset();
}