const curiosidades = [
    "Nina Dobrev interpretou Katherine e Elena ao mesmo tempo!",
    "O corvo do Damon seria um personagem recorrente.",
    "Os produtores quase trocaram o ator que faria o Stefan.",
    "A série quase se passava em outra cidade fictícia.",
    "Paul Wesley fez teste inicialmente para o Damon."
];

document.getElementById("botaoCuriosidade").addEventListener("click", () => {
    const aleatoria = curiosidades[Math.floor(Math.random() * curiosidades.length)];
    document.getElementById("curiosidadeAleatoria").textContent = aleatoria;
});
