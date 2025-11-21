// Dados dos seus hambúrgueres para o feed
const hamburgerData = [
    {
        name: "Clássico Bacon",
        description: "Pão brioche, 180g de carne, queijo cheddar, bacon crocante, maionese defumada e alface.",
        price: "R$ 35,00",
        imageUrl: "https://s2-pegn.glbimg.com/90AIMckxRcnzPipO9Kk09XhWbUY=/0x0:1700x1080/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_ba41d7b1ff5f48b28d3c5f84f30a06af/internal_photos/bs/2023/d/N/YkbVBASmmn6w85X6FeUw/festival-de-bacon-kv.png" // Substitua pela URL da sua imagem
    },
    {
        name: "Duplo Cheddar Melt",
        description: "Dois hambúrgueres, muito cheddar derretido, cebola caramelizada no shoyu e pão australiano.",
        price: "R$ 42,50",
        imageUrl: "https://gkpb.com.br/wp-content/uploads/2019/01/novo-double-cheddar-mcmelt-mcdonalds-2019.jpg" // Substitua pela URL da sua imagem
    },
    {
        name: "Vegetariano Supremo",
        description: "Hambúrguer de grão de bico, queijo coalho grelhado, tomate seco, rúcula e molho de ervas.",
        price: "R$ 38,00",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAwOt55C-81bi44HHT8JUTDpQabV8cQPKg&s" // Substitua pela URL da sua imagem
    }
];

// Função para criar o elemento HTML de um post
function createPostElement(data) {
    // 1. Cria o elemento principal do post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    // 2. Adiciona a imagem
    const img = document.createElement('img');
    img.classList.add('post-image');
    img.src = data.imageUrl;
    img.alt = `Imagem do ${data.name}`;
    postDiv.appendChild(img);

    // 3. Adiciona as informações (Nome, Descrição, Preço)
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('post-info');

    const nameH2 = document.createElement('h2');
    nameH2.textContent = data.name;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = data.description;

    const priceSpan = document.createElement('span');
    priceSpan.classList.add('post-price');
    priceSpan.textContent = `Preço: ${data.price}`;

    infoDiv.appendChild(nameH2);
    infoDiv.appendChild(descriptionP);
    infoDiv.appendChild(priceSpan);
    postDiv.appendChild(infoDiv);

    // 4. Adiciona as ações (Botão de Compra)
    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('post-actions');

    const buyButton = document.createElement('button');
    buyButton.textContent = "Peça Agora! 🛒";
    // Adiciona um evento de clique simples (pode ser expandido para um carrinho de compras)
    buyButton.addEventListener('click', () => {
        alert(`Você adicionou o "${data.name}" ao seu pedido!`);
    });

    actionsDiv.appendChild(buyButton);
    postDiv.appendChild(actionsDiv);

    return postDiv;
}

// Função para carregar todos os posts no feed
function loadFeed() {
    const feedContainer = document.getElementById('feed-container');

    hamburgerData.forEach(burger => {
        const post = createPostElement(burger);
        feedContainer.appendChild(post);
    });
}

// Carrega o feed quando a página estiver pronta
window.onload = loadFeed;