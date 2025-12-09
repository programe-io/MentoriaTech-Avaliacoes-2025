// Quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  const linksMenu = document.querySelectorAll("nav a[href^='#'], .link-topo");
  const botaoTema = document.getElementById("btn-tema");
  const formulario = document.getElementById("contato-form");
  const feedback = document.getElementById("mensagem-feedback");

  // Rolagem suave para as âncoras
  linksMenu.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const alvo = document.querySelector(this.getAttribute("href"));
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Alternar tema claro/escuro
  botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-escuro");
  });

  // Simulação de envio de formulário
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const assunto = document.getElementById("assunto").value;

    let mensagem = "Mensagem enviada com sucesso para este exemplo de página.";

    if (nome) {
      mensagem = `Obrigado, ${nome}. Sua mensagem sobre "${assunto || "assunto geral"}" foi registrada neste exemplo.`;
    }

    feedback.textContent = mensagem;
    formulario.reset();
  });
});
