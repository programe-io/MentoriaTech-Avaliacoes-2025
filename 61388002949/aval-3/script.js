// Variável global para armazenar o número de itens no carrinho
let contagemCarrinho = 0;

/**
 * Função responsável por adicionar um item ao carrinho.
 * Esta função é chamada quando o usuário clica no botão "Adicionar ao Carrinho".
 */
function adicionarAoCarrinho() {
    // 1. Incrementa a contagem de itens
    contagemCarrinho = contagemCarrinho + 1;

    // 2. Localiza o elemento HTML onde o número será exibido (o <span> com o ID 'contador-carrinho')
    const elementoContador = document.getElementById('contador-carrinho');

    // 3. Atualiza o texto interno do <span> com o novo valor
    if (elementoContador) {
        elementoContador.textContent = contagemCarrinho;
    }

    // 4. Dá um feedback simples para o usuário
    console.log(`Item adicionado! Carrinho: ${contagemCarrinho}`);
    alert(`Item adicionado! Seu carrinho agora tem ${contagemCarrinho} item(ns).`);
}

// Mensagem simples no console para confirmar que o script foi carregado
console.log("Script de Delivery carregado e pronto para a ação!");