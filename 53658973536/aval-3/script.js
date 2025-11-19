const feed = document.getElementById("feed");

// Lista de posts de exemplo
const posts = [
    {
        nome: "João Nascimento",
        fotoPerfil: "https://cdn-icons-png.flaticon.com/512/4825/4825038.png",
        imagem: "https://i.ibb.co/6w71R8M/mockup-celulares.png",
        texto: "Primeiro post gerado pelo JavaScript!",
        tempo: "há 5 minutos"
    },
    {
        nome: "João Nascimento",
        fotoPerfil: "https://cdn-icons-png.flaticon.com/512/4825/4825038.png",
        imagem: "https://i.ibb.co/Tvwxp8b/mockup-tablet.png",
        texto: "Segundo post gerado automaticamente.",
        tempo: "há 20 minutos"
    }
];

// Função para criar card
function criarCard(post) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="card-top">
            <img src="${post.fotoPerfil}">
            <h3>${post.nome}</h3>
        </div>

        <img class="mobile-img" src="${post.imagem}">

        <p class="card-text">${post.texto}</p>

        <div class="card-time">${post.tempo}</div>
    `;

    return card;
}

// Renderiza todos os posts
posts.forEach(p => {
    feed.appendChild(criarCard(p));
});
