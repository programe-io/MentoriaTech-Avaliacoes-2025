// Dados iniciais do feed
const posts = [
    {
        user: "FroJho",
        profileImg: "https://i.imgur.com/6VBx3io.png",
        postImg: "https://i.imgur.com/FTaZQ4s.jpeg",
        text: "Viva o momento! Aproveite cada detalhe.",
        time: "há 10 minutos"
    },
    {
        user: "FroJho",
        profileImg: "https://i.imgur.com/6VBx3io.png",
        postImg: "https://i.imgur.com/7jIuQ4D.jpeg",
        text: "Iluminação e conforto — nada melhor que uma noite tranquila.",
        time: "há 15 minutos"
    },
    {
        user: "FroJho",
        profileImg: "https://i.imgur.com/6VBx3io.png",
        postImg: "https://i.imgur.com/yf8O3xO.jpeg",
        text: "A vista perfeita para encerrar o dia.",
        time: "há 20 minutos"
    }
];


// Seleciona o container dos cards
const feed = document.querySelector(".feed-container");


// Função que cria um card HTML
function criarPost(post) {
    return `
        <div class="card">
            <div class="user">
                <img src="${post.profileImg}" class="profile" alt="User">
                <span>${post.user}</span>
            </div>

            <img src="${post.postImg}" class="post-img">

            <p class="text">${post.text}</p>

            <span class="time">${post.time}</span>
        </div>
    `;
}


// Renderizar todos os posts
function carregarFeed() {
    feed.innerHTML = ""; 
    posts.forEach(post => {
        feed.innerHTML += criarPost(post);
    });
}


// Adicionar um novo post dinamicamente
function adicionarPost(user, profileImg, postImg, text, time) {
    posts.unshift({
        user,
        profileImg,
        postImg,
        text,
        time
    });

    carregarFeed();
}


// Inicializa o feed
carregarFeed();


// Exemplo de uso: criar um post novo depois de 5 segundos
setTimeout(() => {
    adicionarPost(
        "Novo Usuário",
        "https://i.imgur.com/6VBx3io.png",
        "https://i.imgur.com/hwO2f5r.jpeg",
        "Acabei de postar algo novo! 😎🔥",
        "Agora mesmo"
    );
}, 5000);
