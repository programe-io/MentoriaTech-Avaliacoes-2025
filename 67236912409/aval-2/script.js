// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão e o conteúdo completo
    const btn = document.getElementById('learn-more-btn');
    const fullContent = document.getElementById('full-article-content');

    // Verifica se os elementos existem
    if (btn && fullContent) {
        // Adiciona um "ouvinte de evento" de clique ao botão
        btn.addEventListener('click', function() {
            // Alterna a classe 'hidden' para mostrar/esconder o conteúdo
            fullContent.classList.toggle('hidden');

            // Altera o texto do botão
            if (fullContent.classList.contains('hidden')) {
                btn.textContent = 'Leia o Artigo Completo';
            } else {
                btn.textContent = 'Ocultar Detalhes';
            }
        });
    }
});