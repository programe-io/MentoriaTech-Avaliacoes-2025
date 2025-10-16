const btn = document.getElementById('btnMotivacao');
const mensagem = document.getElementById('mensagem');

btn.addEventListener('click', function() {
    const frases = [
        "Você merece amor e cuidado 💖",
        "Hoje é um ótimo dia para se mimar 🌸",
        "Seja gentil consigo mesma sempre 🌷",
        "Pequenos momentos de autocuidado fazem diferença ✨"
    ];
    const aleatorio = Math.floor(Math.random() * frases.length);
    mensagem.textContent = frases[aleatorio];
});
