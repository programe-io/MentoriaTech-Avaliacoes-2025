// script.js

// 1. Dados das Motos (Simulação de um banco de dados ou API)
const motorcycles = [
    {
        id: 1,
        model: "Honda CB 500F",
        price: "R$ 35.000",
        description: "Streetfighter ágil e potente, ideal para o dia a dia e viagens curtas.",
        image: "https://www.honda.com.br/motos/sites/hda/files/2023-11/motocicleta-honda-cb-500f-2024-cinza-fosco.webp" // Substitua pelo caminho real
    },
    {
        id: 2,
        model: "Yamaha MT-07",
        price: "R$ 42.000",
        description: "Motor Crossplane, torque forte e design agressivo. Pura diversão!",
        image: "https://img.olx.com.br/thumbs700x500/92/927590285735908.webp" // Substitua pelo caminho real
    },
    {
        id: 3,
        model: "Kawasaki Ninja 400",
        price: "R$ 38.500",
        description: "Esportiva de entrada com visual de superbike e excelente dirigibilidade.",
        image: "https://kawasaki.m3parts.com.br/arquivos/1705004947_24ex400l_44sgn1drf3cg_a.jpg" // Substitua pelo caminho real
    }
    // Adicione mais motos aqui
];

const feedContainer = document.getElementById('motorcycle-feed');

// 2. Função para criar e adicionar um post ao feed
function createPostElement(moto) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('motorcycle-post');
    postDiv.setAttribute('data-id', moto.id);

    // Conteúdo HTML do post
    postDiv.innerHTML = `
        <img src="${moto.image}" alt="${moto.model}">
        <h2>${moto.model}</h2>
        <p>${moto.description}</p>
        <p><strong>Preço: ${moto.price}</strong></p>
        <button class="buy-button">Comprar Agora</button>
    `;
    
    // 3. Adiciona interatividade (Listener de evento)
    const buyButton = postDiv.querySelector('.buy-button');
    buyButton.addEventListener('click', () => {
        alert(`Você demonstrou interesse em comprar a ${moto.model}! Entraremos em contato.`);
    });

    feedContainer.appendChild(postDiv);
}

// Renderiza todas as motos
motorcycles.forEach(moto => {
    createPostElement(moto);
});

// Exemplo de como adicionar um novo post dinamicamente após a carga inicial:
// setTimeout(() => {
//    const novaMoto = {
//        id: 4,
//        model: "Ducati Monster",
//        price: "R$ 65.000",
//        description: "O espírito original da Monster em uma nova roupagem.",
//        image: "caminho/para/imagem4.jpg"
//    };
//    createPostElement(novaMoto);
// }, 3000);