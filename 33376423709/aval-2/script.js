// Espera o conteúdo do HTML ser carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Atualiza dinamicamente o ano no rodapé
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('footer p');
    if (footerText) {
        // Substitui o ano de 2025 pelo ano atual
        footerText.textContent = footerText.textContent.replace('2025', currentYear);
    }

    // Adiciona um alerta para os links de navegação que ainda não estão prontos
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o link de tentar navegar
            const pageName = event.target.textContent;
            alert(`A página "${pageName}" ainda está em construção!`);
        });
    });

    console.log('JavaScript carregado com sucesso!');

});