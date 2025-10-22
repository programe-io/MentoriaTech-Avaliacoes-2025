/* ======================================================= */
/* ARQUIVO: script.js */
/* Este arquivo deve ser salvo na pasta 'js' */
/* ======================================================= */

// 1. Variável Global para o Carrinho (Simulação)
let carrinho = [];

// 2. Função para Adicionar Produto ao Carrinho
function adicionarAoCarrinho(produtoNome, preco) {
    // Converte o preço de string (R$ 79,90) para número (79.90) para cálculos
    const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.').trim());

    const item = {
        nome: produtoNome,
        preco: precoNumerico,
        quantidade: 1
    };

    // Adiciona o item ao array do carrinho
    carrinho.push(item);

    // Feedback visual para o usuário
    alert(`"${produtoNome}" adicionado ao carrinho! Total de itens: ${carrinho.length}`);
    
    // Opcional: Log no console para debug
    console.log("Carrinho Atualizado:", carrinho);
    console.log("Total Simulado:", calcularTotalCarrinho());
}

// Função para calcular o total do carrinho (opcional, para debug)
function calcularTotalCarrinho() {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
}


// 3. Função de Inicialização (Executada quando a página carrega)
document.addEventListener('DOMContentLoaded', () => {
    
    // 3.1. Ligar a função 'adicionarAoCarrinho' aos botões
    const botoesComprar = document.querySelectorAll('.botao-comprar');
    
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault(); // Impede o link de navegar para '#'

            // Pega o elemento pai mais próximo que contém os dados do produto
            const produtoDiv = botao.closest('.produto');

            // Extrai as informações necessárias
            const nome = produtoDiv.querySelector('h3').textContent;
            const preco = produtoDiv.querySelector('.preco').textContent;

            adicionarAoCarrinho(nome, preco);
        });
    });

    // 3.2. Implementação do Menu Responsivo (Mobile)
    
    // NOTA: Para este exemplo simples, vamos focar na interação básica.
    // O CSS que você tem já trata da aparência. 
    
    // Se o seu CSS usa classes como 'menu-aberto' para mostrar/esconder o menu,
    // você precisaria de um ícone (como um 'hamburguer') no HTML e a seguinte lógica:
    
    /* const navUl = document.querySelector('nav ul'); 
    
    // Supondo que você tenha um botão com ID 'menu-toggle' no seu HTML:
    const menuToggle = document.getElementById('menu-toggle'); 
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('menu-aberto');
        });
    }
    */
});