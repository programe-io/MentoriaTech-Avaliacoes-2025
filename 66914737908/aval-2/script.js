// Este código JavaScript é para interatividade e comportamento.
// O layout e o estilo da página são feitos pelo HTML e CSS.

document.addEventListener('DOMContentLoaded', () => {
    // Exemplo Simples de Interatividade JS:
    // Alerta o usuário quando a página é carregada
    console.log('A página do blog foi carregada com sucesso!');

    // Exemplo de como você poderia interagir com a postagem:
    const postTitle = document.querySelector('.post-header h1');
    if (postTitle) {
        postTitle.addEventListener('mouseover', () => {
            postTitle.style.color = 'red'; // Mudar a cor ao passar o mouse (melhor fazer com CSS, mas é um exemplo de JS)
        });
        postTitle.addEventListener('mouseout', () => {
            postTitle.style.color = '#34495e'; // Voltar a cor
        });
    }
});