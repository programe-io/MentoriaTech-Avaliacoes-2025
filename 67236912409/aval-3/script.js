document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const cards = document.querySelectorAll('.card');

    /**
     * Função principal para filtrar os cards
     * @param {string} searchTerm - O termo de pesquisa ou tag a ser filtrado
     */
    function filterCards(searchTerm) {
        const term = searchTerm.toLowerCase().trim();

        cards.forEach(card => {
            // Pega todas as tags (data-tags) do card e o conteúdo do texto interno
            const cardTags = card.getAttribute('data-tags').toLowerCase();
            const cardText = card.textContent.toLowerCase();

            // Verifica se o termo de pesquisa está nas tags OU no texto do card
            if (cardTags.includes(term) || cardText.includes(term) || term === "") {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // --- 1. FILTRAGEM VIA CAMPO DE PESQUISA (INPUT) ---

    // Filtra ao clicar no botão de busca
    searchButton.addEventListener('click', () => {
        filterCards(searchInput.value);
        // Remove a classe 'active' de todos os botões de tag
        tagButtons.forEach(btn => btn.classList.remove('active'));
    });

    // Filtra ao pressionar 'Enter' no campo de pesquisa
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterCards(searchInput.value);
            tagButtons.forEach(btn => btn.classList.remove('active'));
        }
    });


    // --- 2. FILTRAGEM VIA BOTÕES DE TAG ---

    tagButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tag = button.getAttribute('data-filter');

            // Alterna a classe 'active' no botão
            const isActive = button.classList.contains('active');
            
            // Limpa o campo de busca
            searchInput.value = '';

            // 1. Desativa todos os botões primeiro
            tagButtons.forEach(btn => btn.classList.remove('active'));

            if (!isActive) {
                // 2. Ativa o botão clicado e filtra
                button.classList.add('active');
                filterCards(tag);
            } else {
                // 3. Se já estava ativo, desativa e mostra todos os cards
                filterCards(""); // Filtra por termo vazio para mostrar tudo
            }
        });
    });

});