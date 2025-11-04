const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        mensagem.textContent = "O número aleatório gerado é: " + numeroAleatorio;
        });
        