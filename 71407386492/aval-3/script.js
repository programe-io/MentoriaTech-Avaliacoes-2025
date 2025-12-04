// Seleciona o card
const card = document.querySelector('.card');

// Cria botão de "Curtir"
const likeButton = document.createElement('button');
likeButton.textContent = 'Curtir';
likeButton.style.marginTop = '10px';
likeButton.style.padding = '5px 10px';
likeButton.style.cursor = 'pointer';

// Cria contador de likes
let likeCount = 0;
const likeCounter = document.createElement('span');
likeCounter.textContent = ` ${likeCount} curtidas`;
likeCounter.style.marginLeft = '10px';

// Adiciona botão e contador ao card
card.appendChild(likeButton);
card.appendChild(likeCounter);

// Função de clique
likeButton.addEventListener('click', () => {
    likeCount++;
    likeCounter.textContent = ` ${likeCount} curtidas`;
});

// Clique no card mostra alerta
card.addEventListener('click', (e) => {
    // Evita que o clique no botão conte como clique no card
    if (e.target !== likeButton) {
        alert('Você clicou no post!');
    }
});
