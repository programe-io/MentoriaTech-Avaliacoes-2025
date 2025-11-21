// Lista de curiosidades extras para mostrar ao clicar no botão
const curiosidades = [
    "Os beija-flores batem as asas até 80 vezes por segundo!",
    "A águia pode enxergar até 8 vezes mais longe que um humano.",
    "O pinguim imperador pode mergulhar mais de 500 metros de profundidade.",
    "Os corvos são capazes de usar ferramentas e resolver problemas complexos."
];

const botao = document.getElementById("botaoCurioso");
const campoCuriosidade = document.getElementById("curiosidadeExtra");

botao.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * curiosidades.length);
    campoCuriosidade.textContent = curiosidades[indice];
});