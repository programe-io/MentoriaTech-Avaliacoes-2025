const words = [
        "SOL", "RUA", "CASA", "GATO", "FOGO", "MAÇA", "BOLA",
            "PRAIA", "PONTE", "JARDIM", "ESCOLA", "FUTEBOL", "COMPUTADOR"
            ]; // Adicione mais palavras de 3 a 9 letras

            let secretWord = '';
            let wordLength = 0;
            const gameBoard = document.getElementById('game-board');
            const messageArea = document.getElementById('message-area');
            const guessInput = document.getElementById('guess-input');
            const submitButton = document.getElementById('submit-button');
            const restartButton = document.getElementById('restart-button');

            function initializeGame() {
                // Filtrar palavras entre 3 e 9 letras
                    const validWords = words.filter(word => word.length >= 3 && word.length <= 9);
                        secretWord = validWords[Math.floor(Math.random() * validWords.length)];
                            wordLength = secretWord.length;
                                
                                    // Limpar tabuleiro e mensagens anteriores
                                        gameBoard.innerHTML = '';
                                            messageArea.textContent = '';
                                                guessInput.value = '';
                                                    guessInput.maxLength = wordLength; // Limitar input ao tamanho da palavra
                                                        submitButton.style.display = 'inline-block';
                                                            restartButton.style.display = 'none';
                                                                guessInput.disabled = false;
                                                                    submitButton.disabled = false;

                                                                        // Criar caixas para as letras (placeholders)
                                                                            for (let i = 0; i < wordLength; i++) {
                                                                                    const box = document.createElement('div');
                                                                                            box.classList.add('letter-box');
                                                                                                    box.id = `box-${i}`;
                                                                                                            gameBoard.appendChild(box);
                                                                                                                }
                                                                                                                }

                                                                                                                function handleGuess() {
                                                                                                                    const guess = guessInput.value.toUpperCase();

                                                                                                                        if (guess.length !== wordLength) {
                                                                                                                                showMessage(`A palavra deve ter ${wordLength} letras.`);
                                                                                                                                        return;
                                                                                                                                            }

                                                                                                                                                if (guess === secretWord) {
                                                                                                                                                        showMessage(`Parabéns! Você adivinhou a palavra: ${secretWord}`, 'green');
                                                                                                                                                                endGame(true);
                                                                                                                                                                        return;
                                                                                                                                                                            }

                                                                                                                                                                                // Lógica para dar dicas (como no Wordle/Termo)
                                                                                                                                                                                    for (let i = 0; i < wordLength; i++) {
                                                                                                                                                                                            const box = document.getElementById(`box-${i}`);
                                                                                                                                                                                                    box.textContent = guess[i];

                                                                                                                                                                                                            if (guess[i] === secretWord[i]) {
                                                                                                                                                                                                                        box.style.backgroundColor = '#6aaa64'; // Verde (posição correta)
                                                                                                                                                                                                                                } else if (secretWord.includes(guess[i])) {
                                                                                                                                                                                                                                            box.style.backgroundColor = '#c9b458'; // Amarelo (letra existe, posição errada)
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                box.style.backgroundColor = '#787c7e'; // Cinza (letra não existe)
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                box.style.color = 'white';
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                        showMessage('Palpite incorreto. Tente novamente.');
                                                                                                                                                                                                                                                                                            guessInput.value = '';
                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                            function showMessage(msg, color = 'red') {
                                                                                                                                                                                                                                                                                                messageArea.textContent = msg;
                                                                                                                                                                                                                                                                                                    messageArea.style.color = color;
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                    function endGame(won) {
                                                                                                                                                                                                                                                                                                        guessInput.disabled = true;
                                                                                                                                                                                                                                                                                                            submitButton.disabled = true;
                                                                                                                                                                                                                                                                                                                submitButton.style.display = 'none';
                                                                                                                                                                                                                                                                                                                    restartButton.style.display = 'inline-block';
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                    submitButton.addEventListener('click', handleGuess);
                                                                                                                                                                                                                                                                                                                    restartButton.addEventListener('click', initializeGame);

                                                                                                                                                                                                                                                                                                                    // Permite adivinhar com a tecla Enter
                                                                                                                                                                                                                                                                                                                    guessInput.addEventListener('keypress', function(event) {
                                                                                                                                                                                                                                                                                                                        if (event.key === 'Enter') {
                                                                                                                                                                                                                                                                                                                                handleGuess();
                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                    // Iniciar o jogo quando a página carregar
                                                                                                                                                                                                                                                                                                                                    initializeGame();
                                                                                                                                                                                                                                                                                                                                    
]