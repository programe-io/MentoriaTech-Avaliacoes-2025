document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona o botão no HTML
    const themeToggleButton = document.getElementById('theme-toggle');
    // 2. Seleciona o elemento que irá receber a classe para mudar o estilo (geralmente o <body>)
    const body = document.body;
    // Classe CSS que definirá os estilos para o modo escuro
    const DARK_MODE_CLASS = 'dark-mode';

    // Função para aplicar o tema salvo
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add(DARK_MODE_CLASS);
            themeToggleButton.textContent = '☀️ Mudar Tema'; // Muda o texto do botão
            themeToggleButton.setAttribute('aria-label', 'Alternar para o tema claro');
        } else {
            body.classList.remove(DARK_MODE_CLASS);
            themeToggleButton.textContent = '🌙 Mudar Tema'; // Muda o texto do botão
            themeToggleButton.setAttribute('aria-label', 'Alternar para o tema escuro');
        }
    }

    // Aplica o tema imediatamente ao carregar a página
    applySavedTheme();

    // 3. Adiciona o evento de clique ao botão
    themeToggleButton.addEventListener('click', () => {
        // 4. Alterna a classe no body
        body.classList.toggle(DARK_MODE_CLASS);

        // 5. Salva a preferência no localStorage e atualiza o texto do botão
        if (body.classList.contains(DARK_MODE_CLASS)) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = '☀️ Mudar Tema';
            themeToggleButton.setAttribute('aria-label', 'Alternar para o tema claro');
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = '🌙 Mudar Tema';
            themeToggleButton.setAttribute('aria-label', 'Alternar para o tema escuro');
        }
    });
});