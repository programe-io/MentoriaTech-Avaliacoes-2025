// Mensagem de boas-vindas ao carregar a página
window.addEventListener('load', function () {
    alert('Bem-vinda à loja Bela & Econômica! 💄✨');
});

document.addEventListener('DOMContentLoaded', function () {
    const botaoMais = document.querySelector('a[href="#"]');

    // Evento de clique no botão "+"
    if (botaoMais) {
        botaoMais.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Em breve: novidades incríveis de maquiagem! 💋');
        });
    }

    // Atualiza o ano no rodapé automaticamente
    const footer = document.querySelector('footer p');
    if (footer) {
        const anoAtual = new Date().getFullYear();
        footer.innerHTML = `CopyRight - Todos os Direitos Reservados - ${anoAtual} | Programe.io`;
    }

    // Efeito ao passar o mouse sobre as imagens
    const imagens = document.querySelectorAll('img');

    imagens.forEach(function (img) {
        img.addEventListener('mouseenter', function () {
            img.style.transform = 'scale(1.05)';
            img.style.border = '3px solid #ff69b4'; // rosa
            img.style.transition = '0.3s';
        });

        img.addEventListener('mouseleave', function () {
            img.style.transform = 'scale(1)';
            img.style.border = 'none';
        });
    });
});
