// Array de Curiosidades
const curiosidades = [
    "O vaqueiro usa um **gibão de couro** para se proteger dos espinhos da caatinga.",
    "A Vaquejada é oficialmente reconhecida como **manifestação cultural nacional** no Brasil.",
    "Na lida, o vaqueiro utiliza o **laço** e o **cajado** (pau de ferrão) para conduzir o gado.",
    "A palavra 'Vaquejada' vem da junção de 'Vaqueiro' e 'Pegada' (de boi)."
];

// 1. Função para exibir Curiosidade Aleatória
function exibirCuriosidade() {
    // Pega um índice aleatório baseado no tamanho do array
    const indice = Math.floor(Math.random() * curiosidades.length);
    const elementoCuriosidade = document.getElementById('curiosidade-do-dia');
    
    if (elementoCuriosidade) {
        // Usa innerHTML para processar o negrito (**)
        elementoCuriosidade.innerHTML = curiosidades[indice];
    }
}

// 2. Galeria Interativa: Mudar a imagem principal ao clicar na miniatura
function configurarGaleria() {
    // Seleciona todos os elementos com a classe 'miniatura'
    const miniaturas = document.querySelectorAll('.miniatura');
    // Seleciona o elemento da imagem grande
    const imagemPrincipal = document.getElementById('imagem-destaque');

    // Se os elementos existirem, configura o listener
    if (miniaturas.length > 0 && imagemPrincipal) {
        
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', () => {
                // Pega o caminho da imagem do atributo 'data-img-src'
                const novaSrc = miniatura.getAttribute('data-img-src');
                
                // Aplica a nova imagem à imagem principal
                imagemPrincipal.src = novaSrc;
                
                // Opcional: Efeito de borda na miniatura selecionada
                miniaturas.forEach(m => m.style.border = '2px solid var(--cor-secundaria)');
                miniatura.style.border = '2px solid var(--cor-destaque)';
            });
        });
        
        // Define o estado inicial da primeira miniatura
        if (miniaturas[0]) {
            miniaturas[0].style.border = '2px solid var(--cor-destaque)';
        }
    }
}


// Executa as funções quando a página estiver totalmente carregada
window.onload = function() {
    exibirCuriosidade();
    configurarGaleria();
};