/**
 * Arquivo: interatividade.js
 * Descrição: Adiciona interatividade básica ao site.
 */

// 1. Interação com o Menu de Navegação (nav)
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links dentro da tag <nav>
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Adiciona um listener para o evento de passar o mouse por cima
        link.addEventListener('mouseover', () => {
            // Estilo temporário para feedback visual
            link.style.backgroundColor = '#555'; // Fundo mais escuro
            link.style.color = 'white';          // Texto branco
            link.style.borderRadius = '5px';     // Borda arredondada
        });

        // Adiciona um listener para o evento de tirar o mouse
        link.addEventListener('mouseout', () => {
            // Remove o estilo (volta ao normal - o CSS deve definir o estilo padrão)
            link.style.backgroundColor = ''; // Volta ao padrão
            link.style.color = '';
            link.style.borderRadius = '';
        });

        // Adiciona um listener para o clique
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link tente navegar para '#'
            const linkText = link.textContent;
            alert(`Você clicou no link: "${linkText}". Este é um placeholder, o link não leva a lugar nenhum.`);
        });
    });

    // 2. Efeito na Imagem Principal da Postagem
    const postImage = document.querySelector('.post-image');

    if (postImage) {
        // Estilos para o efeito (o CSS idealmente faria isso, mas aqui está para JS)
        postImage.style.transition = 'transform 0.3s ease, border 0.3s ease, box-shadow 0.3s ease';

        postImage.addEventListener('mouseover', () => {
            // Efeito de leve zoom e sombra ao passar o mouse
            postImage.style.transform = 'scale(1.02)'; // Aumenta um pouco
            postImage.style.border = '4px solid #007bff'; // Adiciona uma borda colorida
            postImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'; // Adiciona sombra
            postImage.style.cursor = 'pointer'; // Muda o cursor para indicar interatividade
        });

        postImage.addEventListener('mouseout', () => {
            // Volta ao estado normal ao tirar o mouse
            postImage.style.transform = 'scale(1)'; // Volta ao tamanho original
            postImage.style.border = 'none'; // Remove a borda
            postImage.style.boxShadow = 'none'; // Remove a sombra
        });

        postImage.addEventListener('click', () => {
            alert("Imagem da postagem clicada! Você poderia abrir uma galeria ou lightbox aqui.");
        });
    }

});