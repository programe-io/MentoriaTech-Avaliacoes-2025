document.addEventListener("DOMContentLoaded", function () {
  const data = new Date();
  const formatada = data.toLocaleDateString("pt-BR", {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  document.getElementById("data-postagem").textContent = formatada;
});
