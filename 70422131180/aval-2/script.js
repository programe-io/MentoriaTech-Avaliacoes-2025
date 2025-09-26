const curiosidades = [
  "O primeiro jogo oficial de futebol aconteceu em 1863, na Inglaterra.",
  "A Copa do Mundo FIFA é o evento esportivo mais assistido no mundo.",
  "Pelé marcou mais de 1000 gols em sua carreira profissional.",
  "O maior placar em uma partida oficial foi 149-0, em um jogo da Escócia em 1885.",
  "O futebol feminino tem crescido muito e ganhou mais popularidade nos últimos anos."
];

function mostrarCuriosidade() {
  const index = Math.floor(Math.random() * curiosidades.length);
  document.getElementById('curiosidade').textContent = curiosidades[index];
}
