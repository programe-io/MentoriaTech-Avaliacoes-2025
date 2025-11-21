// 1. Dados de Amostra dos Ar Condicionados
const posts = [
    {
        id: 1,
        title: "Split Inverter 12000 BTUs - Economia Garantida!",
        description: "Ar condicionado de alta eficiência, com tecnologia Inverter que reduz em até 60% o consumo de energia. Perfeito para quartos e salas.",
        image: "https://friopecas.vtexassets.com/arquivos/ids/233309/Split-Vix-.jpg?v=638863737032130000", // Substitua por URLs de imagens reais
        price: 1899.90,
        btu: 12000,
        type: "Split Inverter",
        date: "20 de Novembro, 2024"
    },
    {
        id: 2,
        title: "Portátil 9000 BTUs - Leve e Sem Instalação!",
        description: "Ideal para quem aluga ou precisa de mobilidade. Refresque qualquer ambiente sem a necessidade de instalação complexa. Fácil de usar e guardar.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7SA6aXzIXbGa9vcGEttK2ehxFFTNHP7WLQ&s",
        price: 1250.00,
        btu: 9000,
        type: "Portátil",
        date: "18 de Novembro, 2024"
    },
    {
        id: 3,
        title: "Janela Eletrônico 7500 BTUs - Clássico e Compacto",
        description: "Modelo tradicional, confiável e com baixo custo de manutenção. Perfeito para ambientes menores que já possuem o nicho de janela.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH37QDaaM4dihN_neqOJKNeok0WnGfIa-fnA&s",
        price: 999.00,
        btu: 7500,
        type: "Janela",
        date: "15 de Novembro, 2024"
    }
];

// 2. Função para criar o HTML de um post
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.dataset.postId = post.id;

    postDiv.innerHTML = `
        <div class="post-header">
            <h2 class="post-title">${post.title}</h2>
            <span class="post-date">${post.date}</span>
        </div>
        <div class="post-body">
            <p>${post.description}</p>
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <p><strong>BTUs:</strong> ${post.btu}</p>
            <p><strong>Tipo:</strong> ${post.type}</p>
        </div>
        <div class="post-details">
            <span class="price">R$ ${post.price.toFixed(2).replace('.', ',')}</span>
            <button class="buy-button" data-id="${post.id}">Comprar Agora</button>
        </div>
    `;
    
    // 3. Adiciona o Event Listener para o botão de compra
    const buyButton = postDiv.querySelector('.buy-button');
    buyButton.addEventListener('click', handleBuyClick);

    return postDiv;
}

// 4. Função para exibir todos os posts no feed
function renderFeed() {
    const feedContainer = document.getElementById('feed-posts');
    
    // Limpa o conteúdo anterior (caso haja)
    feedContainer.innerHTML = ''; 

    posts.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
}

// 5. Função de Ação para o botão Comprar
function handleBuyClick(event) {
    const postId = event.target.dataset.id;
    const post = posts.find(p => p.id == postId);

    if (post) {
        alert(`🛒 Produto "${post.title}" adicionado ao carrinho! \nPreço: R$ ${post.price.toFixed(2).replace('.', ',')}`);
        // Aqui você pode adicionar a lógica real de carrinho de compras
    } else {
        alert('Erro: Produto não encontrado.');
    }
}

// 6. Inicia o renderização do feed quando a página carrega
document.addEventListener('DOMContentLoaded', renderFeed);