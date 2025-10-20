function mudarEstiloAside() {
    // 1. Encontra o elemento aside
    var asideElement = document.querySelector('aside');
    
    // 2. Encontra o cabeçalho H3 dentro do aside
    var asideTitulo = asideElement.querySelector('h3');
    
    // 3. Muda as propriedades CSS via JavaScript
    asideElement.style.backgroundColor = '#ffc0cb'; // Rosa claro
    asideElement.style.color = '#8b0000'; // Vermelho escuro para o texto

    // 4. Muda o texto do título para indicar que foi manipulado
    asideTitulo.innerHTML = 'Estilo Alterado com JS!';
}