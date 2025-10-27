// Rolagem suave ao clicar no botão "Saiba mais"
document.getElementById("btnSaibaMais").addEventListener("click", () => {
  document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
});

// Envio do formulário com alerta
document.getElementById("formContato").addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso 🚀`);
  e.target.reset();
});
