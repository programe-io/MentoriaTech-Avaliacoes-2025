document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um listener a todos os botões "Ler Mais".
    const botoesLerMais = document.querySelectorAll('.ler-mais');

    botoesLerMais.forEach(botao => {
        botao.addEventListener('click', (event) => {
            
            const card = event.target.closest('.card');
            const nomeDoJogo = card.getAttribute('data-jogo');
            const tituloBlog = card.querySelector('h3').textContent;

            // Alerta simples para demonstrar interatividade.
            alert(`
            Você clicou para ler: "${tituloBlog}"
            Jogo: ${nomeDoJogo}
            
            (Isto seria a navegação para a página completa do post.)
            `);
        });
    });
});