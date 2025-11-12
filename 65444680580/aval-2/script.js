// Dados simulados dos produtos
const products = [
    { id: 1, name: "Smartphone X10", price: 2500, category: "smartphone", image: "https://via.placeholder.com/280x180?text=Smartphone" },
    { id: 2, name: "Notebook Ultra", price: 4200, category: "notebook", image: "https://via.placeholder.com/280x180?text=Notebook" },
    { id: 3, name: "Smart TV 50'", price: 3100, category: "tv", image: "https://via.placeholder.com/280x180?text=TV+50" },
    { id: 4, name: "Smartphone Mini", price: 1800, category: "smartphone", image: "https://via.placeholder.com/280x180?text=Smartphone+Mini" },
    { id: 5, name: "Notebook Gamer", price: 4999, category: "notebook", image: "https://via.placeholder.com/280x180?text=Notebook+Gamer" },
];

const productGrid = document.getElementById('product-grid');
const priceRange = document.getElementById('price-range');
const maxPriceSpan = document.getElementById('max-price');

// 1. Função para renderizar os produtos na tela
function renderProducts(productList) {
    productGrid.innerHTML = ''; // Limpa o grid antes de renderizar
    
    productList.forEach(product => {
        // Cria o elemento <article> para cada produto
        const article = document.createElement('article');
        article.classList.add('product-card');
        article.setAttribute('data-category', product.category); // Para JS de filtro
        article.setAttribute('data-price', product.price); // Para JS de filtro

        article.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart">Adicionar ao Carrinho</button>
        `;
        
        productGrid.appendChild(article);
    });
}

// 2. Função de filtro (chamada ao clicar no botão "Aplicar")
function aplicarFiltros() {
    // Ações do filtro de preço
    const maxPrice = parseInt(priceRange.value);
    
    // Ações do filtro de categoria
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked'))
                                   .map(checkbox => checkbox.value);
    
    // Filtragem de dados
    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= maxPrice;
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        
        return priceMatch && categoryMatch;
    });

    renderProducts(filteredProducts);
}

// 3. Listener para atualizar o preço máximo exibido no filtro
priceRange.addEventListener('input', (event) => {
    maxPriceSpan.textContent = event.target.value;
});


// Inicializa a página renderizando todos os produtos
renderProducts(products);