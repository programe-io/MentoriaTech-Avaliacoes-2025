// Seleciona todos os links "Ver Receita" nos cards
const recipeLinks = document.querySelectorAll('article a');

recipeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita redirecionamento
        const recipeName = link.parentElement.querySelector('h2').textContent;
        alert(`Você clicou em "${recipeName}". Receita completa em breve!`);
    });
});

// Função para filtrar receitas por tempo máximo (em minutos)
function filterRecipes(maxMinutes) {
    const articles = document.querySelectorAll('main article');
    articles.forEach(article => {
        const timeText = article.querySelector('span').textContent; // Ex: "20 min | Fácil"
        const timeMatch = timeText.match(/(\d+)\s*min/);
        if (timeMatch) {
            const time = parseInt(timeMatch[1], 10);
            article.style.display = time <= maxMinutes ? 'flex' : 'none';
        }
    });
}

// Criar botão dinâmico para filtrar receitas rápidas (≤ 15 min)
const filterButton = document.createElement('button');
filterButton.textContent = 'Receitas até 15 min';
filterButton.style.margin = '1rem';
filterButton.style.padding = '0.5rem 1rem';
filterButton.style.border = 'none';
filterButton.style.borderRadius = '6px';
filterButton.style.backgroundColor = '#4CAF50';
filterButton.style.color = 'white';
filterButton.style.cursor = 'pointer';

filterButton.addEventListener('click', () => {
    filterRecipes(15);
});

// Insere o botão antes da seção de receitas
document.body.insertBefore(filterButton, document.querySelector('main'));
