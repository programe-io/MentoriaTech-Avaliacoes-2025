

// Exemplo de JavaScript para dar vida ao texto e avatar (simulação)

document.addEventListener('DOMContentLoaded', () => {
    const usernameElement = document.querySelector('.Lucas Gabriel');
    const loremTextElement = document.getElementById('lorem-text');
    const avatarImg = document.getElementById('avatar-img');

    // Mudar a cor do nome ao carregar
    usernameElement.style.color = '#76c7c0'; 

    // Adicionar um evento de clique no texto para alternar o destaque
    loremTextElement.addEventListener('click', () => {
        if (loremTextElement.style.fontWeight === 'bold') {
            loremTextElement.style.fontWeight = 'normal';
            loremTextElement.style.color = '#bdbdbd';
        } else {
            loremTextElement.style.fontWeight = 'bold';
            loremTextElement.style.color = '#ffffff';
        }
    });

    // Em uma aplicação real, aqui você carregaria os dados via Fetch API.
    console.log('Postagem carregada com sucesso.');
});