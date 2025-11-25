const content = document.getElementById("content");
const searchInput = document.getElementById("search");
const homeLink = document.getElementById("homeLink");

const posts = [
    {
        id: 1,
        titulo: "Cristiano Ronaldo: O Maior Exemplo de Dedicação",
        imagem: "https://images.unsplash.com/photo-1593113598332-cd6c6a4f7f2d",
        texto: `
            Cristiano Ronaldo é o maior exemplo vivo de dedicação no futebol moderno.
            Sua mentalidade vencedora e disciplina extrema o transformaram em um dos 
            atletas mais completos e consistentes de todos os tempos. Em uma era 
            baseada em talento natural, CR7 prova que trabalho duro é o que define 
            lendas de verdade.
        `
    },
    {
        id: 2,
        titulo: "Messi: O Gênio Natural",
        imagem: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        texto: `
            Lionel Messi é considerado um dos jogadores mais talentosos da história.
            Seu estilo de jogo único, com dribles curtos e visão absurda, faz dele 
            um artista dentro de campo. Ao contrário de muitos, Messi joga com 
            naturalidade, como se o futebol fosse parte de sua essência.
        `
    },
    {
        id: 3,
        titulo: "Haaland: A Nova Máquina de Gols",
        imagem: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
        texto: `
            Haaland representa o futuro do futebol. Forte, rápido, preciso e 
            assustadoramente decisivo, ele redefine o papel do centroavante moderno.
            Seus números impressionam e mostram que estamos diante de uma nova 
            lenda em ascensão.
        `
    }
];

// CARREGA A PÁGINA INICIAL
function carregarHome(filtro = "") {
    content.innerHTML = "";
    posts
        .filter(p => p.titulo.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(post => {
            const card = document.createElement("div");
            card.className = "post-card";
            card.innerHTML = `
                <img src="${post.imagem}">
                <h2>${post.titulo}</h2>
                <p>${post.texto.substring(0, 120)}...</p>
            `;
            card.onclick = () => carregarPost(post.id);
            content.appendChild(card);
        });
}

// CARREGA UM POST INDIVIDUAL
function carregarPost(id) {
    const post = posts.find(p => p.id === id);
    content.innerHTML = `
        <div class="post-view">
            <img src="${post.imagem}">
            <h2>${post.titulo}</h2>
            <p>${post.texto}</p>
        </div>
    `;
}

// EVENTOS
searchInput.addEventListener("input", () => {
    carregarHome(searchInput.value);
});

homeLink.addEventListener("click", () => {
    carregarHome();
});

// INÍCIO
carregarHome();