function iniciarContador(minutos) {
    let segundosRestantes = minutos * 60;
    const display = document.getElementById('tempo-restante');
    const botao = document.querySelector('button');
    
    // Desabilita o botão para evitar múltiplos cliques
    botao.disabled = true;
    botao.textContent = 'Forno Ligado!';

    const intervalo = setInterval(() => {
        const min = Math.floor(segundosRestantes / 60);
        const sec = segundosRestantes % 60;

        // Formata o tempo (adiciona zero à esquerda se for menor que 10)
        const tempoFormatado = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        
        display.textContent = `⏳ Tempo restante de forno: ${tempoFormatado}`;

        if (segundosRestantes <= 0) {
            clearInterval(intervalo);
            display.textContent = '🎉 Bolo Pronto! Retire do forno.';
            botao.disabled = false;
            botao.textContent = 'Reiniciar Cronômetro';
        }
        
        segundosRestantes--;
    }, 1000);
}

// Para usar, inclua o script no final do seu HTML:
// <script src="script.js"></script>