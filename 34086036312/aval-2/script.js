// Arquivo JS para funcionalidades simples (preenche o ano do rodapé)
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  console.log("Site da Ruti carregado com sucesso (footer incluído).");
});
