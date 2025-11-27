const carros = [
    {
        nome: "Ferrari F8 Tributo",
        img: "https://cdn.motor1.com/images/mgl/0x9x6/s3/ferrari-f8-tributo.jpg",
        texto: "A Ferrari F8 Tributo é um dos modelos mais icônicos da nova geração. Seu motor V8 Biturbo entrega 720 cv e foi premiado por ser um dos melhores motores já fabricados.",
        ficha: [
            "Velocidade máxima: 340 km/h",
            "0 a 100 km/h: 2,9s",
            "Potência: 720 cv",
            "Peso: 1435 kg"
        ]
    },
    {
        nome: "Lamborghini Aventador SVJ",
        img: "https://cdn.motor1.com/images/mgl/ZkQO2/s1/lamborghini-aventador-svj.jpg",
        texto: "O Aventador SVJ utiliza um dos últimos motores V12 puramente a combustão do mundo. Foi projetado para quebrar recordes em Nürburgring e é famoso por sua estabilidade em alta velocidade.",
        ficha: [
            "Velocidade máxima: 350 km/h",
            "0 a 100 km/h: 2,8s",
            "Potência: 770 cv",
            "Motor: V12 natural aspirado"
        ]
    },
    {
        nome: "Porsche 911 Turbo S",
        img: "https://cdn.motor1.com/images/mgl/3x9e0/s3/porsche-911-turbo-s.jpg",
        texto: "O 911 Turbo S combina luxo, tração integral e um dos melhores sistemas de controle de tração do planeta. É conhecido por ser um carro 'perfeito' para qualquer ocasião.",
        ficha: [
            "Velocidade máxima: 330 km/h",
            "0 a 100 km/h: 2,6s",
            "Potência: 650 cv",
            "Tração: integral"
        ]
    },
    {
        nome: "Nissan GTR R35 Nismo",
        img: "https://cdn.motor1.com/images/mgl/Qrp8N/s1/nissan-gt-r-nismo-2020.jpg",
        texto: "Chamado de 'Godzilla', o GTR é uma lenda entre os carros japoneses. A versão Nismo traz aerodinâmica revisada e um motor V6 Biturbo ajustado para 600 cv.",
        ficha: [
            "Velocidade máxima: 320 km/h",
            "0 a 100 km/h: 2,7s",
            "Potência: 600 cv",
            "Motor: V6 3.8 Biturbo"
        ]
    }
];

const lista = document.getElementById("lista-carros");

carros.forEach((carro, i) => {
    lista.innerHTML += `
        <div class="card" onclick="abrirModal(${i})">
            <img src="${carro.img}">
            <h3>${carro.nome}</h3>
            <p>Clique para ver detalhes</p>
        </div>
    `;
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalNome = document.getElementById("modalNome");
const modalTexto = document.getElementById("modalTexto");
const modalFicha = document.getElementById("modalFicha");
const fechar = document.getElementById("fecharModal");

function abrirModal(i) {
    modal.classList.remove("hidden");
    modalImg.src = carros[i].img;
    modalNome.innerText = carros[i].nome;
    modalTexto.innerText = carros[i].texto;

    modalFicha.innerHTML = "";
    carros[i].ficha.forEach(item => {
        modalFicha.innerHTML += `<li>${item}</li>`;
    });
}

fechar.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
});
