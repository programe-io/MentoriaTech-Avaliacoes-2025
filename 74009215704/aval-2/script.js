// script.js
document.getElementById('submitBtn').addEventListener('click', function() {
    const respostasCorretas = {
        q1: 'a',
        q2: 'b',
        q3: 'c'
    };

    let pontuacao = 0;
    let total = Object.keys(respostasCorretas).length;

    for (let questao in respostasCorretas) {
        const selecionada = document.querySelector(`input[name="${questao}"]:checked`);
        if (selecionada && selecionada.value === respostasCorretas[questao]) {
            pontuacao++;
        }
    }

    const resultado = document.getElementById('result');
    resultado.innerHTML = `Você acertou <strong>${pontuacao}</strong> de <strong>${total}</strong> perguntas!`;

    // Feedback visual
    if (pontuacao === total) {
        resultado.style.color = '#00ff88';
        resultado.innerHTML += "<br>🎉 Excelente trabalho!";
    } else if (pontuacao >= total / 2) {
        resultado.style.color = '#ffeb3b';
        resultado.innerHTML += "<br>😉 Bom desempenho, mas dá pra melhorar!";
    } else {
        resultado.style.color = '#ff5555';
        resultado.innerHTML += "<br>😕 Tente novamente!";
    }
});