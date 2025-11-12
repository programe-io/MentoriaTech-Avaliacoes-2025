// Dados simulados dos filmes
const movies = [
    { title: "Guerra Estelar", year: 2024, genre: "ficcao", rating: 4.5, image: "https://via.placeholder.com/200x300?text=Guerra+Estelar" },
    { title: "O Último Romance", year: 2023, genre: "drama", rating: 4.8, image: "https://via.placeholder.com/200x300?text=Ultimo+Romance" },
    { title: "Velocidade Máxima", year: 2022, genre: "acao", rating: 4.2, image: "https://via.placeholder.com/200x300?text=Velocidade" },
    { title: "Risotada Garantida", year: 2024, genre: "comedia", rating: 4.0, image: "https://via.placeholder.com/200x300?text=Risotada" },
    { title: "Planeta Desconhecido", year: 2021, genre: "ficcao", rating: 4.6, image: "https://via.placeholder.com/200x300?text=Planeta" },
];

const movieGrid = document.getElementById('movie-grid');
const sidebarLinks = document.querySelectorAll('.sidebar nav a');

// 1. Função para renderizar os filmes na tela
function renderMovies(movieList) {
    movieGrid.innerHTML = ''; // Limpa o grid

    movieList.forEach(movie => {
        // Cria o elemento <article> para cada filme
        const article = document.createElement('article');
        article.classList.add('movie-card');
        article.setAttribute('data-genre', movie.genre);

        article.innerHTML = `
            <img src="${movie.image}" alt="Pôster do filme ${movie.title}">
            <div class="movie-info">
                <h3>${movie.title} (${movie.year})</h3>
                <p>Gênero: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                <p class="rating">⭐️ ${movie.rating}</p>
            </div>
        `;
        
        movieGrid.appendChild(article);
    });
}

// 2. Função de filtro (chamada ao clicar nos links da barra lateral)
function filterMovies(genre) {
    // Remove o destaque de todos os links
    sidebarLinks.forEach(link => link.classList.remove('active'));

    let filteredMovies = movies;
    
    if (genre && genre !== 'all') {
        filteredMovies = movies.filter(movie => movie.genre === genre);
        
        // Adiciona o destaque ao link clicado
        document.querySelector(`.sidebar nav a[data-genre="${genre}"]`).classList.add('active');
    }

    renderMovies(filteredMovies);
}

// 3. Adiciona listeners de clique aos links da barra lateral
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede a navegação padrão
        const genre = e.target.getAttribute('data-genre');
        filterMovies(genre);
    });
});

// Inicializa a página renderizando todos os filmes
renderMovies(movies);