// 1. Lógica do botão Seguir
const followBtn = document.getElementById('followBtn');
const followersCountSpan = document.getElementById('followersCount');
let isFollowing = false;

followBtn.addEventListener('click', () => {
    isFollowing = !isFollowing; // Inverte o estado

    if (isFollowing) {
        // Estado: Seguindo
        followBtn.textContent = 'Seguindo';
        followBtn.classList.add('following');
        
        // Simula aumento de seguidores
        let currentCount = parseInt(followersCountSpan.textContent.replace('.', ''));
        currentCount++;
        followersCountSpan.textContent = currentCount.toLocaleString('pt-BR');
    } else {
        // Estado: Seguir
        followBtn.textContent = 'Seguir';
        followBtn.classList.remove('following');

        // Simula diminuição
        let currentCount = parseInt(followersCountSpan.textContent.replace('.', ''));
        currentCount--;
        followersCountSpan.textContent = currentCount.toLocaleString('pt-BR');
    }
});

// 2. Efeito de clique nas fotos (Simulação de Like)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // Adiciona uma animação simples ou alerta
        const heartIcon = item.querySelector('.fa-heart');
        if(heartIcon) {
             heartIcon.style.color = '#ed4956'; // Vermelho do Instagram
        }
        alert('Você curtiu esta foto! ❤️');
    });
});