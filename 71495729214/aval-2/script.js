// ===== SCRIPT SOBRE FUTEBOL =====

// Lista de curiosidades sobre futebol
const curiosidades = [
  "O Brasil é o único país que participou de todas as Copas do Mundo.",
  "A bola de futebol oficial tem 32 gomos.",
  "O jogador mais jovem a marcar em uma Copa foi Pelé, com 17 anos.",
  "O maior placar registrado foi 149x0, em Madagascar!",
  "A primeira Copa do Mundo aconteceu em 1930, no Uruguai."
];

// Função para exibir uma curiosidade aleatória
function mostrarCuriosidade() {
  const indice = Math.floor(Math.random() * curiosidades.length);
  const curiosidade = curiosidades[indice];
  document.getElementById("curiosidade").innerText = curiosidade;
}

// ===== Simulador de Placar =====
let golsTimeA = 0;
let golsTimeB = 0;

function marcarGol(time) {
  if (time === 'A') {
    golsTimeA++;
  } else {
    golsTimeB++;
  }

  atualizarPlacar();
}

function atualizarPlacar() {
  document.getElementById("placar").innerText = `${golsTimeA} x ${golsTimeB}`;
}

// ===== Mensagem final =====
function encerrarJogo() {
  let mensagem = "";
  if (golsTimeA > golsTimeB) {
    mensagem = "🏆 O Time A venceu!";
  } else if (golsTimeB > golsTimeA) {
    mensagem = "🏆 O Time B venceu!";
  } else {
    mensagem = "🤝 Empate! Que jogo equilibrado!";
  }
  alert(mensagem);
}
