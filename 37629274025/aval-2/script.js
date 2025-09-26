/* script.js
   Controles de demo, geração do tabuleiro de xadrez e calculadora simples.
   Mantém animações .fade.show (estilo bootstrap-like).
*/

document.addEventListener('DOMContentLoaded', function () {
  // Elementos de controle
  const chessBtn = document.getElementById('open-chess');
  const calcBtn  = document.getElementById('open-calculator');
  const closeButtons = document.querySelectorAll('.close-demo');

  // Abrir demos
  chessBtn.addEventListener('click', () => showDemo('chess-demo'));
  calcBtn.addEventListener('click', () => showDemo('calc-demo'));
  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget.getAttribute('data-target');
      hideDemo(target);
    });
  });

  function showDemo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = 'block';
    // forçar reflow antes de adicionar a classe show (garante animação)
    void el.offsetWidth;
    el.classList.add('show');
    el.setAttribute('aria-hidden', 'false');

    if (id === 'chess-demo') generateChessboard();
  }

  function hideDemo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('show');
    el.setAttribute('aria-hidden', 'true');

    const onEnd = (e) => {
      if (e.propertyName === 'opacity') {
        el.style.display = 'none';
        el.removeEventListener('transitionend', onEnd);
      }
    };
    el.addEventListener('transitionend', onEnd);

    // fallback
    setTimeout(() => {
      if (!el.classList.contains('show')) el.style.display = 'none';
    }, 600);
  }

  // ==========================
  // Calculadora simples
  // ==========================
  const calcRun = document.getElementById('calc-run');
  if (calcRun) calcRun.addEventListener('click', runCalculation);

  function runCalculation() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const op = document.getElementById('op').value;
    const outSpan = document.querySelector('#calc-result span');

    if (Number.isNaN(n1) || Number.isNaN(n2)) {
      outSpan.textContent = 'Por favor insira dois números válidos.';
      return;
    }

    let res;
    switch (op) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/':
        if (n2 === 0) { outSpan.textContent = 'Erro: divisão por zero.'; return; }
        res = n1 / n2;
        break;
      default: outSpan.textContent = 'Operação desconhecida.'; return;
    }

    outSpan.textContent = Number.isInteger(res) ? res : res.toFixed(4);
  }

  // ==========================
  // Geração do tabuleiro de xadrez (apenas visual / leitura)
  // ==========================
  function generateChessboard() {
    const board = document.getElementById('chessboard');
    if (!board) return;
    board.innerHTML = '';
    const files = ['a','b','c','d','e','f','g','h'];

    const initial = [
      ['♜','♞','♝','♛','♚','♝','♞','♜'],
      ['♟','♟','♟','♟','♟','♟','♟','♟'],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['','','','','','','',''],
      ['♙','♙','♙','♙','♙','♙','♙','♙'],
      ['♖','♘','♗','♕','♔','♗','♘','♖']
    ];

    for (let rank = 8; rank >= 1; rank--) {
      for (let file = 0; file < 8; file++) {
        const sq = document.createElement('div');
        sq.className = 'square';
        const isLight = (rank + file) % 2 === 0;
        sq.classList.add(isLight ? 'light' : 'dark');

        const coord = files[file] + rank;
        sq.dataset.coord = coord;

        const rowIndex = 8 - rank;
        const piece = initial[rowIndex][file];
        sq.textContent = piece || '';

        sq.addEventListener('click', () => {
          // Mensagem simples para demonstração
          alert('Casa: ' + coord + (piece ? ' — Peça: ' + piece : ' — Vazia'));
        });

        board.appendChild(sq);
      }
    }
  }
});
