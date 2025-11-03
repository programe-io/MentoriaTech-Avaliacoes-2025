// 1. Seleciona os elementos HTML pelo ID
const imagemElemento = document.getElementById('minhaImagem');
const botaoAlternar = document.getElementById('btnAlternar');

// Variável de controle para saber qual imagem está sendo exibida
let isImagem1 = true;

// 2. Adiciona um "ouvinte de evento" (event listener) ao botão
botaoAlternar.addEventListener('click', function() {
    
    // 3. Lógica para alternar a imagem
    if (isImagem1) {
        // Se for a Imagem 1, muda para a Imagem 2
        imagemElemento.src = 'imagem2.jpg';
        // Atualiza o texto alternativo (alt)
        imagemElemento.alt = 'Segunda Imagem do Projeto';
        // Inverte a variável de controle
        isImagem1 = false;
    } else {
        // Se for a Imagem 2, volta para a Imagem 1
        imagemElemento.src = 'imagem1.jpg';
        imagemElemento.alt = 'Primeira Imagem do Projeto';
        // Inverte a variável de controle
        isImagem1 = true;
    }
});

// Mensagem no console para verificar se o script carregou (Opcional)
console.log("Script JS carregado e pronto para alternar imagens!");