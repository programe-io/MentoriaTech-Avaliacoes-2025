// Seleciona elementos do HTML
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona evento de clique
botao.addEventListener('click', function() {
    // Gera um número aleatório de 1 a 100
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            mensagem.textContent = "O número aleatório gerado é: " + numeroAleatorio;
            });
            