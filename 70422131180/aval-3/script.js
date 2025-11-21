// Dados simulados das chuteiras
const chuteiras = [
    {
        id: 1,
        usuario: "SuperChuteirasBR",
        fotoPerfil: "https://shoxstore.com.br/media/catalog/product/a/d/adxsp1fgcc_1.png", // (Usaremos a cor do CSS por enquanto)
        imagem: "https://shoxstore.com.br/media/catalog/product/a/d/adxsp1fgcc_1.png", // Substitua por URLs de imagem reais
        descricao: "🔥 **Chuteira SpeedMax Vermelha!** Velocidade máxima em campo. Edição limitada! Tamanhos 38 a 43. #futebol #chuteiranova",
        preco: "R$ 499,90",
        curtidas: 150,
        curtido: false
    },
    {
        id: 2,
        usuario: "BalaNaRedeOficial",
        fotoPerfil: "user-2.jpg",
        imagem: "https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/chuteira-nike-futsal-beco-2-masculina-646433-610-6615ab71e0117.jpg", // Substitua por URLs de imagem reais
        descricao: "💎 **Chuteira ProControl Azul** - O controle que você precisa. Conforto e precisão garantidos. Peça a sua! #campo #society",
        preco: "R$ 379,50",
        curtidas: 85,
        curtido: true
    }
];

const feed = document.querySelector('.feed');

/**
 * Função para renderizar um post individual no feed.
 * @param {object} post - O objeto de dados do post.
 */
function renderPost(post) {
    const postElement = document.createElement('article');
    postElement.classList.add('post');
    postElement.setAttribute('data-id', post.id);

    postElement.innerHTML = `
        <div class="post-header">
            <div class="perfil-foto"></div>
            <div class="usuario-info">
                <strong>${post.usuario}</strong>
                <span> • há 1h</span>
            </div>
        </div>

        <div class="post-imagem">
            <img src="${post.imagem}" alt="Imagem da Chuteira ${post.id}" onerror="this.src=''"/>
        </div>

        <div class="post-acoes">
            <div>
                <button class="acao-botao like-btn ${post.curtido ? 'curtido' : ''}">
                    <i class="${post.curtido ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="acao-botao"><i class="far fa-comment"></i></button>
                <button class="acao-botao"><i class="far fa-share-square"></i></button>
            </div>
            <span>${post.curtidas} curtidas</span>
        </div>

        <div class="post-detalhes">
            <p><strong>${post.usuario}</strong> ${post.descricao}</p>
            <p class="preco">${post.preco}</p>
            <button class="botao-comprar" onclick="comprar(${post.id})">COMPRAR AGORA</button>
        </div>
    `;

    feed.appendChild(postElement);
}

// Renderiza todos os posts
chuteiras.forEach(renderPost);