// posts do feed
const posts = [
    {
        nome: "Isaac Prado",
        foto: "https://i.imgur.com/6VBx3io.png",
        imagem: "https://i.imgur.com/PU1G6Lm.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut tempora debitis est dolorum deserunt.",
        tempo: "há 10 minutos"
    },
    {
        nome: "Isaac Prado",
        foto: "https://i.imgur.com/6VBx3io.png",
        imagem: "https://i.imgur.com/PU1G6Lm.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut tempora debitis est dolorum deserunt.",
        tempo: "há 10 minutos"
    },
    {
        nome: "Isaac Prado",
        foto: "https://i.imgur.com/6VBx3io.png",
        imagem: "https://i.imgur.com/PU1G6Lm.png",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut tempora debitis est dolorum deserunt.",
        tempo: "há 10 minutos"
    }
];

const feed = document.getElementById("feed");

// renderiza os cards
posts.forEach(p => {
    feed.innerHTML += `
        <div class="card">
            <div class="usuario">
                <img src="${p.foto}">
                <h3>${p.nome}</h3>
            </div>

            <img src="${p.imagem}" class="img-post">

            <p>${p.texto}</p>

            <div class="tempo">${p.tempo}</div>
        </div>
    `;
});
