document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidade do Botão 'Carregar Mais Notícias'
    const loadMoreBtn = document.getElementById('load-more');
    const mainContent = document.querySelector('.main-content');
    
    // Simula uma nova notícia
    const novaNoticiaHTML = `
        <article class="news-article extra-article">
            <img src="arbitro.jpg" alt="Árbitro mostrando cartão">
            <h3>🔴 Arbitragem Polêmica: O Lance que Decidiu o Jogo</h3>
            <p>O comentarista de arbitragem analisou o pênalti marcado e considerou a decisão equivocada, gerando grande debate na imprensa...</p>
            <a href="#" class="read-more">Ler mais &raquo;</a>
        </article>
    `;

    loadMoreBtn.addEventListener('click', function() {
        // Adiciona a nova notícia ao conteúdo principal
        mainContent.insertAdjacentHTML('beforeend', novaNoticiaHTML);
        alert('Mais notícias carregadas! (Funcionalidade JavaScript)');
        // Remove o botão após carregar uma vez para simplificar o exemplo
        loadMoreBtn.style.display = 'none';
    });

    // 2. Funcionalidade Simples de Atualização de Placar (simulação)
    const liveScoresDiv = document.getElementById('live-scores');
    
    // Simula uma atualização de placar após 5 segundos
    setTimeout(() => {
        const novoPlacarHTML = `
            <div class="score-item">
                <span class="team">Corinthians</span> <span class="vs">1 x 0</span> <span class="team">Santos</span>
                <span class="status time-running">HT</span> </div>
        `;
        liveScoresDiv.insertAdjacentHTML('afterbegin', novoPlacarHTML);
        console.log('Placar ao vivo atualizado!');
    }, 5000);
});