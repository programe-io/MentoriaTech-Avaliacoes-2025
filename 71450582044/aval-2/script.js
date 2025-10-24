// interacoes.js

// Mensagem de boas-vindas ao carregar a página
window.addEventListener('load', () => {
    alert('Bem-vindo ao site de Jogos Digitais!');
});

// Alternar cor de fundo ao clicar no título
document.querySelector('h1').addEventListener('click', () => {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'white' ? '#000000ff' : 'white';
});

// Efeito de destaque nas imagens da galeria
const imagensGaleria = document.querySelectorAll('.gallery img');
imagensGaleria.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Navegação suave ao clicar nos links
const links = document.querySelectorAll('nav a');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});