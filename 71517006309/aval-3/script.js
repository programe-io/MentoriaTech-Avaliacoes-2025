// Dados das bebidas
const drinks = [
    { name: "Expresso", category: "coffee", description: "O café mais concentrado." },
    { name: "Latte", category: "coffee", description: "Expresso com bastante leite vaporizado." },
    { name: "Chá Verde", category: "tea", description: "Leve e cheio de antioxidantes." },
    { name: "Chá Preto", category: "tea", description: "Sabor forte e encorpado, bom para acordar." },
    { name: "Suco de Laranja Natural", category: "juice", description: "Clássico, fresco e vitamínico." },
    { name: "Limonada Suíça", category: "juice", description: "Limão, água, açúcar e leite condensado." },
    { name: "Mojito", category: "cocktail", description: "Rum, açúcar, hortelã, limão e água com gás." },
    { name: "Caipirinha", category: "cocktail", description: "Cachaça, açúcar e limão. O clássico brasileiro." }
];

const drinksContainer = document.getElementById('drinks-container');
const filterButtons = document.querySelectorAll('.filter-btn');

// 1. Função para exibir as bebidas no HTML
function displayDrinks(drinksArray) {
    drinksContainer.innerHTML = ''; // Limpa o container
    
    // Cria um cartão HTML para cada bebida
    drinksArray.forEach(drink => {
        const card = document.createElement('div');
        card.classList.add('drink-card');
        card.innerHTML = `
            <h3>${drink.name}</h3>
            <p><strong>Categoria:</strong> ${drink.category.charAt(0).toUpperCase() + drink.category.slice(1)}</p>
            <p>${drink.description}</p>
        `;
        drinksContainer.appendChild(card);
    });
}

// 2. Função principal de filtragem
function filterDrinks(category) {
    let filtered;
    
    if (category === 'all') {
        filtered = drinks;
    } else {
        // Filtra o array de bebidas com base na categoria
        filtered = drinks.filter(drink => drink.category === category);
    }
    
    displayDrinks(filtered); // Atualiza a exibição
}

// 3. Adiciona listeners de evento aos botões de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        
        // Remove a classe 'active' de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
        
        // Chama a função de filtro
        filterDrinks(category);
    });
});

// 4. Carrega todas as bebidas ao carregar a página pela primeira vez
document.addEventListener('DOMContentLoaded', () => {
    filterDrinks('all');
});