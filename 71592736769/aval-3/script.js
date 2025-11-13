const celulas = document.querySelectorAll(".celula");
const mensagem = document.getElementById("mensagem");
const botaoReiniciar = document.getElementById("reiniciar");

let jogadorAtual = "X";
let tabuleiro = ["", "", "", "", "", "", "", "", ""];
let jogoAtivo = true;

// Todas as combinações de vitória possíveis
const combinacoesVitoria = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Função principal ao clicar em uma célula
function clicarCelula(e) {
  const index = e.target.dataset.index;

  if (tabuleiro[index] !== "" || !jogoAtivo) return;

  tabuleiro[index] = jogadorAtual;
  e.target.textContent = jogadorAtual;

  verificarVencedor();

  if (jogoAtivo) {
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    mensagem.textContent = `Vez do jogador ${jogadorAtual}`;
  }
}

// Verifica se alguém ganhou
function verificarVencedor() {
  for (const [a, b, c] of combinacoesVitoria) {
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      mensagem.textContent = `🏆 Jogador ${tabuleiro[a]} venceu!`;
      jogoAtivo = false;
      destacarVitoria([a, b, c]);
      return;
    }
  }

  if (!tabuleiro.includes("")) {
    mensagem.textContent = "😅 Empate!";
    jogoAtivo = false;
  }
}

// Destaca as células da vitória
function destacarVitoria(indices) {
  indices.forEach(i => {
    celulas[i].style.backgroundColor = "#90ee90"; // verde claro
  });
}

// Reinicia o jogo
function reiniciarJogo() {
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  jogoAtivo = true;
  jogadorAtual = "X";
  mensagem.textContent = "Vez do jogador X";
  celulas.forEach(c => {
    c.textContent = "";
    c.style.backgroundColor = "white";
  });
}

// Eventos
celulas.forEach(c => c.addEventListener("click", clicarCelula));
botaoReiniciar.addEventListener("click", reiniciarJogo);
