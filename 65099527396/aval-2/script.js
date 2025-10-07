document.addEventListener('DOMContentLoaded', () => {
        console.log("O site sobre jogos está pronto!");

            // --- Funcionalidade 1: Destacar o primeiro jogo ---
                const gameCards = document.querySelectorAll('.game-card');

                    if (gameCards.length > 0) {
                            // Seleciona o primeiro card
                                    const firstCard = gameCards[0];

                                            // Adiciona uma classe de destaque visual
                                                    firstCard.style.backgroundColor = '#4CAF50';
                                                            firstCard.style.color = '#121212';
                                                                    firstCard.querySelector('h3').style.color = '#121212';

                                                                            console.log(`Jogo em destaque: ${firstCard.querySelector('h3').textContent}`);
                                                                                }


                                                                                    // --- Funcionalidade 2: Adicionar um simples filtro por gênero (exemplo de interatividade) ---

                                                                                        // 1. Cria um seletor de gênero
                                                                                            const filterSection = document.createElement('section');
                                                                                                filterSection.innerHTML = `
                                                                                                        <h2>Filtrar Jogos</h2>
                                                                                                                <select id="genre-filter" style="padding: 10px; border-radius: 5px; background-color: #333; color: white;">
                                                                                                                            <option value="all">Todos os Gêneros</option>
                                                                                                                                        <option value="MOBA">MOBA</option>
                                                                                                                                                    <option value="Battle Royale">Battle Royale</option>
                                                                                                                                                                <option value="Mundo Aberto">Mundo Aberto</option>
                                                                                                                                                                            <option value="FPS">FPS</option>
                                                                                                                                                                                        <option value="MMORPG">MMORPG</option>
                                                                                                                                                                                                </select>
                                                                                                                                                                                                    `;

                                                                                                                                                                                                        // Insere o filtro acima da lista de jogos
                                                                                                                                                                                                            const listaJogosSection = document.getElementById('lista-jogos');
                                                                                                                                                                                                                listaJogosSection.parentNode.insertBefore(filterSection, listaJogosSection);


                                                                                                                                                                                                                    // 2. Adiciona o Listener para o filtro
                                                                                                                                                                                                                        const genreFilter = document.getElementById('genre-filter');
                                                                                                                                                                                                                            genreFilter.addEventListener('change', (event) => {
                                                                                                                                                                                                                                    const selectedGenre = event.target.value;

                                                                                                                                                                                                                                            gameCards.forEach(card => {
                                                                                                                                                                                                                                                        const cardGenre = card.getAttribute('data-genre');

                                                                                                                                                                                                                                                                    if (selectedGenre === 'all' || cardGenre === selectedGenre) {
                                                                                                                                                                                                                                                                                    card.style.display = 'block'; // Mostra o card
                                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                                                card.style.display = 'none';  // Esconde o card
                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                    });

                                                                                                                                                                                                                                                                                                                                            console.log(`Filtro aplicado: ${selectedGenre}`);
                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                                                                                                
})