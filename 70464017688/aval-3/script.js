// 1. Dados das Pizzas
const pizzas = [
    { id: 1, nome: "Calabresa Clássica", descricao: "Molho, muçarela, calabresa e cebola.", preco: 35.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bdWwvkeCq1n33iMte5-wGvFi-Mqmef1Zew&s" },
    { id: 2, nome: "Marguerita Especial", descricao: "Molho, muçarela, tomate, manjericão e azeite.", preco: 40.00, imagem: "https://media-cdn.tripadvisor.com/media/photo-s/16/a8/0b/9b/marguerita-especial-molho.jpg" },
    { id: 3, nome: "Frango com Catupiry", descricao: "Molho, muçarela, frango desfiado e catupiry.", preco: 42.50, imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/ada34cd2101afafaba465aad112ee3c1_XL.jpg" },
    // Adicione mais pizzas aqui
];

// 2. Variáveis de Estado
let carrinho = [];

// 3. Seletores DOM
const feedDePizzas = document.getElementById('feedDePizzas');
const btnCarrinho = document.getElementById('btnCarrinho');

// 4. Função de Renderização dos Cards
function renderizarPizzas() {
    pizzas.forEach(pizza => {
        // Cria a estrutura do card (post)
        const card = document.createElement('div');
        card.classList.add('pizza-card');
        
        // Define o conteúdo HTML interno
        card.innerHTML = `
            <img src="${pizza.imagem}" alt="Imagem da ${pizza.nome}">
            <div class="pizza-info">
                <h3>${pizza.nome}</h3>
                <p>${pizza.descricao}</p>
                <p class="preco">R$ ${pizza.preco.toFixed(2).replace('.', ',')}</p>
                <button class="btn-comprar" data-id="${pizza.id}">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
        
        // Adiciona o card ao feed
        feedDePizzas.appendChild(card);
    });

    // Adiciona o event listener APÓS criar todos os botões
    document.querySelectorAll('.btn-comprar').forEach(button => {
        button.addEventListener('click', adicionarAoCarrinho);
    });
}

// 5. Função para Adicionar ao Carrinho
function adicionarAoCarrinho(evento) {
    const pizzaId = parseInt(evento.target.getAttribute('data-id'));
    const pizzaSelecionada = pizzas.find(p => p.id === pizzaId);
    
    if (pizzaSelecionada) {
        carrinho.push(pizzaSelecionada);
        // Atualiza a interface (contador do carrinho)
        atualizarCarrinhoUI();
        alert(`${pizzaSelecionada.nome} adicionada ao seu carrinho!`);
    }
}

// 6. Função para Atualizar a Interface do Carrinho
function atualizarCarrinhoUI() {
    btnCarrinho.textContent = `🛒 Carrinho (${carrinho.length})`;
}

// 7. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarPizzas();
    atualizarCarrinhoUI();

    // Evento para o botão Carrinho (pode abrir um modal ou levar para outra página)
    btnCarrinho.addEventListener('click', () => {
        if (carrinho.length > 0) {
            console.log("Itens no carrinho:", carrinho);
            alert(`Você tem ${carrinho.length} itens no carrinho! Total: R$ ${carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2).replace('.', ',')}`);
        } else {
            alert("Seu carrinho está vazio!");
        }
    });
});