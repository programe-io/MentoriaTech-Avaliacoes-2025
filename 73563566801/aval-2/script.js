// =========================================================
// 1. DADOS DOS PRODUTOS DE EQUINOS (HENRIQUE CACHORRO)
// =========================================================
const produtos = [
    { 
        id: 1, 
        nome: "Sela Australiana Premium", 
        categoria: "Selaria", 
        preco: 899.00, 
        descricao: "Couro legítimo, ideal para longas cavalgadas." 
        // imagem: "imagens/sela-australiana.jpg"
    },
    { 
        id: 2, 
        nome: "Ração Balanceada 25kg", 
        categoria: "Nutrição", 
        preco: 120.50, 
        descricao: "Fórmula completa para alta performance e manutenção." 
        // imagem: "imagens/racao-equinos.jpg"
    },
    { 
        id: 3, 
        nome: "Kit Ferragens Profissional", 
        categoria: "Ferragens", 
        preco: 245.00, 
        descricao: "Martelo, turquês e grosa de alta resistência e durabilidade." 
        // imagem: "imagens/kit-ferragens.jpg"
    },
    { 
        id: 4, 
        nome: "Cabresto de Couro Trançado", 
        categoria: "Acessórios", 
        preco: 65.90, 
        descricao: "Elegância e segurança no manejo diário do seu equino." 
        // imagem: "imagens/cabresto-couro.jpg"
    },
    { 
        id: 5, 
        nome: "Manta para Sela Neoprene", 
        categoria: "Selaria", 
        preco: 180.00, 
        descricao: "Amortecimento ideal e ventilação para o dorso do animal." 
        // imagem: "imagens/manta-neoprene.jpg"
    },
    { 
        id: 6, 
        nome: "Suplemento Vitamínico (1kg)", 
        categoria: "Nutrição", 
        preco: 75.00, 
        descricao: "Complexo vitamínico para reforço imunológico e pelagem." 
        // imagem: "imagens/suplemento-vitamina.jpg"
    },
];

// =========================================================
// 2. FUNÇÃO PARA RENDERIZAR (EXIBIR) OS PRODUTOS NO HTML
// =========================================================

// Array que armazenará os itens do carrinho
let carrinho = [];

function renderizarProdutos() {
    const containerProdutos = document.getElementById('produtos');
    
    // Limpa o conteúdo estático no HTML para injetar o conteúdo dinâmico do JS
    containerProdutos.innerHTML = '<h2>Produtos em Destaque</h2>'; 

    produtos.forEach(produto => {
        // Cria o elemento <article class="produto">
        const produtoElemento = document.createElement('article');
        produtoElemento.classList.add('produto');
        
        // Monta o HTML interno do card do produto
        produtoElemento.innerHTML = `
            <img src="https://via.placeholder.com/250x250?text=${produto.nome.replace(/\s/g, '+')}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>${produto.descricao}</p>
            <p><strong>Preço: R$ ${produto.preco.toFixed(2).replace('.', ',')}</strong></p>
            <button data-produto-id="${produto.id}">Adicionar ao Carrinho</button>
        `;

        // Adiciona o novo card ao container principal
        containerProdutos.appendChild(produtoElemento);
    });
    
    // Chama a função para adicionar os ouvintes de evento aos novos botões
    adicionarEventosCarrinho();
}


// =========================================================
// 3. FUNCIONALIDADES DO CARRINHO DE COMPRAS
// =========================================================

function adicionarAoCarrinho(produtoId)
