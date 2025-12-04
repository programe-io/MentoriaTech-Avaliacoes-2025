// Simulação de postagens vindas do backend
const posts = [
    {
        nome: "FroJho",
        imagem: "https://www.papeiseparede.com.br/2228-thickbox_default/papel-de-parede-paisagem-em-dinant.jpg.webp",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut.",
        tempo: "há 10 minutos"
    },
    {
        nome: "FroJho",
        imagem: "https://i.pinimg.com/736x/1c/35/65/1c3565c93afcceaac452f35818515692.jpg",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut.",
        tempo: "há 10 minutos"
    },
    {
        nome: "FroJho",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkjLWhRkdKH-VQvPch_sDmCgt6HXHwIXL9Q&s",
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
