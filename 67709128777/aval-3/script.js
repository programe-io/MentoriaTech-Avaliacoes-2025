<script>
    // 1. DADOS DOS PRODUTOS (Simulando um banco de dados)
    const produtosPerfumaria = [
        {
            id: 1,
            nome: "Aurora Boreal",
            descricao: "Notas Cítricas e Amadeiradas",
            preco: 389.00,
            // Substitua estas URLs por caminhos para suas imagens reais (ex: 'img/aurora.jpg')
            urlImagem: "https://via.placeholder.com/300x250/D2B48C/A0522D?text=Aurora+Boreal" 
        },
        {
            id: 2,
            nome: "Fóssil Íntimo",
            descricao: "Aroma de Couro e Baunilha",
            preco: 450.00,
            urlImagem: "https://via.placeholder.com/300x250/A0522D/FFFFFF?text=Fossil+Intimo"
        },
        {
            id: 3,
            nome: "Névoa Noturna",
            descricao: "Inspirado em Especiarias Orientais",
            preco: 320.00,
            urlImagem: "https://via.placeholder.com/300x250/E6E6FA/4B0082?text=Nevoa+Noturna"
        },
        {
            id: 4,
            nome: "Jardim Secreto",
            descricao: "Essência Floral Delicada",
            preco: 299.90,
            urlImagem: "https://via.placeholder.com/300x250/90EE90/006400?text=Jardim+Secreto"
        }
    ];

    // Array para simular o carrinho (para feedback de interação)
    let carrinho = []; 

    // 2. FUNÇÃO PARA RENDERIZAR OS PRODUTOS NO GRID
    function renderizarProdutos() {
        const container = document.querySelector('.produtos-grid');
        if (!container) return;
        
        container.innerHTML = ''; // Limpa o grid

        produtosPerfumaria.forEach(produto => {
            // Cria o elemento ARTICLE (tag semântica obrigatória)
            const article = document.createElement('article');
            article.className = 'produto-card';
            article.dataset.id = produto.id; 

            // Estrutura HTML, incluindo a tag IMG com a URL da imagem
            article.innerHTML = `
                <img src="${produto.urlImagem}" alt="Foto do perfume ${produto.nome}">
                <h4>${produto.nome}</h4>
                <p>${produto.descricao}</p>
                <span class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
                <a href="#" class="btn-comprar btn-adicionar" data-id="${produto.id}">Adicionar ao Carrinho</a>
            `;
            
            container.appendChild(article);
        });
        
        // Adiciona o listener para os novos botões de compra
        document.querySelectorAll('.btn-adicionar').forEach(button => {
            button.addEventListener('click', adicionarAoCarrinho);
        });
    }
    
    // 3. FUNÇÃO PARA ADICIONAR AO CARRINHO (Feedback)
    function adicionarAoCarrinho(event) {
        event.preventDefault();
        
        const idProduto = parseInt(event.currentTarget.dataset.id);
        const produtoSelecionado = produtosPerfumaria.find(p => p.id === idProduto);

        if (produtoSelecionado) {
            // Simula a adição ao carrinho
            // carrinho.push(produtoSelecionado); 
            
            // Feedback Visual
            const botao = event.currentTarget;
            const textoOriginal = botao.textContent;
            
            botao.textContent = 'Adicionado!';
            botao.style.backgroundColor = '#2ecc71'; // Verde de sucesso
            botao.disabled = true;

            setTimeout(() => {
                botao.textContent = textoOriginal;
                botao.style.backgroundColor = 'var(--cor-secundaria)'; // Volta à cor original
                botao.disabled = false;
            }, 1500);
        }
    }

    // 4. INICIALIZAÇÃO: Executa a renderização assim que o HTML estiver pronto
    document.addEventListener('DOMContentLoaded', () => {
        renderizarProdutos();
    });

</script>