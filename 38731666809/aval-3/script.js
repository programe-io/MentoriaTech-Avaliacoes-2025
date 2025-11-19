// Dados padrão do card com imagens Free Fire e curiosidades
const posts = [
    {
        username: "matheus",
        avatar: "https://static.wikia.nocookie.net/freefire/images/3/3d/Icon_Headshot.png",
        images: [
            {
                src: "https://static.wikia.nocookie.net/freefire/images/7/7a/Gloo_Wall_Glitch_Skin.png",
                caption: "A Gloo Wall é uma barreira que pode salvar sua vida em segundos!"
            },
            {
                src: "https://static.wikia.nocookie.net/freefire/images/6/65/Knight%27s_Fury.png",
                caption: "A skin Knight's Fury é uma das mais raras do jogo!"
            },
            {
                src: "https://static.wikia.nocookie.net/freefire/images/4/4c/Scar_Platinum_1.png",
                caption: "A Scar Platinum tem um dos maiores danos entre as armas do Free Fire."
            }
        ],
        text: "Free Fire é um dos jogos mais populares de Battle Royale! Mostrando skins e armas do jogo.",
        time: "há 10 minutos"
    },
    {
        username: "matheus",
        avatar: "https://static.wikia.nocookie.net/freefire/images/f/f5/Icon_Flamethrower.png",
        images: [
            {
                src: "https://static.wikia.nocookie.net/freefire/images/9/9a/M4A1_Platinum.png",
                caption: "A M4A1 Platinum é perfeita para tiros precisos."
            },
            {
                src: "https://static.wikia.nocookie.net/freefire/images/b/b8/UMP45_Elite.png",
                caption: "UMP45 Elite possui excelente cadência de tiro."
            },
            {
                src: "https://static.wikia.nocookie.net/freefire/images/3/30/AK47_Gold.png",
                caption: "O AK47 Gold é poderoso e estiloso."
            }
        ],
        text: "Confira algumas armas incríveis que podem mudar seu jogo em Free Fire.",
        time: "há 30 minutos"
    },
    {
        username: "matheus",
        avatar: "https://static.wikia.nocookie.net/freefire/images/0/0a/Icon_GG.png",
        images: [
            {
                src: "https://static.wikia.nocookie.net/freefire/images/c/c9/Vector_Red.png",
                caption: "O Vector Red é excelente para combates próximos."
            },
            {
                src: "https://static.wikia.nocookie.net/freefire/images/8/8f/Desert_Eagle_Gold.png",
                caption: "A Desert Eagle Gold causa muito dano por tiro."
            },
            {
                src: "https://static.wikia.nocookie.net/freefire/images/5/51/MP5_Blue.png",
                caption: "MP5 Blue é ótima para tiros rápidos e contínuos."
            }
        ],
        text: "As armas do Free Fire podem transformar sua estratégia. Veja algumas delas!",
        time: "há 1 hora"
    }
];

const feedContainer = document.getElementById("feedContainer");

// Função para criar um card
function criarPost(data) {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
        <div class="card-header">
            <img src="${data.avatar}" alt="Avatar de ${data.username}" class="avatar">
            <span class="username">${data.username}</span>
        </div>

        <div class="card-images">
            ${data.images.map(img => `
                <div class="image-wrapper">
                    <img src="${img.src}" alt="Imagem do post">
                    <p class="caption">${img.caption}</p>
                </div>
            `).join("")}
        </div>

        <p class="card-text">${data.text}</p>

        <div class="time">${data.time}</div>
    `;

    return card;
}

// Cria os posts no feed
posts.forEach(post => {
    feedContainer.appendChild(criarPost(post));
});
