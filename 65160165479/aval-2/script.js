// 1. Seleciona o botão e o elemento body
const themeButton = document.getElementById('toggle-theme');
const body = document.body;

// 2. Adiciona um "ouvinte de evento" (event listener) ao botão
themeButton.addEventListener('click', () => {
    // 3. Alterna (adiciona/remove) a classe 'dark-theme' no body
    body.classList.toggle('dark-theme');
    
    // Opcional: Salvar a preferência do usuário no armazenamento local (localStorage)
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeButton.textContent = '🌙 Mudar Tema'; // Muda o texto do botão
    } else {
        localStorage.setItem('theme', 'light');
        themeButton.textContent = '🌞 Mudar Tema';
    }
});

// Opcional: Carregar a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeButton.textContent = '🌙 Mudar Tema';
    }
});
