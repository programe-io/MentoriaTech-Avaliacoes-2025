// Função JavaScript
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Salvar preferência no navegador
  const modoAtual = document.body.classList.contains("dark-mode") ? "escuro" : "claro";
  localStorage.setItem("modo", modoAtual);
}

// Aplicar preferência ao carregar a página
window.onload = function() {
  const modoSalvo = localStorage.getItem("modo");
  if (modoSalvo === "escuro") {
    document.body.classList.add("dark-mode");
  }
};