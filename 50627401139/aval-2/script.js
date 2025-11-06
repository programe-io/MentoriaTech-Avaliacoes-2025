// Lista de orações aleatórias
const oracoes = [
    "Senhor, fazei de mim um instrumento da vossa paz. Onde houver ódio, que eu leve o amor.",
    "Jesus, eu confio em Vós!",
    "Maria, passa na frente e resolve aquilo que eu não posso resolver.",
    "Senhor, ensina-me a amar como Tu amas, sem medidas e sem esperar recompensas.",
    "Santo Anjo do Senhor, meu zeloso guardador, se a Ti me confiou a piedade divina, sempre me rege, me guarda, me governa e me ilumina. Amém."
];

// Elementos do DOM
const btnOracao = document.getElementById("btnOracao");
const oracaoBox = document.getElementById("oracaoAleatoria");
const btnTema = document.getElementById("btnTema");

// Função para exibir uma oração aleatória
btnOracao.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * oracoes.length);
    oracaoBox.textContent = oracoes[indice];
    oracaoBox.style.display = "block";
});

// Função para alternar entre modo claro e escuro
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
