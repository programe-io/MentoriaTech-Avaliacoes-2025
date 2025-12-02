// Array de objetos com as perguntas e respostas
const questions = [
    { question: "O Brasil é o país com mais Copas do Mundo.", answer: true, image: "via.placeholder.com" },
        { question: "A Terra é plana.", answer: false, image: "via.placeholder.com" },
            { question: "O Sol é uma estrela.", answer: true, image: "via.placeholder.com" },
                { question: "CSS é uma linguagem de programação.", answer: false, image: "via.placeholder.com" },
                    { question: "Peixes conseguem respirar fora da água.", answer: false, image: "via.placeholder.com" }
                    ];

                    let currentQuestionIndex = 0;
                    let score = 0;
                    const totalQuestions = questions.length;

                    // Seleção de elementos do DOM
                    const questionTextElement = document.getElementById('question-text');
                    const questionImageElement = document.getElementById('question-image');
                    const feedbackElement = document.getElementById('feedback');
                    const scoreElement = document.getElementById('score');
                    const questionCountElement = document.getElementById('question-count');
                    const buttons = document.querySelectorAll('.buttons button');

                    // Função para iniciar ou reiniciar o jogo
                    function startGame() {
                        currentQuestionIndex = 0;
                            score = 0;
                                feedbackElement.textContent = '';
                                    showQuestion();
                                        updateScoreBoard();
                                            enableButtons();
                                            }

                                            // Função para exibir a próxima questão
                                            function showQuestion() {
                                                if (currentQuestionIndex < totalQuestions) {
                                                        const currentQuestion = questions[currentQuestionIndex];
                                                                questionTextElement.textContent = currentQuestion.question;
                                                                        questionImageElement.src = currentQuestion.image;
                                                                                feedbackElement.textContent = '';
                                                                                        updateScoreBoard();
                                                                                            } else {
                                                                                                    endGame();
                                                                                                        }
                                                                                                        }

                                                                                                        // Função para verificar a resposta do usuário
                                                                                                        function checkAnswer(userAnswer) {
                                                                                                            if (currentQuestionIndex >= totalQuestions) return; // Evita cliques após o fim do jogo

                                                                                                                const correctAnswer = questions[currentQuestionIndex].answer;

                                                                                                                    if (userAnswer === correctAnswer) {
                                                                                                                            score++;
                                                                                                                                    feedbackElement.textContent = 'Correto!';
                                                                                                                                            feedbackElement.style.color = 'green';
                                                                                                                                                } else {
                                                                                                                                                        feedbackElement.textContent = 'Incorreto!';
                                                                                                                                                                feedbackElement.style.color = 'red';
                                                                                                                                                                    }
                                                                                                                                                                        
                                                                                                                                                                            // Avança para a próxima questão após um pequeno atraso para feedback visual
                                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                                        currentQuestionIndex++;
                                                                                                                                                                                                showQuestion();
                                                                                                                                                                                                    }, 1500);
                                                                                                                                                                                                    }

                                                                                                                                                                                                    // Função para atualizar o placar na barra lateral
                                                                                                                                                                                                    function updateScoreBoard() {
                                                                                                                                                                                                        scoreElement.textContent = score;
                                                                                                                                                                                                            questionCountElement.textContent = currentQuestionIndex + (currentQuestionIndex < totalQuestions ? 1 : 0);
                                                                                                                                                                                                            }

                                                                                                                                                                                                            // Função para finalizar o jogo
                                                                                                                                                                                                            function endGame() {
                                                                                                                                                                                                                questionTextElement.textContent = `Fim de jogo! Você acertou ${score} de ${totalQuestions} perguntas.`;
                                                                                                                                                                                                                    questionImageElement.style.display = 'none';
                                                                                                                                                                                                                        feedbackElement.textContent = 'Pressione "Reiniciar Jogo" para jogar novamente.';
                                                                                                                                                                                                                            disableButtons();
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            // Funções auxiliares para botões
                                                                                                                                                                                                                            function enableButtons() {
                                                                                                                                                                                                                                buttons.forEach(button => button.disabled = false);
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                function disableButtons() {
                                                                                                                                                                                                                                    buttons.forEach(button => button.disabled = true);
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                    // Inicia o jogo quando a página carrega
                                                                                                                                                                                                                                    startGame();y