// Dados simulados das roupas
const dadosRoupas = [
    {
        id: 1,
        perfil: "LojaChique",
        fotoPerfil: "https://portal6.com.br/wp-content/uploads/2021/12/amaro.jpg",
        imagemRoupa: "https://cf.shopee.com.br/file/br-11134207-81z1k-mek9amnt31mqf2",
        descricao: "Vestido floral elegante, perfeito para o verão. Tecido leve e confortável. Edição limitada!",
        preco: "R$ 149,90",
        curtidas: 15
    },
    {
        id: 2,
        perfil: "ModaUrbana_SP",
        fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIHwex9RwcMpsqbLcZTElrfnAjrtxxWi6kQ&s",
        imagemRoupa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAhYXzYzv-lpjoKrbG78g6x5m2wbeVYcK_w&s",
        descricao: "Jaqueta jeans vintage unissex. Estilo e conforto para qualquer ocasião. Tamanhos P, M e G.",
        preco: "R$ 220,00",
        curtidas: 30
    },
    {
        id: 3,
        perfil: "BazarConsciente",
        fotoPerfil: "https://i.pinimg.com/736x/8f/ad/00/8fad004dd694993f5dea7f3cb0d7b7ed.jpg",
        imagemRoupa: "https://cdn.awsli.com.br/600x700/147/147820/produto/254571473/277a1014-1092-f5iqplj8vc.JPG",
        descricao: "Calça jogger preta sustentável, feita com algodão orgânico. Apenas 2 unidades restantes!",
        preco: "R$ 95,50",
        curtidas: 8
    }
];

const feedContainer = document.getElementById('feed-container');

// Função para renderizar um post
function criarPostHTML(roupa) {
    const postCard = document.createElement('div');
    postCard.classList.add('post-card');
    postCard.dataset.postId = roupa.id;

    postCard.innerHTML = `
        <div class="post-header">
            <img class="perfil-foto" src="${roupa.fotoPerfil}" alt="Foto de Perfil de ${roupa.perfil}">
            <span class="nome-perfil">${roupa.perfil}</span>
        </div>
        <img class="post-imagem" src="${roupa.imagemRoupa}" alt="Imagem de ${roupa.descricao}">
        <div class="post-body">
            <p>${roupa.descricao}</p>
            <span class="preco">${roupa.preco}</span>
            <p>Curtidas: <span id="curtidas-${roupa.id}">${roupa.curtidas}</span></p>
        </div>
        <div class="post-actions">
            <button class="action-btn curtir" onclick="curtirPost(${roupa.id})">❤️ Curtir</button>
            <button class="action-btn comentar" onclick="comentarPost(${roupa.id})">💬 Comentar</button>
            <button class="action-btn comprar" onclick="comprarRoupa('${roupa.descricao}', '${roupa.preco}')">🛒 Comprar</button>
        </div>
    `;

    return postCard;
}

// Renderiza todos os posts no feed
dadosRoupas.forEach(roupa => {
    feedContainer.appendChild(criarPostHTML(roupa));
});

// --- Funções de Interatividade ---

// Simula a ação de curtir
function curtirPost(postId) {
    // 1. Encontra o item nos dados (para persistência simulada)
    const post = dadosRoupas.find(item => item.id === postId);

    // 2. Aumenta a contagem de curtidas
    if (post) {
        post.curtidas += 1;
        
        // 3. Atualiza a contagem na interface
        const curtidasElement = document.getElementById(`curtidas-${postId}`);
        if (curtidasElement) {
            curtidasElement.textContent = post.curtidas;
        }

        // 4. Feedback visual (opcional)
        const curtirBtn = document.querySelector(`.post-card[data-post-id="${postId}"] .action-btn.curtir`);
        if (curtirBtn) {
            curtirBtn.classList.add('ativo');
            setTimeout(() => curtirBtn.classList.remove('ativo'), 500); // Remove o destaque após 0.5s
        }
    }
}

// Simula a ação de comentar
function comentarPost(postId) {
    alert(`Comentários para o Post ${postId} (Funcionalidade a ser expandida)`);
    // Em um projeto real, aqui você abriria um campo de texto ou modal para o usuário digitar
}

// Simula a ação de compra
function comprarRoupa(nome, preco) {
    alert(`Você selecionou a compra de: ${nome} por ${preco}.\n\n(Redirecionando para o checkout simulado...)`);
    // Em um projeto real, aqui você redirecionaria para uma página de checkout ou carrinho
}