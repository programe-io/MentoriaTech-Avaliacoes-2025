// script.js

// 1. Alerta de boas-vindas
window.addEventListener('load', () => {
    alert("Bem-vindo(a) ao site da Maria Heloyze! 🎮");
});

// 2. Efeito hover nos links do menu
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6600'; // cor quando passa o mouse
        link.style.fontWeight = 'bold';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // volta ao normal
        link.style.fontWeight = '';
    });
});

// 3. Botão para esconder/mostrar o "Sobre Mim"
const aside = document.querySelector('aside');
const toggleButton = document.createElement('button');
toggleButton.textContent = "Mostrar/Esconder Sobre Mim";
toggleButton.style.margin = "10px 0";
toggleButton.style.padding = "5px 10px";
toggleButton.style.cursor = "pointer";

// Insere o botão antes do <aside>
aside.parentNode.insertBefore(toggleButton, aside);

toggleButton.addEventListener('click', () => {
    if (aside.style.display === "none") {
        aside.style.display = "block";
    } else {
        aside.style.display = "none";
    }
});

// 4. Clique na imagem principal da postagem
const postImage = document.querySelector('.post-image');

if (postImage) {
    postImage.style.cursor = "pointer";

    postImage.addEventListener('click', () => {
        alert("Você clicou na imagem do post! 📰");
    });
}
