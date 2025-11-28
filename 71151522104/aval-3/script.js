<script>
    // 1. Seleciona todos os botões dentro dos cartões de produto
    const botoes = document.querySelectorAll('main button');

    /**
     * Função que será executada quando um botão for clicado
     * @param {Event} event - O objeto de evento do clique
     */
    function lidarComCliqueDoBotao(event) {
        // Encontra o texto do botão que foi clicado
        const textoBotao = event.target.textContent.trim();
        
        // Encontra o título do produto (h2) associado ao cartão
        // .closest('.div-do-card') busca o elemento pai mais próximo com uma classe específica.
        // Como você usou muitas classes do Tailwind, vou usar a tag div que contém o cartão.
        const card = event.target.closest('div[class*="bg-white"]');
        let nomeProduto = 'Produto Desconhecido';

        if (card) {
            // Tenta encontrar o <h2> dentro do card para pegar o nome
            const tituloElemento = card.querySelector('h2');
            if (tituloElemento) {
                nomeProduto = tituloElemento.textContent.trim();
            }
        }
        
        // Exibe o alerta
        alert(`Ação: "${textoBotao}" acionada para o produto: "${nomeProduto}"!`);

        // Exemplo de como você faria algo mais complexo, como redirecionar ou mudar o CSS
        // if (nomeProduto === 'liphoney') {
        //     window.location.href = "https://example.com/liphoney-detalhes";
        // }
    }

    // 2. Itera sobre todos os botões e anexa a função de clique
    botoes.forEach(botao => {
        botao.addEventListener('click', lidarComCliqueDoBotao);
    });

    console.log(`[JavaScript] ${botoes.length} botões de produto foram inicializados com sucesso.`);
</script>