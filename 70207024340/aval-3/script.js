// Simulação de Dados dos Posts de Biquínis
const bikiniPosts = [
    {
        id: 1,
        imageURL: "https://acdn-us.mitiendanube.com/stores/001/308/583/products/tezza-72391-9d80bd740efa3bba5a16851160084320-640-0.webp",
        caption: "Nosso biquíni Neon Power está de volta! Perfeito para o seu verão. Não perca essa chance de brilhar na praia ou piscina. Edição limitada. Use o código #NEONSTYLE",
        price: "129,90",
        comments: 45,
        date: "10m atrás"
    },
    {
        id: 2,
        imageURL: "https://lojaaguadecoco.vteximg.com.br/arquivos/ids/208429-728-1090/S1568B1314-01418-2.jpg?v=637962677241600000",
        caption: "Textura + Conforto = Match perfeito! O modelo Atlântico em verde militar é a elegância que você procurava. Combine com nossa saída de praia de seda. #modapraia #verao2024",
        price: "99,90",
        comments: 12,
        date: "1h atrás"
    },
    {
        id: 3,
        imageURL: "https://cdn.dooca.store/35009/products/olavgl2m2pblc05gzqdatox6uv9bvn5lguti.png?v=1702672790",
        caption: "Aquele básico nada básico que a gente ama. Cores neutras que combinam com tudo e vestem super bem. Qual é o seu favorito? Arraste para o lado para ver mais!",
        price: "85,00",
        comments: 20,
        date: "3h atrás"
    }
    // Adicione mais posts aqui
];

const feedContainer = document.getElementById('feed-container');
const postTemplate = document.getElementById('post-template');

/**
 * Cria e insere um novo post no feed.
 * @param {object} data - Os dados do post (imagem, legenda, preço, etc.).
 */
function renderPost(data) {
    // Clona o conteúdo do template
    const postElement = postTemplate.content.cloneNode(true);

    // Seleciona os elementos dentro do novo post
    const image = postElement.querySelector('.post-image');
    const captionText = postElement.querySelector('.post-caption-text');
    const buyButton = postElement.querySelector('.buy-button');
    const commentCount = postElement.querySelector('.comment-count');
    const postDate = postElement.querySelector('.post-date');

    // Preenche os dados
    image.src = data.imageURL;
    image.alt = `Biquíni ID ${data.id}`;
    captionText.textContent = `@bikinibrasil ${data.caption}`; // Adiciona o nome de usuário na frente da legenda

    buyButton.textContent = `Comprar R$${data.price.replace('.', ',')}`;
    buyButton.onclick = () => alert(`Adicionado ao carrinho: Biquíni R$${data.price}!`); // Ação de Compra simples
    
    commentCount.textContent = data.comments;
    postDate.textContent = `- ${data.date}`;

    // Lógica para Curtir
    const likeIcon = postElement.querySelector('.fa-heart');
    likeIcon.addEventListener('click', () => {
        likeIcon.classList.toggle('liked'); // Adiciona/Remove uma classe para mudar a cor
        alert('Você curtiu o post!');
    });
    // Adicione um CSS para a classe .liked (ex: .fa-heart.liked { color: red; }) no seu style.css!

    // Adiciona o post completo ao container do feed
    feedContainer.appendChild(postElement);
}

// Renderiza todos os posts da lista
bikiniPosts.forEach(post => renderPost(post));