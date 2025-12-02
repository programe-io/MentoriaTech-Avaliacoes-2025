const cardsArray = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
            ];

            let flippedCards = [];
            let matchedPairs = 0;
            let moves = 0;
            let lockBoard = false;
            const gameBoard = document.getElementById('game-board');
            const movesCountElement = document.getElementById('moves-count');
            const gameMessageElement = document.getElementById('game-message');

            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                                [array[i], array[j]] = [array[j], array[i]];
                                    }
                                        return array;
                                        }

                                        function createBoard() {
                                            gameBoard.innerHTML = '';
                                                const shuffledArray = shuffle(cardsArray.slice());
                                                    shuffledArray.forEach(value => {
                                                            const card = document.createElement('div');
                                                                    card.classList.add('card');
                                                                            card.addEventListener('click', () => flipCard(card, value));

                                                                                    const cardInner = document.createElement('div');
                                                                                            cardInner.classList.add('card-inner');

                                                                                                    const cardFront = document.createElement('div');
                                                                                                            cardFront.classList.add('card-front');
                                                                                                                    cardFront.textContent = '🧠'; // Ícone na frente da carta

                                                                                                                            const cardBack = document.createElement('div');
                                                                                                                                    cardBack.classList.add('card-back');
                                                                                                                                            cardBack.textContent = value; // O valor real no verso

                                                                                                                                                    cardInner.appendChild(cardFront);
                                                                                                                                                            cardInner.appendChild(cardBack);
                                                                                                                                                                    card.appendChild(cardInner);
                                                                                                                                                                            gameBoard.appendChild(card);
                                                                                                                                                                                });
                                                                                                                                                                                }

                                                                                                                                                                                function flipCard(card, value) {
                                                                                                                                                                                    if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) {
                                                                                                                                                                                            return;
                                                                                                                                                                                                }

                                                                                                                                                                                                    card.classList.add('flipped');
                                                                                                                                                                                                        flippedCards.push({ card, value });

                                                                                                                                                                                                            if (flippedCards.length === 2) {
                                                                                                                                                                                                                    moves++;
                                                                                                                                                                                                                            movesCountElement.textContent = moves;
                                                                                                                                                                                                                                    checkForMatch();
                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                        function checkForMatch() {
                                                                                                                                                                                                                                            const [card1, card2] = flippedCards;
                                                                                                                                                                                                                                                if (card1.value === card2.value) {
                                                                                                                                                                                                                                                        card1.card.classList.add('matched');
                                                                                                                                                                                                                                                                card2.card.classList.add('matched');
                                                                                                                                                                                                                                                                        matchedPairs++;
                                                                                                                                                                                                                                                                                flippedCards = [];
                                                                                                                                                                                                                                                                                        if (matchedPairs === cardsArray.length / 2) {
                                                                                                                                                                                                                                                                                                    gameMessageElement.textContent = `Parabéns! Você venceu em ${moves} movimentos!`;
                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                        lockBoard = true;
                                                                                                                                                                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                                                                                                                                                                            card1.card.classList.remove('flipped');
                                                                                                                                                                                                                                                                                                                                                        card2.card.classList.remove('flipped');
                                                                                                                                                                                                                                                                                                                                                                    flippedCards = [];
                                                                                                                                                                                                                                                                                                                                                                                lockBoard = false;
                                                                                                                                                                                                                                                                                                                                                                                        }, 1000);
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                                                            function startGame() {
                                                                                                                                                                                                                                                                                                                                                                                                flippedCards = [];
                                                                                                                                                                                                                                                                                                                                                                                                    matchedPairs = 0;
                                                                                                                                                                                                                                                                                                                                                                                                        moves = 0;
                                                                                                                                                                                                                                                                                                                                                                                                            lockBoard = false;
                                                                                                                                                                                                                                                                                                                                                                                                                movesCountElement.textContent = 0;
                                                                                                                                                                                                                                                                                                                                                                                                                    gameMessageElement.textContent = '';
                                                                                                                                                                                                                                                                                                                                                                                                                        createBoard();
                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                        // Inicia o jogo quando a página carrega
                                                                                                                                                                                                                                                                                                                                                                                                                        startGame();
                                                                                                                                                                                                                                                                                                                                                                                                                        
]