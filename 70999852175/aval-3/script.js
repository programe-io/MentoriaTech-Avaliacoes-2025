document.addEventListener('DOMContentLoaded', function() {
        const botaoGini = document.getElementById('botaoGini');
            const infoGini = document.getElementById('infoGini');

                botaoGini.addEventListener('click', function() {
                        // Verifica o estado atual da mensagem
                                if (infoGini.style.display === 'none' || infoGini.textContent === '') {
                                            // Se estiver oculta, mostra a explicação
                                                        infoGini.textContent = 'O Índice de Gini mede o grau de concentração de renda. Ele varia de 0 a 1, onde 0 representa a igualdade perfeita (todos têm a mesma renda) e 1 representa a desigualdade máxima (uma única pessoa detém toda a renda). Quanto mais próximo de 1, maior a desigualdade.';
                                                                    infoGini.style.display = 'block';
                                                                                botaoGini.textContent = 'Ocultar Explicação';
                                                                                        } else {
                                                                                                    // Se estiver visível, oculta a explicação
                                                                                                                infoGini.style.display = 'none';
                                                                                                                            botaoGini.textContent = 'O que é o Índice de Gini?';
                                                                                                                                    }
                                                                                                                                        });
                                                                                                                                        });
                                                                                                                                        
})