function verificarResposta(cor) {
    const resultado = document.getElementById('resultado');
    if (cor === 'verde') {
        resultado.textContent = '✅ Correto! Vidros vão na lixeira verde.';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = '❌ Errado! Tente novamente.';
        resultado.style.color = 'red';
    }
}
