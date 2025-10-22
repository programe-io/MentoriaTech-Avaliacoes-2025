// Arquivo: app.js

// 1. Definição da Estrutura de Dados do Carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinhoCompras')) || [];

// Função auxiliar para salvar o carrinho no LocalStorage
function salvarCarrinho() {
    localStorage.setItem('carrinhoCompras', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

// 2. Função para Adicionar Produto ao Carrinho
function adicionarAoCarrinho(e) {
    // Previne o comportamento padrão do botão (se for um form)
    e.preventDefault(); 

    // O elemento "produto-card" pai contém todas as informações necessárias
    const card = e.target.closest('.produto-card');
    
    // Simula a coleta de dados do produto a partir do HTML
    // Em um sistema real, você usaria IDs de banco de dados
    const idProduto = card.getAttribute('data-id') || Date.now(); // Usa um data-id ou timestamp como fallback
    const nome = card.querySelector('h3').innerText;
    const precoTexto = card.querySelector('.preco, .preco-promocao').innerText.replace('R$', '').replace(',', '.').trim();
    const preco = parseFloat(precoTexto);
    const imagem = card.querySelector('img').src;

    if (isNaN(preco)) {
        console.error("Preço inválido para o produto:", nome);
        alert("Não foi possível adicionar o produto. Preço inválido.");
        return;
    }

    // Verifica se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === idProduto);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            id: idProduto,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1
        });
    }

    salvarCarrinho();
    alert(`${nome} adicionado ao carrinho!`);
}

// 3. Função para Atualizar o Contador de Itens no Header
function atualizarContadorCarrinho() {
    const contadorElemento = document.querySelector('.icones-usuario a[title="Meu Carrinho"]');
    
    // Calcula o total de itens (somando a quantidade de cada produto)
    const totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);

    // Cria/Atualiza um span para exibir o número de itens
    let spanContador = contadorElemento.querySelector('.carrinho-contador');
    if (!spanContador) {
        spanContador = document.createElement('span');
        spanContador.classList.add('carrinho-contador');
        contadorElemento.appendChild(spanContador);
    }
    
    spanContador.textContent = totalItens;
    
    // Adicionar um CSS rápido para o badge (necessita de CSS adicional para ficar bonito)
    if (totalItens > 0) {
        spanContador.style.display = 'inline-flex';
        // (No CSS: background: var(--cor-destaque); color: white; border-radius: 50%; padding: 2px 6px; font-size: 0.7em; position: absolute; top: -5px; right: -5px;)
    } else {
        spanContador.style.display = 'none';
    }
}

// 4. Função de Inicialização (Adicionar Event Listeners)
function inicializarEventos() {
    // 4.1. Adiciona o evento de clique a todos os botões 'Adicionar ao Carrinho'
    const botoesAdicionar = document.querySelectorAll('.adicionar-carrinho');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    // 4.2. Carrega o contador na inicialização da página
    atualizarContadorCarrinho();

    // 4.3. Exemplo de Carrossel Simples para o Banner (Requer estrutura HTML extra)
    // Se fosse um carrossel, a lógica de mudar a imagem ou slides entraria aqui.
    // Ex: setInterval(proximoSlide, 5000); 
}

// Iniciar a aplicação quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', inicializarEventos);

// -------------------------------------------------------------------
// NOTA: Para uma página de "carrinho.html", você precisaria de:
// 1. Uma função para carregar e renderizar os itens do 'carrinho' na página.
// 2. Funções para aumentar/diminuir a quantidade e remover itens (que chamariam salvarCarrinho()).
// 3. Uma função para calcular o subtotal e o total final.
// -------------------------------------------------------------------