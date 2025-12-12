function executarAcao() {
    alert("Comando JS executado com sucesso! A simulação do jogo começou.");
}

const botao = document.getElementById('meuBotao');

console.log("Variável de botão carregada no console.");

botao.addEventListener('click', function() {
    console.log("O botão 'Iniciar Jogo' foi clicado.");
});