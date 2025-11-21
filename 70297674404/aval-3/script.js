// 1. Dados simulados (Mock Data)
const postsData = [
    {
        id: 1,
        modelo: "iPhone 16 Pro",
        data: "20 de Novembro, 2024",
        texto: "O novo iPhone 16 Pro chegou com uma câmera de 50MP e um chip A18 ultra-rápido! O design também está mais elegante.",
        imagemUrl: "https://m.media-amazon.com/images/I/61TA1Cq6eML.jpg", // Substitua por imagem real
        curtidas: 150
    },
    {
        id: 2,
        modelo: "Samsung Galaxy S25 Ultra",
        data: "18 de Novembro, 2024",
        texto: "Teste de bateria do S25 Ultra: simplesmente imbatível. A tela Dynamic AMOLED 3X é um show à parte. Vale o upgrade!",
        imagemUrl: "https://www.oficinadanet.com.br/media/obj_item/2045/381/s25ultra.jpg", // Substitua por imagem real
        curtidas: 210
    },
    {
        id: 3,
        modelo: "Xiaomi 15 Pro",
        data: "15 de Novembro, 2024",
        texto: "Review: O Xiaomi 15 Pro oferece o melhor custo-benefício do ano, com carregamento ultrarrápido e desempenho de topo.",
        imagemUrl: "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc4/xiaomi-15-pro-113.jpg", // Substitua por imagem real
        curtidas: 85
    }
];

// 2. Função para criar o HTML de um post
function createPostElement(post) {
    // Cria o elemento principal do post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.dataset.postId = post.id; // Para referenciar o post
    
    // Constrói o HTML interno do post
    postDiv.innerHTML = `
        <div class="post-header">
            <h3>${post.modelo}</h3>
            <p><small>Publicado em: ${post.data}</small></p>
        </div>
        <img src="${post.imagemUrl}" alt="${post.modelo}" class="post-image">
        <p>${post.texto}</p>
        <div class="post-actions">
            <button class="like-btn" data-id="${post.id}">👍 Curtir (${post.curtidas})</button>
            <button>💬 Comentar</button>
        </div>
    `;

    return postDiv;
}

// 3. Função para renderizar todos os posts
function renderFeed() {
    const feedContainer = document.getElementById('feed-container');
    
    // Limpa o conteúdo (remove o "Carregando Posts...")
    feedContainer.innerHTML = ''; 

    // Adiciona cada post ao container
    postsData.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });

    // 4. Adiciona a lógica de interação (curtir)
    addEventListeners();
}

// 5. Função para adicionar Event Listeners (interatividade)
function addEventListeners() {
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const postId = parseInt(event.target.dataset.id);
            handleLike(postId, event.target);
        });
    });
}

// 6. Lógica de "Curtir"
function handleLike(postId, buttonElement) {
    const post = postsData.find(p => p.id === postId);
    
    if (post) {
        // Simplesmente incrementa a contagem de curtidas
        post.curtidas += 1;
        
        // Atualiza o texto do botão
        buttonElement.textContent = `👍 Curtir (${post.curtidas})`;
        
        // Adiciona um feedback visual (opcional)
        console.log(`Post ${postId} curtido! Total de curtidas: ${post.curtidas}`);
    }
}


// Inicia o feed quando o script é carregado
renderFeed();