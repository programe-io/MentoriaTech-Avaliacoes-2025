const frases = [
  "Estou pronto! Estou pronto!",
  "Eu amo trabalhar no Siri Cascudo!",
  "Vamos caçar águas-vivas!",
  "A melhor risada é a risada de Bob Esponja! hahahaha"
];

document.getElementById("fraseBtn").addEventListener("click", () => {
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").textContent = aleatoria;
});
