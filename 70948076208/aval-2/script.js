// Este código JavaScript é complementar ao HTML anterior

// Função executada quando todo o conteúdo do DOM (Document Object Model) é carregado
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Página carregada e script em execução.');
    highlightFirstTitle();
});

function highlightFirstTitle() {
    // Encontra a primeira lista não ordenada na página
    const firstUnorderedList = document.querySelector('ul');
    
    if (firstUnorderedList && firstUnorderedList.children.length > 0) {
        // Pega o primeiro item da lista (neste caso, "Medalha de Ouro Olímpica")
        const firstListItem = firstUnorderedList.firstElementChild;
        
        // Adiciona a classe CSS 'highlight' a ele
        // O CSS acima já define o que essa classe faz (fundo amarelo, negrito)
        firstListItem.classList.add('highlight');
        
        console.log('Primeiro título destacado com sucesso.');
    } else {
        console.log('Lista de títulos não encontrada ou vazia.');
    }
}
