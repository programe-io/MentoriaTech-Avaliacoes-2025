let numeroSecreto;
let tentativas = 0;
const maxTentativas = 10; // Opcional: limite de tentativas.

// Referências aos elementos HTML
const palpiteEntrada = document.getElementById('palpiteEntrada');
const enviarPalpiteBtn = document.getElementById('enviarPalpite');
const reiniciarJogoBtn = document.getElementById('reiniciarJogo');
const mensagemEl = document.getElementById('mensagem');
const tentativasEl = document.getElementById('tentativas');

// Função para iniciar ou reiniciar o jogo
function iniciarJogo() {
    // 1. Gera um novo número secreto (entre 1 e 100)
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    
    // 2. Reseta o estado da interface
    mensagemEl.textContent = 'Boa sorte! Você tem que adivinhar o número.';
    tentativasEl.textContent = `Tentativas: 0`;
    palpiteEntrada.value = '';
    palpiteEntrada.disabled = false;
    enviarPalpiteBtn.disabled = false;
    reiniciarJogoBtn.style.display = 'none';
}

// Função principal de palpite
function verificarPalpite() {
    const palpite = parseInt(palpiteEntrada.value);

    // Validação de entrada
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagemEl.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    tentativas++;
    tentativasEl.textContent = `Tentativas: ${tentativas}`;

    if (palpite === numeroSecreto) {
        // Vencedor
        mensagemEl.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        fimDeJogo(true);
    } else if (palpite < numeroSecreto) {
        // Palpite baixo
        mensagemEl.textContent = 'Seu palpite é **muito baixo**! Tente novamente.';
    } else {
        // Palpite alto
        mensagemEl.textContent = 'Seu palpite é **muito alto**! Tente novamente.';
    }
    
    // Opcional: Lógica para limite de tentativas
    // if (maxTentativas && tentativas >= maxTentativas && palpite !== numeroSecreto) {
    //     mensagemEl.textContent = `Game Over! Você atingiu o limite de ${maxTentativas} tentativas. O número secreto era ${numeroSecreto}.`;
    //     fimDeJogo(false);
    // }

    // Limpa o campo para a próxima tentativa
    palpiteEntrada.value = '';
    palpiteEntrada.focus();
}

// Função para encerrar o jogo (acerto ou limite de tentativas)
function fimDeJogo(vitoria) {
    palpiteEntrada.disabled = true;
    enviarPalpiteBtn.disabled = true;
    reiniciarJogoBtn.style.display = 'block';
}

// Adiciona os eventos (listeners)
enviarPalpiteBtn.addEventListener('click', verificarPalpite);
reiniciarJogoBtn.addEventListener('click', iniciarJogo);

// Inicia o jogo quando a página carrega
iniciarJogo();