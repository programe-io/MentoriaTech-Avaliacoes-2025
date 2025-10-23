const curiosidades = [
    "O Brasil é o país com mais títulos de Copa do Mundo: 5 vitórias.",
    "Pelé é considerado um dos maiores jogadores de todos os tempos.",
    "A seleção é conhecida pelo estilo de jogo chamado 'futebol arte'.",
    "Cafu é o jogador com mais partidas pela Seleção Brasileira.",
    "O Brasil nunca foi eliminado na primeira fase de uma Copa do Mundo."
];

function mostrarCuriosidade() {
    const index = Math.floor(Math.random() * curiosidades.length);
    document.getElementById('curiosidade').innerText = curiosidades[index];
}
