// ================================
// INTERAÇÕES DO MUNDO DAS SÉRIES
// ================================

// 1. Dark/Light Mode Toggle
const body = document.querySelector('body');
const header = document.querySelector('header');

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        alert("Modo Dark ativado! 🍿");
    } else {
        alert("Modo Light ativado! ☀️");
    }
}

// Adiciona botão no header
const darkButton = document.createElement('button');
darkButton.textContent = "Toggle Dark Mode";
darkButton.style.marginTop = "10px";
darkButton.style.padding = "8px 15px";
darkButton.style.backgroundColor = "#ff0055";
darkButton.style.color = "#fff";
darkButton.style.border = "none";
darkButton.style.borderRadius = "5px";
darkButton.style.cursor = "pointer";
header.appendChild(darkButton);

darkButton.addEventListener('click', toggleDarkMode);

// ================================
// 2. Hover interativo nas imagens da galeria
const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.boxShadow = '0 0 20px rgba(255, 0, 85, 0.7)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });
});

// ================================
// 3. Contador de cliques/favoritos nas matérias
const article = document.querySelector('article');
const favButton = document.createElement('button');
favButton.textContent = "❤️ Favoritar";
favButton.style.marginTop = "10px";
favButton.style.padding = "8px 15px";
favButton.style.backgroundColor = "#ff6600";
favButton.style.color = "#fff";
favButton.style.border = "none";
favButton.style.borderRadius = "5px";
favButton.style.cursor = "pointer";
article.appendChild(favButton);

let favCount = 0;
const favCounter = document.createElement('p');
favCounter.textContent = `Favoritos: ${favCount}`;
favCounter.style.marginTop = "10px";
article.appendChild(favCounter);

favButton.addEventListener('click', () => {
    favCount++;
    favCounter.textContent = `Favoritos: ${favCount}`;
});
