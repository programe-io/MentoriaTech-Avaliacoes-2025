const feed = document.getElementById("feed");

const cardData = {
    nome: "Pietro",
    foto: "https://cdn-icons-png.flaticon.com/512/4825/4825038.png",
    imagemConteudo: "https://i.ibb.co/6w71R8M/mockup-celulares.png",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae quas nihil sed fugit voluptatibus repellat delectus ut tempora debitis est dolorum deserunt.",
    tempo: "há 10 minutos"
};

function criarCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-top">
            <img src="${data.foto}" alt="Foto do usuário">
            <h3>${data.nome}</h3>
        </div>

        <img class="mobile-img" src="${data.imagemConteudo}" alt="Imagem do post">

        <div class="card-text">${data.texto}</div>
        <div class="card-time">${data.tempo}</div>
    `;

    return card;
}

for (let i = 0; i < 2; i++) {  // gera +2 cards para totalizar 3
    feed.appendChild(criarCard(cardData));
}
