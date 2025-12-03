// 1. Variáveis de elementos
const postButton = document.getElementById('post-btn');
const likeButtons = document.querySelectorAll('.like-btn');
const profileButton = document.getElementById('profile-btn');

// 2. Função para simular a criação de um post
postButton.addEventListener('click', () => {
    const input = postButton.previousElementSibling; // O input de texto
    const postText = input.value.trim();

    if (postText !== "") {
        alert(`Postagem criada: "${postText}"`);
        // Aqui você adicionaria a lógica para criar o elemento de postagem no DOM
        input.value = ""; // Limpa o campo
    } else {
        alert("Por favor, escreva algo para postar.");
    }
});

// 3. Função para simular o botão de curtir
likeButtons.forEach(button => {
    let isLiked = false;
    button.addEventListener('click', () => {
        isLiked = !isLiked;
        if (isLiked) {
            button.textContent = '❤️ Curtido';
            button.style.color = '#0866ff';
        } else {
            button.textContent = '👍 Curtir';
            button.style.color = '#606770';
        }
    });
});

// 4. Função para simular a abertura do perfil
profileButton.addEventListener('click', () => {
    // Adiciona uma classe para simular a abertura de um modal ou menu
    document.body.classList.toggle('profile-menu-open');
    alert("Menu/Perfil do Usuário aberto!");
});


// 5. Adicione lógica para o botão de comentários, rolagem infinita, etc.
// O importante é que toda a lógica e interatividade estejam neste arquivo.