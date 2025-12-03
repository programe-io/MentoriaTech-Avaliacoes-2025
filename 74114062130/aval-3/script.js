// Seleciona todos os botões "Jogar" nos artigos
const botoesJogar = document.querySelectorAll('.btn-jogar');

// Percorre cada botão
botoesJogar.forEach((botao) => {
    let score = 0; // Pontuação individual para cada jogo

    // Evento de clique no botão
    botao.addEventListener('click', () => {
        score++; // Incrementa pontuação

        // Atualiza o <span> correspondente dentro do mesmo artigo
        const scoreDisplay = botao.nextElementSibling.querySelector('.score');
        scoreDisplay.textContent = score;

        // Mensagem divertida a cada 5 cliques
        if (score % 5 === 0) {
            alert(`Parabéns! Você jogou ${score} vezes este jogo.`);
        }

        // Pequena animação no botão
        botao.style.transform = 'scale(1.1)';
        setTimeout(() => {
            botao.style.transform = 'scale(1)';
        }, 150);
    });
});
Como usar no seu site:
Adicione um botão com a classe .btn-jogar dentro de cada <article>:

html
Copiar código
<article>
    <h3>Exploração Épica</h3>
    <p>Descrição do jogo...</p>
    <button class="btn-jogar">Jogar</button>
    <p>Pontuação: <span class="score">0</span></p>
</article>
Coloque o script antes do fechamento da tag </body>:

html
Copiar código
<script src="script.js"></script>