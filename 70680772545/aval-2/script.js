document.addEventListener('DOMContentLoaded', () => {
    // ==================
    // 1. Alternância de Tema
    // ==================
    const toggleButton = document.getElementById('toggle-theme-btn');
    const body = document.body;
    
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            toggleButton.textContent = 'Modo Noturno 🌙';
        } else {
            body.classList.remove('light-theme');
            toggleButton.textContent = 'Modo Contraste 🔥';
        }
    };
    
    loadTheme();
    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            toggleButton.textContent = 'Modo Noturno 🌙';
            localStorage.setItem('theme', 'light');
        } else {
            toggleButton.textContent = 'Modo Contraste 🔥';
            localStorage.setItem('theme', 'dark');
        }
    });

    // ==================
    // 2. Funcionalidade do Pop-up (Modal)
    // ==================
    const modal = document.getElementById('aviso-modal');
    const closeBtn = document.getElementById('close-modal');

    // Mostra o modal se o usuário não o tiver fechado antes
    if (localStorage.getItem('bistecone_modal_closed') !== 'true') {
        modal.style.display = 'block';
    }

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
        localStorage.setItem('bistecone_modal_closed', 'true'); // Salva que foi fechado
    };

    // Fechar ao clicar no X
    closeBtn.addEventListener('click', closeModal);

    // Fechar ao clicar fora do modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // ==================
    // 3. Contador de Posts (Detalhe Interativo)
    // ==================
    const postContainer = document.querySelector('.grid-posts');
    const postItems = postContainer ? postContainer.querySelectorAll('.post-item').length : 0;
    const counterElement = document.getElementById('post-counter');

    if (counterElement) {
        counterElement.textContent = `Total de Zueiras Carregadas: ${postItems}`;
    }
});