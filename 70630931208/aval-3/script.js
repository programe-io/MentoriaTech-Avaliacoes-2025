// Dados simulados dos posts (como se viessem de uma API)
const gamePosts = [
    {
        id: 1,
        title: "Aventura Épica: O Retorno do Dragão",
        description: "Explore um vasto mundo aberto e lute contra criaturas míticas! Oferta de lançamento por tempo limitado.",
        imageUrl: "https://www.adrenaline.com.br/wp-content/uploads/2024/11/review-dragon-age-the-veilguard.jpg", // Placeholder
        oldPrice: 199.90,
        currentPrice: 99.95,
        publisher: "Epic Games Studio",
        date: "2025-11-20T10:00:00Z"
    },
    {
        id: 2,
        title: "Corrida Frenética: Turbo 2077",
        description: "Participe de corridas futuristas insanas com gráficos de última geração! Desconto de 30% nesta semana.",
        imageUrl: "https://i.ytimg.com/vi/rSU8_3Y517Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE_2ckFwOlRcDTVUfz0d2-3q4-jw", // Placeholder
        oldPrice: 89.90,
        currentPrice: 62.93,
        publisher: "Speed Devs",
        date: "2025-11-20T14:30:00Z"
    },
    {
        id: 3,
        title: "Simulador de Fazenda Deluxe",
        description: "Relaxe e construa a fazenda dos seus sonhos. O jogo mais calmo do ano com um preço especial.",
        imageUrl: "https://cdn-ext.fanatical.com/production/product/1280x720/b0c33463-09fa-4cf3-8b62-3a4665ebed20.jpeg", // Placeholder
        oldPrice: 59.90,
        currentPrice: 47.92,
        publisher: "Tranquil Games",
        date: "2025-11-21T08:00:00Z"
    }
];

// Função para calcular a porcentagem de desconto
function calculateDiscount(oldPrice, currentPrice) {
    if (oldPrice <= 0 || currentPrice >= oldPrice) return "0% OFF";
    const discount = ((oldPrice - currentPrice) / oldPrice) * 100;
    return `${Math.round(discount)}% OFF`;
}

// Função para formatar a data (simples)
function formatRelativeTime(dateString) {
    // Implementação mais complexa seria necessária para "há 2 horas", mas faremos uma simples.
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR'); 
}

// Função para criar o elemento HTML de um post
function createPostElement(post) {
    const discountText = calculateDiscount(post.oldPrice, post.currentPrice);
    const formattedDate = formatRelativeTime(post.date);

    const postCard = document.createElement('article');
    postCard.classList.add('post-card');
    
    // Conteúdo HTML do Card
    postCard.innerHTML = `
        <img src="${post.imageUrl}" alt="Capa do Jogo: ${post.title}" class="game-image">
        <div class="post-content">
            <h2 class="game-title">${post.title}</h2>
            <p class="game-description">${post.description}</p>
            <div class="price-info">
                <span class="old-price">R$ ${post.oldPrice.toFixed(2).replace('.', ',')}</span>
                <span class="current-price">R$ ${post.currentPrice.toFixed(2).replace('.', ',')}</span>
                <span class="discount">${discountText}</span>
            </div>
            <button class="buy-button" data-game-id="${post.id}">Comprar Agora</button>
            <div class="post-meta">
                <span class="publisher">Publicado por: ${post.publisher}</span>
                <span class="date">${formattedDate}</span>
            </div>
        </div>
    `;

    // Adiciona um listener de evento ao botão de compra
    const buyButton = postCard.querySelector('.buy-button');
    buyButton.addEventListener('click', () => {
        alert(`Você clicou em comprar o jogo: ${post.title} (ID: ${post.id})!`);
        // Aqui você integraria a lógica real de carrinho/checkout
    });

    return postCard;
}

// Função para renderizar todos os posts
function renderPosts() {
    const feedContainer = document.getElementById('feedContainer');
    
    // Limpa o container antes de adicionar os posts
    feedContainer.innerHTML = ''; 

    // Itera sobre os dados e anexa ao container
    gamePosts.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
}

// Inicializa o feed
document.addEventListener('DOMContentLoaded', renderPosts);