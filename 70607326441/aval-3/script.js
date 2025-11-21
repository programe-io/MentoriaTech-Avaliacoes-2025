// 1. Dados dos Itens de Roupa (Mock Data)
const itensRoupa = [
    {
        id: 1,
        nome: "Jaqueta Bomber Jeans Premium",
        descricao: "Design moderno, tecido leve e acabamento vintage. Perfeita para qualquer estação.",
        tamanhos: ["P", "M", "G"],
        preco: 249.90,
        imagemUrl: "https://static.ecosweb.com.br/public/produtos/moda-feminina/jaqueta/jaqueta-bomber-oversized-jeans-claro-com-bolsos_346604_600_2.webp", // Substitua por imagem real
        estoque: true
    },
    {
        id: 2,
        nome: "Vestido Midi Floral de Verão",
        descricao: "Tecido fluido, estampa floral exclusiva e caimento elegante. Ideal para passeios.",
        tamanhos: ["PP", "P", "M"],
        preco: 189.00,
        imagemUrl: "https://cdn.awsli.com.br/600x1000/2701/2701668/produto/253661971/16_7_10-81eew57f1u.jpg", // Substitua por imagem real
        estoque: true
    },
    {
        id: 3,
        nome: "Tênis Casual em Couro Preto",
        descricao: "Conforto e estilo casual. Solado de borracha durável e acabamento em couro legítimo.",
        tamanhos: ["37", "38", "40", "42"],
        preco: 350.00,
        imagemUrl: "https://images.tcdn.com.br/img/img_prod/636053/tenis_casual_masculino_cano_alto_de_couro_clube_do_sapato_de_franca_df_urban_preto_465_1_1cb102e3bff07999187d674a7c9c8bfa.jpg", // Substitua por imagem real
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
    postDiv.classList.add('item-post');
    postDiv.dataset.itemId = item.id;
    
    // Define o texto e o estado do botão
    const buttonText = item.estoque ? "COMPRAR AGORA" : "ESGOTADO";
    const disabledAttr = item.estoque ? '' : 'disabled';
    
    const tamanhosLista = item.tamanhos.join(' | ');

    // Constrói o HTML interno do post
    postDiv.innerHTML = `
        <div class="post-header ${item.estoque ? '' : 'esgotado'}">
            <h3>${item.nome}</h3>
        </div>
        
        <img src="${item.imagemUrl}" alt="${item.nome}" class="item-image">
        
        <p>${item.descricao}</p>
        <p>Tamanhos Disponíveis: <strong>${tamanhosLista}</strong></p>
        
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
    itensRoupa.forEach(item => {
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
    const item = itensRoupa.find(i => i.id === itemId);
    
    if (item) {
        // Simulação: Abrir um pop-up ou redirecionar
        alert(`Item selecionado: ${item.nome}. Redirecionando para a página de checkout!`);
        
        // Simulação de desativar o botão após a ação
        const button = document.querySelector(`.buy-btn[data-id="${itemId}"]`);
        if (button) {
             button.textContent = "✅ Adicionado ao Carrinho";
             button.disabled = true;
             button.style.backgroundColor = "#008080"; // Muda a cor
        }
    }
}


// Inicia o feed
renderFeed();