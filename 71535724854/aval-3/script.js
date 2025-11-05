// Exemplo: carregamento dinâmico de hora atual no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  const now = new Date();
  footer.innerHTML += `<br><small>Atualizado em ${now.toLocaleString("pt-BR")}</small>`;
});
