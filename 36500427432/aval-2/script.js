// Lista de carros esportivos com imagens reais e informações
const carros = [
    {
        nome: "Ferrari SF90 Stradale",
        descricao: "Potência híbrida italiana com mais de 1000 cv. Luxo e velocidade em um só carro.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ferrari_SF90_Stradale_IMG_3707.jpg",
        info: "🏁 0-100 km/h: 2.5s | 💰 US$ 600.000"
    },
    {
        nome: "Lamborghini Aventador SVJ",
        descricao: "Design agressivo e motor V12 de 770 cv. Um rugido que domina as estradas.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Lamborghini_Aventador_SVJ_2019.jpg",
        info: "🏁 0-100 km/h: 2.8s | 💰 US$ 517.000"
    },
    {
        nome: "Porsche 911 GT3 RS",
        descricao: "Engenharia alemã em sua melhor forma. Precisão e performance nas pistas e ruas.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/34/Porsche_911_GT3_RS_%289921859697%29.jpg",
        info: "🏁 0-100 km/h: 3.2s | 💰 US$ 250.000"
    },
    {
        nome: "McLaren 720S",
        descricao: "Leve, rápida e tecnológica. Um supercarro britânico com motor V8 biturbo de 720 cv.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/4e/McLaren_720S_2018.jpg",
        info: "🏁 0-100 km/h: 2.8s | 💰 US$ 299.000"
    },
    {
        nome: "Bugatti Chiron",
        descricao: "O ápice da engenharia automotiva. 1500 cv e velocidade máxima superior a 420 km/h.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Bugatti_Chiron_%2819412113122%29.jpg",
        info: "🏁 0-100 km/h: 2.4s | 💰 US$ 3.000.000"
    },
    {
        nome: "Aston Martin Valkyrie",
        descricao: "Uma obra-prima britânica feita para pistas e ruas. Tecnologia de Fórmula 1 em um carro de rua.",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/5/59/Aston_Martin_Valkyrie_Geneva_2019.jpg",
        info: "🏁 0-100 km/h: 2.5s | 💰 US$ 3.200.000"
    }
];

// Seleciona a seção da galeria no HTML
const galeria = document.getElementById("galeria");

// Função para criar os cards dinamicamente
carros.forEach(carro => {
    const card = document.createElement("div");
    card.classList.add("carro");

    card.innerHTML = `
        <img src="${carro.imagem}" alt="${carro.nome}">
        <h3>${carro.nome}</h3>
        <p>${carro.descricao}</p>
        <div class="info">${carro.info}</div>
    `;

    galeria.appendChild(card);
});

// Mensagem no console só para debug
console.log("✅ Galeria de carros esportivos carregada com sucesso!");
