// 1. Lógica do Modo Escuro
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Troca o ícone
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
});

// 2. Lógica para Mostrar/Esconder Ingredientes
// Seleciona todos os botões "Ver Ingredientes"
const recipeButtons = document.querySelectorAll('.btn-details');

recipeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Encontra a lista de ingredientes dentro do mesmo card do botão clicado
        const card = event.target.parentElement;
        const list = card.querySelector('.ingredients-list');
        
        // Alterna a classe 'hidden' para mostrar ou esconder
        list.classList.toggle('hidden');

        // Muda o texto do botão para dar feedback ao usuário
        if (list.classList.contains('hidden')) {
            event.target.textContent = 'Ver Ingredientes';
        } else {
            event.target.textContent = 'Ocultar Ingredientes';
        }
    });
});

console.log("Sistema de receitas carregado!");