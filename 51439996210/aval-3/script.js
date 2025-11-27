// 1. Array de objetos que representam os produtos
const products = [
    {
        id: 1,
        name: "Fone de Ouvido Bluetooth",
        price: 199.90,
        image: "https://via.placeholder.com/300x200?text=Fone+BT" // Placeholder de imagem
    },
    {
        id: 2,
        name: "Smartwatch Esportivo",
        price: 349.50,
        image: "https://via.placeholder.com/300x200?text=Smartwatch" // Placeholder de imagem
    },
    {
        id: 3,
        name: "Mouse Gamer RGB",
        price: 85.00,
        image: "https://via.placeholder.com/300x200?text=Mouse+Gamer" // Placeholder de imagem
    }
];

const productContainer = document.querySelector('.product-container');

// Função para formatar o preço para BRL
const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// 2. Função para renderizar os produtos na página
const renderProducts = () => {
    products.forEach(product => {
        // Cria o elemento principal do card
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        // Define o conteúdo do card usando template literals
        card.innerHTML = `
            <img src="${product.image}" alt="Imagem do ${product.name}">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
            <button class="buy-button" data-id="${product.id}" data-name="${product.name}">Comprar</button>
        `;
        
        productContainer.appendChild(card);
    });
    
    // 3. Adiciona os listeners de evento após a criação dos botões
    addBuyButtonListeners();
};

// Função para adicionar listeners aos botões de compra
const addBuyButtonListeners = () => {
    const buyButtons = document.querySelectorAll('.buy-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.name;
            alert(`"${productName}" adicionado ao carrinho! (Simulação)`);
        });
    });
};

// Inicia a renderização dos produtos
renderProducts();