document.addEventListener('DOMContentLoaded', () => {
    // ... (Manter as Funções de Tema do código anterior) ...
    
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const anoAtualSpan = document.getElementById('ano-atual');
    const newsletterForm = document.getElementById('newsletter-form'); // Novo
    
    // 1. Atualiza dinamicamente o ano no rodapé
    if (anoAtualSpan) {
        anoAtualSpan.textContent = new Date().getFullYear();
    }

    // Chave de armazenamento para o tema
    const THEME_STORAGE_KEY = 'user-theme-preference';

    // 2. Função para aplicar o tema (dark ou light)
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggleButton.textContent = 'Mudar para Tema Claro';
            themeToggleButton.setAttribute('aria-pressed', 'true');
        } else {
            body.classList.remove('dark-mode');
            themeToggleButton.textContent = 'Mudar para Tema Escuro';
            themeToggleButton.setAttribute('aria-pressed', 'false');
        }
    }

    // 3. Função para inicializar o tema ao carregar a página
    function initializeTheme() {
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        
        if (storedTheme) {
            applyTheme(storedTheme);
            return;
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }

    // 4. Função para alternar o tema ao clicar
    function toggleTheme() {
        const isDarkMode = body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light' : 'dark';

        applyTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }

    // 5. Novo: Gerenciamento da Submissão do Formulário
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o recarregamento da página

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            // Simulação de envio de dados
            console.log(`E-mail submetido: ${email}`);
            
            // Feedback visual para o usuário
            alert(`Obrigado por se inscrever, ${email}! Você receberá notícias em breve.`);
            
            // Limpa o campo
            emailInput.value = '';
        });
    }


    // Inicializa o tema e os listeners
    initializeTheme();

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
    
    console.log('Sistema de Tema e Newsletter Carregados e Prontos.');
});