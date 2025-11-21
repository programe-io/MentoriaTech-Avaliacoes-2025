// 1. Dados dos Itens de Calça (Mock Data)
const itensCalca = [
    {
        id: 1,
        nome: "Calça Jeans Skinny Lavagem Escura",
        descricao: "Corte moderno, cintura média e stretch confortável. Essencial para qualquer guarda-roupa.",
        categoria: "Jeans",
        tamanhos: ["36", "38", "40", "42"],
        preco: 129.90,
        imagemUrl: "https://lojalevis.vtexassets.com/arquivos/ids/518381/055101347_1.jpg?v=638440329403500000", // Substitua por imagem real
        estoque: true
    },
    {
        id: 2,
        nome: "Calça Social de Alfaiataria Bege",
        descricao: "Tecido leve, caimento reto e perfeito para o ambiente de trabalho ou eventos formais.",
        categoria: "Social",
        tamanhos: ["38", "40", "42", "44"],
        preco: 199.50,
        imagemUrl: "https://aramismenswear.vtexassets.com/arquivos/ids/1254822/CF120025_042_1-CALCA-ALFAIATARIA-ALGODAO-ELASTANO--PA-.jpg?v=638531046522700000", // Substitua por imagem real
        estoque: true
    },
    {
        id: 3,
        nome: "Calça Cargo Sarja Verde Militar",
        descricao: "Estilo utilitário em alta. Confortável, com múltiplos bolsos laterais. Edição limitada.",
        categoria: "Casual",
        tamanhos: ["P", "M", "G"],
        preco: 159.00,
        imagemUrl: "https://acdn-us.mitiendanube.com/stores/001/363/007/products/cargo-sarja-verde-11-f89f62c90fa9073a6916875290907394-480-0.png", // Substitua por imagem real
        estoque: false // Fora de estoque
    }
];

// 2. Função para formatar o preço para BRL
function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 3. Função para criar o elemento HTML de um post
function createItemPost(item) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('calca-post');
    postDiv.dataset.itemId = item.id;
    
    // Define o texto e o estado do botão
    const buttonText = item.estoque ? "COMPRAR AGORA" : "ESGOTADO";
    const disabledAttr = item.estoque ? '' : 'disabled';
    
    const tamanhosLista = item.tamanhos.join(' | ');

    // Constrói o HTML interno do post
    postDiv.innerHTML = `
        <div class="post-header ${item.estoque ? '' : 'esgotado'}">
            <h3>${item.nome} (${item.categoria})</h3>
        </div>
        
        <img src="${item.imagemUrl}" alt="${item.nome}" class="calca-image">
        
        <p>${item.descricao}</p>
        <p class="tamanhos">Tamanhos Disponíveis: <strong>${tamanhosLista}</strong></p>
        
        <div class="preco">${formatPrice(item.preco)}</div>
        
        <div class="post-actions">
            <button class="buy-btn" data-id="${item.id}" ${disabledAttr}>
                ${buttonText}
            </button>
        </div>
    `;

    return postDiv;
}

// 4. Função para renderizar todos os itens no feed
function renderFeed() {
    const feedContainer = document.getElementById('feed-container');
    
    // Limpa o "Carregando..."
    feedContainer.innerHTML = ''; 

    // Adiciona cada item ao container
    itensCalca.forEach(item => {
        const postElement = createItemPost(item);
        feedContainer.appendChild(postElement);
    });

    // Adiciona a lógica de interação (clique no botão)
    addEventListeners();
}

// 5. Função para adicionar Event Listeners
function addEventListeners() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    
    buyButtons.forEach(button => {
        // Adiciona evento apenas se o item estiver em estoque
        if (!button.disabled) {
            button.addEventListener('click', (event) => {
                const itemId = parseInt(event.target.dataset.id);
                handlePurchase(itemId);
            });
        }
    });
}

// 6. Lógica de "Comprar" (Simulação)
function handlePurchase(itemId) {
    const item = itensCalca.find(i => i.id === itemId);
    
    if (item) {
        // Simulação de ação de compra
        alert(`Calça selecionada: ${item.nome}. Adicionada ao seu carrinho!`);
        
        // Simulação de desativar o botão após a ação
        const button = document.querySelector(`.buy-btn[data-id="${itemId}"]`);
        if (button) {
             button.textContent = "✔ No Carrinho!";
             button.disabled = true;
             button.style.backgroundColor = "#4CAF50"; // Muda a cor para verde
        }
    }
}


// Inicia o feed
renderFeed();