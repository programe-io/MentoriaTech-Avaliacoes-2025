// Simulação de postagens vindas do backend
const posts = [
    {
        nome: "FroJho",
        imagem: "https://img.freepik.com/fotos-gratis/ponte-de-madeira-para-a-praia-durante-o-por-do-sol_181624-18247.jpg?semt=ais_hybrid&w=740&q=80",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut.",
        tempo: "há 10 minutos"
    },
    {
        nome: "FroJho",
        imagem: "https://i.pinimg.com/474x/32/09/94/320994f30772f66310e49b8a762627f2.jpg",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut.",
        tempo: "há 10 minutos"
    },
    {
        nome: "FroJho",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHAK-7QEIlIHOfiSc8-w-DlsTB21rQjV0fQ&s",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut.",
        tempo: "há 10 minutos"
    }
];

// Renderizar posts
const feed = document.getElementById("feed");

posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${post.imagem}" alt="Post">
        <div class="card-content">
            <div class="card-title">${post.nome}</div>
            <div class="card-text">${post.texto}</div>
            <div class="card-time">${post.tempo}</div>
        </div>
    `;

    feed.appendChild(card);
});
