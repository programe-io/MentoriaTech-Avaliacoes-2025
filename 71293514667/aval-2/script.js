const posts = [
  {
    title: "Como Jazzghost conquistou o público brasileiro",
    date: "2025-09-01",
    content: "Jazzghost começou com vídeos simples de gameplay e hoje é um dos influenciadores mais reconhecidos do Brasil..."
  },
  {
    title: "Os jogos favoritos de Jazzghost",
    date: "2025-09-15",
    content: "Minecraft, Among Us, e Free Fire estão entre os jogos que Jazzghost mais joga e transmite para seus seguidores..."
  },
  {
    title: "Por trás das câmeras: curiosidades sobre Jazzghost",
    date: "2025-10-10",
    content: "Poucos sabem que Jazzghost tem paixão por música e já lançou algumas composições próprias..."
  }
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR");
}

function renderPosts() {
  const postList = document.getElementById("post-list");
  posts.forEach(post => {
    const postEl = document.createElement("article");
    postEl.classList.add("post");

    postEl.innerHTML = `
      <h3>${post.title}</h3>
      <div class="date">${formatDate(post.date)}</div>
      <p>${post.content}</p>
    `;

    postList.appendChild(postEl);
  });
}

window.onload = () => {
  renderPosts();
};
