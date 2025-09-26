/* script.js
   Controles de demo, geração do tabuleiro de xadrez e calculadora simples.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Elementos de controle
  const chessBtn = document.getElementById('open-chess');
  const calcBtn  = document.getElementById('open-calculator');
  const chessDemo = document.getElementById('chess-demo');
  const calcDemo  = document.getElementById('calc-demo');
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
    el.style.display = 'block';
    el.setAttribute('aria-hidden', 'false');

    // se for xadrez, gerar tabuleiro
    if (id === 'chess-demo') generateChessboard();
  }

  function hideDemo(id) {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = 'none';
      el.setAttribute('aria-hidden', 'true');
    }
  }

  // ==========================
  // Calculadora simples
  // ==========================
  const calcRun = document.getElementById('calc-run');
  calcRun.addEventListener('click', runCalculation);

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
  // Geração do tabuleiro de xadrez
  // ==========================
  function generateChessboard() {
    const board = document.getElementById('chessboard');
    board.innerHTML = ''; // limpa se já existir
    const files = ['a','b','c','d','e','f','g','h'];

    // Unicode das peças (uso de caracteres para representar as peças)
    const initial = [
      ['♜','♞','♝','♛','♚','♝','♞','♜'], // pretas - 8ª
      ['♟','♟','♟','♟','♟','♟','♟','♟'], // pretas - 7ª
      ['','','','','','','',''], // 6
      ['','','','','','','',''], // 5
      ['','','','','','','',''], // 4
      ['','','','','','','',''], // 3
      ['♙','♙','♙','♙','♙','♙','♙','♙'], // brancas - 2ª
      ['♖','♘','♗','♕','♔','♗','♘','♖']  // brancas - 1ª
    ];

    for (let rank = 8; rank >= 1; rank--) {
      for (let file = 0; file < 8; file++) {
        const sq = document.createElement('div');
        sq.className = 'square';
        const isLight = (rank + file) % 2 === 0;
        sq.classList.add(isLight ? 'light' : 'dark');

        // posição em notação (ex: e4)
        const coord = files[file] + rank;
        sq.dataset.coord = coord;

        // colocar peça da posição inicial
        const rowIndex = 8 - rank; // mapa para vetor 'initial'
        const piece = initial[rowIndex][file];
        sq.textContent = piece || '';

        // clique na casa
        sq.addEventListener('click', () => {
          alert('Casa: ' + coord + (piece ? ' — Peça: ' + piece : ' — Vazia'));
        });

        board.appendChild(sq);
      }
    }
  }
});
/* script.js
   Controles de demo, geração do tabuleiro de xadrez e calculadora simples.
   Adiciona classes .fade.show para animação estilo bootstrap-like.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Elementos de controle
  const chessBtn = document.getElementById('open-chess');
  const calcBtn  = document.getElementById('open-calculator');
  const chessDemo = document.getElementById('chess-demo');
  const calcDemo  = document.getElementById('calc-demo');
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
    // display block para participar das transições
    el.style.display = 'block';
    // forçar reflow antes de adicionar a classe show (para garantir a animação)
    void el.offsetWidth;
    el.classList.add('show');
    el.setAttribute('aria-hidden', 'false');

    // se for xadrez, gerar tabuleiro
    if (id === 'chess-demo') generateChessboard();
  }

  function hideDemo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('show');
    el.setAttribute('aria-hidden', 'true');

    // quando terminar a transição, esconder completamente
    const onEnd = (e) => {
      if (e.propertyName === 'opacity') {
        el.style.display = 'none';
        el.removeEventListener('transitionend', onEnd);
      }
    };
    el.addEventListener('transitionend', onEnd);

    // fallback caso transitionend não dispare
    setTimeout(() => {
      if (!el.classList.contains('show')) el.style.display = 'none';
    }, 500);
  }

  // ==========================
  // Calculadora simples
  // ==========================
  const calcRun = document.getElementById('calc-run');
  calcRun.addEventListener('click', runCalculation);

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
  // Geração do tabuleiro de xadrez
  // ==========================
  function generateChessboard() {
    const board = document.getElementById('chessboard');
    board.innerHTML = ''; // limpa se já existir
    const files = ['a','b','c','d','e','f','g','h'];

    // Unicode das peças (uso de caracteres para representar as peças)
    const initial = [
      ['♜','♞','♝','♛','♚','♝','♞','♜'], // pretas - 8ª
      ['♟','♟','♟','♟','♟','♟','♟','♟'], // pretas - 7ª
      ['','','','','','','',''], // 6
      ['','','','','','','',''], // 5
      ['','','','','','','',''], // 4
      ['','','','','','','',''], // 3
      ['♙','♙','♙','♙','♙','♙','♙','♙'], // brancas - 2ª
      ['♖','♘','♗','♕','♔','♗','♘','♖']  // brancas - 1ª
    ];

    for (let rank = 8; rank >= 1; rank--) {
      for (let file = 0; file < 8; file++) {
        const sq = document.createElement('div');
        sq.className = 'square';
        const isLight = (rank + file) % 2 === 0;
        sq.classList.add(isLight ? 'light' : 'dark');

        // posição em notação (ex: e4)
        const coord = files[file] + rank;
        sq.dataset.coord = coord;

        // colocar peça da posição inicial
        const rowIndex = 8 - rank; // mapa para vetor 'initial'
        const piece = initial[rowIndex][file];
        sq.textContent = piece || '';

        // clique na casa
        sq.addEventListener('click', () => {
          // usando um modal simples via alert para manter implementação leve
          alert('Casa: ' + coord + (piece ? ' — Peça: ' + piece : ' — Vazia'));
        });

        board.appendChild(sq);
      }
    }
  }
});
