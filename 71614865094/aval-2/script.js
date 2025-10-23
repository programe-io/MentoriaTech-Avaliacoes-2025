// 1. Array de objetos para armazenar os dados dos posts.
const posts = [
    {
        titulo: "Meu Primeiro Gato: Uma Experiência Inesquecível",
        imagem: "https://labovet.com.br/wp-content/uploads/2024/11/GATOS-%E2%80%93-CARACTERISTICAS-E-CUIDADOS-1024x576.jpg", // Certifique-se de ter essa imagem na pasta 'imagens'
        texto: "Adotar um gato é uma jornada maravilhosa! Lembro-me do primeiro dia com o 'Pipo' e de como ele se adaptou rapidamente à casa. Prepare a casa, tenha paciência e muito carinho para dar.",
        data: "20 de Outubro de 2025"
    },
    {
        titulo: "Dicas para a Hora da Brincadeira",
        imagem: "https://ative.pet/wp-content/uploads/2020/08/brincadeira-para-gato-1336x668.jpeg", // Certifique-se de ter essa imagem na pasta 'imagens'
        texto: "Brincar com seu gato é essencial para o bem-estar dele. Varinhass, bolinhas e ponteiros laser (com moderação!) são ótimos. Lembre-se que a brincadeira simula a caça!",
        data: "15 de Outubro de 2025"
    },
    {
        titulo: "O Segredo da Ração Perfeita",
        imagem: "https://www.petz.com.br/blog/wp-content/uploads/2020/04/alimentacao-para-gatos-pet.jpg", // Certifique-se de ter essa imagem na pasta 'imagens'
        texto: "A nutrição é a chave. Consulte um veterinário para escolher a ração ideal que atenda às necessidades específicas do seu felino, levando em conta idade e saúde.",
        data: "10 de Outubro de 2025"
    }
    // Você pode adicionar mais posts aqui
];

// 2. Função para criar o elemento HTML de um post
function criarElementoPost(post) {
    // Cria a div principal do post
    const article = document.createElement('article');
    article.classList.add('post');

    // Cria o HTML interno do post
    article.innerHTML = `
        <h2>${post.titulo}</h2>
        <p class="data">${post.data}</p>
        <img src="${post.imagem}" alt="Imagem de um gato relacionado ao post: ${post.titulo}">
        <p>${post.texto}</p>
        <a href="#" class="btn-ler-mais">Leia Mais...</a>
    `;

    return article;
}

// 3. Função principal para carregar os posts
function carregarPosts() {
    const containerPosts = document.getElementById('container-posts');

    // Limpa o container (caso tenha algo)
    containerPosts.innerHTML = '';

    // Itera sobre a lista de posts e insere no HTML
    posts.forEach(post => {
        const elementoPost = criarElementoPost(post);
        containerPosts.appendChild(elementoPost);
    });
}

// 4. Carrega os posts quando a página é completamente carregada
window.onload = carregarPosts;