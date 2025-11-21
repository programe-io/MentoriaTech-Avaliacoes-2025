// Dados simulados das Joias (você pode carregar isso de uma API real futuramente)
const joiasPosts = [
    {
        id: 1,
        titulo: "Colar Coração de Esmeralda",
        imagemUrl: "https://coexistjoias.bwimg.com.br/coexistjoias/produtos/colar-power-coracao-esmeralda-15cts-e-topazio-ouro-18k-1725645252.636.jpg", // URL de imagem simulada
        descricao: "Elegante colar com pingente de coração em Esmeralda, perfeito para presentear.",
        preco: "R$ 1.590,00",
        curtidas: 15,
        vendido: false
    },
    {
        id: 2,
        titulo: "Anel Solitário Diamante Clássico",
        imagemUrl: "https://felipegomesjoias.com.br/wp-content/uploads/2023/01/anel-solitario-classic-sgriffatto-em-ouro-branco-18k.png", // URL de imagem simulada
        descricao: "O clássico anel de noivado em ouro branco e diamante solitário. Brilho eterno.",
        preco: "R$ 4.800,00",
        curtidas: 45,
        vendido: false
    },
    {
        id: 3,
        titulo: "Brincos Gota de Safira",
        imagemUrl: "https://cdn.awsli.com.br/2500x2500/2316/2316107/produto/309674202/img_7311-3uhrz8hy9b.jpg", // URL de imagem simulada
        descricao: "Brincos leves e sofisticados com Safira azul lapidada em formato de gota.",
        preco: "R$ 950,00",
        curtidas: 8,
        vendido: true
    }
];

const feedContainer = document.getElementById('feed-container');

// 1. Função para criar o elemento HTML de um post
function criarPostElemento(post) {
    // Cria a div principal do post
    const postDiv = document.createElement('article');
    postDiv.classList.add('post');
    postDiv.dataset.postId = post.id; // Adiciona um ID para manipulação

    // Cria a estrutura interna do post
    postDiv.innerHTML = `
        <img src="${post.imagemUrl}" alt="${post.titulo}" class="post-imagem">
        <div class="post-conteudo">
            <h2 class="post-titulo">${post.titulo}</h2>
            <p class="post-descricao">${post.descricao}</p>
            <p class="post-preco">${post.preco}</p>
            <div class="post-botoes">
                <button class="btn-curtir">❤️ Curtir (${post.curtidas})</button>
                <button class="btn-comprar" ${post.vendido ? 'disabled' : ''}>
                    ${post.vendido ? 'VENDIDO' : 'Comprar Agora'}
                </button>
            </div>
        </div>
    `;

    // Adiciona o evento de curtir
    const curtirBtn = postDiv.querySelector('.btn-curtir');
    curtirBtn.addEventListener('click', () => {
        // Simula a lógica de curtir
        post.curtidas++;
        curtirBtn.textContent = `❤️ Curtir (${post.curtidas})`;
        
        // Em um projeto real, você enviaria esta atualização para um servidor/API.
        console.log(`Post ${post.id} curtido! Total: ${post.curtidas}`);
    });

    // Adiciona o evento de comprar (apenas um alerta simples como exemplo)
    const comprarBtn = postDiv.querySelector('.btn-comprar');
    if (!post.vendido) {
        comprarBtn.addEventListener('click', () => {
            alert(`Você demonstrou interesse em "${post.titulo}". Entraremos em contato!`);
            // Lógica de vendas real (carrinho, formulário, etc.) viria aqui.
        });
    }

    return postDiv;
}

// 2. Função principal para renderizar o feed
function renderizarFeed() {
    feedContainer.innerHTML = ''; // Limpa o container antes de renderizar
    joiasPosts.forEach(post => {
        const postElemento = criarPostElemento(post);
        feedContainer.appendChild(postElemento);
    });
}

// Inicia a renderização do feed
renderizarFeed();

// Exemplo de como adicionar um novo post (simulado)
function adicionarNovoPost(titulo, descricao, preco, imagemUrl) {
    const novoId = joiasPosts.length + 1;
    const novoPost = {
        id: novoId,
        titulo: titulo,
        imagemUrl: imagemUrl,
        descricao: descricao,
        preco: preco,
        curtidas: 0,
        vendido: false
    };
    
    joiasPosts.unshift(novoPost); // Adiciona o novo post no início
    
    // Atualiza o feed na tela
    renderizarFeed();
}

// Descomente para testar a adição de um novo post:
/*
setTimeout(() => {
    adicionarNovoPost(
        "Pulseira de Pérolas Barrocas", 
        "Pulseira elegante feita com pérolas naturais barrocas e fecho em prata.", 
        "R$ 680,00", 
        "https://via.placeholder.com/800x400/F5F5DC/333333?text=Pulseira+Perolas"
    );
}, 3000); // Adiciona um post 3 segundos depois
*/