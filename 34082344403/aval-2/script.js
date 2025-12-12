function executarAcao() {
    alert("Comando JS executado com sucesso! A simulação do jogo foi iniciada.");
}

const botao = document.getElementById('meuBotao');

console.log("Variável de botão carregada no console.");

botao.addEventListener('click', function() {
    console.log("O botão 'Iniciar Simulação do Jogo' foi clicado.");
});