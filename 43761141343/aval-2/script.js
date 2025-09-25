// Array de posts (imagem + título + descrição)
const posts = [
  {
    titulo: "🎮 Jogos Online",
    descricao: "Adoro explorar mundos digitais e competir em partidas com amigos. Jogos me ajudam a relaxar e também a pensar de forma estratégica.",
    imagem: "https://picsum.photos/300/200?random=1"
  },
  {
    titulo: "🎵 Música Lo-fi",
    descricao: "Sempre que estou programando ou estudando, escuto música lo-fi. Ela me ajuda a focar e a manter a calma.",
    imagem: "https://picsum.photos/300/200?random=2"
  },
  {
    titulo: "📚 Ficção Científica",
    descricao: "Ler livros de ficção científica me inspira a imaginar futuros diferentes e novas tecnologias.",
    imagem: "https://picsum.photos/300/200?random=3"
  },
  {
    titulo: "💻 Programação",
    descricao: "Criar projetos pessoais é minha paixão. Gosto de transformar ideias em realidade usando código.",
    imagem: "https://picsum.photos/300/200?random=4"
  },
  {
    titulo: "🍕 Pizza",
    descricao: "Nada melhor do que uma pizza para reunir os amigos e relaxar depois de um longo dia.",
    imagem: "https://picsum.photos/300/200?random=5"
  }
];

// Seleciona o container de posts
const postContainer = document.getElementById("post-container");

// Cria os posts dinamicamente
posts.forEach(post => {
  const postEl = document.createElement("div");
  postEl.classList.add("post");

  postEl.innerHTML = `
    <img src="${post.imagem}" alt="${post.titulo}">
    <div>
      <h3>${post.titulo}</h3>
      <p>${post.descricao}</p>
    </div>
  `;

  postContainer.appendChild(postEl);
});
