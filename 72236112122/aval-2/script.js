const dicas = [
    "Cachorros precisam de exercícios diários!",
    "Água fresca é essencial para o seu cão.",
    "Recompense comportamentos positivos para um melhor aprendizado.",
    "Cães também precisam de estímulos mentais, como brinquedos.",
    "Visitas ao veterinário devem ser regulares."
];

function mostrarDica() {
    const indice = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").innerText = dicas[indice];
}