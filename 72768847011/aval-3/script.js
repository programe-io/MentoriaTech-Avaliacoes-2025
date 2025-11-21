// Lista de curiosidades extras
const curiosidades = [
    "O beija-flor bate as asas até 80 vezes por segundo!",
    "A águia pode enxergar quase 8 vezes melhor que um humano.",
    "Algumas espécies de corvos são capazes de usar ferramentas.",
    "O avestruz é a maior ave do mundo.",
    "O albatroz pode voar longas distâncias sem bater as asas."
];

const botao = document.getElementById("botaoCuriosidade");
const campoCuriosidade = document.getElementById("curiosidadeExtra");

botao.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * curiosidades.length);
    campoCuriosidade.textContent = curiosidades[indice];
});