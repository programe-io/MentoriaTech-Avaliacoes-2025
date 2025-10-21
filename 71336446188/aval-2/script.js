const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');

let score = 0;
let correctButtonIndex = 0;
let totalButtons = 4;

function criarBotoes() {
    gameContainer.innerHTML = '';
    messageDisplay.textContent = '';

    correctButtonIndex = Math.floor(Math.random() * totalButtons);

    for (let i = 0; i < totalButtons; i++) {
        const button = document.createElement('button');
        button.textContent = `Botão ${i + 1}`;

        button.addEventListener('click', () => {
            if (i === correctButtonIndex) {
                score++;
                messageDisplay.style.color = 'green';
                messageDisplay.textContent = 'Acertou!';
            } else {
                score--;
                messageDisplay.style.color = 'red';
                messageDisplay.textContent = 'Errou!';
            }

            atualizarPlacar();
            setTimeout(criarBotoes, 1000);
        });

        gameContainer.appendChild(button);
    }
}

function atualizarPlacar() {
    scoreDisplay.textContent = `Pontos: ${score}`;
}

// Inicializa o jogo
criarBotoes();
