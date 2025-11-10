// Localiza o novo botão
const btnReiniciar = document.getElementById("btnReiniciar");

// Adiciona um listener ao botão
btnReiniciar.addEventListener('click', reiniciarPontuacao);

function reiniciarPontuacao() {
    // Confirmação para evitar cliques acidentais
    if (!confirm("Tem certeza que deseja REINICIAR o campeonato? Todos os pontos e jogos serão zerados!")) {
        return; // Sai da função se o usuário cancelar
    }

    // Percorre o array 'times' e zera todas as estatísticas
    times.forEach(time => {
        time.vitorias = 0;
        time.empates = 0;
        time.derrotas = 0;
        time.pontos = 0;
        time.jogos = 0;
    });

    // Recarrega a tabela para mostrar as mudanças (agora tudo zerado)
    exibirTabelaNaTela();
    alert("Campeonato Reiniciado! Todos os times estão com 0 pontos.");
}

// Lembre-se de que a função 'exibirTabelaNaTela' é a responsável
// por ordenar e renderizar a tabela, e já está definida.