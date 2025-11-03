// Seleciona todos os artigos
const articles = document.querySelectorAll('article');

articles.forEach(article => {
    // Criar botão de curtir
    const likeBtn = document.createElement('button');
    likeBtn.textContent = '❤️ Curtir';
    likeBtn.style.marginTop = '10px';
    likeBtn.style.padding = '5px 10px';
    likeBtn.style.border = 'none';
    likeBtn.style.borderRadius = '5px';
    likeBtn.style.cursor = 'pointer';
    likeBtn.style.backgroundColor = '#ff6f61';
    likeBtn.style.color = 'white';
    likeBtn.style.fontWeight = 'bold';
    likeBtn.style.transition = '0.3s';

    let likes = 0;
    const likeCounter = document.createElement('span');
    likeCounter.textContent = ` ${likes} curtidas`;
    likeCounter.style.marginLeft = '10px';

    likeBtn.addEventListener('click', () => {
        likes++;
        likeCounter.textContent = ` ${likes} curtidas`;
        likeBtn.style.transform = 'scale(1.2)';
        setTimeout(() => likeBtn.style.transform = 'scale(1)', 200);
    });

    // Criar botão de mostrar/ocultar detalhes
    const detailsBtn = document.createElement('button');
    detailsBtn.textContent = '🔽 Ver detalhes';
    detailsBtn.style.marginTop = '10px';
    detailsBtn.style.padding = '5px 10px';
    detailsBtn.style.border = 'none';
    detailsBtn.style.borderRadius = '5px';
    detailsBtn.style.cursor = 'pointer';
    detailsBtn.style.backgroundColor = '#ffa07a';
    detailsBtn.style.color = 'white';
    detailsBtn.style.fontWeight = 'bold';
    detailsBtn.style.transition = '0.3s';

    // Conteúdo extra: ingredientes e preparo (duplicando para efeito de demonstração)
    const detailsContent = document.createElement('div');
    detailsContent.innerHTML = `
        <h3>Ingredientes</h3>
        <p>${article.querySelector('h3') ? article.querySelector('h3').nextElementSibling.textContent : ''}</p>
        <h3>Modo de Preparo</h3>
        <p>${article.querySelector('h3') ? article.querySelector('h3').nextElementSibling.nextElementSibling.textContent : ''}</p>
    `;
    detailsContent.style.display = 'none';
    detailsContent.style.marginTop = '10px';
    detailsContent.style.color = '#555';

    detailsBtn.addEventListener('click', () => {
        if(detailsContent.style.display === 'none') {
            detailsContent.style.display = 'block';
            detailsBtn.textContent = '🔼 Ocultar detalhes';
        } else {
            detailsContent.style.display = 'none';
            detailsBtn.textContent = '🔽 Ver detalhes';
        }
    });

    article.appendChild(likeBtn);
    article.appendChild(likeCounter);
    article.appendChild(detailsBtn);
    article.appendChild(detailsContent);
});
