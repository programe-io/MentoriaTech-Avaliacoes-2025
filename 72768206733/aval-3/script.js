/**
 * JavaScript para controle de quantidade, cálculo de preço e simulação de "Adicionar ao Carrinho".
 */

// Define o preço unitário do produto (deve ser o mesmo do HTML)
const precoUnitario = 299.90; 

// Seleciona os elementos necessários do HTML
const inputQuantidade = document.getElementById('quantity-input');
const totalElement = document.getElementById('total-price');
// O botão 'Comprar Agora' já deve ter a classe .buy-button
const btnComprar = document.querySelector('.buy-button'); 

// Função auxiliar para formatar o preço para o padrão BRL
function formatarBRL(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// 1. Função para atualizar o preço total com base na quantidade
function atualizarPrecoTotal() {
    let quantidade = parseInt(inputQuantidade.value);
    
    // Garante que a quantidade é pelo menos 1
    if (isNaN(quantidade) || quantidade < 1) {
        quantidade = 1;
        inputQuantidade.value = 1;
    }
    
    const total = precoUnitario * quantidade;
    // Atualiza o texto do elemento com o novo preço formatado
    totalElement.textContent = formatarBRL(total);
}

// 2. Função para alterar a quantidade ao clicar nos botões
function alterarQuantidade(delta) {
    let quantidadeAtual = parseInt(inputQuantidade.value);
    quantidadeAtual += delta;
    
    // Limite mínimo de 1
    if (quantidadeAtual < 1) {
        quantidadeAtual = 1;
    }
    
    inputQuantidade.value = quantidadeAtual;
    atualizarPrecoTotal();
}

// 3. Event Listeners (Ouvintes de Eventos)

// Ouvintes para os botões de incremento e decremento
document.getElementById('increment-btn').addEventListener('click', () => {
    alterarQuantidade(1);
});

document.getElementById('decrement-btn').addEventListener('click', () => {
    alterarQuantidade(-1);
});

// Ouvinte para a simulação de compra
btnComprar.addEventListener('click', (event) => {
    // Evita que o botão recarregue a página (se estiver dentro de um formulário)
    event.preventDefault(); 
    
    const quantidade = inputQuantidade.value;
    const precoFinal = totalElement.textContent;

    alert(`✅ ${quantidade} unidade(s) do Perfume adicionada(s) ao carrinho! \nTotal da Compra: ${precoFinal}`);
    
    // *Lógica real de carrinho e checkout seria implementada aqui.*
});

// Inicializa o cálculo do preço total quando a página carrega
document.addEventListener('DOMContentLoaded', atualizarPrecoTotal);