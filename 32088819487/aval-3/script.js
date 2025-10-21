// Variável para rastrear o número de itens no carrinho
let contagemCarrinho = 0;

function adicionarAoCarrinho(nomeVestido) {
    contagemCarrinho++; 
    
    // O JS usa a ID 'contador-carrinho' para encontrar o <span>
    const contadorElemento = document.getElementById('contador-carrinho');
    
    if (contadorElemento) {
        contadorElemento.textContent = contagemCarrinho;
    }
    
    alert(`"${nomeVestido}" foi adicionado ao seu carrinho! Total: ${contagemCarrinho} itens.`);
}

window.onload = function() {
    console.log("Bem-vindo(a) à Chic Vestidos! O script.js está funcionando.");
    const contadorElemento = document.getElementById('contador-carrinho');
    if (contadorElemento) {
        contadorElemento.textContent = contagemCarrinho;
    }
};