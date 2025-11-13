const celulas = document.querySelectorAll(".celula");
const mensagem = document.getElementById("mensagem");
const botaoReiniciar = document.getElementById("reiniciar");

let jogadorAtual = "X";
let jogoAtivo = true;
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

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

function verificarVencedor() {
  for (let condicao of combinacoesVitoria) {
    const [a, b, c] = condicao;
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      jogoAtivo = false;
      mensagem.textContent = `Jogador ${tabuleiro[a]} venceu! 🏆`;
      return;
    }
  }

  if (!tabuleiro.includes("")) {
    jogoAtivo = false;
    mensagem.textContent = "Empate! 😅";
  }
}

function clicarCelula(e) {
  const index = e.target.dataset.index;

  if (!jogoAtivo || tabuleiro[index] !== "") return;

  tabuleiro[index] = jogadorAtual;
  e.target.textContent = jogadorAtual;

  verificarVencedor();

  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  if (jogoAtivo) mensagem.textContent = `Vez do jogador ${jogadorAtual}`;
}

function reiniciarJogo() {
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  celulas.forEach(c => (c.textContent = ""));
  jogadorAtual = "X";
  jogoAtivo = true;
  mensagem.textContent = "Vez do jogador X";
}

celulas.forEach(c => c.addEventListener("click", clicarCelula));
botaoReiniciar.addEventListener("click", reiniciarJogo);

