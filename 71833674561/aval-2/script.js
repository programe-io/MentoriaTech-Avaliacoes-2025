const botao = document.getElementById("botaoCuriosidade");
const curiosidade = document.getElementById("curiosidade");

botao.addEventListener("click", () => {
    const curiosidades = [
        "O futsal foi criado em 1930, no Uruguai!",
        "O Brasil é o maior campeão mundial de futsal!",
        "O nome 'futsal' vem de 'fútbol de salón'.",
        "Falcão é considerado o maior jogador da história do futsal."
    ];
    
    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    curiosidade.textContent = curiosidades[aleatorio];
});
