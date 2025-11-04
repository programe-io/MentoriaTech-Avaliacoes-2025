// Dados simulados dos animes
// Os resultados da pesquisa me deram ótimas sugestões!
const animesData = [
    { id: 1, title: "Attack on Titan", genre: "Ação, Fantasia Sombria", description: "A humanidade luta pela sobrevivência contra Titãs devoradores.", imageUrl: "https://via.placeholder.com/300x200?text=Attack+on+Titan" },
    { id: 2, title: "Death Note", genre: "Mistério, Psicológico", description: "Um caderno que pode matar qualquer pessoa cujo nome seja escrito nele.", imageUrl: "https://via.placeholder.com/300x200?text=Death+Note" },
    { id: 3, title: "Fullmetal Alchemist: Brotherhood", genre: "Aventura, Fantasia", description: "Dois irmãos procuram a Pedra Filosofal após um erro de alquimia.", imageUrl: "https://via.placeholder.com/300x200?text=Fullmetal+Alchemist" },
    { id: 4, title: "One Piece", genre: "Aventura, Shonen", description: "Luffy e sua tripulação em busca do tesouro One Piece.", imageUrl: "https://via.placeholder.com/300x200?text=One+Piece" },
    { id: 5, title: "Jujutsu Kaisen", genre: "Ação, Sobrenatural", description: "Estudantes lutam contra maldições poderosas.", imageUrl: "https://via.placeholder.com/300x200?text=Jujutsu+Kaisen" },
    { id: 6, title: "Dragon Ball Z", genre: "Ação, Luta", description: "As aventuras de Goku para proteger a Terra.", imageUrl: "https://via.placeholder.com/300x200?text=Dragon+Ball+Z" },
    // **Nota:** Na vida real, você substituiria 'via.placeholder' por URLs de imagens reais.
];

const animeListEl = document.getElementById('anime-list');
const favoritesListEl = document.getElementById('favorites-list');

// 1. Carregar Favoritos do Local Storage
// Se houver dados no Local Storage, usa, senão, começa vazio.
let favorites = JSON.parse(localStorage.getItem('animeFavorites')) || [];

/**
 * Salva a lista de favoritos atualizada no Local Storage.
 */
function saveFavorites() {
    localStorage.setItem('animeFavorites', JSON.stringify(favorites));
}

/**
 * Cria o elemento HTML (card) para um anime.
 * @param {object} anime - O objeto do anime.
 * @returns {HTMLElement} O elemento <div> do card.
 */
function createAnimeCard(anime) {
    const isFavorite = favorites.some(fav => fav.id === anime.id);

    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = `
        <img src="${anime.imageUrl}" alt="Capa de ${anime.title}">
        <div class="card-info">
            <h3>${anime.title}</h3>
            <p><strong>Gênero:</strong> ${anime.genre}</p>
            <p>${anime.description}</p>
            <button class="fav-button" data-id="${anime.id}" data-title="${anime.title}">
                ${isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
        </div>
    `;

    // Adiciona o listener de evento ao botão
    const button = card.querySelector('.fav-button');
    if (isFavorite) {
        button.classList.add('remove');
    }
    button.addEventListener('click', toggleFavorite);

    return card;
}

/**
 * Adiciona ou remove um anime dos favoritos.
 * @param {Event} event - O evento de clique.
 */
function toggleFavorite(event) {
    const id = parseInt(event.target.dataset.id);
    const title = event.target.dataset.title;
    const anime = animesData.find(a => a.id === id);

    if (!anime) return;

    const index = favorites.findIndex(fav => fav.id === id);

    if (index === -1) {
        // Adicionar favorito
        favorites.push({ id: id, title: title });
        event.target.textContent = 'Remover dos Favoritos';
        event.target.classList.add('remove');
        alert(`${title} foi adicionado aos favoritos!`);
    } else {
        // Remover favorito
        favorites.splice(index, 1);
        event.target.textContent = 'Adicionar aos Favoritos';
        event.target.classList.remove('remove');
        alert(`${title} foi removido dos favoritos.`);
    }

    saveFavorites();
    renderFavorites(); // Atualiza a lista de favoritos na tela
}

/**
 * Renderiza a lista de animes populares.
 */
function renderAnimeList() {
    animeListEl.innerHTML = ''; // Limpa a lista
    animesData.forEach(anime => {
        animeListEl.appendChild(createAnimeCard(anime));
    });
}

/**
 * Renderiza a lista de animes favoritos.
 */
function renderFavorites() {
    favoritesListEl.innerHTML = ''; // Limpa a lista

    if (favorites.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = 'empty-message';
        emptyMsg.textContent = 'Nenhum anime favorito adicionado ainda.';
        favoritesListEl.appendChild(emptyMsg);
        return;
    }

    favorites.forEach(fav => {
        const listItem = document.createElement('li');
        listItem.className = 'favorite-item';
        listItem.innerHTML = `
            <span>${fav.title}</span>
            <button class="fav-button remove" data-id="${fav.id}" data-title="${fav.title}">X</button>
        `;

        // Adiciona o listener de remoção
        const removeButton = listItem.querySelector('.fav-button');
        removeButton.addEventListener('click', (e) => {
            // Reutiliza a função toggleFavorite, mas precisa simular a estrutura do card para atualizar o botão no card
            toggleFavorite(e);
            
            // Encontra e atualiza o botão correspondente no grid de animes populares
            const popularButton = animeListEl.querySelector(`.fav-button[data-id="${fav.id}"]`);
            if (popularButton) {
                popularButton.textContent = 'Adicionar aos Favoritos';
                popularButton.classList.remove('remove');
            }
        });
        favoritesListEl.appendChild(listItem);
    });
}

// Inicia a aplicação:
document.addEventListener('DOMContentLoaded', () => {
    renderAnimeList();
    renderFavorites();
});