const carros = [
    {
        nome: "Lamborghini Aventador",
        img: "https://images.unsplash.com/photo-1503739177322-4c3939358325?q=80&w=1200",
        desc: "Motor V12, 740cv, velocidade máxima de 350 km/h."
    },
    {
        nome: "Ferrari 488 GTB",
        img: "https://images.unsplash.com/photo-1517170655121-85e0d4e1d906?q=80&w=1200",
        desc: "Motor V8 biturbo, 670cv, um dos mais rápidos já feitos."
    },
    {
        nome: "Porsche 911 Turbo S",
        img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200",
        desc: "Motor boxer, desempenho insano e tecnologia avançada."
    },
    {
        nome: "Ford Mustang GT",
        img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1200",
        desc: "Clássico americano, V8 barulhento e design agressivo."
    }
];

document.getElementById("btnCarregar").addEventListener("click", () => {
    const container = document.querySelector(".carros-container");
    container.innerHTML = "";

    carros.forEach(carro => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${carro.img}" alt="${carro.nome}">
            <h3>${carro.nome}</h3>
            <p>${carro.desc}</p>
        `;

        container.appendChild(card);
    });
});
