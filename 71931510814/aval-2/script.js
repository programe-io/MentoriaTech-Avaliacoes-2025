function abrirJogo(jogo) {
    const areaJogo = document.getElementById('area-jogo');
    areaJogo.innerHTML = ''; // Limpa a área antes de carregar o jogo

    if (jogo === 'jogo1') {
        const script = document.createElement('script');
        script.src = 'js/jogo1.js';
        document.body.appendChild(script);
    }

    if (jogo === 'jogo2') {
        const script = document.createElement('script');
        script.src = 'js/jogo2.js';
        document.body.appendChild(script);
    }
}
