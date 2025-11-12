// Espera até que o HTML esteja completamente carregado antes de executar o código JS
document.addEventListener('DOMContentLoaded', function() {
    // 1. Selecionar os elementos do DOM
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');
    
    // Contador para demonstrar a mudança de estado
    let contadorCliques = 0;

    // 2. Definir a função que será executada ao clicar no botão
    function lidarComClique() {
        contadorCliques++;
        
        // 3. Mudar o conteúdo do parágrafo
        mensagem.textContent = `Você clicou no botão! Total de cliques: ${contadorCliques}`;

        // Exemplo adicional: Mudar a cor do fundo do corpo após 5 cliques
        if (contadorCliques % 5 === 0) {
            document.body.style.backgroundColor = '#1abc9c'; // Uma cor diferente
            setTimeout(() => {
                document.body.style.backgroundColor = '#2c3e50'; // Volta para a cor original
            }, 500); // Espera 0.5 segundos e volta
        }
    }

    // 4. Adicionar o evento de clique ao botão
    botao.addEventListener('click', lidarComClique);
    
    // Mensagem no console para confirmar que o JS está rodando
    console.log('Script JavaScript carregado e pronto para uso!');
});