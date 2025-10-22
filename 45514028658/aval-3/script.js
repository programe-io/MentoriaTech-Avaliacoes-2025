// Arquivo: app.js

// 1. Definição da Estrutura de Dados do Carrinho
// Tenta carregar o carrinho do localStorage ou inicializa um array vazio.
let carrinho = JSON.parse(localStorage.getItem('carrinhoCompras')) || [];

// Função auxiliar para salvar o carrinho no LocalStorage
function salvarCarrinho() {
    localStorage.setItem('carrinhoCompras', JSON.stringify(carrinho));
    atualizarContadorCarrinho(); // Atualiza o badge do carrinho após salvar
}

// 2. Função para Adicionar Produto ao Carrinho
function adicionarAoCarrinho(e) {
    // Evita que o botão execute uma ação padrão (como submeter um formulário)
    e.preventDefault(); 

    // Encontra o elemento 'produto-card' pai para coletar os dados do produto
    const card = e.target.closest('.produto-card');
    
    // Coleta de dados do produto a partir do HTML
    const idProduto = card.getAttribute('data-id');
    const nome = card.querySelector('h3').innerText;
    
    // Pega o preço (pode ser o preço normal ou o promocional)
    const precoElement = card.querySelector('.preco-promocao') || card.querySelector('.preco');
    const precoTexto = precoElement.innerText.replace('R$', '').replace(',', '.').trim();
    const preco = parseFloat(precoTexto);
    const imagem = card.querySelector('img').src;

    if (!idProduto || isNaN(preco)) {
        console.error("Dados do produto incompletos ou inválidos.");
        alert("Não foi possível adicionar o produto.");
        return;
    }

    // Verifica se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === idProduto);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        // Adiciona o novo produto ao array
        carrinho.push({
            id: idProduto,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1
        });
    }

    salvarCarrinho();
    
    // Feedback visual simples
    alert(`${nome} adicionado ao carrinho! Quantidade: ${carrinho.find(item => item.id === idProduto).quantidade}`);
}

// 3. Função para Atualizar o Contador de Itens no Header
function atualizarContadorCarrinho() {
    // Seleciona o link do carrinho no cabeçalho
    const carrinhoLink = document.querySelector('.icones-usuario a[title="Meu Carrinho"]');
    
    // Calcula o total de itens (somando a quantidade de cada produto)
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    // Encontra ou cria o elemento (badge) para mostrar o número
    let spanContador = carrinhoLink.querySelector('.carrinho-contador');
    if (!spanContador) {
        spanContador = document.createElement('span');
        spanContador.classList.add('carrinho-contador');
        spanContador.style.cssText = `
            background: var(--cor-destaque);
            color: white;
            border-radius: 50%;
            padding: 2px 6px;
            font-size: 0.7em;
            position: absolute;
            top: -5px;
            right: -5px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-width: 20px;
            height: 20px;
        `; // CSS em linha para o badge (idealmente, estaria no styles.css)

        carrinhoLink.style.position = 'relative'; // Garante que o span fique posicionado corretamente
        carrinhoLink.appendChild(spanContador);
    }
    
    spanContador.textContent = totalItens;
    
    // Oculta o contador se o carrinho estiver vazio
    spanContador.style.display = totalItens > 0 ? 'inline-flex' : 'none';
}

// 4. Função para Interação do Filtro de Preço (ASIDE)
function configurarFiltroPreco() {
    const slider = document.getElementById('slider-preco');
    const valorSpan = document.getElementById('valor-preco');

    if (slider && valorSpan) {
        // Atualiza o texto do valor sempre que o slider for movido
        slider.addEventListener('input', function() {
            valorSpan.textContent = this.value;
        });

        // Opcional: Para aplicar o filtro ao soltar o mouse/tocar
        slider.addEventListener('change', function() {
            // Aqui entraria a lógica de filtragem real dos produtos na tela
            console.log(`Filtro de preço aplicado: Máximo R$ ${this.value}`);
        });
    }
}


// 5. Função de Inicialização (Adicionar Event Listeners)
function inicializarEventos() {
    // 5.1. Adiciona o evento de clique a todos os botões 'Adicionar ao Carrinho'
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    // 5.2. Configura a interatividade do filtro de preço
    configurarFiltroPreco();

    // 5.3. Carrega o contador na inicialização da página
    atualizarContadorCarrinho(); 
}

// Iniciar a aplicação quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', inicializarEventos);