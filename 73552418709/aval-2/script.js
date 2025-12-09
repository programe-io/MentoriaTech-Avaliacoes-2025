document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-portfolio3");
  const retorno = document.getElementById("retorno");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    retorno.textContent = "Mensagem enviada com sucesso neste portfólio acadêmico fictício!";
  });
});
