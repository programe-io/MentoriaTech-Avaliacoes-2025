const postsData = [
    {
        titulo: "Nova atualização no Brookhaven!",
        categoria: "atualizacao",
        imagem: "https://tr.rbxcdn.com/1e8ead2462db9c016e0193f1dfbec20b/768/432/Image/Webp",
        texto: "A nova atualização trouxe novos veículos, itens e melhorias gráficas!"
    },
    {
        titulo: "Como ganhar Robux sem hacks",
        categoria: "dicas",
        imagem: "https://tr.rbxcdn.com/cc5abd68c757f6e7e10e6fb7f869e0c4/768/432/Image/Webp",
        texto: "Só existem três formas reais de ganhar Robux: Premium, compra ou criando jogos."
    },
    {
        titulo: "Top 5 jogos mais jogados em 2025",
        categoria: "atualizacao",
        imagem: "https://tr.rbxcdn.com/563bdcbdb7192f92d78f3aa81a9a00bb/768/432/Image/Webp",
        texto: "Brookhaven, Blox Fruits, Doors e mais estão no topo!"
    },
    {
        titulo: "Dicas para evoluir rápido no Blox Fruits",
        categoria: "dicas",
        imagem: "https://tr.rbxcdn.com/cb90c71f6b16e0ef8fe513ed2696c2f2/768/432/Image/Webp",
        texto: "Use frutas fortes e farm em equipe."
    }
];

function carregarPosts() {
    const c = document.getElementById("posts");
    c.innerHTML = "";

    postsData.forEach(post => {
        const article = document.createElement("article");
        article.className = "post";
        article.setAttribute("data-cat", post.categoria);

        article.innerHTML = `
            <h2>${post.titulo}</h2>
            <h3>Categoria: ${post.categoria}</h3>
            <img src="${post.imagem}" alt="Imagem do post Roblox">
            <p>${post.texto}</p>
        `;

        c.appendChild(article);
    });
}

function filtrarPosts(cat) {
    const posts = document.querySelectorAll("article");

    posts.forEach(post => {
        post.style.display =
            cat === "tudo" || post.getAttribute("data-cat") === cat
                ? "block"
                : "none";
    });
}

carregarPosts();