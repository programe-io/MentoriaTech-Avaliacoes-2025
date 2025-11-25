const btn = document.getElementById("btn-fato");
const fato = document.getElementById("fato");

const fatos = [
    "Gatos podem mover as orelhas separadamente.",
    "Gatos passam 70% da vida dormindo.",
    "O miado é usado apenas para se comunicar com humanos.",
    "Um gato consegue atingir até 48 km/h em uma corrida.",
    "Cada gato tem um padrão de ronronar único."
];

btn.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * fatos.length);
    fato.textContent = fatos[indice];
});