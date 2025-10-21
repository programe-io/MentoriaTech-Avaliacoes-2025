/**
 * =======================================================
 * JAVASCRIPT PARA A LOJA DE CHUTEIRAS (CHUTEIRA PRIME)
 * =======================================================
 *
 * Funcionalidades incluídas:
 * 1. Sistema de Carrinho de Compras (Adicionar ao Carrinho).
 * 2. Gestão de Destaque (Banner Hero) ou Galeria de Produtos.
 *
 */

// Array simples para simular o carrinho de compras
let carrinho = [];
let totalCarrinho = 0;

// =======================================================
// 1. FUNCIONALIDADE DO CARRINHO DE COMPRAS
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1.1. Adiciona um listener em todos os botões "Adicionar ao Carrinho"
    const botoesAdicionar = document.querySelectorAll('.produto button');
    
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', adicionarAoCarrinho);
    });

    // 1.2. Inicializa a funcionalidade de slider ou destaque (veja a seção 2)
    inicializarDestaque();
});

/**
 * Função responsável por adicionar um produto ao carrinho.
 * @param {Event} event - O evento de clique.
 */
function adicionarAoCarrinho(event) {
    // Pega o elemento pai do botão (o <article class="produto">)
    const produtoElement = event.target.closest('.produto');

    // Extrai as informações do produto
    const nome = produtoElement.querySelector('h3').innerText;
    
    // Pega o preço (ex: "Preço: R$ 899,90") e limpa para obter um número
    const precoTexto = produtoElement.querySelector('p').innerText;
    const preco = parseFloat(precoTexto.replace('Preço: R$', '').replace(',', '.').trim());

    // Cria um objeto de produto
    const item = {
        nome: nome,
        preco: preco,
        quantidade: 1
    };

    // Adiciona ao carrinho (Simulação simples)
    carrinho.push(item);
    totalCarrinho += preco;

    // Feedback para o usuário
    alert(`"${nome}" adicionado ao carrinho! \nTotal atual: R$ ${totalCarrinho.toFixed(2).replace('.', ',')}`);

    // Chamada a uma função fictícia para atualizar a interface do carrinho
    atualizarInterfaceCarrinho(item);
}

/**
 * Função fictícia para atualizar a interface (ex: um ícone de carrinho no header).
 * Em um site real, você precisaria de um elemento HTML para exibir isso.
 * @param {Object} itemAdicionado - O item que foi adicionado.
 */
function atualizarInterfaceCarrinho(itemAdicionado) {
    console.log(`Carrinho atualizado: ${carrinho.length} itens.`);
    
    // Exemplo: Atualiza um elemento (se você tivesse um <span> com id="contador-carrinho")
    // const contador = document.getElementById('contador-carrinho');
    // if (contador) {
    //     contador.innerText = carrinho.length;
    // }
}

// =======================================================
// 2. FUNCIONALIDADE DO SLIDER/DESTAQUE (HERO)
//    - Simula um carrossel de banners simples.
// =======================================================

// Apenas para fins de demonstração: Se o seu HTML tiver vários banners, 
// esta função os faria alternar. Como só temos um, vamos simular uma ação.

function inicializarDestaque() {
    const heroButton = document.querySelector('.hero button');

    if (heroButton) {
        heroButton.addEventListener('click', () => {
            // Ação ao clicar no botão do banner: Rola a tela para a seção de produtos.
            const produtosSection = document.getElementById('produtos');
            if (produtosSection) {
                produtosSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Código fictício de carrossel se houvesse mais de um banner:
    // const banners = document.querySelectorAll('.banner-item');
    // let bannerIndex = 0;
    // setInterval(() => {
    //     bannerIndex = (bannerIndex + 1) % banners.length;
    //     // Lógica para mostrar o banner[bannerIndex]
    // }, 5000); 
}