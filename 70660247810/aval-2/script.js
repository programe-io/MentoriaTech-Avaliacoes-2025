function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem-login");

  if (usuario === "jogador" && senha === "1234") {
    mensagem.textContent = "Login bem-sucedido!";
    mensagem.style.color = "lime";
  } else {
    mensagem.textContent = "Usuário ou senha incorretos.";
    mensagem.style.color = "red";
  }

  return false;
}
