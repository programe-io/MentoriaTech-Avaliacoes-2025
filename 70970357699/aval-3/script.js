// ========================
//        JAVASCRIPT APRIMORADO
// ========================

const tabuleiroElement = document.getElementById('tabuleiro');
const infoElement = document.getElementById('jogador-atual');

let tabuleiro = []; 
let jogadorAtual = 'vermelha'; 
let casaSelecionada = null; 

// --- FUNÇÕES DE LÓGICA DE JOGO ---

/**
 * Calcula todos os movimentos válidos (inclusivo de captura) para uma peça.
 * @param {number} r - Linha da peça.
 * @param {number} c - Coluna da peça.
 * @returns {Array} Lista de objetos {r, c, captura: [r_cap, c_cap]}
 */
function obterMovimentosValidos(r, c) {
    const movimentos = [];
    const peca = tabuleiro[r][c];
    if (!peca) return movimentos;

    const direcoesPadrao = []; // Vetor de vetores: [dr, dc]

    // Peça comum (só anda para frente)
    if (!peca.dama) {
        if (peca.cor === 'vermelha') direcoesPadrao.push([-1, 1], [-1, -1]); // Vermelha anda para cima
        if (peca.cor === 'preta') direcoesPadrao.push([1, 1], [1, -1]); // Preta anda para baixo
    } else {
        // Dama (anda para todas as diagonais)
        direcoesPadrao.push([1, 1], [1, -1], [-1, 1], [-1, -1]);
    }

    const oponente = peca.cor === 'vermelha' ? 'preta' : 'vermelha';

    for (const [dr, dc] of direcoesPadrao) {
        // 1. Movimento Simples (1 casa na diagonal)
        const r1 = r + dr;
        const c1 = c + dc;

        if (r1 >= 0 && r1 < 8 && c1 >= 0 && c1 < 8) {
            if (!tabuleiro[r1][c1]) {
                // Casa de destino vazia: Movimento válido
                movimentos.push({ r: r1, c: c1, captura: null });
            }
        }
        
        // 2. Movimento de Captura (2 casas na diagonal, pulando o oponente)
        if (!peca.dama) { // Lógica de captura simples para peças comuns
            if (r1 >= 0 && r1 < 8 && c1 >= 0 && c1 < 8) {
                const peca1 = tabuleiro[r1][c1];
                
                if (peca1 && peca1.cor === oponente) {
                    const r2 = r1 + dr; // Segunda casa na mesma direção
                    const c2 = c1 + dc;

                    if (r2 >= 0 && r2 < 8 && c2 >= 0 && c2 < 8 && !tabuleiro[r2][c2]) {
                        // Segunda casa vazia: Captura válida
                        movimentos.push({ r: r2, c: c2, captura: [r1, c1] });
                    }
                }
            }
        }
        // Nota: A lógica de captura da Dama é mais complexa e precisaria de um loop `while`
    }

    return movimentos;
}

/**
 * Remove classes de destaque e aplica a classe de movimento-valido.
 * @param {Array} movimentos - Lista de movimentos válidos.
 */
function destacarMovimentos(movimentos) {
    document.querySelectorAll('.movimento-valido').forEach(e => e.classList.remove('movimento-valido'));
    
    movimentos.forEach(mov => {
        const casa = document.getElementById(`c-${mov.r}-${mov.c}`);
        if (casa) {
            casa.classList.add('movimento-valido');
        }
    });
}

/**
 * Executa o movimento, atualiza o tabuleiro e troca o turno.
 * @param {number} rDestino - Linha de destino.
 * @param {number} cDestino - Coluna de destino.
 * @param {object} movimento - O objeto movimento validado, incluindo a info de captura.
 */
function executarMovimento(rDestino, cDestino, movimento) {
    const [selR, selC] = casaSelecionada;
    const casaOrigem = document.getElementById(`c-${selR}-${selC}`);
    const casaDestino = document.getElementById(`c-${rDestino}-${cDestino}`);
    const pecaMovida = tabuleiro[selR][selC];

    // 1. Lidar com Captura
    if (movimento.captura) {
        const [rCap, cCap] = movimento.captura;
        tabuleiro[rCap][cCap] = null; // Remove da matriz
        const casaCapturada = document.getElementById(`c-${rCap}-${cCap}`);
        casaCapturada.innerHTML = ''; // Remove do DOM
    }

    // 2. Mover a peça na matriz
    tabuleiro[rDestino][cDestino] = pecaMovida;
    tabuleiro[selR][selC] = null;

    // 3. Mover a peça no DOM (visual)
    casaDestino.appendChild(casaOrigem.firstChild); 
    
    // 4. Verificar Coroação (Dama)
    if (!pecaMovida.dama) {
        if ((jogadorAtual === 'vermelha' && rDestino === 0) || (jogadorAtual === 'preta' && rDestino === 7)) {
            pecaMovida.dama = true;
            casaDestino.firstChild.classList.add('dama');
        }
    }

    // 5. Trocar o turno e limpar a seleção
    jogadorAtual = jogadorAtual === 'vermelha' ? 'preta' : 'vermelha';
    infoElement.textContent = jogadorAtual.toUpperCase();
    casaSelecionada = null;
    document.querySelectorAll('.selecionada').forEach(e => e.classList.remove('selecionada'));
    document.querySelectorAll('.movimento-valido').forEach(e => e.classList.remove('movimento-valido'));
}


// --- FUNÇÃO PRINCIPAL DE INTERAÇÃO ---

function clicarCasa(r, c) {
    const casaAtual = document.getElementById(`c-${r}-${c}`);
    const pecaNaCasa = tabuleiro[r][c];

    const movimentosAtuais = casaSelecionada ? 
        obterMovimentosValidos(casaSelecionada[0], casaSelecionada[1]) : [];
    
    // 1. TENTATIVA DE MOVER: Se houver uma peça selecionada (casaSelecionada !== null)
    if (casaSelecionada) {
        // Verifica se a casa clicada é um movimento válido
        const movimentoEncontrado = movimentosAtuais.find(mov => mov.r === r && mov.c === c);
        
        if (movimentoEncontrado) {
            executarMovimento(r, c, movimentoEncontrado);
            return; // Movimento executado, sai da função
        }
    }

    // 2. SELEÇÃO DE PEÇA: Se a casa tiver uma peça do jogador atual
    if (pecaNaCasa && pecaNaCasa.cor === jogadorAtual) {
        // Limpar seleções anteriores
        document.querySelectorAll('.selecionada').forEach(e => e.classList.remove('selecionada'));
        
        casaSelecionada = [r, c];
        casaAtual.classList.add('selecionada');
        
        const novosMovimentos = obterMovimentosValidos(r, c);
        destacarMovimentos(novosMovimentos);
        
    } else {
        // Limpa tudo se clicar em casa vazia ou peça adversária sem ter nada selecionado
        casaSelecionada = null;
        document.querySelectorAll('.selecionada').forEach(e => e.classList.remove('selecionada'));
        document.querySelectorAll('.movimento-valido').forEach(e => e.classList.remove('movimento-valido'));
    }
}


// --- FUNÇÕES DE INICIALIZAÇÃO ---

function renderizarPeca(casaElement, pecaObj) {
    const pecaElement = document.createElement('div');
    pecaElement.classList.add('peca', pecaObj.cor);
    if (pecaObj.dama) {
        pecaElement.classList.add('dama');
    }
    casaElement.appendChild(pecaElement);
}

function inicializarTabuleiro() {
    // ... (Mantém a lógica de inicialização de matriz e DOM do código anterior) ...
    tabuleiro = []; 
    tabuleiroElement.innerHTML = ''; 

    for (let r = 0; r < 8; r++) { 
        tabuleiro[r] = [];
        for (let c = 0; c < 8; c++) { 
            const casa = document.createElement('div');
            casa.classList.add('casa');
            casa.dataset.linha = r;
            casa.dataset.coluna = c;
            casa.id = `c-${r}-${c}`; 

            const isBlack = (r + c) % 2 !== 0; 
            casa.classList.add(isBlack ? 'preta' : 'branca');
            
            casa.onclick = () => clicarCasa(r, c);

            let peca = null;
            if (isBlack) {
                if (r < 3) { 
                    peca = { cor: 'preta', dama: false };
                } else if (r > 4) { 
                    peca = { cor: 'vermelha', dama: false };
                }
            }
            
            tabuleiro[r][c] = peca;
            if (peca) {
                renderizarPeca(casa, peca);
            }
            
            tabuleiroElement.appendChild(casa);
        }
    }
    infoElement.textContent = jogadorAtual.toUpperCase();
}

function reiniciarJogo() {
    jogadorAtual = 'vermelha';
    casaSelecionada = null;
    inicializarTabuleiro();
}

// Inicia o jogo
inicializarTabuleiro();