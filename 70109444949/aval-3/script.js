// Dados dos posts a serem exibidos
const posts = [
    {
        usuario: "Maria Clara",
        conteudo: "Adoro quando o meu código roda de primeira! Que dia produtivo! 💻✨",
        data: "Há 1h",
        likes: 15
    },
    {
        usuario: "AmigoDev",
        conteudo: "Estudando sobre Flexbox e Grid hoje. O layout está ficando incrível!",
        data: "Há 3h",
        likes: 22
    },
    {
        usuario: "DesignLover",
        conteudo: "O rosa choque realmente traz um toque de alegria ao front-end! Amei a paleta de cores! 🌸",
        data: "Há 5h",
        likes: 40
    }
];

const feedContainer = document.getElementById('feed-container');

// Função para renderizar os posts
function renderizarPosts() {
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>@${post.usuario}</h3>
            <p>${post.conteudo}</p>
            <small>${post.data}</small>
            <div class="post-actions">
                <button onclick="curtirPost(this)">Curtir (${post.likes})</button>
                <button>Comentar</button>
            </div>
        `;
        feedContainer.appendChild(postElement);
    });
}

// Função para simular o "curtir"
function curtirPost(button) {
    let likesText = button.textContent;
    let match = likesText.match(/\((\d+)\)/);
    let likes = match ? parseInt(match[1]) : 0;
    
    if (button.dataset.curtido !== 'true') {
        likes++;
        button.textContent = `Curtir (${likes})`;
        button.dataset.curtido = 'true';
        console.log(`Você curtiu o post de ${likes - 1} para ${likes} likes.`);
    } else {
        likes--;
        button.textContent = `Curtir (${likes})`;
        delete button.dataset.curtido;
        console.log(`Você descurtiu o post de ${likes + 1} para ${likes} likes.`);
    }
}

// Função para mudar a cor principal do CSS
const mudarCorBtn = document.getElementById('mudarCor');
let corAtual = 'rosa';

mudarCorBtn.addEventListener('click', () => {
    if (corAtual === 'rosa') {
        document.documentElement.style.setProperty('--cor-primaria', '#8a2be2'); // Azul violeta
        document.documentElement.style.setProperty('--cor-secundaria', '#e6e6fa'); // Lavanda
        mudarCorBtn.textContent = 'Trocar Cor para Rosa';
        corAtual = 'roxo';
    } else {
        document.documentElement.style.setProperty('--cor-primaria', '#ff69b4'); // Rosa Choque
        document.documentElement.style.setProperty('--cor-secundaria', '#ffc0cb'); // Rosa Claro
        mudarCorBtn.textContent = 'Trocar Cor de Destaque';
        corAtual = 'rosa';
    }
});

// Inicializa a renderização dos posts
renderizarPosts();