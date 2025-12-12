document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const postSections = document.querySelectorAll('.post-section');

    // Função para mostrar a seção correta e atualizar o link ativo
    const showSection = (id) => {
        // Esconde todas as seções
        postSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostra a seção desejada
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Remove a classe 'active' de todos os links de navegação
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona a classe 'active' ao link clicado
        const activeLink = document.querySelector(`[data-jogo="${id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    // Adiciona o evento de clique a todos os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link
            const jogoId = event.target.getAttribute('data-jogo');
            showSection(jogoId);
        });
    });

    // Garante que o conteúdo inicial (home) esteja ativo ao carregar a página
    // O HTML já define 'home' como ativo, mas é bom ter uma verificação.
    // O código acima é suficiente para a navegação básica.
});