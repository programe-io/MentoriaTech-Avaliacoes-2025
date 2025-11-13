const historias = [
  "Steve encontrou um portal misterioso em uma mina esquecida...",
  "Alex e seus amigos enfrentaram o Ender Dragon sem armaduras!",
  "Um aldeão descobriu um segredo escondido sob a vila...",
  "Um jogador criou um castelo flutuante com poderes mágicos.",
  "Uma tempestade no Nether revelou uma antiga fortaleza perdida."
];

document.getElementById("btnHistoria").addEventListener("click", () => {
  const aleatoria = historias[Math.floor(Math.random() * historias.length)];
  alert("História aleatória: " + aleatoria);
});
