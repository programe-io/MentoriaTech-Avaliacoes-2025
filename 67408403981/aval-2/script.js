// =================================================================
// 1. Dados Simulados de Produtos (Simula um 'backend' ou API)
// =================================================================
const produtos = [
    { id: 1, nome: "Flor de Jasmim", preco: 199.90, categoria: "femininos", descricao: "Fragrância floral e delicada.", imagem: "caminho_img_jasmim.jpg" },
    { id: 2, nome: "Cítrico Intenso", preco: 249.90, categoria: "masculinos", descricao: "Notas cítricas e amadeiradas.", imagem: "caminho_img_citrico.jpg" },
    { id: 3, nome: "Kit Essências Luxo", preco: 399.90, categoria: "kits", descricao: "Miniaturas exclusivas para coleção.", imagem: "caminho_img_kit.jpg" },
    { id: 4, nome: "Oceano Fresco", preco: 180.00, categoria: "masculinos", descricao: "Frescor aquático para o verão.", imagem: "caminho_img_oceano.jpg" }
];

let carrinho = []; // Array para armazenar os itens do carrinho

// =================================================================
// 2. Função para Renderizar os Produtos no HTML
// =================================================================

function renderizarProdutos() {
    const grid = document.querySelector('.produtos-grid');
    if (!grid) return; // Se a div não existir, encerra a função

    // Limpa qualquer conteúdo existente
    grid.innerHTML = '';

    produtos.forEach(produto => {
        // Cria o elemento de seção (o card do produto)
        const produtoElement = document.createElement('section');
        produtoElement.classList.add('produto');
        produtoElement.setAttribute('id', produto.categoria);

        // Gera o HTML interno do card
        produtoElement.innerHTML = `
            <h3>${produto.nome}</h3>
            <div style="height: 200px; background-color: #dcdcdc; display: flex; justify-content: center; align-items: center; border-radius: 5px; margin-bottom: 15px;">
                <p>IMAGEM</p>
            </div>
            <p>${produto.descricao}</p>
            <p><strong>R$ ${produto.preco.toFixed(2).replace('.', ',')}</strong></p>
            <button data-id="${produto.id}" class="btn-adicionar">Adicionar ao Carrinho</button>
        `;

        grid.appendChild(produtoElement);
    });

    // Adiciona o Listener de Eventos DEPOIS que os botões são criados
    document.querySelectorAll('.btn-adicionar').forEach(button => {
        button.addEventListener('click', adicionarAoCarrinho);
    });
}

// =================================================================
// 3. Função do Carrinho de Compras
// =================================================================

function adicionarAoCarrinho(event) {
    const produtoId = parseInt(event.target.dataset.id);
    const produtoSelecionado = produtos.find(p => p.id === produtoId);

    if (produtoSelecionado) {
        carrinho.push(produtoSelecionado);
        atualizarContadorCarrinho();
        mostrarNotificacao(produtoSelecionado.nome);
        console.log("Carrinho atual:", carrinho); // Para debug
    }
}

function atualizarContadorCarrinho() {
    // Simula a atualização de um ícone de carrinho
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = carrinho.length;
    }
}

// =================================================================
// 4. Função de Notificação (Feedback ao Usuário)
// =================================================================

function mostrarNotificacao(nomeProduto) {
    const notificacao = document.createElement('div');
    notificacao.classList.add('notificacao');
    notificacao.textContent = `${nomeProduto} adicionado ao carrinho!`;

    // Adiciona CSS simples diretamente para a notificação
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50; /* Verde */
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.5s;
    `;

    document.body.appendChild(notificacao);

    // Fade in
    setTimeout(() => {
        notificacao.style.opacity = 1;
    }, 10);

    // Fade out e remoção após 3 segundos
    setTimeout(() => {
        notificacao.style.opacity = 0;
        setTimeout(() => {
            notificacao.remove();
        }, 500); // Espera o fade out terminar
    }, 3000);
}

// =================================================================
// 5. Execução (Garante que o código roda após o HTML carregar)
// =================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderiza os produtos no grid
    renderizarProdutos();

    // 2. Exemplo: Adiciona validação simples ao formulário de contato
    const formContato = document.querySelector('#contato form');
    if (formContato) {
        formContato.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            if (!email.includes('@')) {
                e.preventDefault(); // Imp