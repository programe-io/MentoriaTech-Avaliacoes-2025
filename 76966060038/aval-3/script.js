// Variáveis Globais para o Carrinho
let carrinho = []; // Array que armazenará os produtos adicionados
let totalItens = 0; // Contador de itens no carrinho

// Seleciona o elemento que exibe a contagem do carrinho no cabeçalho
const carrinhoContador = document.querySelector('.carrinho a');

/**
 * Função principal para adicionar um produto ao carrinho.
 * @param {string} nome Nome do produto.
 * @param {number} preco Preço do produto.
 */
function adicionarAoCarrinho(nome, preco) {
    // 1. Cria um objeto para o novo item
    const novoItem = {
        nome: nome,
        preco: preco,
        quantidade: 1
    };

    // 2. Adiciona o item ao array do carrinho
    carrinho.push(novoItem);

    // 3. Atualiza a contagem total de itens
    totalItens += 1;

    // 4. Atualiza a interface do usuário (UI)
    atualizarCarrinhoUI();

    // 5. Feedback para o usuário
    alert(`"${nome}" foi adicionado ao seu carrinho!`);

    // (Em um sistema real, você salvaria o carrinho no Local Storage ou em um servidor)
    console.log('Carrinho atual:', carrinho);
}

/**
 * Função para atualizar o texto do carrinho no cabeçalho.
 */
function atualizarCarrinhoUI() {
    // Atualiza o texto do link do carrinho com a nova contagem
    carrinhoContador.innerHTML = `🛒 Carrinho (${totalItens})`;
}

/**
 * Função que configura os "ouvintes de eventos" (event listeners)
 * para todos os botões "Adicionar ao Carrinho".
 */
function configurarBotoesComprar() {
    // 1. Seleciona todos os botões com a classe 'btn-comprar'
    const botoesComprar = document.querySelectorAll('.btn-comprar');

    // 2. Itera sobre cada botão encontrado
    botoesComprar.forEach(botao => {
        // Adiciona um "ouvinte" de clique a cada botão
        botao.addEventListener('click', (evento) => {
            // Previne a ação padrão do botão (se for um formulário, por exemplo)
            evento.preventDefault();

            // Encontra o card do produto pai (o elemento com a classe 'produto-card')
            const card = botao.closest('.produto-card');

            // Extrai as informações do produto a partir dos elementos HTML dentro do card
            const nomeProduto = card.querySelector('h3').textContent;
            
            // Pega o texto do preço (ex: "R$ 1.999,00")
            const precoTexto = card.querySelector('.preco').textContent;