// Variável para armazenar o número de itens no carrinho
let itensNoCarrinho = 0;

/**
 * Função para adicionar um item ao carrinho.
 * Ela incrementa a contagem e atualiza o display no HTML.
 */
function adicionarAoCarrinho() {
    // 1. Incrementa a contagem
    itensNoCarrinho = itensNoCarrinho + 1; // ou itensNoCarrinho++;

    // 2. Encontra o elemento <span> onde o contador é exibido
    const contadorElemento = document.getElementById('contador-carrinho');

    // 3. Atualiza o texto do elemento com a nova contagem
    contadorElemento.textContent = itensNoCarrinho;

    // Opcional: feedback visual/alerta
    console.log(`Item adicionado! Total no carrinho: ${itensNoCarrinho}`);
    alert(`Livro adicionado ao carrinho! Total: ${itensNoCarrinho}`);
}

// Nota: A função 'adicionarAoCarrinho' é chamada pelo botão em 'index.html'
// usando o atributo 'onclick'.