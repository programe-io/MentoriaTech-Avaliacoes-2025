const movies = [
    {
        title: "Vingadores: Ultimato",
        year: 2019,
        poster: "https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SY679_.jpg",
        description: "Após o estalar de dedos devastador de Thanos, os Vingadores se reúnem mais uma vez para reverter o caos."
    },
    {
        title: "Homem-Aranha: Sem Volta Para Casa",
        year: 2021,
        poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
        description: "Peter Parker busca ajuda de Doutor Estranho após sua identidade ser revelada ao mundo."
    },
    {
        title: "Interestelar",
        year: 2014,
        poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
        description: "Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade."
    },
    {
        title: "Batman: O Cavaleiro das Trevas",
        year: 2008,
        poster: "https://m.media-amazon.com/images/I/51EbJjlY0EL._AC_SY679_.jpg",
        description: "Batman enfrenta o Coringa, um criminoso caótico que quer espalhar o caos em Gotham City."
    }
];

const container = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const modal = document.getElementById("movie-modal");
const closeModal = document.getElementById("close-modal");

function showMovies(filteredMovies = movies) {
    container.innerHTML = "";
    filteredMovies.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        div.addEventListener("click", () => openModal(movie));
        container.appendChild(div);
    });
}

function openModal(movie) {
    document.getElementById("modal-poster").src = movie.poster;
    document.getElementById("modal-title").textContent = movie.title;
    document.getElementById("modal-year").textContent = `Ano: ${movie.year}`;
    document.getElementById("modal-description").textContent = movie.description;
    modal.style.display = "flex";
}

closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(value));
    showMovies(filtered);
});

showMovies();
