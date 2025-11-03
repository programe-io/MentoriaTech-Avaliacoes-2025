// Seleciona todos os posts
const posts = document.querySelectorAll('.post');

// Adiciona botão de curtir em cada post
posts.forEach((post, index) => {
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

    // Contador de likes
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

    post.appendChild(likeBtn);
    post.appendChild(likeCounter);
});

// Função para mostrar/ocultar detalhes da receita
posts.forEach(post => {
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

    // Conteúdo extra
    const detailsContent = document.createElement('p');
    detailsContent.textContent = 'Aqui você pode adicionar mais informações sobre a receita, como ingredientes e modo de preparo.';
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

    post.appendChild(detailsBtn);
    post.appendChild(detailsContent);
});
