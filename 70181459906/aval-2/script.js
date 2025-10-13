let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const feedback = document.getElementById('feedback');
const score = document.getElementById('score');
const resetButton = document.getElementById('resetButton');

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    if (userGuess === secretNumber) {
        feedback.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
        score.textContent = '';
        guessButton.disabled = true;
        resetButton.style.display = 'inline-block';
    } else if (userGuess < secretNumber) {
        feedback.textContent = 'Tente um número maior!';
    } else {
        feedback.textContent = 'Tente um número menor!';
    }

    score.textContent = `Tentativas: ${attempts}`;
    guessInput.value = '';
    guessInput.focus();
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = '';
    score.textContent = '';
    guessButton.disabled = false;
    resetButton.style.display = 'none';
    guessInput.value = '';
    guessInput.focus();
}
