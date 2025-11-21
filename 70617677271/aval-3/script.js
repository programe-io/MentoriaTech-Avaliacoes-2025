document.addEventListener('DOMContentLoaded', () => {
    // 1. Dados de Exemplo para as Peças de Bicicleta
    const produtos = [
        {
            id: 1,
            titulo: "Pneu Mtb 29\" Tubeless Ready",
            usuario: "Ciclista_Pro_Vendas",
            imagemUrl: "https://images.tcdn.com.br/img/img_prod/758422/pneu_panaracer_mtb_driverpro_pr_29er_29x2_20_tubeless_preto_5089_1_1ead0817c166da3d7eff5950c873ea28.jpg",
            descricao: "Pneu de alta performance, pronto para tubeless, excelente aderência em terrenos mistos.",
            preco: 189.90,
            curtidas: 15,
            isLiked: false
        },
        {
            id: 2,
            titulo: "Selim Ergonômico de Competição",
            usuario: "EstoqueBikeBR",
            imagemUrl: "https://m.media-amazon.com/images/I/61ZbJqdg8hL.jpg",
            descricao: "Selim ultraleve, design ergonômico para longas distâncias, cor preta.",
            preco: 250.00,
            curtidas: 42,
            isLiked: true
        },
        {
            id: 3,
            titulo: "Conjunto de Freio a Disco Hidráulico",
            usuario: "VendasRapidasSP",
            imagemUrl: "https://m.media-amazon.com/images/I/61+5xqLAhmL._AC_UF894,1000_QL80_.jpg",
            descricao: "Potência de frenagem superior e controle preciso. Kit completo, dianteiro e traseiro.",
            preco: 599.00,
            curtidas: 8,
            isLiked: false
        }
    ];

    const feedContainer = document.querySelector('.feed-container');

    // 2. Função para Criar o HTML de um Cartão de Produto
    function criarCardProduto(produto) {
        // Formata o preço para o padrão brasileiro
        const precoFormatado = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return `
            <div class="produto-card" data-id="${produto.id}">
                <div class="produto-header">
                    ${produto.usuario}
                </div>
                <img src="${produto.imagemUrl}" alt="${produto.titulo}" class="produto-imagem">
                <div class="produto-body">
                    <h2>${produto.titulo}</h2>
                    <p class="produto-preco">${precoFormatado}</p>
                    <p class="produto-descricao">${produto.descricao}</p>
                </div>
                <div class="interacoes">
                    <button class="curtir-btn ${produto.isLiked ? 'liked' : ''}" data-id="${produto.id}">
                        ❤️ <span class="curtidas-contador">${produto.curtidas}</span> Curtidas
                    </button>
                    <button class="comprar-btn">
                        🛒 Comprar Agora
                    </button>
                </div>
            </div>
        `;
    }

    // 3. Renderiza o Feed Inicial
    function renderizarFeed() {
        feedContainer.innerHTML = produtos.map(criarCardProduto).join('');
        adicionarListeners();
    }

    // 4. Adiciona Interatividade
    function adicionarListeners() {
        document.querySelectorAll('.curtir-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const id = parseInt(event.currentTarget.getAttribute('data-id'));
                // Encontra o produto nos dados (simulando uma atualização)
                const produto = produtos.find(p => p.id === id);

                if (produto) {
                    produto.isLiked = !produto.isLiked;
                    
                    // Lógica de contagem de Curtidas
                    if (produto.isLiked) {
                        produto.curtidas++;
                        event.currentTarget.classList.add('liked');
                    } else {
                        produto.curtidas--;
                        event.currentTarget.classList.remove('liked');
                    }
                    
                    // Atualiza o contador no botão
                    const contador = event.currentTarget.querySelector('.curtidas-contador');
                    contador.textContent = produto.curtidas;
                    
                    // Notifica o usuário
                    console.log(`Produto ${id} - Curtidas: ${produto.curtidas}`);
                }
            });
        });

        document.querySelectorAll('.comprar-btn').forEach(button => {
            button.addEventListener('click', () => {
                alert("Redirecionando para a página de compra! (Simulação)");
            });
        });
    }

    // Inicia a aplicação
    renderizarFeed();
});