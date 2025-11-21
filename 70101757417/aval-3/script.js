// Array inicial de posts (simulação de dados de um banco de dados)
let posts = [
    {
        id: 1,
        username: "@sneakerhead_br",
        imageUrl: "https://via.placeholder.com/600x400?text=Nike+Air+Jordan+1+Red",
        description: "VENDO! Nike Air Jordan 1 'Chicago' - Tamanho 42. Novo na caixa. Mais infos inbox!",
        price: "599,90",
        likes: 250,
        liked: false
    },
    {
        id: 2,
        username: "@vendedor_sp",
        imageUrl: "https://via.placeholder.com/600x400?text=Adidas+Yeezy+Boost+350",
        description: "Adidas Yeezy Boost 350 V2 'Zebra'. Usado 1x, estado de novo. Tamanho 40. Preço negociável!",
        price: "1.200,00",
        likes: 55,
        liked: false
    }
];

const feedContainer = document.getElementById('feed-container');
const modal = document.getElementById('modal');
const btnNovoPost = document.getElementById('abrir-modal');
const spanClose = document.getElementsByClassName('close-btn')[0];
const formNovoPost = document.getElementById('new-post-form');

// Função para renderizar um post
function renderPost(post) {
    const article = document.createElement('article');
    article.classList.add('post');
    article.setAttribute('data-id', post.id); // Para identificar o post
    
    // Conteúdo do HTML para um único post
    article.innerHTML = `
        <div class="post-header">
            <span class="username">${post.username}</span>
        </div>
        <img src="${post.imageUrl}" alt="Tênis ${post.username}" class="post-image">
        <div class="post-actions">
            <button class="like-btn ${post.liked ? 'liked' : ''}" data-id="${post.id}">
                <i class="${post.liked ? 'fas fa-heart' : 'far fa-heart'}"></i> 
                <span>${post.likes}</span>
            </button>
            <span class="price">R$ ${post.price}</span>
        </div>
        <p class="post-description">${post.description}</p>
        <a href="mailto:exemplo@email.com" class="buy-link">Mandar Mensagem</a>
    `;

    // Adiciona o post no início do feed (mais recente primeiro)
    const feedTitle = document.querySelector('.feed-title');
    feedContainer.insertBefore(article, feedTitle.nextSibling); 
}

// Função principal para carregar todos os posts
function loadFeed() {
    // Remove o post de exemplo
    const postExemplo = document.querySelector('.post');
    if (postExemplo) {
        postExemplo.remove();
    }
    
    // Renderiza todos os posts do array
    posts.forEach(renderPost);
}

// Lógica para curtir/descurtir
feedContainer.addEventListener('click', (e) => {
    // Verifica se o clique foi no botão de like ou em um de seus filhos
    const likeButton = e.target.closest('.like-btn');
    if (likeButton) {
        const postId = parseInt(likeButton.getAttribute('data-id'));
        const post = posts.find(p => p.id === postId);
        
        if (post) {
            // Alterna o estado de "curtido"
            post.liked = !post.liked;
            
            // Atualiza o contador de likes
            if (post.liked) {
                post.likes++;
            } else {
                post.likes--;
            }

            // Atualiza a interface do botão
            likeButton.classList.toggle('liked', post.liked);
            
            // Atualiza o ícone
            const icon = likeButton.querySelector('i');
            icon.classList.toggle('fas', post.liked); // Coração preenchido
            icon.classList.toggle('far', !post.liked); // Coração vazado
            
            // Atualiza o número de likes
            likeButton.querySelector('span').textContent = post.likes;
        }
    }
});

// Lógica do Modal

// Abrir modal
btnNovoPost.onclick = function() {
  modal.style.display = "block";
}

// Fechar modal no X
spanClose.onclick = function() {
  modal.style.display = "none";
}

// Fechar modal se clicar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Submeter o novo post
formNovoPost.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o recarregamento da página

    const newPost = {
        id: Date.now(), // ID único baseado no tempo
        username: document.getElementById('post-username').value,
        imageUrl: document.getElementById('post-image-url').value,
        description: document.getElementById('post-description').value,
        // Garante que o preço está formatado com vírgula e duas casas decimais
        price: parseFloat(document.getElementById('post-price').value).toFixed(2).replace('.', ','),
        likes: 0,
        liked: false
    };

    // Adiciona o novo post no início do array
    posts.unshift(newPost);
    
    // Limpa o feed e recarrega para mostrar o novo post
    feedContainer.querySelectorAll('.post').forEach(post => post.remove());
    loadFeed();

    // Fecha o modal e limpa o formulário
    modal.style.display = "none";
    formNovoPost.reset();
});

// Inicializa o feed quando a página carrega
document.addEventListener('DOMContentLoaded', loadFeed);