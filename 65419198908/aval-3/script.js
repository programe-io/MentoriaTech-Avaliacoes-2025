document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const anoAtualSpan = document.getElementById('ano-atual');
    const newsletterForm = document.getElementById('newsletter-form');
    
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

    // 3. Função para inicializar o tema ao carregar a página (respeita preferência salva ou do sistema)
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

    // 5. Gerenciamento da Submissão do Formulário
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            console.log(`E-mail submetido: ${email}`);
            
            alert(`Inscrição concluída! As melhores dicas nutricionais já estão a caminho do seu e-mail, ${email}.`);
            
            emailInput.value = '';
        });
    }

    // Inicializa o tema e os listeners
    initializeTheme();

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
    
    console.log('Sistema de Tema e Newsletter Carregados.');
});