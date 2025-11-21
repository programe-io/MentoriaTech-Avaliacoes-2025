// 1. Dados das Ofertas de Lasanha (Mock Data)
const ofertasLasanha = [
    {
        id: 1,
        nome: "Lasanha Bolonhesa Clássica",
        descricao: "Carne moída selecionada, molho caseiro e muito queijo mussarela. O sabor da tradição.",
        peso: "800g",
        preco: 45.90,
        imagemUrl: "https://anamariareceitas.com.br/wp-content/uploads/2022/10/Lasanha-a-bolonhesa.jpg", // Substitua por imagem real
        disponivel: true
    },
    {
        id: 2,
        nome: "Lasanha Quatro Queijos Gourmet",
        descricao: "Uma mistura cremosa de Provolone, Gorgonzola, Parmesão e Catupiry. Para quem ama queijo!",
        peso: "750g",
        preco: 52.50,
        imagemUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB_5Aqh6xAD3jfFPCUJCYKU-x79C-GwKaS2yVPjpaOLlcsCKQHMcTcPPEhDvvSfTfysW9wWm10QwLKrq2cuXgiERnHrZ4VJRVtXLMuYooxIeGZ3_nMMyT_uQDxLKnzH7w_w22hFME4f2nA/s1600/EatalyLasagne.jpg", // Substitua por imagem real
        disponivel: true
    },
    {
        id: 3,
        nome: "Lasanha de Frango com Requeijão",
        descricao: "Peito de frango desfiado, tempero suave e a cremosidade irresistível do requeijão.",
        peso: "900g",
        preco: 48.00,
        imagemUrl: "https://guiadacozinha.com.br/wp-content/uploads/2014/01/Lasanha-de-frango-com-requeijao.jpg", // Substitua por imagem real
        disponivel: false // Esta lasanha está fora de estoque
    }
];

// 2. Função para formatar o preço para BRL
function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 3. Função para criar o elemento HTML de um post
function createLasanhaPost(lasanha) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('lasanha-post');
    postDiv.dataset.lasanhaId = lasanha.id;
    
    // Define o texto do botão e se ele estará desativado
    const buttonText = lasanha.disponivel ? "PEDIR AGORA" : "ESGOTADO";
    const disabledAttr = lasanha.disponivel ? '' : 'disabled';
    const postStatusClass = lasanha.disponivel ? '' : 'esgotado';

    // Constrói o HTML interno do post
    postDiv.innerHTML = `
        <div class="post-header ${postStatusClass}">
            <h3>${lasanha.nome}</h3>
            <p>${lasanha.descricao}</p>
        </div>
        <img src="${lasanha.imagemUrl}" alt="${lasanha.nome}" class="lasanha-image">
        <p>Peso: <strong>${lasanha.peso}</strong></p>
        <div class="preco">${formatPrice(lasanha.preco)}</div>
        <div class="post-actions">
            <button class="buy-btn" data-id="${lasanha.id}" ${disabledAttr}>
                ${buttonText}
            </button>
        </div>
    `;

    return postDiv;
}

// 4. Função para renderizar todas as ofertas no feed
function renderFeed() {
    const feedContainer = document.getElementById('feed-container');
    
    // Limpa o "Carregando..."
    feedContainer.innerHTML = ''; 

    // Adiciona cada oferta ao container
    ofertasLasanha.forEach(lasanha => {
        const postElement = createLasanhaPost(lasanha);
        feedContainer.appendChild(postElement);
    });

    // Adiciona a lógica de interação (clique no botão)
    addEventListeners();
}

// 5. Função para adicionar Event Listeners (interatividade)
function addEventListeners() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        // Verifica se o botão não está desativado antes de adicionar o evento
        if (!button.disabled) {
            button.addEventListener('click', (event) => {
                const lasanhaId = parseInt(event.target.dataset.id);
                handleOrder(lasanhaId);
            });
        }
    });
}

// 6. Lógica de "Comprar" (Simulação)
function handleOrder(lasanhaId) {
    const lasanha = ofertasLasanha.find(p => p.id === lasanhaId);
    
    if (lasanha) {
        // Alerta simples para simular um pedido
        alert(`Pedido de "${lasanha.nome}" confirmado! Entraremos em contato.`);
        
        // Simulação de desativar o botão após a compra
        const button = document.querySelector(`.buy-btn[data-id="${lasanhaId}"]`);
        if (button) {
             button.textContent = "✅ Adicionado ao Carrinho!";
             button.disabled = true;
             button.style.backgroundColor = "#4CAF50"; // Muda a cor para verde
        }
    }
}


// Inicia o feed quando o script é carregado
renderFeed();