/**
 * Simula a ação de curtir um post e atualiza a contagem.
 * @param {number} postId - O ID do post curtido.
 */
function curtirPost(postId) {
    // Busca o post específico e o botão de curtir
    const post = document.querySelector(`.social-post[data-post-id="${postId}"]`);
    if (!post) return;

    const likeBtn = post.querySelector('.like-btn');
    const countSpan = likeBtn.querySelector('span');

    // Converte a contagem atual para número
    let currentLikes = parseInt(countSpan.textContent);
    
    // Verifica se o botão já está "ativo" (simulando que foi curtido)
    if (likeBtn.classList.contains('liked')) {
        // Descurtir
        likeBtn.classList.remove('liked');
        countSpan.textContent = currentLikes - 1;
        likeBtn.style.color = '#606770'; // Volta à cor padrão
        likeBtn.textContent = `Curtir (${currentLikes - 1})`;
    } else {
        // Curtir
        likeBtn.classList.add('liked');
        countSpan.textContent = currentLikes + 1;
        likeBtn.style.color = '#2ecc71'; // Cor verde para indicar que está curtido
        likeBtn.textContent = `Curtido (${currentLikes + 1})`;
    }
}

/**
 * Simula o carregamento de diferentes seções do site (Feed, Mensagens, Perfil)
 * @param {string} secao - Nome da seção a ser carregada.
 */
function carregarFeed(secao) {
    const feedContainer = document.getElementById('feed-container');
    
    // Remove a classe 'active' de todos os links e adiciona ao clicado
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
    event.target.classList.add('active');

    // Altera o conteúdo baseado na seção
    switch (secao) {
        case 'geral':
            // Recarrega o conteúdo original (ou faria uma chamada API real)
            feedContainer.innerHTML = `
                <article class="social-post" data-post-id="1">...</article>
                <article class="social-post" data-post-id="2">...</article>
            `; 
            // Para simplificar, vou apenas mudar o texto do container
            feedContainer.innerHTML = '<h2>Feed Principal Carregado</h2><p>Aqui estão os posts mais recentes.</p>' + feedContainer.innerHTML;
            break;
        case 'mensagens':
            feedContainer.innerHTML = '<h2>Caixa de Mensagens</h2><p>Você tem 3 novas mensagens.</p>';
            break;
        case 'perfil':
            feedContainer.innerHTML = `
                <h2>Meu Perfil</h2>
                <p>Desenvolvedor: **Iarley Santos**</p>
                <p>Bio: Amante de código e do verde!</p>
            `;
            break;
        default:
            feedContainer.innerHTML = '<h2>Seção Não Encontrada</h2>';
    }
}

// Inicializa as classes de curtir ao carregar
document.addEventListener('DOMContentLoaded', () => {
    // Garante que o texto dos botões Curtir corresponda ao span inicial.
    document.querySelectorAll('.like-btn').forEach(btn => {
        const count = btn.querySelector('span').textContent;
        btn.textContent = `Curtir (${count})`;
    });
});