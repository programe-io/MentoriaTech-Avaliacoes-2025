// Dados do cardápio com imagens específicas para cada prato
const cardapio = [
    {
        id: 1,
        nome: "Panelada",
        descricao: "Prato típico nordestino feito com bucho de boi, temperos e legumes.",
        preco: "R$ 35,90",
        categoria: "pratos",
        imagem: "https://images.unsplash.com/photo-1565299585323-38174c9b65d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        popular: true
    },
    {
        id: 2,
        nome: "Baião de Dois",
        descricao: "Arroz com feijão-de-corda, queijo coalho, carne seca e temperos verdes.",
        preco: "R$ 28,50",
        categoria: "pratos",
        imagem: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
        id: 3,
        nome: "Batata Frita Recheada",
        descricao: "Batata frita crocante recheada com queijo cheddar e bacon.",
        preco: "R$ 22,90",
        categoria: "entradas",
        imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        novo: true
    },
    {
        id: 4,
        nome: "Salada",
        descricao: "Mix de folhas verdes, tomate, cenoura ralada e molho à sua escolha.",
        preco: "R$ 18,90",
        categoria: "acompanhamentos",
        imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        saudavel: true
    },
    {
        id: 5,
        nome: "Picanha",
        descricao: "Corte nobre de carne bovina, grelhada e servida com farofa e vinagrete.",
        preco: "R$ 59,90",
        categoria: "pratos",
        imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        popular: true
    },
    {
        id: 6,
        nome: "Hambúrguer",
        descricao: "Pão artesanal, hambúrguer 180g, queijo, alface, tomate e molho especial.",
        preco: "R$ 24,90",
        categoria: "pratos",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        novo: true
    },
    {
        id: 7,
        nome: "Caldo de Ovo",
        descricao: "Caldo cremoso feito com ovos, temperos verdes e um toque especial.",
        preco: "R$ 15,90",
        categoria: "entradas",
        imagem: "https://images.unsplash.com/photo-1569718212165-3a0fa4eefb7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
];

// Função para criar o card de um item do cardápio
function criarCardItem(item) {
    let badge = '';
    if (item.popular) {
        badge = '<span class="badge-popular">Mais Popular</span>';
    } else if (item.novo) {
        badge = '<span class="badge-novo">Novo</span>';
    } else if (item.saudavel) {
        badge = '<span class="badge-saudavel">Saudável</span>';
    }

    return `
        <div class="item-cardapio" data-categoria="${item.categoria}">
            ${badge}
            <img src="${item.imagem}" alt="${item.nome}" class="item-imagem" loading="lazy">
            <div class="item-info">
                <h3 class="item-titulo">${item.nome}</h3>
                <p class="item-descricao">${item.descricao}</p>
                <p class="item-preco">${item.preco}</p>
                <span class="item-categoria">${obterNomeCategoria(item.categoria)}</span>
                <a href="#" class="btn-pedir" data-item="${item.id}">
                    <span class="btn-icon">🛒</span>
                    <span class="btn-text">Fazer Pedido</span>
                </a>
            </div>
        </div>
    `;
}

// Função para obter o nome completo da categoria
function obterNomeCategoria(categoria) {
    const categorias = {
        "pratos": "Prato Principal",
        "entradas": "Entrada",
        "acompanhamentos": "Acompanhamento"
    };
    return categorias[categoria] || categoria;
}

// Função para atualizar contadores
function atualizarContadores() {
    const totalPratos = cardapio.length;
    const pratosPrincipais = cardapio.filter(item => item.categoria === 'pratos').length;
    const entradas = cardapio.filter(item => item.categoria === 'entradas').length;
    const acompanhamentos = cardapio.filter(item => item.categoria === 'acompanhamentos').length;

    document.getElementById('totalPratos').textContent = totalPratos;
    document.getElementById('contadorTodas').textContent = totalPratos;
    document.getElementById('contadorPratos').textContent = pratosPrincipais;
    document.getElementById('contadorEntradas').textContent = entradas;
    document.getElementById('contadorAcompanhamentos').textContent = acompanhamentos;
}

// Função para exibir os itens do cardápio
function exibirCardapio(categoria = "todas") {
    const container = document.querySelector('.cardapio-container');
    container.innerHTML = '';
    
    const itensFiltrados = categoria === "todas" 
        ? cardapio 
        : cardapio.filter(item => item.categoria === categoria);
    
    if (itensFiltrados.length === 0) {
        container.innerHTML = '<p class="sem-itens">Nenhum item encontrado nesta categoria.</p>';
        return;
    }
    
    itensFiltrados.forEach(item => {
        container.innerHTML += criarCardItem(item);
    });
    
    // Ad