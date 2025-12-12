// O código é envolto em um 'DOMContentLoaded' para garantir que ele só execute
// depois que todo o HTML for carregado, evitando erros.
document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona todos os itens da lista (<li>)
    const itensDaLista = document.querySelectorAll('li');

    // 2. Cria uma referência para o parágrafo principal (vamos adicioná-lo ao HTML depois)
    const outputParagrafo = document.createElement('p');
    outputParagrafo.id = 'mensagem-output';
    outputParagrafo.textContent = 'Clique em um item da lista para ver a ação do JavaScript.';
    
    // Insere o novo parágrafo logo após a lista no <body>
    const lista = document.querySelector('ul');
    if (lista) {
        lista.parentNode.insertBefore(outputParagrafo, lista.nextSibling);
    \}

    // 3. Itera sobre cada item da lista e adiciona um "ouvinte de evento" de clique
    itensDaLista.forEach(item => {
        item.addEventListener('click', function() {
            // Ação a ser executada ao clicar:

            // Pega o texto do item clicado
            const textoDoItem = item.textContent;

            // Atualiza o texto do parágrafo de output
            outputParagrafo.textContent = `Você clicou em: "\${textoDoItem\}". JavaScript em ação!`;

            // Opcional: Adiciona uma classe para mudar o estilo temporariamente
            outputParagrafo.classList.add('destaque');
            
            // Remove a classe de destaque após 1 segundo (1000 milissegundos)
            setTimeout(() => {
                outputParagrafo.classList.remove('destaque');
            \}, 1000);
        \});
    \});

    console.log('Script JavaScript carregado e pronto.');
\});
$0