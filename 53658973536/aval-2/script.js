/**
 * Este é o JavaScript para adicionar interatividade à página.
 * Para este layout simples, podemos adicionar uma funcionalidade básica.
 */

// Mensagem de boas-vindas no console
console.log("Seja bem-vindo(a) ao site do Jonathan! Explore o mundo do futebol e da programação.");

// Exemplo de função para mudar o título ao carregar a página
document.addEventListener('DOMContentLoaded', (event) => {
    // Busca o elemento h2 da postagem
    const tituloPostagem = document.querySelector('.card-postagem h2');
    
    // Simula uma mudança de conteúdo dinâmica
    if (tituloPostagem) {
        // Altera para um título relacionado ao conteúdo da biografia (Futebol)
        setTimeout(() => {
            tituloPostagem.textContent = "OS BENEFÍCIOS DO FUTEBOL AMADOR";
        }, 1000); // Mudar após 1 segundo
    }
});

// Exemplo de como você poderia implementar uma função de clique
const linksNav = document.querySelectorAll('.navbar a');

linksNav.forEach(link => {
    link.addEventListener('click', (e) => {
        // Evita que o link tente navegar (se o href for '#')
        e.preventDefault(); 
        
        const nomePagina = link.textContent;
        alert(`Você clicou em "${nomePagina}". Esta página ainda está em construção!`);
    });
});