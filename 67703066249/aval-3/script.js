const frases = [
    "A natureza é o único lar que todos nós compartilhamos.",
    "Quem cuida da natureza, cuida de si mesmo.",
    "A terra provê o suficiente para todas as necessidades humanas.",
    "Proteger a natureza é garantir o futuro."
];

document.getElementById("btn-frase").addEventListener("click", function() {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("frase").textContent = aleatoria;
});
