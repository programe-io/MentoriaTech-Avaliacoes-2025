document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const retorno = document.getElementById("retorno");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    retorno.textContent = "Mensagem registrada com sucesso para este exemplo!";
  });
});
