// Dados iniciais de posts de Brigadeiros Gourmet
let posts = [
    { 
        id: 1, 
        title: "Brigadeiro Belga 70%", 
        description: "Intenso e sofisticado. Feito com chocolate Callebaut 70% cacau e coberto com raspas de chocolate amargo.", 
        price: "R$ 6,00/unid.",
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/ca78d0151e88522851eb7a5354e9bc70_XL.jpg", 
        likes: 25,
        isLiked: false
    },
    { 
        id: 2, 
        title: "Pistache Crocante", 
        description: "Massa aveludada de pistache puro, envolta em pistache granulado. O luxo em uma mordida!", 
        price: "R$ 7,50/unid.",
        image: "https://cdn.awsli.com.br/761/761999/produto/345189765/7898314926450b-t8lnit06a4.jpg", 
        likes: 18,
        isLiked: false
    }
];

const feedContainer = document.getElementById('feed-container');
const newPostForm = document.getElementById('new-post-form');

/**
 * Cria o elemento HTML de um card de brigadeiro.
 */
function createPostCard(post) {
    const likeClass = post.isLiked ? 'liked' : '';
    const likeIcon = post.isLiked ? 'fas' : 'far'; // fas (sólido) quando curtido, far (regular) quando não
    const imageUrl = post.image || "https://via.placeholder.com/600x400/ffb74d/5d4037?text=Novo+Sabor";
    
    return `
        <div class="post-card" data-id="${post.id}">
            <img src="${imageUrl}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <p><strong>Preço:</strong> ${post.price}</p>
                
                <div class="post-actions">
                    <button class="action-button like-button ${likeClass}" onclick="toggleLike(${post.id})">
                        <i class="${likeIcon} fa-heart"></i> 
                        <span class="like-count">${post.likes}</span>
                    </button>
                    <a href="https://wa.me/SEUNUMERO" target="_blank" class="buy-button">
                        <i class="fab fa-whatsapp"></i> Comprar
                    </a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderiza todos os brigadeiros no feed.
 */
function renderFeed() {
    feedContainer.innerHTML = ''; // Limpa o feed
    posts.forEach(post => {
        feedContainer.innerHTML += createPostCard(post);
    });
}

/**
 * Alterna o status de curtida e atualiza o feed.
 */
function toggleLike(postId) {
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex].isLiked = !posts[postIndex].isLiked;
        
        if (posts[postIndex].isLiked) {
            posts[postIndex].likes++;
        } else {
            posts[postIndex].likes--;
        }

        renderFeed();
    }
}

/**
 * Adiciona um novo sabor ao array e renderiza.
 */
newPostForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value;
    const description = document.getElementById('post-description').value;
    const price = document.getElementById('post-price').value;
    const imageUrl = document.getElementById('post-image-url').value;
    
    // Gera um ID simples para o novo post
    const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1; 

    const newPost = {
        id: newId, 
        title: title,
        description: description,
        price: price,
        image: imageUrl,
        likes: 0,
        isLiked: false
    };

    posts.unshift(newPost); // Adiciona no topo
    newPostForm.reset(); // Limpa o formulário
    renderFeed(); // Atualiza o feed
});

// Inicializa a exibição do feed
renderFeed();