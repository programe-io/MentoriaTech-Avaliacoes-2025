// Efeito de scroll suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exemplo de um alerta simples de boas-vindas
window.onload = function() {
    alert("Bem-vindo ao site da Escola CETI Joel Ribeiro!");
};
