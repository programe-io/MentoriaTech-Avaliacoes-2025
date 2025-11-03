// Boas-vindas ao carregar a página
window.addEventListener('load', () => {
    alert("Bem-vindo ao Blog do MotoAventureiro! 🏍️ Aproveite a leitura!");
});

// Criar botão "Voltar ao Topo"
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑ Topo";
backToTopButton.id = "backToTop";
document.body.appendChild(backToTopButton);

// Estilizar o botão via JS
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "30px";
backToTopButton.style.right = "30px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.fontSize = "16px";
backToTopButton.style.backgroundColor = "#ff6600";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
backToTopButton.style.transition = "opacity 0.3s";

// Mostrar ou esconder botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Destacar post ao clicar
const posts = document.querySelectorAll('article');
posts.forEach(post => {
    post.addEventListener('click', () => {
        // Remove destaque de todos os posts
        posts.forEach(p => p.style.border = 'none');
        // Adiciona destaque no post clicado
        post.style.border = '3px solid #ff6600';
        post.style.transition = 'border 0.3s';
    });
});
