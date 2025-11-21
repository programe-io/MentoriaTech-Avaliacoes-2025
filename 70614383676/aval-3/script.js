// 1. Dados dos Produtos (Posts)
const produtos = [
    {
        id: 1,
        vendedor: "@PC_Gamer_Brasil",
        avatar: "https://cdn.dooca.store/1841/products/pc-gamer-monstro-site-1.jpg?v=1690387165",
        imagem: "https://images.tcdn.com.br/img/img_prod/1103247/pc_gamer_intel_i9_rtx_4090_64gb_ddr5_2tb_m_2_75_2_66a7af6d87089adf7c250f57b43191c0.jpg",
        descricao: "Desktop de Alta Performance: Intel i9, RTX 4090 e 64GB de RAM. A máquina dos seus sonhos para 4K! Edição limitada.",
        preco: 15500,
        hashtags: ["DesktopGamer", "RTX4090", "PCMasterRace"],
        curtidas: 15,
        linkCompra: "#"
    },
    {
        id: 2,
        vendedor: "@Ofertas_Tech",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45bdvzaUEjvgngGDaWT-YA1SoGB9byzEo-g&s",
        imagem: "https://t2.tudocdn.net/720338?w=1000&fit=clip",
        descricao: "Monitor Ultrawide curvo de 34 polegadas. Aumente sua produtividade e imersão nos jogos. Taxa de 144Hz!",
        preco: 2999,
        hashtags: ["MonitorUltrawide", "144Hz", "SetupGamer"],
        curtidas: 8,
        linkCompra: "#"
    },
    // Adicione mais produtos aqui
];

const postsContainer = document.getElementById('posts-container');

// 2. Função para criar o HTML de um post
function criarPostHTML(post) {
    const hashtagsHTML = post.hashtags.map(tag => `<span class="hashtag">#${tag}</span>`).join(' ');

    return `
        <article class="post" data-post-id="${post.id}">
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.vendedor}" class="avatar">
                <span class="nome-vendedor">${post.vendedor}</span>
            </div>
            <img src="${post.imagem}" alt="Produto: ${post.descricao}" class="post-image">
            <div class="post-actions">
                <button class="btn-like" data-id="${post.id}">❤️ ${post.curtidas}</button>
                <a href="${post.linkCompra}" target="_blank" class="btn-comprar" rel="noopener noreferrer">
                    🛒 Comprar (R$ ${post.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })})
                </a>
            </div>
            <p class="post-descricao">
                ${post.descricao} ${hashtagsHTML}
            </p>
        </article>
    `;
}

// 3. Função para renderizar todos os posts
function renderizarPosts() {
    postsContainer.innerHTML = ''; // Limpa o conteúdo anterior
    produtos.forEach(post => {
        postsContainer.innerHTML += criarPostHTML(post);
    });
    adicionarEventosDeCurtida();
}

// 4. Função para adicionar interatividade de Curtir
function adicionarEventosDeCurtida() {
    const botoesCurtir = document.querySelectorAll('.btn-like');

    botoesCurtir.forEach(botao => {
        botao.addEventListener('click', function() {
            const postId = parseInt(this.getAttribute('data-id'));
            const post = produtos.find(p => p.id === postId);

            if (post) {
                // Simples incremento (poderia ser mais complexo para evitar múltiplas curtidas)
                post.curtidas++;
                this.textContent = `❤️ ${post.curtidas}`;
                // Adiciona um efeito visual de feedback
                this.style.backgroundColor = '#ffcccc';
                setTimeout(() => {
                    this.style.backgroundColor = '#f1f1f1';
                }, 100);
            }
        });
    });
}

// 5. Inicia o feed
renderizarPosts();