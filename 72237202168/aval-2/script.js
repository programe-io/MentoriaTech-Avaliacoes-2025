const btn = document.getElementById("btn-fato");
const fato = document.getElementById("fato");

const fatos = [
    "Gatos têm mais de 100 tipos de sons.",
    "O ronronar pode ajudar a reduzir estresse humano.",
    "Gatos podem correr até 48 km/h.",
    "Cada nariz de gato é único, como digital.",
    "Gatos enxergam no escuro até 6 vezes melhor que humanos."
];

btn.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * fatos.length);
    fato.textContent = fatos[indice];
});