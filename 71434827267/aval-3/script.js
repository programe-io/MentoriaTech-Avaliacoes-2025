<script>
// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Funcionalidade de Toggle do Menu de Navegação (Menu Mobile) ---

    // Seleciona o elemento do título que atuará como botão
    const toggleButton = document.querySelector('.flex-1.uppercase');
    // Seleciona o elemento de navegação (o menu)
    const navMenu = document.querySelector('header nav');

    if (toggleButton && navMenu) {
        // Define o cursor como ponteiro para indicar que o título é clicável
        toggleButton.style.cursor = 'pointer';

        toggleButton.addEventListener('click', function() {
            // Alterna a classe 'hidden' do Tailwind no menu.
            navMenu.classList.toggle('hidden');
        });
    }

    // --- 2. Funcionalidade de Contador de Curtidas (Likes) ---

    // Seleciona o primeiro card (o container principal do post)
    const firstCard = document.querySelector('.bg-gray-800');
    let likes = 0;

    if (firstCard) {
        // Encontra o div que contém o conteúdo textual (onde o contador será injetado)
        const cardContentDiv = firstCard.querySelector('.pt-4.px-4');

        // Cria o elemento <span> para exibir as curtidas
        const likeCounter = document.createElement('span');
        // Adiciona a classe 'mb-4' do Tailwind para dar espaço (corrigindo o 'mt-2' que poderia ser insuficientes)
        likeCounter.classList.add('like-count', 'text-sm', 'font-bold', 'text-blue-400', 'px-4', 'block', 'mb-4'); 
        likeCounter.textContent = '0 Curtidas';
        
        // Insere o contador no card
        if (cardContentDiv) {
            cardContentDiv.appendChild(likeCounter);
        }

        // --- Evento de Clique do Card (Curtida e Efeito) ---
        firstCard.addEventListener('click', function(event) {
            
            // CORREÇÃO: Verifica se o clique foi em um elemento interativo
            // Se o clique veio de uma imagem, link ou h2 dentro do header do card, 
            // a contagem de likes e o efeito não devem ser ativados.
            const headerElements = firstCard.querySelector('.flex.items-center');
            
            if (headerElements && headerElements.contains(event.target)) {
                return; // Sai da função, ignorando o clique no header
            }

            // Garante que o clique não é em um link (redundância, mas bom para segurança)
            if (event.target.tagName === 'A') {
                 return;
            }
            
            likes++;
            likeCounter.textContent = `${likes} Curtidas`;
            
            // Adiciona um pequeno efeito visual de clique
            firstCard.style.transition = 'transform 0.1s';
            firstCard.style.transform = 'scale(1.02)';
            setTimeout(() => {
                firstCard.style.transform = 'scale(1)';
            }, 100);
        });
    }
});
</script>
</body>
</html>