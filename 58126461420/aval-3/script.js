document.getElementById("btn").addEventListener("click", function () {
  const textoSpan = document.getElementById("texto-span");
  // Texto inserido dentro do <span> obrigatório
  textoSpan.textContent = "Curiosidade: A maior goleada registrada em partidas oficiais entre clubes foi 149 x 0, em Madagascar, 2002.";
  // garantir que o container fique visível
  document.getElementById("texto").classList.remove("hidden");
});

