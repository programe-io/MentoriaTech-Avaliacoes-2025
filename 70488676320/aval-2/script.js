// Seleciona todos os links "Ver Receita"
const recipeLinks = document.querySelectorAll('article a');

recipeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o redirecionamento
        const recipeName = link.parentElement.querySelector('h2').textContent;
        alert(`Você clicou em "${recipeName}". Receita em breve!`);
    });
});

// Função de filtro por tempo de preparo
function filterRecipes(maxMinutes) {
    const articles = document.querySelectorAll('main article');
    articles.forEach(article => {
        const timeText = article.querySelector('span').textContent; // Ex: "20 min | Fácil"
        const timeMatch = timeText.match(/(\d+)\s*min/);
        if (timeMatch) {
            const time = parseInt(timeMatch[1], 10);
            if (time <= maxMinutes) {
                article.style.display = 'flex';
            } else {
                article.style.display = 'none';
            }
        }
    });
}

// Exemplo: filtrar receitas até 15 minutos
// filterRecipes(15);

// Opcional: criar botão para filtrar receitas rápidas
const filterButton = document.createElement('button');
filterButton.textContent = 'Receitas até 15 min';
filterButton.style.margin = '1rem';
filterButton.style.padding = '0.5rem 1rem';
filterButton.style.border = 'none';
filterButton.style.borderRadius = '6px';
filterButton.style.backgroundColor = '#ff6f61';
filterButton.style.color = 'white';
filterButton.style.cursor = 'pointer';

filterButton.addEventListener('click', () => {
    filterRecipes(15);
});

document.body.insertBefore(filterButton, document.querySelector('main'));
