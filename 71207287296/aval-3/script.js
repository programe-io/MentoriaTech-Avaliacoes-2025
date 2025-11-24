// Lista de notícias com mais imagens
const noticias = [
    {
        titulo: "Obra inédita de Van Gogh é descoberta na França",
        descricao: "Especialistas confirmaram a autenticidade de uma pintura perdida de Van Gogh encontrada em um sótão.",
        imagem: "https://images.unsplash.com/photo-1549887534-3db1bd59c6a0?w=800"
    },
    {
        titulo: "Nova exposição de Monet atrai multidões",
        descricao: "Museu apresenta coleção rara das obras impressionistas de Monet com novas interpretações.",
        imagem: "https://images.unsplash.com/photo-1520697222861-f5f62b59f4b7?w=800"
    },
    {
        titulo: "Artista brasileira lança série de pinturas futuristas",
        descricao: "Mistura de tecnologia e arte cria obras que reagem ao movimento dos visitantes.",
        imagem: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=800"
    }
];

// IMAGEM DE BANNER DINÂMICO
const bannerImg = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600";

document.getElementById("banner").style.backgroundImage = `url('${bannerImg}')`;

// Gerando os cards dinamicamente
const feed = document.getElementById("feed");

noticias.forEach(noticia => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${noticia.imagem}" alt="Imagem da notícia">
        <div>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descricao}</p>
        </div>
    `;

    feed.appendChild(card);
});
