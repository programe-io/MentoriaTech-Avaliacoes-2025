// posts extras gerados por JavaScript
const posts = [
    {
        nome: "Pedro Arthur",
        foto: "https://i.imgur.com/6VBx3io.png",
        imagem: "https://i.imgur.com/PU1G6Lm.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        tempo: "há 5 minutos"
    },
    {
        nome: "Pedro Arthur",
        foto: "https://i.imgur.com/6VBx3io.png",
        imagem: "https://i.imgur.com/PU1G6Lm.png",
        texto: "Outra postagem de exemplo para o feed.",
        tempo: "há 12 minutos"
    }
];

const feed = document.getElementById("feed");

posts.forEach(p => {
    feed.innerHTML += `
        <div class="card">
            <div class="usuario">
                <img src="${p.foto}">
                <h3>${p.nome}</h3>
            </div>

            <h2>Publicação</h2>

            <span class="descricao">Gerado pelo JavaScript</span>

            <img src="${p.imagem}" class="img-post">

            <p>${p.texto}</p>

            <div class="tempo">${p.tempo}</div>
        </div>
    `;
});
