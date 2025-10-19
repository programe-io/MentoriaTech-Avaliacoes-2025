document.addEventListener('DOMContentLoaded', function() {

    // ----------------------------------------
    // 1. DADOS
    // ----------------------------------------
    const reviews = [
        { id: 1, prato: "Sushi Combo Master", restaurante: "Miyagi Sushi Bar", rating: 4.5, texto: "Peixe fresco, arroz no ponto. O atendimento foi rápido, ideal para um almoço.", img: "https://placehold.co/800x200/4a235a/ffffff?text=SUSHI", slug: "sushi-combo-master", categoria: "sushi", favorito: true },
        { id: 2, prato: "Double Bacon Burger", restaurante: "The Grill House", rating: 5.0, texto: "Simplesmente o melhor burger da cidade. Pão macio, carne suculenta e muito queijo.", img: "https://placehold.co/800x200/503463/cccccc?text=BURGER", slug: "double-bacon-burger", categoria: "burger", favorito: true },
        { id: 3, prato: "Pizza Margherita Clássica", restaurante: "Pizzaria Napolitana", rating: 4.0, texto: "Uma pizza tradicional, mas falta um pouco de tempero. Ótima para um dia tranquilo.", img: "https://placehold.co/800x200/3e7d56/ffffff?text=PIZZA", slug: "pizza-margherita", categoria: "pizza", favorito: false }
    ];

    // Função utilitária para gerar estrelas HTML
    function getStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '★'; // Estrela cheia
        }
        if (halfStar) {
            stars += '½'; // Meia estrela
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '☆'; // Estrela vazia
        }
        return `<span class="rating">${stars}</span> (${rating.toFixed(1)})`;
    }

    // ----------------------------------------
    // 2. TEMPLATES DAS PÁGINAS (VIEW)
    // ----------------------------------------

    // Template para listar avaliações
    function templateHome(filterCategory = null) {
        let filteredReviews = reviews;
        let title = "Todas as Avaliações";

        if (filterCategory === 'favoritos') {
            filteredReviews = reviews.filter(r => r.favorito);
            title = "Meus Favoritos";
        } else if (filterCategory) {
            filteredReviews = reviews.filter(r => r.categoria === filterCategory);
            title = `Avaliações de ${filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}`;
        }

        let htmlReviews = '';
        if (filteredReviews.length === 0) {
            htmlReviews = `<p>Nenhuma avaliação encontrada nesta categoria.</p>`;
        } else {
            filteredReviews.forEach(review => {
                htmlReviews += `
                    <article class="review-card">
                        <img src="${review.img}" alt="Imagem do prato: ${review.prato}" class="review-card-img">
                        <div class="review-card-body">
                            <h3><a href="#review/${review.slug}" class="router-link">${review.prato}</a></h3>
                            <p><strong>${review.restaurante}</strong></p>
                            ${getStars(review.rating)}
                            <p>${review.texto.substring(0, 70)}...</p>
                            ${review.favorito ? '<span style="color:#e91e63;">❤️ Favorito</span>' : ''}
                        </div>
                    </article>
                `;
            });
        }
        return `<h2>${title}</h2>${htmlReviews}`;
    }

    // Template para o detalhe de uma avaliação
    function templateReviewDetalhe(slug) {
        const review = reviews.find(r => r.slug === slug);
        if (!review) return `<h2>Review Não Encontrada</h2><p>Voltar para a <a href="#home" class="router-link">Home</a>.</p>`;
        
        return `
            <article class="review-detail">
                <h2>${review.prato}</h2>
                <img src="${review.img}" alt="Imagem do prato: ${review.prato}" style="width:100%; height:250px; object-fit:cover; border-radius: 8px;">
                <p><strong>Restaurante:</strong> ${review.restaurante}</p>
                <div class="rating-box">
                    ${getStars(review.rating)}
                </div>
                <p class="review-text">${review.texto}</p>
                <button style="background-color: #e91e63; color: white; border: none; padding: 10px 15px; border-radius: 5px; margin-top: 15px; width: 100%;">
                    ${review.favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                </button>
                <a href="#home" class="router-link" style="display:block; margin-top: 20px; text-align: center;">← Voltar para a lista</a>
            </article>
        `;
    }

    // Template para a página Perfil
    function templatePerfil() {
        return `
            <h2>Meu Perfil</h2>
            <div style="text-align: center; padding: 20px;">
                <img src="https://placehold.co/100x100/4a235a/ffffff?text=P" alt="Avatar do Usuário" style="border-radius: 50%; border: 3px solid #3e7d56;">
                <h3>@ComilãoGourmet</h3>
                <p>Membro desde 2024. Já avaliei 124 pratos!</p>
                <p>Amo cozinhas exóticas e alta gastronomia.</p>
            </div>
            <hr>
            <h3>Estatísticas</h3>
            <ul style="list-style: none; padding: 0;">
                <li>Média de Avaliação: 4.3/5.0</li>
                <li>Restaurantes Visitados: 85</li>
            </ul>
        `;
    }

    // ----------------------------------------
    // 3. LÓGICA DE ROTAS (Controller)
    // ----------------------------------------

    const routes = {
        '': templateHome,          
        'home': templateHome,       
        'favoritos': () => templateHome('favoritos'),
        'perfil': templatePerfil,
        'pratos': (category) => templateHome(category), // Ex: #pratos/sushi
        'review': templateReviewDetalhe // Ex: #review/sushi-combo-master
    };
    
    // Função principal do roteamento SPA
    function router() {
        const path = window.location.hash.slice(1).toLowerCase() || 'home';
        const [route, param] = path.split('/');
        
        const mainContainer = document.getElementById('main-content');
        const sidebar = document.getElementById('sidebar-filters');
        let content = '';

        // Mostra ou esconde a barra lateral (ASIDE) dependendo da rota
        sidebar.style.display = (route === 'home' || route === '') ? 'block' : 'none';

        if (routes[route]) {
            content = param ? routes[route](param) : routes[route]();
        } else {
            content = `<h2>Erro 404</h2><p>Página de rota não encontrada. Voltar para a <a href="#home" class="router-link">Home</a>.</p>`;
        }

        if (mainContainer) {
            mainContainer.innerHTML = content;
            // Garante que o scroll vá para o topo da nova página
            mainContainer.scrollTop = 0; 
        } 
    }

    // ----------------------------------------
    // 4. INICIALIZAÇÃO
    // ----------------------------------------

    function inicializar() {
        // 1. Inicializa o Roteador e carrega a página inicial
        router(); 
        
        // 2. Configura o Listener para mudanças de hash (navegação)
        window.addEventListener('hashchange', router);

        // 3. Configura o Listener global para links (navegação SPA)
        document.body.addEventListener('click', (e) => {
            if (e.target.matches('.router-link')) {
                e.preventDefault(); 
                window.location.hash = e.target.getAttribute('href').slice(1);
            }
        });
    }

    // Chama a função de inicialização
    inicializar();
});